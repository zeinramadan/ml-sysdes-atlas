# ML System Design Atlas

A local-first explorer for real-world ML system design case studies. It groups systems by type, lets you filter by industry, year, and infrastructure, and adds LLM-based summaries plus system-component responsibilities to help you learn from how other companies built similar products.

This project was created using the case study list from:
- https://github.com/Engineer1999/A-Curated-List-of-ML-System-Design-Case-Studies

## What is included

- 300+ case studies with links to original articles
- LLM summaries (main points)
- Infrastructure details (high-level components)
- System components with responsibilities
- A local UI for exploring and matching similar systems

## How to run the UI (local)

From the repo root:

```bash
python -m http.server 8000 --directory /Users/zein/system-design
```

Open:

```
http://localhost:8000/docs/
```

## How to deploy (GitHub Pages)

GitHub Pages supports either the repo root or `/docs`. This project uses `/docs`.

1) Push to GitHub
2) Repo Settings → Pages
3) Source: `main`
4) Folder: `/docs`

Your site will be:

```
https://<username>.github.io/<repo>/
```

## How summaries are generated

Summaries are created from cached article text with an LLM. The summarizer writes back to the UI dataset used by the browser.

Run with OpenAI (uses OPENAI_API_KEY from .env):

```bash
python tools/enrich_articles.py --use-llm --llm-model gpt-4o-mini --no-fetch --write-js
```

Fetch and summarize (network required):

```bash
python tools/enrich_articles.py --use-llm --llm-model gpt-4o-mini --use-jina --write-js
```

Note: a small number of sources may be unavailable (404/410/blocked), so those entries may remain without LLM summaries unless you provide the article text manually.

## UI features

- Group by system type, with multi-select
- Filters: industry, year, infrastructure
- Keyword search
- "Describe what you are trying to build" suggestions

## MCP server

This repo includes a local Model Context Protocol (MCP) server so MCP-compatible clients/models can query the atlas as a historical reference for ML product techniques.

Run with Docker:

```bash
docker build -t ml-system-design-atlas-mcp .
docker run --rm -i ml-system-design-atlas-mcp
```

Example MCP client config using Docker:

```json
{
  "mcpServers": {
    "ml-system-design-atlas": {
      "command": "docker",
      "args": ["run", "--rm", "-i", "ml-system-design-atlas-mcp"]
    }
  }
}
```

The `-i` flag is important because MCP uses stdin/stdout for this server.

## Pi harness

This project also includes a project-local pi extension at `.pi/extensions/ml-atlas-harness.ts`. Pi auto-discovers it when you start pi from this repo.

The harness registers Docker-backed tools for the model:

- `atlas_search_case_studies`
- `atlas_get_case_study`
- `atlas_recommend_techniques`
- `atlas_list_facets`

Before using pi, build the Docker image:

```bash
docker build -t ml-system-design-atlas-mcp .
pi
```

Optional: override the Docker image name used by the pi harness:

```bash
ML_ATLAS_MCP_IMAGE=my-image-name pi
```

You can still run it directly with Python if desired:

```bash
python3 -m pip install -r requirements-mcp.txt
python3 tools/ml_atlas_mcp.py
```

Exposed tools:

- `search_case_studies` - search by product goal, architecture, category, industry, and year
- `get_case_study` - fetch full details for a specific case study
- `recommend_techniques` - find analogous systems and extract reusable ML product design techniques
- `list_atlas_facets` - list available categories, industries, years, and counts

## Project structure

- `docs/` - static UI (HTML/CSS/JS) and data bundle
- `.pi/extensions/ml-atlas-harness.ts` - project-local pi harness exposing Docker-backed atlas tools
- `tools/` - summarizer for fetching + LLM summarization, plus `ml_atlas_mcp.py` MCP server
- `sources/` and `sources_text/` - cached article text (ignored by git)

## Credits

Case study list and links from:
- https://github.com/Engineer1999/A-Curated-List-of-ML-System-Design-Case-Studies
