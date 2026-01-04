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

## Project structure

- `docs/` - static UI (HTML/CSS/JS) and data bundle
- `tools/` - summarizer for fetching + LLM summarization
- `sources/` and `sources_text/` - cached article text (ignored by git)

## Credits

Case study list and links from:
- https://github.com/Engineer1999/A-Curated-List-of-ML-System-Design-Case-Studies
