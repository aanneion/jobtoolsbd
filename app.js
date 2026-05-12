/* ============================================================
   EDITORIAL HUB BANGLADESH — app.js
   Phase 2: Reads data.json → renders everything dynamically
   ============================================================ */

'use strict';

/* ── CONFIG ───────────────────────────────────────────────── */
const CONFIG = {
    dataFile:        'data.json',
    archiveDays:     14,        // how many past days to show
    defaultFilter:   'all',
    importanceLabels: {
        1: 'Low',
        2: 'Below Average',
        3: 'Medium',
        4: 'Very High',
        5: 'Must Read'
    },
    categoryConfig: {
        economy:       { label: 'Economy',       cssClass: 'tag-economy'     },
        politics:      { label: 'Politics',      cssClass: 'tag-politics'    },
        international: { label: 'International', cssClass: 'tag-intl'        },
        society:       { label: 'Society',       cssClass: 'tag-society'     },
        education:     { label: 'Education',     cssClass: 'tag-education'   },
        environment:   { label: 'Environment',   cssClass: 'tag-environment' },
        security:      { label: 'Security',      cssClass: 'tag-security'    },
        health:        { label: 'Health',        cssClass: 'tag-health'      }
    }
};

/* ── STATE ────────────────────────────────────────────────── */
const STATE = {
    allData:       null,    // full parsed data.json
    allEditorials: [],      // flat array of all editorials
    activeDate:    null,    // currently viewed date (YYYY-MM-DD)
    todayDate:     null,    // today (YYYY-MM-DD)
    activeFilter:  'all',   // current filter
    searchQuery:   ''       // current search query
};

/* ── DOM REFS ─────────────────────────────────────────────── */
const DOM = {
    ticker:          document.getElementById('ticker-content'),
    liveDate:        document.getElementById('live-date'),
    liveBanglaDate:  document.getElementById('live-bangla-date'),
    liveTime:        document.getElementById('live-time'),
    displayedDate:   document.getElementById('displayed-date'),
    sectionBadge:    document.getElementById('section-badge'),
    paperCount:      document.getElementById('paper-count'),
    editorialCount:  document.getElementById('editorial-count'),
    btnPrev:         document.getElementById('btn-prev'),
    btnNext:         document.getElementById('btn-next'),
    feedContainer:   document.getElementById('editorial-feed-container'),
    filterBar:       document.getElementById('filter-bar'),
    searchInput:     document.getElementById('search-input'),
    searchBtn:       document.getElementById('search-btn'),
    newspaperIndex:  document.getElementById('newspaper-index'),
    archiveList:     document.getElementById('archive-list')
};

/* ══════════════════════════════════════════════════════════
   1. INIT
══════════════════════════════════════════════════════════ */
async function init() {
    startClock();
    setTodayDate();
    showSkeletonCards(4);
    await loadData();
    renderAll();
    bindEvents();
}

/* ══════════════════════════════════════════════════════════
   2. CLOCK & DATE HELPERS
══════════════════════════════════════════════════════════ */
function startClock() {
    function update() {
        const now  = new Date();
        const time = now.toLocaleTimeString('en-BD', {
            hour:   '2-digit',
            minute: '2-digit',
            hour12: true
        });
        DOM.liveTime.textContent = '🕐 ' + time;

        DOM.liveDate.textContent = '📅 ' + formatDateLong(now);
    }
    update();
    setInterval(update, 1000);
}

function setTodayDate() {
    const today = new Date();
    STATE.todayDate  = formatDateKey(today);
    STATE.activeDate = STATE.todayDate;
}

/** Format: YYYY-MM-DD */
function formatDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/** Format: "Thursday, June 19, 2025" */
function formatDateLong(date) {
    return date.toLocaleDateString('en-BD', {
        weekday: 'long',
        year:    'numeric',
        month:   'long',
        day:     'numeric'
    });
}

/** Format: "June 19, 2025" */
function formatDateShort(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-BD', {
        year:  'numeric',
        month: 'long',
        day:   'numeric'
    });
}

/** Format: "Mon", "Tue" ... */
function formatWeekday(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-BD', { weekday: 'long' });
}

/** Offset today by N days → YYYY-MM-DD */
function offsetDate(baseStr, days) {
    const [y, m, d] = baseStr.split('-').map(Number);
    const date = new Date(y, m - 1, d + days);
    return formatDateKey(date);
}

/* ══════════════════════════════════════════════════════════
   3. DATA LOADING
══════════════════════════════════════════════════════════ */
async function loadData() {
    try {
        const resp = await fetch(CONFIG.dataFile);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        STATE.allData       = await resp.json();
        STATE.allEditorials = STATE.allData.editorials || [];
    } catch (err) {
        console.error('Failed to load data.json:', err);
        showError();
    }
}

