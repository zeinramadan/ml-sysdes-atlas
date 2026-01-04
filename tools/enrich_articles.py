#!/usr/bin/env python3
import argparse
import json
import os
import pathlib
import re
import ssl
import time
from collections import Counter
from html import unescape
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin
from urllib.request import Request, urlopen

STOPWORDS = {
    'a','about','above','after','again','against','all','also','am','an','and','any','are','as','at','be','because',
    'been','before','being','below','between','both','but','by','can','could','did','do','does','doing','down','during',
    'each','few','for','from','further','had','has','have','having','he','her','here','hers','herself','him','himself',
    'his','how','i','if','in','into','is','it','its','itself','just','me','more','most','my','myself','no','nor','not',
    'now','of','off','on','once','only','or','other','our','ours','ourselves','out','over','own','s','same','she','should',
    'so','some','such','t','than','that','the','their','theirs','them','themselves','then','there','these','they','this',
    'those','through','to','too','under','until','up','very','was','we','were','what','when','where','which','while','who',
    'whom','why','will','with','you','your','yours','yourself','yourselves'
}

INFRA_PATTERNS = [
    (r'\bkafka\b', 'Kafka'),
    (r'\bflink\b', 'Flink'),
    (r'\bspark\b', 'Spark'),
    (r'\bairflow\b', 'Airflow'),
    (r'\bdagster\b', 'Dagster'),
    (r'\bkubeflow\b', 'Kubeflow'),
    (r'\bmlflow\b', 'MLflow'),
    (r'\bfeast\b', 'Feast'),
    (r'\bfeature store\b', 'Feature store'),
    (r'\bmodel registry\b', 'Model registry'),
    (r'\b(model serving|tensorflow serving|tf serving)\b', 'Model serving'),
    (r'\btriton\b', 'Triton'),
    (r'\bredis\b', 'Redis'),
    (r'\bmemcached\b', 'Memcached'),
    (r'\b(elasticsearch|opensearch|lucene|solr)\b', 'Search index'),
    (r'\bfaiss\b', 'FAISS'),
    (r'\bannoy\b', 'Annoy'),
    (r'\bmilvus\b', 'Milvus'),
    (r'\bpinecone\b', 'Pinecone'),
    (r'\bvector store\b', 'Vector store'),
    (r'\bdata lake\b', 'Data lake'),
    (r'\bdata warehouse\b', 'Data warehouse'),
    (r'\b(bigquery|redshift|snowflake)\b', 'Data warehouse'),
    (r'\bs3\b', 'S3'),
    (r'\b(gcs|google cloud storage|blob storage)\b', 'Object storage'),
    (r'\bkinesis\b', 'Kinesis'),
    (r'\bpubsub\b|\bpub/sub\b', 'Pub/Sub'),
    (r'\bsqs\b', 'SQS'),
    (r'\bsns\b', 'SNS'),
    (r'\b(kubernetes|k8s)\b', 'Kubernetes'),
    (r'\bdocker\b', 'Docker'),
    (r'\bterraform\b', 'Terraform'),
    (r'\b(prometheus)\b', 'Prometheus'),
    (r'\bgrafana\b', 'Grafana'),
    (r'\bdatadog\b', 'Datadog'),
    (r'\bnew relic\b', 'New Relic'),
    (r'\bfeature flag\b|\bexperiment\b|\bab test\b|\ba/b test\b', 'Experimentation'),
    (r'\bstreaming\b', 'Streaming'),
    (r'\bbatch\b', 'Batch'),
    (r'\betl\b', 'ETL'),
]

