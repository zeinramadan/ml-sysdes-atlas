(() => {
  const data = Array.isArray(window.ML_SYSTEM_DATA) ? window.ML_SYSTEM_DATA : [];

  const state = {
    search: '',
    selectedGroups: new Set(),
    selectedIndustries: new Set(),
    selectedYears: new Set(),
    selectedComponents: new Set(),
    onlyWithInfra: false,
    onlyWithSource: false,
    sort: 'year_desc',
    componentQuery: '',
    intentQuery: ''
  };

  const els = {
    search: document.getElementById('search'),
    clearSearch: document.getElementById('clearSearch'),
    intentInput: document.getElementById('intentInput'),
    clearIntent: document.getElementById('clearIntent'),
    clearFilters: document.getElementById('clearFilters'),
    onlyInfra: document.getElementById('onlyInfra'),
    onlySource: document.getElementById('onlySource'),
    sort: document.getElementById('sort'),
    summary: document.getElementById('summary'),
    groupList: document.getElementById('groupList'),
    selectAllGroups: document.getElementById('selectAllGroups'),
    clearGroups: document.getElementById('clearGroups'),
    industryFilters: document.getElementById('industryFilters'),
    yearFilters: document.getElementById('yearFilters'),
    componentFilters: document.getElementById('componentFilters'),
    componentSearch: document.getElementById('componentSearch'),
    results: document.getElementById('results'),
    empty: document.getElementById('empty'),
    intentSection: document.getElementById('intentSection'),
    intentResults: document.getElementById('intentResults'),
    intentMeta: document.getElementById('intentMeta')
  };

  const categoryOrder = [
    'recommendation_ranking',
    'search_retrieval',
    'forecasting_eta',
    'fraud_abuse',
    'classification_tagging',
    'nlp_generation',
    'computer_vision',
    'llm_assistant',
    'marketing_ads',
    'optimization_pricing',
    'anomaly_ops',
    'generic'
  ];

  const categoryLabels = {};
  data.forEach(entry => {
    if (entry.category && entry.categoryLabel) {
      categoryLabels[entry.category] = entry.categoryLabel;
    }
  });

  function normalize(str) {
    return (str || '').toLowerCase();
  }

  const STOPWORDS = new Set([
    'the','and','for','with','from','that','this','these','those','are','was','were','you','your','our','their','they',
    'she','him','her','his','its','into','over','under','about','after','before','then','than','also','such','use',
    'using','used','into','onto','per','via','can','will','may','make','made','build','built','system','model'
  ]);

  function tokenize(text) {
    return normalize(text)
      .replace(/[^a-z0-9\\s]/g, ' ')
      .split(/\\s+/)
      .filter(word => word.length >= 3 && !STOPWORDS.has(word));
  }

  function expandTokens(tokens) {
    const expanded = new Set(tokens);
    if (expanded.has('eta') || expanded.has('etr')) {
      ['estimated', 'arrival', 'delivery', 'time', 'duration', 'wait', 'waiting'].forEach(word => expanded.add(word));
    }
    if (expanded.has('fraud')) {
      ['risk', 'abuse', 'scam', 'phishing', 'chargeback'].forEach(word => expanded.add(word));
    }
    if (expanded.has('search')) {
      ['retrieval', 'ranking', 'query'].forEach(word => expanded.add(word));
    }
    if (expanded.has('recommendation')) {
      ['recommend', 'ranking', 'personalized'].forEach(word => expanded.add(word));
    }
    return [...expanded];
  }

  function termFrequency(tokens) {
    const tf = {};
    tokens.forEach(token => {
      tf[token] = (tf[token] || 0) + 1;
    });
    return tf;
  }

  function buildSearchIndex(entries) {
    const docs = entries.map(entry => {
      const systemComponents = Array.isArray(entry.systemComponents)
        ? entry.systemComponents.map(item => `${item.name} ${item.responsibility}`).join(' ')
        : '';
      const text = [
        entry.company,
        entry.title,
        entry.description,
        entry.industry,
        (entry.summaryPoints || []).join(' '),
        (entry.components || []).join(' '),
        systemComponents
      ].join(' ');
      const tokens = tokenize(text);
      return { entry, tf: termFrequency(tokens), norm: 0 };
    });

    const df = {};
    docs.forEach(doc => {
      Object.keys(doc.tf).forEach(token => {
        df[token] = (df[token] || 0) + 1;
      });
    });

    const idf = {};
    const total = docs.length || 1;
    Object.keys(df).forEach(token => {
      idf[token] = Math.log((total + 1) / (df[token] + 1)) + 1;
    });

    docs.forEach(doc => {
      let sum = 0;
      Object.keys(doc.tf).forEach(token => {
        const weight = (1 + Math.log(doc.tf[token])) * (idf[token] || 0);
        sum += weight * weight;
      });
      doc.norm = Math.sqrt(sum);
    });

    return { docs, idf };
  }

  const searchIndex = buildSearchIndex(data);

  function prepareData() {
    data.forEach(entry => {
      const tokens = [entry.company, entry.title, entry.description, entry.industry]
        .map(normalize)
        .join(' ');
      entry._search = tokens;
      entry._industries = Array.isArray(entry.industries) ? entry.industries : [];
      entry._year = entry.year || 0;
    });
  }

  function matchesSearch(entry) {
    if (!state.search) return true;
    const parts = state.search.split(' ').filter(Boolean);
    return parts.every(part => entry._search.includes(part));
  }

  function matchesIndustry(entry) {
    if (!state.selectedIndustries.size) return true;
    return entry._industries.some(ind => state.selectedIndustries.has(ind));
  }

  function matchesYear(entry) {
    if (!state.selectedYears.size) return true;
    return state.selectedYears.has(String(entry._year));
  }

  function matchesComponent(entry) {
    if (!state.selectedComponents.size) return true;
    return entry.components.some(comp => state.selectedComponents.has(comp));
  }

  function applyFilters({ excludeGroup }) {
    let list = data.filter(matchesSearch)
      .filter(matchesIndustry)
      .filter(matchesYear)
      .filter(matchesComponent)
      .filter(entry => !state.onlyWithInfra || entry.hasComponents)
      .filter(entry => !state.onlyWithSource || !entry.sourceError);

    if (!excludeGroup && state.selectedGroups.size) {
      list = list.filter(entry => state.selectedGroups.has(entry.category));
    }

    return list;
  }

  function sortList(list) {
    const copy = [...list];
    switch (state.sort) {
      case 'year_asc':
        copy.sort((a, b) => (a._year || 0) - (b._year || 0));
        break;
      case 'company_asc':
        copy.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'year_desc':
      default:
        copy.sort((a, b) => (b._year || 0) - (a._year || 0));
        break;
    }
    return copy;
  }

  function countBy(list, field, arrayField = false) {
    const counts = new Map();
    list.forEach(entry => {
      if (arrayField) {
        (entry[field] || []).forEach(value => {
          counts.set(value, (counts.get(value) || 0) + 1);
        });
      } else {
        const value = entry[field];
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    });
    return counts;
  }

  function renderGroups(baseList) {
    const counts = countBy(baseList, 'category');
    const total = baseList.length;
    const groups = ['all', ...categoryOrder.filter(c => categoryLabels[c])];

    els.groupList.innerHTML = groups.map(group => {
      const label = group === 'all' ? 'All systems' : categoryLabels[group] || group;
      const count = group === 'all' ? total : (counts.get(group) || 0);
      const active = group === 'all'
        ? (state.selectedGroups.size === 0 ? 'active' : '')
        : (state.selectedGroups.has(group) ? 'active' : '');
      return `
        <div class="group-item ${active}" data-group="${group}">
          <span>${label}</span>
          <span class="group-count">${count}</span>
        </div>
      `;
    }).join('');

    els.groupList.querySelectorAll('.group-item').forEach(item => {
      item.addEventListener('click', (event) => {
        const group = item.dataset.group;
        if (group === 'all') {
          state.selectedGroups.clear();
        } else {
          if (state.selectedGroups.has(group)) {
            state.selectedGroups.delete(group);
          } else {
            state.selectedGroups.add(group);
          }
        }
        render();
      });
    });
  }

  function renderChips(container, items, selectedSet) {
    container.innerHTML = items.map(item => {
      const active = selectedSet.has(item.value) ? 'active' : '';
      const count = item.count ? ` (${item.count})` : '';
      return `<button class="chip ${active}" data-value="${item.value}">${item.label}${count}</button>`;
    }).join('');

    container.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const value = chip.dataset.value;
        if (selectedSet.has(value)) {
          selectedSet.delete(value);
        } else {
          selectedSet.add(value);
        }
        render();
      });
    });
  }

  function renderFilters(baseList) {
    const industryCounts = countBy(baseList, '_industries', true);
    const industryItems = [...industryCounts.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => b.count - a.count);

    renderChips(els.industryFilters, industryItems, state.selectedIndustries);

    const yearCounts = countBy(baseList, '_year');
    const yearItems = [...yearCounts.entries()]
      .map(([value, count]) => ({ value: String(value), label: String(value), count }))
      .sort((a, b) => Number(b.value) - Number(a.value));

    renderChips(els.yearFilters, yearItems, state.selectedYears);

    const componentCounts = countBy(baseList, 'components', true);
    const componentItems = [...componentCounts.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => b.count - a.count);

    const query = normalize(state.componentQuery);
    const filteredComponents = query
      ? componentItems.filter(item => normalize(item.label).includes(query))
      : componentItems.slice(0, 32);

    renderChips(els.componentFilters, filteredComponents, state.selectedComponents);
  }

  function buildCard(entry, index) {
    const tags = entry.components.slice(0, 8);
    const extra = entry.components.length - tags.length;
    if (extra > 0) {
      tags.push(`+${extra} more`);
    }

    const tagHtml = tags.length
      ? `<div class="tags">${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>`
      : '';

    let status = '';
    if (entry.sourceError) {
      status = `Source status: ${entry.sourceError}`;
    } else if (!entry.hasComponents) {
      status = 'Infra not specified in source text';
    }

    const statusHtml = status ? `<div class="status">${status}</div>` : '';

    const summaryPoints = Array.isArray(entry.summaryPoints) ? entry.summaryPoints : [];
    const summaryHtml = summaryPoints.length
      ? `<ul class="summary-list">${summaryPoints.map(point => `<li>${point}</li>`).join('')}</ul>`
      : '';

    const systemComponents = Array.isArray(entry.systemComponents) ? entry.systemComponents : [];
    const componentHtml = systemComponents.length
      ? `<div class="component-list">${systemComponents.slice(0, 6).map(item => (
          `<div class="component-item"><strong>${item.name}</strong><span>${item.responsibility}</span></div>`
        )).join('')}</div>`
      : '';

    const linkHtml = entry.url
      ? `<a href="${entry.url}" target="_blank" rel="noopener noreferrer">Original article</a>`
      : '';

    return `
      <article class="card" style="--i:${index}">
        <div class="meta">
          <span class="company">${entry.company}</span>
          <span class="meta-item year">${entry.year || 'n/a'}</span>
          <span class="meta-item industry">${entry.industry}</span>
        </div>
        <h3>${entry.title || entry.description}</h3>
        <p>${entry.description}</p>
        ${summaryHtml}
        ${tagHtml}
        ${componentHtml}
        ${statusHtml}
        ${linkHtml}
      </article>
    `;
  }

  function renderResults(list) {
    if (!list.length) {
      els.results.innerHTML = '';
      els.empty.classList.remove('hidden');
      return;
    }
    els.empty.classList.add('hidden');

    if (!state.selectedGroups.size) {
      const grouped = new Map();
      list.forEach(entry => {
        if (!grouped.has(entry.category)) {
          grouped.set(entry.category, []);
        }
        grouped.get(entry.category).push(entry);
      });

      const sections = categoryOrder
        .filter(cat => grouped.has(cat))
        .map(cat => {
          const items = sortList(grouped.get(cat));
          const cards = items.map((entry, i) => buildCard(entry, i)).join('');
          return `
            <section class="section">
              <h2>${categoryLabels[cat] || cat}</h2>
              <div class="cards">${cards}</div>
            </section>
          `;
        });

      els.results.innerHTML = sections.join('');
    } else {
      const grouped = new Map();
      list.forEach(entry => {
        if (!grouped.has(entry.category)) {
          grouped.set(entry.category, []);
        }
        grouped.get(entry.category).push(entry);
      });

      const sections = categoryOrder
        .filter(cat => state.selectedGroups.has(cat) && grouped.has(cat))
        .map(cat => {
          const items = sortList(grouped.get(cat));
          const cards = items.map((entry, i) => buildCard(entry, i)).join('');
          return `
            <section class="section">
              <h2>${categoryLabels[cat] || cat}</h2>
              <div class="cards">${cards}</div>
            </section>
          `;
        });

      els.results.innerHTML = sections.join('');
    }
  }

  function renderSuggestions() {
    const query = state.intentQuery.trim();
    const queryTokens = expandTokens(tokenize(query));
    els.intentSection.classList.remove('hidden');
    if (queryTokens.length === 0) {
      els.intentResults.innerHTML = '<div class="status">Type a short description to see matches.</div>';
      els.intentMeta.textContent = '';
      return;
    }
    const qtf = termFrequency(queryTokens);
    const qWeights = {};
    let qNorm = 0;
    Object.keys(qtf).forEach(token => {
      const weight = (1 + Math.log(qtf[token])) * (searchIndex.idf[token] || 0);
      qWeights[token] = weight;
      qNorm += weight * weight;
    });
    qNorm = Math.sqrt(qNorm);

    const scored = searchIndex.docs.map(doc => {
      if (!qNorm || !doc.norm) {
        return { entry: doc.entry, score: 0, overlap: 0 };
      }
      let dot = 0;
      let overlap = 0;
      Object.keys(qWeights).forEach(token => {
        if (doc.tf[token]) {
          const docWeight = (1 + Math.log(doc.tf[token])) * (searchIndex.idf[token] || 0);
          dot += qWeights[token] * docWeight;
          overlap += 1;
        }
      });
      const score = dot / (qNorm * doc.norm);
      return { entry: doc.entry, score, overlap };
    }).filter(item => item.overlap > 0);

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.overlap - a.overlap;
    });
    let top = scored.slice(0, 8);

    if (!top.length) {
      const fallback = data.filter(entry => {
        const haystack = entry._search || '';
        return queryTokens.some(token => haystack.includes(token));
      }).slice(0, 8).map(entry => ({ entry, score: 0 }));
      top = fallback;
    }

    els.intentMeta.textContent = `${top.length} matches`;

    els.intentResults.innerHTML = top.map(item => {
      const entry = item.entry;
      const score = item.score > 0 ? Math.max(1, Math.round(item.score * 100)) : 0;
      const label = categoryLabels[entry.category] || entry.category;
      const scoreLabel = score ? `${score}%` : 'keyword match';
      return `
        <div class="suggestion-card">
          <div class="suggestion-meta">${entry.company} • ${entry.year || 'n/a'} • ${label} • ${scoreLabel}</div>
          <h3>${entry.title || entry.description}</h3>
          <p>${entry.description}</p>
          ${entry.url ? `<a href="${entry.url}" target="_blank" rel="noopener noreferrer">Original article</a>` : ''}
        </div>
      `;
    }).join('');

    if (!top.length) {
      els.intentResults.innerHTML = '<div class="status">No close matches yet. Try different keywords.</div>';
    }
  }

  function renderSummary(list, baseList) {
    const total = baseList.length;
    const shown = list.length;
    let groupLabel = 'All systems';
    if (state.selectedGroups.size) {
      const labels = [...state.selectedGroups].map(group => categoryLabels[group] || group);
      groupLabel = labels.length > 3
        ? `${labels.length} selected system types`
        : labels.join(', ');
    }
    els.summary.textContent = `${shown} of ${total} entries shown - ${groupLabel}`;
  }

  function render() {
    const baseList = applyFilters({ excludeGroup: true });
    const visibleList = applyFilters({ excludeGroup: false });

    renderGroups(baseList);
    renderFilters(baseList);
    renderSuggestions();
    renderResults(visibleList);
    renderSummary(visibleList, baseList);
  }

  function bindEvents() {
    els.search.addEventListener('input', (e) => {
      state.search = normalize(e.target.value);
      render();
    });

    els.clearSearch.addEventListener('click', () => {
      state.search = '';
      els.search.value = '';
      render();
    });

    els.intentInput.addEventListener('input', (e) => {
      state.intentQuery = e.target.value;
      render();
    });

    els.clearIntent.addEventListener('click', () => {
      state.intentQuery = '';
      els.intentInput.value = '';
      render();
    });

    els.onlyInfra.addEventListener('change', (e) => {
      state.onlyWithInfra = e.target.checked;
      render();
    });

    els.onlySource.addEventListener('change', (e) => {
      state.onlyWithSource = e.target.checked;
      render();
    });

    els.sort.addEventListener('change', (e) => {
      state.sort = e.target.value;
      render();
    });

    els.clearFilters.addEventListener('click', () => {
      state.selectedIndustries.clear();
      state.selectedYears.clear();
      state.selectedComponents.clear();
      state.onlyWithInfra = false;
      state.onlyWithSource = false;
      state.selectedGroups.clear();
      state.componentQuery = '';
      els.onlyInfra.checked = false;
      els.onlySource.checked = false;
      els.componentSearch.value = '';
      render();
    });

    els.selectAllGroups.addEventListener('click', () => {
      state.selectedGroups = new Set(categoryOrder.filter(cat => categoryLabels[cat]));
      render();
    });

    els.clearGroups.addEventListener('click', () => {
      state.selectedGroups.clear();
      render();
    });

    els.componentSearch.addEventListener('input', (e) => {
      state.componentQuery = e.target.value;
      render();
    });
  }

  prepareData();
  bindEvents();
  render();
})();
