FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements-mcp.txt ./
RUN pip install --no-cache-dir -r requirements-mcp.txt

COPY docs/data.json ./docs/data.json
COPY tools/ml_atlas_mcp.py ./tools/ml_atlas_mcp.py

CMD ["python3", "tools/ml_atlas_mcp.py"]