INFRA_RESP = {
    'Kafka': 'event streaming bus for real-time data',
    'Flink': 'stream processing for low-latency pipelines',
    'Spark': 'batch processing and feature generation',
    'Airflow': 'workflow scheduling and orchestration',
    'Dagster': 'data pipeline orchestration',
    'Kubeflow': 'ML pipeline orchestration',
    'MLflow': 'experiment tracking and model registry',
    'Feast': 'feature store for online/offline consistency',
    'Feature store': 'central feature repository for training/serving',
    'Model registry': 'model versioning and governance',
    'Model serving': 'online inference service',
    'Triton': 'GPU inference server',
    'Redis': 'low-latency cache or feature lookup',
    'Memcached': 'cache layer to reduce latency',
    'Search index': 'fast lexical retrieval',
    'FAISS': 'vector similarity search',
    'Annoy': 'approximate nearest-neighbor search',
    'Milvus': 'vector database for embeddings',
    'Pinecone': 'hosted vector database',
    'Vector store': 'embedding storage and retrieval',
    'Data lake': 'raw data storage for analytics and training',
    'Data warehouse': 'analytics storage for reporting and features',
    'S3': 'object storage for datasets and artifacts',
    'Object storage': 'object store for data and media',
    'Kinesis': 'streaming data ingestion',
    'Pub/Sub': 'messaging bus for events',
    'SQS': 'queue for async processing',
    'SNS': 'pub/sub notifications',
    'Kubernetes': 'container orchestration for services',
    'Docker': 'container packaging and deployment',
    'Terraform': 'infrastructure as code',
    'Prometheus': 'metrics collection',
    'Grafana': 'monitoring dashboards',
    'Datadog': 'observability and monitoring',
    'New Relic': 'observability and monitoring',
    'Experimentation': 'A/B testing and rollout control',
    'Streaming': 'real-time data processing',
    'Batch': 'offline processing and training jobs',
    'ETL': 'data extraction/transformation/load',
}

INFRA_KEEP_KEYWORDS = {
    'store', 'warehouse', 'lake', 'cache', 'queue', 'pipeline', 'orchestr',
    'serving', 'inference', 'training', 'monitor', 'observability', 'stream',
    'batch', 'etl', 'index', 'database', 'registry', 'feature', 'vector',
    'search', 'kubernetes', 'k8s', 'spark', 'flink', 'kafka', 'airflow',
    'dagster', 'kubeflow', 'mlflow', 'redis', 's3', 'object', 'cdn', 'logging',
}

SYSTEM_COMPONENT_PATTERNS = [
    (r'candidate generation', 'Candidate generator', 'retrieves a broad set of items for ranking'),
    (r'retrieval', 'Retrieval layer', 'fetches relevant items or documents'),
    (r'ranking', 'Ranker', 'scores and orders candidates'),
    (r'feature store', 'Feature store', 'serves features for training and online scoring'),
    (r'feature pipeline', 'Feature pipeline', 'builds features from raw data'),
    (r'training pipeline', 'Training pipeline', 'trains and evaluates models'),
    (r'inference', 'Inference service', 'serves predictions in production'),
    (r'cache', 'Cache layer', 'reduces latency for hot data'),
    (r'monitor', 'Monitoring', 'tracks system/model health and drift'),
    (r'feedback', 'Feedback loop', 'captures outcomes for retraining'),
    (r'label', 'Labeling', 'creates ground-truth annotations'),
    (r'index', 'Index', 'supports fast lookup and retrieval'),
    (r'queue', 'Queue', 'buffers work for async processing'),
    (r'graph', 'Graph store', 'stores relationships for graph features'),
]