/* ══════════════════════════════════════════════════════════
   4. FILTER HELPERS
══════════════════════════════════════════════════════════ */

/** All editorials for the active date */
function getEditorialsForDate(dateStr) {
    return STATE.allEditorials.filter(e => e.date === dateStr);
}

/** Apply category/language filter */
function applyFilter(editorials, filter) {
    if (filter === 'all') return editorials;

    if (filter === 'bangla')  return editorials.filter(e => e.paper.language === 'bangla');
    if (filter === 'english') return editorials.filter(e => e.paper.language === 'english');

    return editorials.filter(e => e.category === filter);
}

/** Apply search query */
function applySearch(editorials, query) {
    if (!query.trim()) return editorials;
    const q = query.toLowerCase();
    return editorials.filter(e =>
        (e.headline_original  || '').toLowerCase().includes(q) ||
        (e.headline_translation || '').toLowerCase().includes(q) ||
        (e.summary            || '').toLowerCase().includes(q) ||
        (e.paper.name_english || '').toLowerCase().includes(q) ||
        (e.paper.name_bangla  || '').toLowerCase().includes(q) ||
        (e.category           || '').toLowerCase().includes(q)
    );
}

/* ══════════════════════════════════════════════════════════
   5. RENDER — MASTER
══════════════════════════════════════════════════════════ */
function renderAll() {
    renderDateUI();
    renderTicker();
    renderCards();
    renderNewspaperIndex();
    renderArchive();
}

/* ══════════════════════════════════════════════════════════
   6. RENDER — DATE UI
══════════════════════════════════════════════════════════ */
function renderDateUI() {
    const isToday = STATE.activeDate === STATE.todayDate;

    // Displayed date in date bar
    DOM.displayedDate.textContent = formatDateLong(
        new Date(...STATE.activeDate.split('-').map((v, i) => i === 1 ? v - 1 : +v))
    );

    // Section badge
    DOM.sectionBadge.textContent = formatDateShort(STATE.activeDate);

    // Prev/Next buttons
    DOM.btnNext.disabled = isToday;

    const editorialsToday = getEditorialsForDate(STATE.activeDate);
    const papers = new Set(editorialsToday.map(e => e.paper.name_english));

    DOM.paperCount.textContent    = papers.size || '0';
    DOM.editorialCount.textContent = editorialsToday.length || '0';
}

/* ══════════════════════════════════════════════════════════
   7. RENDER — TICKER
══════════════════════════════════════════════════════════ */
function renderTicker() {
    const editorials = getEditorialsForDate(STATE.todayDate);

    if (!editorials.length) {
        DOM.ticker.textContent = 'সম্পাদকীয় হাব — Editorial Hub Bangladesh — BCS · Bank · Govt Job Preparation';
        return;
    }

    const parts = editorials.map(e => {
        const paper = e.paper.name_bangla
            ? `${e.paper.name_bangla}`
            : e.paper.name_english;
        return `${paper}: ${e.headline_original}`;
    });

    DOM.ticker.textContent = parts.join('  ●  ');
}

/* ══════════════════════════════════════════════════════════
   8. RENDER — EDITORIAL CARDS
══════════════════════════════════════════════════════════ */
function renderCards() {
    const container = DOM.feedContainer;
    container.innerHTML = '';

    let editorials = getEditorialsForDate(STATE.activeDate);
    editorials     = applyFilter(editorials, STATE.activeFilter);
    editorials     = applySearch(editorials, STATE.searchQuery);

    /* ── Empty State ── */
    if (!editorials.length) {
        container.innerHTML = buildEmptyState();
        return;
    }

    /* ── Sort: by importance desc ── */
    editorials.sort((a, b) => b.importance - a.importance);

    /* ── Render each card ── */
    editorials.forEach(editorial => {
        container.insertAdjacentHTML('beforeend', buildCard(editorial));
    });
}

