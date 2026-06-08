#!/usr/bin/env python3
"""MCP server for the ML System Design Atlas.

Run with:
    python3 tools/ml_atlas_mcp.py

This server exposes the local case-study dataset in docs/data.json as MCP tools
that can be used by Claude Desktop, Cursor, Continue, or any MCP-compatible
client/model.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

try:
    from mcp.server.fastmcp import FastMCP
except ImportError:  # pragma: no cover - lets helper functions remain importable in tests
    FastMCP = None  # type: ignore[assignment]

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "docs" / "data.json"

if FastMCP is None:  # pragma: no cover - dependency is required to run the server
    class _MissingMCP:
        def tool(self):
            return lambda fn: fn

        def resource(self, _uri: str):
            return lambda fn: fn

        def run(self):
            raise SystemExit(
                "Missing dependency: mcp. Install it with `python3 -m pip install -r requirements-mcp.txt`."
            )

    mcp = _MissingMCP()
else:
    mcp = FastMCP("ml-system-design-atlas")

_STOP_WORDS = {
    "a", "an", "and", "are", "as", "at", "be", "build", "by", "for", "from",
    "how", "i", "in", "into", "is", "it", "ml", "model", "of", "on", "or",
    "product", "system", "that", "the", "to", "use", "using", "want", "with",
}


def _load_cases() -> list[dict[str, Any]]:
    with DATA_PATH.open("r", encoding="utf-8") as f:
        return json.load(f)


def _tokens(text: str) -> set[str]:
    return {t for t in re.findall(r"[a-z0-9]+", (text or "").lower()) if len(t) > 1 and t not in _STOP_WORDS}


def _case_text(case: dict[str, Any]) -> str:
    parts: list[str] = []
    for key in ("company", "industry", "description", "title", "category", "categoryLabel", "summary"):
        value = case.get(key)
        if value:
            parts.append(str(value))
    for key in ("industries", "components", "infraDetails", "summaryPoints"):
        value = case.get(key) or []
        parts.extend(map(str, value))
    for component in case.get("systemComponents") or []:
        parts.append(str(component.get("name", "")))
        parts.append(str(component.get("responsibility", "")))
    return "\n".join(parts)


def _compact_case(case: dict[str, Any], include_details: bool = False) -> dict[str, Any]:
    result = {
        "id": case.get("id"),
        "company": case.get("company"),
        "title": case.get("title"),
        "url": case.get("url"),
        "year": case.get("year"),
        "industry": case.get("industry"),
        "category": case.get("category"),
        "categoryLabel": case.get("categoryLabel"),
        "description": case.get("description"),
        "summary": case.get("summary"),
    }
    if include_details:
        result.update(
            {
                "summaryPoints": case.get("summaryPoints") or [],
                "infraDetails": case.get("infraDetails") or case.get("components") or [],
                "systemComponents": case.get("systemComponents") or [],
                "sourceUrl": case.get("sourceUrl") or case.get("url"),
                "summaryModel": case.get("summaryModel"),
            }
        )
    return result


def _search_cases(
    query: str = "",
    category: str | None = None,
    industry: str | None = None,
    year_from: int | None = None,
    year_to: int | None = None,
    limit: int = 10,
) -> list[dict[str, Any]]:
    cases = _load_cases()
    q_tokens = _tokens(query)
    results: list[tuple[float, dict[str, Any]]] = []

    for case in cases:
        if category and category.lower() not in str(case.get("category", "") + " " + case.get("categoryLabel", "")).lower():
            continue
        if industry and industry.lower() not in " ".join(case.get("industries") or [case.get("industry", "")]).lower():
            continue
        year = case.get("year")
        if year_from is not None and (not year or int(year) < year_from):
            continue
        if year_to is not None and (not year or int(year) > year_to):
            continue

        if not q_tokens:
            score = float(case.get("year") or 0) / 10000.0
        else:
            title_tokens = _tokens(f"{case.get('company', '')} {case.get('title', '')}")
            desc_tokens = _tokens(f"{case.get('description', '')} {case.get('categoryLabel', '')}")
            all_tokens = _tokens(_case_text(case))
            score = (
                5 * len(q_tokens & title_tokens)
                + 3 * len(q_tokens & desc_tokens)
                + len(q_tokens & all_tokens)
            ) / max(len(q_tokens), 1)
        if score > 0:
            compact = _compact_case(case)
            compact["matchScore"] = round(score, 3)
            results.append((score, compact))

    results.sort(key=lambda item: (item[0], item[1].get("year") or 0), reverse=True)
    return [case for _, case in results[: max(1, min(limit, 50))]]


@mcp.tool()
def search_case_studies(
    query: str = "",
    category: str | None = None,
    industry: str | None = None,
    year_from: int | None = None,
    year_to: int | None = None,
    limit: int = 10,
) -> dict[str, Any]:
    """Search ML system design case studies by product goal, architecture, company, category, or industry."""
    matches = _search_cases(query, category, industry, year_from, year_to, limit)
    return {"count": len(matches), "matches": matches}


@mcp.tool()
def get_case_study(id_or_title: str) -> dict[str, Any]:
    """Return full details for a case study by numeric id, exact title, company, or title substring."""
    needle = str(id_or_title).strip().lower()
    cases = _load_cases()
    for case in cases:
        if str(case.get("id")) == needle:
            return _compact_case(case, include_details=True)
    for case in cases:
        title = str(case.get("title", "")).lower()
        company = str(case.get("company", "")).lower()
        if needle == title or needle == company or needle in title:
            return _compact_case(case, include_details=True)
    return {"error": f"No case study found for {id_or_title!r}. Try search_case_studies first."}


@mcp.tool()
def recommend_techniques(product_description: str, industry: str | None = None, limit: int = 8) -> dict[str, Any]:
    """Find analogous historical systems and extract reusable ML product design techniques."""
    matches = _search_cases(product_description, industry=industry, limit=limit)
    ids = {m["id"] for m in matches}
    cases = [c for c in _load_cases() if c.get("id") in ids]

    categories = Counter(c.get("categoryLabel") or c.get("category") for c in cases)
    infra = Counter()
    responsibilities: dict[str, list[str]] = defaultdict(list)
    summary_points: list[str] = []

    for case in cases:
        infra.update(case.get("infraDetails") or case.get("components") or [])
        for component in case.get("systemComponents") or []:
            name = component.get("name") or "System component"
            resp = component.get("responsibility")
            if resp and len(responsibilities[name]) < 3:
                responsibilities[name].append(resp)
        summary_points.extend((case.get("summaryPoints") or [])[:2])

    techniques = [
        "Use the matched case studies as analogues; copy the problem framing first, not the vendor stack.",
        "Separate offline training/evaluation pipelines from online serving paths, especially for latency-sensitive products.",
        "Define measurable feedback loops so product interactions become labels, quality signals, or monitoring events.",
    ]
    techniques.extend([f"Common architecture pattern: {item}" for item, _ in infra.most_common(7)])

    return {
        "productDescription": product_description,
        "dominantCategories": [c for c, _ in categories.most_common(5) if c],
        "recommendedTechniques": techniques[:10],
        "componentResponsibilities": dict(list(responsibilities.items())[:10]),
        "analogousCaseStudies": matches,
        "notableLessons": summary_points[:10],
    }


@mcp.tool()
def list_atlas_facets() -> dict[str, Any]:
    """List available categories, industries, years, and dataset counts for filtering searches."""
    cases = _load_cases()
    categories = Counter(c.get("categoryLabel") or c.get("category") for c in cases)
    industries = Counter(i for c in cases for i in (c.get("industries") or [c.get("industry")]) if i)
    years = Counter(c.get("year") for c in cases if c.get("year"))
    return {
        "totalCaseStudies": len(cases),
        "categories": dict(categories.most_common()),
        "industries": dict(industries.most_common()),
        "years": dict(sorted(years.items(), reverse=True)),
    }


@mcp.resource("atlas://overview")
def atlas_overview() -> str:
    """Dataset overview for MCP clients that support resources."""
    facets = list_atlas_facets()
    return json.dumps(facets, indent=2)


def _run_cli() -> bool:
    """Optional JSON CLI used by Docker/pi extension wrappers.

    Returns True when CLI mode handled the process, False when the MCP server
    should start normally.
    """
    parser = argparse.ArgumentParser(add_help=True)
    parser.add_argument("--cli", choices=["search_case_studies", "get_case_study", "recommend_techniques", "list_atlas_facets"])
    parser.add_argument("--input", help="JSON object for the selected CLI tool. Defaults to stdin or {}.")
    args, _unknown = parser.parse_known_args()
    if not args.cli:
        return False

    raw = args.input if args.input is not None else sys.stdin.read().strip()
    payload = json.loads(raw) if raw else {}

    tools = {
        "search_case_studies": search_case_studies,
        "get_case_study": get_case_study,
        "recommend_techniques": recommend_techniques,
        "list_atlas_facets": list_atlas_facets,
    }
    result = tools[args.cli](**payload)
    print(json.dumps(result, ensure_ascii=False))
    return True


if __name__ == "__main__":
    if not _run_cli():
        mcp.run()
