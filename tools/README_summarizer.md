# Article Summarizer

This script fetches each case study article, extracts text, and writes concise summaries plus infrastructure and component responsibilities back into `ui/data.json` (and optionally `ui/data.js`).

## Usage

Run on the full dataset:

```bash
python tools/enrich_articles.py --write-js --use-jina
```

Use OpenAI for higher-quality summaries:

```bash
python tools/enrich_articles.py --use-llm --llm-model gpt-4o-mini --write-js --no-fetch
```

Use cached text only (no network fetch):

```bash
python tools/enrich_articles.py --no-fetch --write-js
```

Run in batches (first 20 entries):

```bash
python tools/enrich_articles.py --start 1 --limit 20 --write-js --use-jina
```

Re-fetch and overwrite cached summaries:

```bash
python tools/enrich_articles.py --force --write-js --use-jina
```

The script caches article text under `sources_text/` so repeat runs are fast.

## Output fields added

- `summaryPoints`: list of 3-4 key sentences
- `summary`: joined summary string
- `infraDetails`: list of infrastructure components mentioned
- `systemComponents`: list of `{name, responsibility}`
- `sourceFetched`: boolean
- `sourceUrl`: final fetched URL (after redirects)

If a source fails, `sourceError` is set.