/* ── Build one card HTML ── */
function buildCard(e) {

    /* Paper display name */
    const paperDisplayName = e.paper.name_bangla
        ? `${e.paper.name_bangla} | ${e.paper.name_english}`
        : e.paper.name_english;

    /* Category */
    const catCfg    = CONFIG.categoryConfig[e.category] || { label: e.category, cssClass: '' };
    const catTag    = `<span class="category-tag ${catCfg.cssClass}">${catCfg.label}</span>`;

    /* Date stamp */
    const dateStamp = formatDateShort(e.date);

    /* Translation line */
    const translation = (e.headline_translation && e.paper.language === 'bangla')
        ? `<div class="editorial-translation">${e.headline_translation}</div>`
        : '';

    /* Summary */
    const summaryHTML = e.summary && !e.summary.startsWith('[')
        ? `<p class="summary-text">${e.summary}</p>`
        : `
            <div class="placeholder-line w-100"></div>
            <div class="placeholder-line w-85"></div>
            <div class="placeholder-line w-100"></div>
            <div class="placeholder-line w-55"></div>
            <div class="placeholder-note">✍️ Summary being prepared — check back shortly.</div>
          `;

    /* Key Points */
    const validPoints = (e.key_points || []).filter(p => p && !p.startsWith('['));
    const keyPointsHTML = validPoints.length
        ? `<ul class="key-points-list">
               ${validPoints.map(p => `<li>${p}</li>`).join('')}
           </ul>`
        : `
            <div class="placeholder-line w-85"></div>
            <div class="placeholder-line w-100"></div>
            <div class="placeholder-line w-70"></div>
            <div class="placeholder-line w-55"></div>
          `;

    /* Stars */
    const starsHTML = buildStars(e.importance || 0);
    const importLabel = CONFIG.importanceLabels[e.importance] || '—';

    /* Read link */
    const readLink = (e.original_url && !e.original_url.startsWith('['))
        ? `<a href="${e.original_url}" target="_blank" rel="noopener noreferrer" class="read-link">
               Read Full Editorial →
           </a>`
        : `<span class="read-link" style="opacity:0.4; cursor:not-allowed;">
               Link Pending
           </span>`;

    return `
    <article class="editorial-card" 
             data-category="${e.category}" 
             data-language="${e.paper.language}"
             data-id="${e.id}">

        <div class="card-header">
            <div class="paper-badge">
                <div class="paper-dot" 
                     style="background:${e.paper.color};"></div>
                <span class="paper-name" 
                      style="color:${e.paper.color};">
                    ${paperDisplayName}
                </span>
            </div>
            <div class="card-meta-right">
                ${catTag}
                <span class="card-date-stamp">📅 ${dateStamp}</span>
            </div>
        </div>

        <div class="card-body">

            <div class="editorial-title">
                ${e.headline_original || '[Headline not available]'}
            </div>

            ${translation}

            <div class="summary-box">
                <div class="summary-box-label">📋 Summary</div>
                ${summaryHTML}
            </div>

            <div class="key-points-box">
                <div class="key-points-label">🔑 Key Points for Exam</div>
                ${keyPointsHTML}
            </div>

        </div>

        <div class="card-footer">
            <div class="importance-wrap">
                <span class="importance-label">Exam Importance:</span>
                <div class="stars">${starsHTML}</div>
                <span class="importance-text">(${importLabel})</span>
            </div>
            ${readLink}
        </div>

    </article>`;
}