CATEGORY_DEFAULT_COMPONENTS = {
    'recommendation_ranking': [
        ('Candidate generator', 'retrieves a candidate pool'),
        ('Ranker', 'scores and orders items'),
        ('Feature store', 'serves features for scoring'),
        ('Experimentation', 'measures impact of changes'),
    ],
    'search_retrieval': [
        ('Index', 'supports fast retrieval'),
        ('Query understanding', 'interprets user intent'),
        ('Ranker', 'orders results for relevance'),
        ('Cache layer', 'reduces latency for frequent queries'),
    ],
    'forecasting_eta': [
        ('Feature pipeline', 'builds time-series features'),
        ('Training pipeline', 'trains forecasting models'),
        ('Inference service', 'serves predictions'),
        ('Monitoring', 'tracks accuracy and drift'),
    ],
    'fraud_abuse': [
        ('Event pipeline', 'ingests transactions and signals'),
        ('Risk model', 'scores for fraud/abuse'),
        ('Rules engine', 'applies heuristic checks'),
        ('Review queue', 'routes cases to analysts'),
    ],
    'classification_tagging': [
        ('Labeling', 'creates ground-truth data'),
        ('Training pipeline', 'trains classifier models'),
        ('Inference service', 'applies labels in production'),
        ('Monitoring', 'tracks quality and drift'),
    ],
    'nlp_generation': [
        ('Prompting', 'formats inputs and constraints'),
        ('Generation model', 'produces text output'),
        ('Safety filters', 'blocks unsafe content'),
        ('Feedback loop', 'captures human ratings'),
    ],
    'computer_vision': [
        ('Media pipeline', 'ingests and preprocesses images/video'),
        ('Training pipeline', 'trains vision models'),
        ('Inference service', 'serves vision predictions'),
        ('Monitoring', 'tracks accuracy and drift'),
    ],
    'llm_assistant': [
        ('Retriever', 'pulls relevant context'),
        ('Prompt orchestration', 'constructs LLM inputs'),
        ('LLM inference', 'generates responses'),
        ('Guardrails', 'ensures safety and policy compliance'),
    ],
}

CATEGORY_RULES = [
    ('llm_assistant', [
        'llm', 'copilot', 'assistant', 'generative ai', 'large language model', 'large-language model', 'gpt'
    ]),
    ('fraud_abuse', [
        'fraud', 'spam', 'phishing', 'scam', 'abuse', 'policy', 'harmful', 'toxic', 'rude', 'suspicious', 'stolen'
    ]),
    ('computer_vision', [
        'image', 'images', 'video', 'videos', 'ocr', 'photo', 'visual', 'object', 'floor plan', 'stop sign', 'traffic'
    ]),
    ('nlp_generation', [
        'summar', 'translate', 'transcribe', 'grammar', 'text', 'subject line', 'headline', 'copy', 'generate', 'language',
        'conversation', 'conversational'
    ]),
    ('search_retrieval', [
        'search', 'query', 'retrieve', 'retrieval', 'autocomplete', 'intent', 'in-video search'
    ]),
    ('recommendation_ranking', [
        'recommend', 'recommendation', 'rank', 'ranking', 'personalize', 'personalized', 'feed', 'homepage', 'similar', 'relevant', 'jobs', 'deals'
    ]),
    ('forecasting_eta', [
        'forecast', 'predict', 'availability', 'demand', 'delivery time', 'eta', 'time series', 'order volume', 'sales',
        'churn', 'clv', 'ltv', 'lifetime value', 'volume'
    ]),
    ('marketing_ads', [
        'ads', 'advert', 'marketing', 'campaign', 'bidding', 'promotion', 'paywall', 'conversion', 'upsell', 'lead', 'acquire'
    ]),
    ('anomaly_ops', [
        'incident', 'anomaly', 'failure', 'quality', 'bug', 'triage'
    ]),
    ('optimization_pricing', [
        'optimize', 'optimization', 'pricing', 'price', 'routing', 'schedule', 'allocation'
    ]),
    ('classification_tagging', [
        'classify', 'categor', 'tag', 'identify', 'detect', 'assign', 'label', 'cluster', 'segment'
    ]),
]


def categorize(entry):
    text = f"{entry.get('description','')} {entry.get('title','')}".lower()
    for category, keywords in CATEGORY_RULES:
        for kw in keywords:
            if kw in text:
                return category
    return 'generic'