/* ── Build star icons ── */
function buildStars(count) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="star ${i <= count ? 'filled' : ''}">★</span>`;
    }
    return html;
}

/* ── Empty state HTML ── */
function buildEmptyState() {
    const isFiltered = STATE.activeFilter !== 'all' || STATE.searchQuery;
    return `
    <div class="empty-state">
        <div class="empty-icon">${isFiltered ? '🔍' : '📭'}</div>
        <div class="empty-title">
            ${isFiltered
                ? 'No editorials match your filter'
                : 'No editorials yet for this date'}
        </div>
        <div class="empty-sub">
            ${isFiltered
                ? 'Try a different filter or clear your search.'
                : 'Editorials for this day haven\'t been added yet.<br>Browse the archive or come back later.'}
        </div>
    </div>`;
}

/* ── Error state HTML ── */
function showError() {
    DOM.feedContainer.innerHTML = `
    <div class="error-state">
        <div class="error-icon">⚠️</div>
        <div class="error-title">Could not load editorials</div>
        <div class="error-sub">
            Failed to read <code>data.json</code>.<br>
            Make sure the file exists and is valid JSON.<br>
            If running locally, use a local server (e.g. VS Code Live Server).
        </div>
    </div>`;
}

/* ── Skeleton loading cards ── */
function showSkeletonCards(count) {
    let html = '';
    for (let i = 0; i < count; i++) {
        html += `
        <div class="skeleton-card">
            <div class="skeleton-header">
                <div class="skeleton-dot"></div>
                <div class="placeholder-line w-85" style="height:12px; display:inline-block; width:140px;"></div>
            </div>
            <div class="placeholder-line w-100" style="height:16px; margin-bottom:10px;"></div>
            <div class="placeholder-line w-85" style="height:11px;"></div>
            <div class="placeholder-line w-100" style="height:11px;"></div>
            <div class="placeholder-line w-70" style="height:11px;"></div>
            <div class="placeholder-line w-55" style="height:11px;"></div>
        </div>`;
    }
    DOM.feedContainer.innerHTML = html;
}

/* ══════════════════════════════════════════════════════════
   9. RENDER — NEWSPAPER INDEX SIDEBAR
══════════════════════════════════════════════════════════ */
function renderNewspaperIndex() {
    const newspapers = (STATE.allData && STATE.allData.newspapers) || [];
    const todayEdits = getEditorialsForDate(STATE.activeDate);

    /* Count per paper for active date */
    const countMap = {};
    todayEdits.forEach(e => {
        const key = e.paper.name_english;
        countMap[key] = (countMap[key] || 0) + 1;
    });

    let html = '';
    newspapers.forEach(np => {
        const count = countMap[np.name_english] || 0;
        const nameDisplay = np.name_bangla
            ? `<div class="np-name">${np.name_bangla}</div>
               <div class="np-lang">${np.language === 'bangla' ? 'Bangla' : 'English'} · ${np.name_english}</div>`
            : `<div class="np-name">${np.name_english}</div>
               <div class="np-lang">${np.language === 'bangla' ? 'Bangla' : 'English'}</div>`;

        html += `
        <a class="newspaper-row" href="${np.editorial_url}" 
           target="_blank" rel="noopener noreferrer" 
           title="Go to ${np.name_english} editorials">
            <div class="newspaper-info">
                <div class="np-dot" style="background:${np.color};"></div>
                <div>${nameDisplay}</div>
            </div>
            <span class="np-count ${count ? '' : 'none'}">
                ${count ? count : '—'}
            </span>
        </a>`;
    });

    DOM.newspaperIndex.innerHTML = html || '<p style="padding:14px;color:var(--text-light);font-size:0.82rem;">Loading...</p>';
}

/* ══════════════════════════════════════════════════════════
   10. RENDER — ARCHIVE SIDEBAR
══════════════════════════════════════════════════════════ */
function renderArchive() {
    const days  = CONFIG.archiveDays;
    let html    = '';

    for (let i = 0; i < days; i++) {
        const dateStr   = offsetDate(STATE.todayDate, -i);
        const editCount = getEditorialsForDate(dateStr).length;
        const isActive  = dateStr === STATE.activeDate;
        const isToday   = dateStr === STATE.todayDate;
        const weekday   = formatWeekday(dateStr);
        const dayLabel  = isToday ? `${weekday} — Today` : weekday;

        html += `
        <a class="archive-item ${isActive ? 'is-active' : ''}" 
           data-date="${dateStr}" 
           href="#">
            <div>
                <div class="archive-date-text">${formatDateShort(dateStr)}</div>
                <span class="archive-day-name">${dayLabel}</span>
            </div>
            <span class="archive-count-badge ${editCount ? '' : 'none'}">
                ${editCount || '—'}
            </span>
        </a>`;
    }

    DOM.archiveList.innerHTML = html;

    /* Bind clicks */
    DOM.archiveList.querySelectorAll('.archive-item').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const date = item.dataset.date;
            if (date !== STATE.activeDate) {
                STATE.activeDate   = date;
                STATE.activeFilter = 'all';
                STATE.searchQuery  = '';
                resetFilterButtons();
                renderAll();
                scrollToFeed();
            }
        });
    });
}

/* ══════════════════════════════════════════════════════════
   11. EVENT BINDING
══════════════════════════════════════════════════════════ */
function bindEvents() {

    /* ── Prev Day ── */
    DOM.btnPrev.addEventListener('click', () => {
        STATE.activeDate   = offsetDate(STATE.activeDate, -1);
        STATE.activeFilter = 'all';
        STATE.searchQuery  = '';
        resetFilterButtons();
        renderAll();
        scrollToFeed();
    });

    /* ── Next Day ── */
    DOM.btnNext.addEventListener('click', () => {
        if (STATE.activeDate >= STATE.todayDate) return;
        STATE.activeDate   = offsetDate(STATE.activeDate, 1);
        STATE.activeFilter = 'all';
        STATE.searchQuery  = '';
        resetFilterButtons();
        renderAll();
        scrollToFeed();
    });

    /* ── Filter Buttons ── */
    DOM.filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.filterBar.querySelectorAll('.filter-btn')
               .forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            STATE.activeFilter = btn.dataset.filter;
            STATE.searchQuery  = '';
            DOM.searchInput.value = '';
            renderCards();
        });
    });

    /* ── Search ── */
    function doSearch() {
        STATE.searchQuery  = DOM.searchInput.value;
        STATE.activeFilter = 'all';
        resetFilterButtons();
        renderCards();
    }

    DOM.searchBtn.addEventListener('click', doSearch);
    DOM.searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') doSearch();
    });
    /* Live search */
    DOM.searchInput.addEventListener('input', () => {
        if (DOM.searchInput.value === '') {
            STATE.searchQuery = '';
            renderCards();
        }
    });
}

/* ══════════════════════════════════════════════════════════
   12. UTILITIES
══════════════════════════════════════════════════════════ */
function resetFilterButtons() {
    DOM.filterBar.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'all');
    });
}

function scrollToFeed() {
    DOM.feedContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ══════════════════════════════════════════════════════════
   START
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', init);