def clean_text(text):
    text = unescape(text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def strip_html(html):
    html = re.sub(r'(?is)<(script|style|noscript).*?>.*?</\1>', ' ', html)
    html = re.sub(r'(?is)<(header|footer|nav|aside).*?>.*?</\1>', ' ', html)
    text = re.sub(r'(?is)<[^>]+>', ' ', html)
    return clean_text(text)


def extract_text(html):
    try:
        import trafilatura  # type: ignore
        extracted = trafilatura.extract(html, include_comments=False, include_tables=False)
        if extracted:
            return clean_text(extracted)
    except Exception:
        pass

    try:
        from bs4 import BeautifulSoup  # type: ignore
        soup = BeautifulSoup(html, 'html.parser')
        for tag in soup(['script', 'style', 'noscript', 'header', 'footer', 'nav', 'aside']):
            tag.decompose()
        return clean_text(soup.get_text(' '))
    except Exception:
        return strip_html(html)


def load_dotenv(dotenv_path):
    if not dotenv_path.exists():
        return
    for line in dotenv_path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, value = line.split('=', 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = value


def fetch_url(url, ssl_context, timeout):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; CodexBot/1.0)'})
    with urlopen(req, timeout=timeout, context=ssl_context) as resp:
        content_type = resp.headers.get('Content-Type', '')
        raw = resp.read()
    return raw, content_type, url


def fetch_with_redirect(url, ssl_context, timeout):
    try:
        return fetch_url(url, ssl_context, timeout)
    except HTTPError as exc:
        if exc.code in (301, 302, 303, 307, 308):
            location = exc.headers.get('Location')
            if location:
                next_url = urljoin(url, location)
                return fetch_url(next_url, ssl_context, timeout)
        raise


def fetch_via_jina(url, ssl_context, timeout, strip_scheme=True):
    if strip_scheme:
        cleaned = url.replace('https://', '').replace('http://', '')
        jina_url = f"https://r.jina.ai/http://{cleaned}"
    else:
        jina_url = f"https://r.jina.ai/http://{url}"
    req = Request(jina_url, headers={'User-Agent': 'Mozilla/5.0 (compatible; CodexBot/1.0)'})
    with urlopen(req, timeout=timeout, context=ssl_context) as resp:
        content_type = resp.headers.get('Content-Type', '')
        raw = resp.read()
    return raw, content_type, jina_url


def split_sentences(text):
    if not text:
        return []
    parts = re.split(r'(?<=[.!?])\s+', text)
    sentences = []
    for part in parts:
        part = part.strip()
        if 40 <= len(part) <= 360:
            sentences.append(part)
    return sentences


def score_sentences(sentences):
    words = re.findall(r"[a-zA-Z']{3,}", ' '.join(sentences).lower())
    words = [w for w in words if w not in STOPWORDS]
    if not words:
        return []
    freq = Counter(words)
    scored = []
    for i, sentence in enumerate(sentences):
        w = re.findall(r"[a-zA-Z']{3,}", sentence.lower())
        w = [t for t in w if t not in STOPWORDS]
        if not w:
            continue
        score = sum(freq[t] for t in w) / max(len(w), 1)
        scored.append((score, i, sentence))
    return scored


def summarize(text, max_sentences=4):
    sentences = split_sentences(text)
    if not sentences:
        return []
    scored = score_sentences(sentences)
    if not scored:
        return sentences[:max_sentences]
    top = sorted(scored, key=lambda x: x[0], reverse=True)[:max_sentences]
    top_sorted = sorted(top, key=lambda x: x[1])
    return [s for _, _, s in top_sorted]


def extract_infra_components(text):
    matches = {}
    for pattern, label in INFRA_PATTERNS:
        m = re.search(pattern, text, re.IGNORECASE)
        if m:
            matches[label] = min(matches.get(label, 10**9), m.start())
    ordered = [label for label, _ in sorted(matches.items(), key=lambda kv: kv[1])]
    return ordered[:12]


def infer_system_components(text, category, infra_components):
    lower = text.lower()
    components = []
    for pattern, name, responsibility in SYSTEM_COMPONENT_PATTERNS:
        if re.search(pattern, lower):
            components.append({'name': name, 'responsibility': responsibility})

    for infra in infra_components:
        if infra in INFRA_RESP:
            components.append({'name': infra, 'responsibility': INFRA_RESP[infra]})

    if not components and category in CATEGORY_DEFAULT_COMPONENTS:
        components = [
            {'name': name, 'responsibility': resp}
            for name, resp in CATEGORY_DEFAULT_COMPONENTS[category]
        ]

    seen = set()
    deduped = []
    for item in components:
        key = item['name']
        if key in seen:
            continue
        seen.add(key)
        deduped.append(item)
    return deduped[:10]


def short_error(err):
    if not err:
        return ''
    if err.startswith('HTTP '):
        return err.split(';')[0]
    if 'nodename nor servname' in err:
        return 'DNS error'
    if 'SSL' in err:
        return 'SSL error'
    if 'Fetch error' in err:
        return 'Fetch error'
    if 'URL error' in err:
        return 'URL error'
    return 'Source error'


def normalize_infra_details(items):
    if not items:
        return []
    normalized = []
    for item in items:
        item = str(item).strip()
        if not item:
            continue
        normalized.append(item)

    keep = []
    for item in normalized:
        low = item.lower()
        if any(keyword in low for keyword in INFRA_KEEP_KEYWORDS):
            keep.append(item)
            continue
        for pattern, label in INFRA_PATTERNS:
            if re.search(pattern, low, re.IGNORECASE):
                keep.append(item)
                break
        else:
            if item in INFRA_RESP:
                keep.append(item)

    deduped = []
    seen = set()
    for item in keep:
        key = item.lower()
        if key in seen:
            continue
        seen.add(key)
        deduped.append(item)
    return deduped[:10]


def extract_json_blob(text):
    if not text:
        return None
    match = re.search(r'```json\\s*(\\{.*?\\})\\s*```', text, re.DOTALL)
    if match:
        return match.group(1)
    start = text.find('{')
    end = text.rfind('}')
    if start != -1 and end != -1 and end > start:
        return text[start:end + 1]
    return None


def llm_summarize(text, metadata, api_key, model, max_tokens, temperature):
    payload = {
        'model': model,
        'temperature': temperature,
        'max_tokens': max_tokens,
        'messages': [
            {
                'role': 'system',
                'content': (
                    'You summarize ML system design articles. Return JSON only with keys: '
                    'summaryPoints (3-5 bullet sentences), '
                    'infraDetails (3-7 items; infrastructure components only such as data stores, '
                    'stream/batch systems, orchestration, feature stores, model serving, monitoring; '
                    'exclude model architectures, datasets, and business processes), '
                    'systemComponents (3-6 objects with name and responsibility). '
                    'Be faithful to the article; if not stated, leave arrays empty. No extra keys.'
                ),
            },
            {
                'role': 'user',
                'content': (
                    f"Title: {metadata.get('title','')}\n"
                    f"Company: {metadata.get('company','')}\n"
                    f"Description: {metadata.get('description','')}\n\n"
                    f"Article text:\n{text}"
                ),
            },
        ],
    }

    req = Request(
        'https://api.openai.com/v1/chat/completions',
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}',
        },
        method='POST',
    )
    with urlopen(req, timeout=30) as resp:
        raw = resp.read().decode('utf-8', errors='ignore')
    response = json.loads(raw)
    content = response['choices'][0]['message']['content']
    blob = extract_json_blob(content)
    if not blob:
        raise ValueError('LLM response missing JSON')
    return json.loads(blob)


def main():
    parser = argparse.ArgumentParser(description='Fetch and summarize ML system design articles')
    parser.add_argument('--input', default='ui/data.json', help='Input JSON dataset')
    parser.add_argument('--output', default='ui/data.json', help='Output JSON dataset')
    parser.add_argument('--write-js', action='store_true', help='Also write ui/data.js for the UI')
    parser.add_argument('--sources-dir', default='sources_text', help='Directory to cache article text')
    parser.add_argument('--fallback-dir', default='sources', help='Fallback directory with cached article text')
    parser.add_argument('--limit', type=int, default=0, help='Limit number of entries')
    parser.add_argument('--start', type=int, default=1, help='Start index (1-based)')
    parser.add_argument('--sleep', type=float, default=0.3, help='Sleep between requests')
    parser.add_argument('--timeout', type=float, default=15, help='Per-request timeout in seconds')
    parser.add_argument('--force', action='store_true', help='Re-fetch and overwrite existing summaries')
    parser.add_argument('--use-jina', action='store_true', help='Fallback to r.jina.ai for blocked sources')
    parser.add_argument('--no-fetch', action='store_true', help='Do not fetch network content; rely on cached files')
    parser.add_argument('--use-llm', action='store_true', help='Use LLM for summaries and components')
    parser.add_argument('--llm-model', default='gpt-4o-mini', help='OpenAI model name')
    parser.add_argument('--llm-max-tokens', type=int, default=450, help='Max output tokens for LLM')
    parser.add_argument('--llm-temperature', type=float, default=0.2, help='LLM temperature')
    parser.add_argument('--max-chars', type=int, default=12000, help='Max characters of article text to send to LLM')
    parser.add_argument('--flush-every', type=int, default=1, help='Write output after N processed entries')
    parser.add_argument('--force-fetch', action='store_true', help='Force refetch even if cached text is empty')
    args = parser.parse_args()

    input_path = pathlib.Path(args.input)
    output_path = pathlib.Path(args.output)
    sources_dir = pathlib.Path(args.sources_dir)
    fallback_dir = pathlib.Path(args.fallback_dir)
    sources_dir.mkdir(parents=True, exist_ok=True)

    entries = json.loads(input_path.read_text())

    load_dotenv(pathlib.Path('.env'))
    api_key = os.environ.get('OPENAI_API_KEY', '').strip()

    ssl_context = ssl._create_unverified_context()

    start_idx = max(args.start, 1)
    end_idx = start_idx + args.limit - 1 if args.limit else None

    processed = 0
    for entry in entries:
        entry_id = entry.get('id') or entry.get('index')
        if entry_id is None:
            continue
        if entry_id < start_idx:
            continue
        if end_idx and entry_id > end_idx:
            continue

        if args.use_llm:
            if entry.get('summarySource') == 'llm' and not args.force:
                continue
            if entry.get('summarySource') == 'missing' and not (args.force or args.force_fetch):
                continue
        else:
            if entry.get('summaryPoints') and not args.force:
                continue

        url = entry.get('url', '')
        if not url:
            entry['summaryPoints'] = []
            entry['summary'] = ''
            entry['infraDetails'] = []
            entry['systemComponents'] = []
            entry['sourceError'] = 'Missing URL'
            continue

        cache_path = sources_dir / f"{int(entry_id):03d}.txt"
        fallback_path = fallback_dir / f"{int(entry_id):03d}.txt"
        text = ''
        fetched_url = url
        if cache_path.exists() and cache_path.stat().st_size > 0 and (not args.force or args.no_fetch):
            text = cache_path.read_text()
        elif fallback_path.exists() and fallback_path.stat().st_size > 0 and (not args.force or args.no_fetch):
            text = fallback_path.read_text()
        else:
            if args.no_fetch:
                entry['sourceError'] = 'No cached source text'
                text = ''
                cache_path.write_text(text)
                entry['summarySource'] = 'missing'
                continue
            try:
                raw, content_type, fetched_url = fetch_with_redirect(url, ssl_context, args.timeout)
                if 'application/pdf' in content_type:
                    text = ''
                else:
                    html = raw.decode('utf-8', errors='ignore')
                    text = extract_text(html)
            except HTTPError as exc:
                if args.use_jina and exc.code in (401, 403, 406, 429):
                    try:
                        raw, content_type, fetched_url = fetch_via_jina(url, ssl_context, args.timeout, strip_scheme=True)
                        if 'application/pdf' in content_type:
                            text = ''
                        else:
                            html = raw.decode('utf-8', errors='ignore')
                            text = extract_text(html)
                    except Exception as jina_exc:
                        entry['sourceError'] = short_error(f"HTTP {exc.code}; Jina error {jina_exc}")
                        text = ''
                else:
                    entry['sourceError'] = short_error(f"HTTP {exc.code}")
                    text = ''
            except URLError as exc:
                if args.use_jina:
                    try:
                        raw, content_type, fetched_url = fetch_via_jina(url, ssl_context, args.timeout, strip_scheme=True)
                        if 'application/pdf' in content_type:
                            text = ''
                        else:
                            html = raw.decode('utf-8', errors='ignore')
                            text = extract_text(html)
                    except Exception as jina_exc:
                        entry['sourceError'] = short_error(f"URL error {exc}; Jina error {jina_exc}")
                        text = ''
                else:
                    entry['sourceError'] = short_error(f"URL error {exc}")
                    text = ''
            except Exception as exc:
                entry['sourceError'] = short_error(f"Fetch error {exc}")
                text = ''

            cache_path.write_text(text)
            time.sleep(args.sleep)

        if not text:
            entry['summaryPoints'] = []
            entry['summary'] = ''
            entry['infraDetails'] = entry.get('components', [])
            entry['systemComponents'] = []
            entry['sourceFetched'] = False
            entry['summarySource'] = 'missing'
            processed += 1
            if args.flush_every and processed % args.flush_every == 0:
                output_path.write_text(json.dumps(entries, indent=2))
                if args.write_js:
                    js_path = output_path.with_suffix('.js')
                    js_path.write_text('window.ML_SYSTEM_DATA = ' + json.dumps(entries, indent=2) + ';\n')
            continue

        category = entry.get('category') or categorize(entry)
        trimmed_text = text[:args.max_chars]
        summary_source = 'heuristic'
        summary_model = ''
        if args.use_llm:
            if not api_key:
                raise SystemExit('OPENAI_API_KEY not set; add it to .env or environment')
            metadata = {
                'title': entry.get('title', ''),
                'company': entry.get('company', ''),
                'description': entry.get('description', ''),
            }
            try:
                result = llm_summarize(
                    trimmed_text,
                    metadata,
                    api_key=api_key,
                    model=args.llm_model,
                    max_tokens=args.llm_max_tokens,
                    temperature=args.llm_temperature,
                )
                summary_points = result.get('summaryPoints', [])
                infra_components = normalize_infra_details(result.get('infraDetails', []))
                system_components = result.get('systemComponents', [])
                summary_source = 'llm'
                summary_model = args.llm_model
            except Exception as exc:
                entry['sourceError'] = f'LLM error: {exc}'
                summary_points = []
                infra_components = []
                system_components = []
        else:
            summary_points = summarize(trimmed_text, max_sentences=4)
            infra_components = extract_infra_components(trimmed_text)
            system_components = infer_system_components(trimmed_text, category, infra_components)

        entry['summaryPoints'] = summary_points
        entry['summary'] = ' '.join(summary_points)
        entry['infraDetails'] = infra_components
        entry['components'] = infra_components
        entry['hasComponents'] = bool(infra_components)
        entry['systemComponents'] = system_components
        if summary_source in ('llm', 'heuristic'):
            entry['sourceError'] = ''
        entry['sourceFetched'] = True
        entry['sourceUrl'] = fetched_url
        entry['summarySource'] = summary_source
        if summary_model:
            entry['summaryModel'] = summary_model

        processed += 1
        if args.flush_every and processed % args.flush_every == 0:
            output_path.write_text(json.dumps(entries, indent=2))
            if args.write_js:
                js_path = output_path.with_suffix('.js')
                js_path.write_text('window.ML_SYSTEM_DATA = ' + json.dumps(entries, indent=2) + ';\n')

    output_path.write_text(json.dumps(entries, indent=2))

    if args.write_js:
        js_path = output_path.with_suffix('.js')
        js_path.write_text('window.ML_SYSTEM_DATA = ' + json.dumps(entries, indent=2) + ';\n')


if __name__ == '__main__':
    main()
