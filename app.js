/* ============================================================
   EDITORIAL HUB BANGLADESH — app.js
   Data is embedded directly — no fetch() needed.
   Just edit the EDITORIAL_DATA object below daily.
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════
   YOUR DAILY CONTENT — EDIT THIS EVERY DAY
   
   HOW TO ADD A NEW EDITORIAL:
   1. Copy one {} block from the editorials array
   2. Paste it at the TOP of the array (latest first)
   3. Fill in all fields
   4. Save → push to GitHub → done
══════════════════════════════════════════════════════════ */

const EDITORIAL_DATA = {

    newspapers: [
        {
            id:           'prothom-alo',
            name_bangla:  'প্রথম আলো',
            name_english: 'Prothom Alo',
            color:        '#e74c3c',
            language:     'bangla',
            editorial_url:'https://www.prothomalo.com/opinion/editorial'
        },
        {
            id:           'daily-star',
            name_bangla:  '',
            name_english: 'The Daily Star',
            color:        '#2980b9',
            language:     'english',
            editorial_url:'https://www.thedailystar.net/opinion/editorial'
        },
        {
            id:           'jugantor',
            name_bangla:  'যুগান্তর',
            name_english: 'Jugantor',
            color:        '#27ae60',
            language:     'bangla',
            editorial_url:'https://www.jugantor.com/todays-paper/editorial'
        },
        {
            id:           'kaler-kantho',
            name_bangla:  'কালের কণ্ঠ',
            name_english: 'Kaler Kantho',
            color:        '#8e44ad',
            language:     'bangla',
            editorial_url:'https://www.kalerkantho.com/print-edition/editorial'
        },
        {
            id:           'ittefaq',
            name_bangla:  'দৈনিক ইত্তেফাক',
            name_english: 'Daily Ittefaq',
            color:        '#c0392b',
            language:     'bangla',
            editorial_url:'https://www.ittefaq.com.bd/opinion'
        },
        {
            id:           'samakal',
            name_bangla:  'সমকাল',
            name_english: 'Samakal',
            color:        '#e67e22',
            language:     'bangla',
            editorial_url:'https://samakal.com/opinion'
        },
        {
            id:           'financial-express',
            name_bangla:  '',
            name_english: 'The Financial Express',
            color:        '#f39c12',
            language:     'english',
            editorial_url:'https://thefinancialexpress.com.bd/editorial'
        },
        {
            id:           'new-age',
            name_bangla:  '',
            name_english: 'New Age Bangladesh',
            color:        '#16a085',
            language:     'english',
            editorial_url:'https://www.newagebd.net/editorial'
        },
        {
            id:           'business-standard',
            name_bangla:  '',
            name_english: 'The Business Standard',
            color:        '#1a5276',
            language:     'english',
            editorial_url:'https://www.tbsnews.net/thoughts/op-ed'
        },
        {
            id:           'daily-sun',
            name_bangla:  '',
            name_english: 'Daily Sun',
            color:        '#d35400',
            language:     'english',
            editorial_url:'https://www.daily-sun.com/editorial'
        },
        {
            id:           'manabzamin',
            name_bangla:  'মানবজমিন',
            name_english: 'Manabzamin',
            color:        '#117a65',
            language:     'bangla',
            editorial_url:'https://mzamin.com/category.php?cat=16'
        }
    ],

    /* ══════════════════════════════════════════════════
       EDITORIALS ARRAY
       
       FIELDS EXPLAINED:
       ─────────────────
       id                → unique number, increment each time
       date              → "YYYY-MM-DD" format, must be exact
       
       paper → {
         name_bangla     → Bangla name (empty "" if English paper)
         name_english    → English name (always fill)
         color           → hex color code for that newspaper
         language        → "bangla" or "english"
       }
       
       category          → one of:
                           "economy" | "politics" | "international"
                           "society" | "education" | "environment"
                           "security" | "health"
       
       headline_original    → paste exact headline from newspaper
       headline_translation → English translation (only if Bangla paper)
                              leave "" for English papers
       
       summary           → write 3-5 sentences in simple language
                           THIS IS YOUR TEAM'S WRITING, not copied
       
       key_points        → array of 4-6 exam-relevant bullet points
                           focus on facts, figures, laws, org names
       
       importance        → number 1 to 5
                           1 = Low
                           2 = Below Average  
                           3 = Medium
                           4 = Very High
                           5 = Must Read
       
       original_url      → direct link to editorial on newspaper site
                           leave "" if not available yet
    ══════════════════════════════════════════════════ */

    editorials: [

        /* ─────────────────────────────────────────
           DATE: TODAY — Fill these every morning
           Copy a block, change the fields, save.
        ───────────────────────────────────────── */

        {
            id:                   '001',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      'প্রথম আলো',
                name_english:     'Prothom Alo',
                color:            '#e74c3c',
                language:         'bangla'
            },
            category:             'economy',
            headline_original:    'আপনার আজকের প্রথম আলো সম্পাদকীয় শিরোনাম এখানে লিখুন',
            headline_translation: 'English translation of the headline goes here',
            summary:              'এখানে ৩-৫ বাক্যে সম্পাদকীয়র সারসংক্ষেপ লিখুন। সহজ ভাষায় লিখুন যাতে পরীক্ষার্থীরা সহজে বুঝতে পারেন। মূল বিষয়গুলো তুলে ধরুন।',
            key_points: [
                'গুরুত্বপূর্ণ তথ্য বা পরিসংখ্যান এখানে লিখুন',
                'কোনো আইন বা সংস্থার নাম উল্লেখ থাকলে লিখুন',
                'মূল সমস্যা বা সমাধান কী — সেটি লিখুন',
                'পরীক্ষার জন্য গুরুত্বপূর্ণ তথ্য এখানে',
                'আরেকটি গুরুত্বপূর্ণ পয়েন্ট'
            ],
            importance:           4,
            original_url:         'https://www.prothomalo.com/opinion/editorial'
        },

        {
            id:                   '002',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      '',
                name_english:     'The Daily Star',
                color:            '#2980b9',
                language:         'english'
            },
            category:             'international',
            headline_original:    'Paste The Daily Star editorial headline here',
            headline_translation: '',
            summary:              'Write a 3-5 sentence summary of the Daily Star editorial here. Use simple language. Focus on what the editorial argues and what solution it proposes.',
            key_points: [
                'Key fact or statistic from the editorial',
                'Name of any law, treaty, or organization mentioned',
                'Main problem the editorial identifies',
                'Solution or recommendation the editorial makes',
                'Any important date or figure mentioned'
            ],
            importance:           5,
            original_url:         'https://www.thedailystar.net/opinion/editorial'
        },

        {
            id:                   '003',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      'যুগান্তর',
                name_english:     'Jugantor',
                color:            '#27ae60',
                language:         'bangla'
            },
            category:             'society',
            headline_original:    'যুগান্তর সম্পাদকীয় শিরোনাম এখানে লিখুন',
            headline_translation: 'English translation here',
            summary:              'সারসংক্ষেপ এখানে লিখুন।',
            key_points: [
                'মূল তথ্য ১',
                'মূল তথ্য ২',
                'মূল তথ্য ৩',
                'মূল তথ্য ৪'
            ],
            importance:           3,
            original_url:         'https://www.jugantor.com/todays-paper/editorial'
        },

        {
            id:                   '004',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      'কালের কণ্ঠ',
                name_english:     'Kaler Kantho',
                color:            '#8e44ad',
                language:         'bangla'
            },
            category:             'environment',
            headline_original:    'কালের কণ্ঠ সম্পাদকীয় শিরোনাম এখানে লিখুন',
            headline_translation: 'English translation here',
            summary:              'সারসংক্ষেপ এখানে লিখুন।',
            key_points: [
                'মূল তথ্য ১',
                'মূল তথ্য ২',
                'মূল তথ্য ৩',
                'মূল তথ্য ৪'
            ],
            importance:           4,
            original_url:         'https://www.kalerkantho.com/print-edition/editorial'
        },

        {
            id:                   '005',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      'দৈনিক ইত্তেফাক',
                name_english:     'Daily Ittefaq',
                color:            '#c0392b',
                language:         'bangla'
            },
            category:             'education',
            headline_original:    'ইত্তেফাক সম্পাদকীয় শিরোনাম এখানে লিখুন',
            headline_translation: 'English translation here',
            summary:              'সারসংক্ষেপ এখানে লিখুন।',
            key_points: [
                'মূল তথ্য ১',
                'মূল তথ্য ২',
                'মূল তথ্য ৩',
                'মূল তথ্য ৪'
            ],
            importance:           3,
            original_url:         'https://www.ittefaq.com.bd/opinion'
        },

        {
            id:                   '006',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      'সমকাল',
                name_english:     'Samakal',
                color:            '#e67e22',
                language:         'bangla'
            },
            category:             'politics',
            headline_original:    'সমকাল সম্পাদকীয় শিরোনাম এখানে লিখুন',
            headline_translation: 'English translation here',
            summary:              'সারসংক্ষেপ এখানে লিখুন।',
            key_points: [
                'মূল তথ্য ১',
                'মূল তথ্য ২',
                'মূল তথ্য ৩',
                'মূল তথ্য ৪'
            ],
            importance:           4,
            original_url:         'https://samakal.com/opinion'
        },

        {
            id:                   '007',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      '',
                name_english:     'The Financial Express',
                color:            '#f39c12',
                language:         'english'
            },
            category:             'economy',
            headline_original:    'Paste Financial Express editorial headline here',
            headline_translation: '',
            summary:              'Write summary here.',
            key_points: [
                'Key point 1',
                'Key point 2',
                'Key point 3',
                'Key point 4'
            ],
            importance:           4,
            original_url:         'https://thefinancialexpress.com.bd/editorial'
        },

        {
            id:                   '008',
            date:                 '2025-06-19',
            paper: {
                name_bangla:      '',
                name_english:     'New Age Bangladesh',
                color:            '#16a085',
                language:         'english'
            },
            category:             'politics',
            headline_original:    'Paste New Age editorial headline here',
            headline_translation: '',
            summary:              'Write summary here.',
            key_points: [
                'Key point 1',
                'Key point 2',
                'Key point 3',
                'Key point 4'
            ],
            importance:           3,
            original_url:         'https://www.newagebd.net/editorial'
        }

        /*
        ════════════════════════════════════════
        ✨ AI AUTO-FETCH: Use the "Auto-Fetch Today's Editorials" button
        in the UI to automatically fill in today's editorials using AI.
        ════════════════════════════════════════
        */

        /*
        ════════════════════════════════════════
        TO ADD TOMORROW'S EDITORIALS:

        1. Add a comma after the last } above
        2. Paste this block and fill it in:

        {
            id:                   '009',
            date:                 '2025-06-20',
            paper: {
                name_bangla:      'প্রথম আলো',
                name_english:     'Prothom Alo',
                color:            '#e74c3c',
                language:         'bangla'
            },
            category:             'economy',
            headline_original:    'শিরোনাম এখানে',
            headline_translation: 'Translation here',
            summary:              'সারসংক্ষেপ এখানে।',
            key_points: [
                'পয়েন্ট ১',
                'পয়েন্ট ২',
                'পয়েন্ট ৩',
                'পয়েন্ট ৪'
            ],
            importance:           4,
            original_url:         'https://www.prothomalo.com/opinion/editorial/...'
        }
        ════════════════════════════════════════
        */
    ]
};


/* ════════════════════════════════════════════════════════════
   BELOW THIS LINE — DO NOT EDIT
   This is the engine that reads EDITORIAL_DATA and renders it
════════════════════════════════════════════════════════════ */

/* ── CONFIG ── */
const CONFIG = {
    archiveDays: 14,
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

/* ── STATE ── */
const STATE = {
    activeDate:   null,
    todayDate:    null,
    activeFilter: 'all',
    searchQuery:  ''
};

/* ── DOM ── */
const DOM = {
    ticker:         document.getElementById('ticker-content'),
    liveDate:       document.getElementById('live-date'),
    liveBanglaDate: document.getElementById('live-bangla-date'),
    liveTime:       document.getElementById('live-time'),
    displayedDate:  document.getElementById('displayed-date'),
    sectionBadge:   document.getElementById('section-badge'),
    paperCount:     document.getElementById('paper-count'),
    editorialCount: document.getElementById('editorial-count'),
    btnPrev:        document.getElementById('btn-prev'),
    btnNext:        document.getElementById('btn-next'),
    feedContainer:  document.getElementById('editorial-feed-container'),
    filterBar:      document.getElementById('filter-bar'),
    searchInput:    document.getElementById('search-input'),
    searchBtn:      document.getElementById('search-btn'),
    newspaperIndex: document.getElementById('newspaper-index'),
    archiveList:    document.getElementById('archive-list')
};

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
function init() {
    setTodayDate();
    startClock();
    renderAll();
    bindEvents();
}

/* ══════════════════════════════════════════════════════════
   DATE HELPERS
══════════════════════════════════════════════════════════ */
function setTodayDate() {
    const today      = new Date();
    STATE.todayDate  = formatDateKey(today);
    STATE.activeDate = STATE.todayDate;
}

function formatDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function formatDateLong(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        weekday: 'long',
        year:    'numeric',
        month:   'long',
        day:     'numeric'
    });
}

function formatDateShort(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        year:  'numeric',
        month: 'long',
        day:   'numeric'
    });
}

function formatWeekday(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        weekday: 'long'
    });
}

function offsetDate(baseStr, days) {
    const [y, m, d] = baseStr.split('-').map(Number);
    const date = new Date(y, m - 1, d + days);
    return formatDateKey(date);
}

/* ══════════════════════════════════════════════════════════
   CLOCK
══════════════════════════════════════════════════════════ */
function startClock() {
    function tick() {
        const now = new Date();
        DOM.liveDate.textContent = '📅 ' + formatDateLong(formatDateKey(now));
        DOM.liveTime.textContent = '🕐 ' + now.toLocaleTimeString('en-US', {
            hour:   '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
    tick();
    setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════════════════
   DATA HELPERS
══════════════════════════════════════════════════════════ */
function getEditorialsForDate(dateStr) {
    return EDITORIAL_DATA.editorials.filter(e => e.date === dateStr);
}

function applyFilter(editorials, filter) {
    if (filter === 'all')     return editorials;
    if (filter === 'bangla')  return editorials.filter(e => e.paper.language === 'bangla');
    if (filter === 'english') return editorials.filter(e => e.paper.language === 'english');
    return editorials.filter(e => e.category === filter);
}

function applySearch(editorials, query) {
    if (!query.trim()) return editorials;
    const q = query.toLowerCase();
    return editorials.filter(e =>
        (e.headline_original     || '').toLowerCase().includes(q) ||
        (e.headline_translation  || '').toLowerCase().includes(q) ||
        (e.summary               || '').toLowerCase().includes(q) ||
        (e.paper.name_english    || '').toLowerCase().includes(q) ||
        (e.paper.name_bangla     || '').toLowerCase().includes(q) ||
        (e.category              || '').toLowerCase().includes(q)
    );
}

/* ══════════════════════════════════════════════════════════
   RENDER ALL
══════════════════════════════════════════════════════════ */
function renderAll() {
    renderDateUI();
    renderTicker();
    renderCards();
    renderNewspaperIndex();
    renderArchive();
}

/* ── Date UI ── */
function renderDateUI() {
    const isToday = STATE.activeDate === STATE.todayDate;

    DOM.displayedDate.textContent  = formatDateLong(STATE.activeDate);
    DOM.sectionBadge.textContent   = formatDateShort(STATE.activeDate);
    DOM.btnNext.disabled           = isToday;

    const edits  = getEditorialsForDate(STATE.activeDate);
    const papers = new Set(edits.map(e => e.paper.name_english));

    DOM.paperCount.textContent    = papers.size;
    DOM.editorialCount.textContent = edits.length;
}

/* ── Ticker ── */
function renderTicker() {
    const edits = getEditorialsForDate(STATE.todayDate);
    if (!edits.length) {
        DOM.ticker.textContent =
            'সম্পাদকীয় হাব — Editorial Hub Bangladesh — BCS · Bank · Govt Job Preparation';
        return;
    }
    DOM.ticker.textContent = edits.map(e => {
        const paper = e.paper.name_bangla || e.paper.name_english;
        return `${paper}: ${e.headline_original}`;
    }).join('  ●  ');
}

/* ── Cards ── */
function renderCards() {
    DOM.feedContainer.innerHTML = '';

    let edits = getEditorialsForDate(STATE.activeDate);
    edits     = applyFilter(edits, STATE.activeFilter);
    edits     = applySearch(edits, STATE.searchQuery);

    if (!edits.length) {
        DOM.feedContainer.innerHTML = buildEmptyState();
        return;
    }

    /* Sort by importance descending */
    edits.sort((a, b) => b.importance - a.importance);
    edits.forEach(e => {
        DOM.feedContainer.insertAdjacentHTML('beforeend', buildCard(e));
    });
}

/* ── Build Card ── */
function buildCard(e) {
    const paperName = e.paper.name_bangla
        ? `${e.paper.name_bangla} | ${e.paper.name_english}`
        : e.paper.name_english;

    const cat     = CONFIG.categoryConfig[e.category] ||
                    { label: e.category, cssClass: '' };

    const translation = (e.headline_translation && e.paper.language === 'bangla')
        ? `<div class="editorial-translation">${e.headline_translation}</div>`
        : '';

    const summaryHTML = e.summary
        ? `<p class="summary-text">${e.summary}</p>`
        : `<div class="placeholder-line w-100"></div>
           <div class="placeholder-line w-85"></div>
           <div class="placeholder-line w-100"></div>
           <div class="placeholder-line w-55"></div>
           <div class="placeholder-note">✍️ Summary being prepared.</div>`;

    const validPoints = (e.key_points || []).filter(Boolean);
    const pointsHTML  = validPoints.length
        ? `<ul class="key-points-list">
               ${validPoints.map(p => `<li>${p}</li>`).join('')}
           </ul>`
        : `<div class="placeholder-line w-85"></div>
           <div class="placeholder-line w-100"></div>
           <div class="placeholder-line w-70"></div>`;

    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= (e.importance || 0) ? 'filled' : ''}">★</span>`;
    }

    const importLabel = CONFIG.importanceLabels[e.importance] || '—';

    const readLink = e.original_url
        ? `<a href="${e.original_url}" target="_blank" 
              rel="noopener noreferrer" class="read-link">
               Read Full Editorial →
           </a>`
        : `<span class="read-link" style="opacity:0.4;cursor:not-allowed;">
               Link Pending
           </span>`;

    return `
    <article class="editorial-card"
             data-category="${e.category}"
             data-language="${e.paper.language}">

        <div class="card-header">
            <div class="paper-badge">
                <div class="paper-dot"
                     style="background:${e.paper.color};"></div>
                <span class="paper-name"
                      style="color:${e.paper.color};">
                    ${paperName}
                </span>
            </div>
            <div class="card-meta-right">
                <span class="category-tag ${cat.cssClass}">${cat.label}</span>
                <span class="card-date-stamp">📅 ${formatDateShort(e.date)}</span>
            </div>
        </div>

        <div class="card-body">
            <div class="editorial-title">
                ${e.headline_original || '—'}
            </div>
            ${translation}
            <div class="summary-box">
                <div class="summary-box-label">📋 Summary</div>
                ${summaryHTML}
            </div>
            <div class="key-points-box">
                <div class="key-points-label">🔑 Key Points for Exam</div>
                ${pointsHTML}
            </div>
        </div>

        <div class="card-footer">
            <div class="importance-wrap">
                <span class="importance-label">Exam Importance:</span>
                <div class="stars">${stars}</div>
                <span class="importance-text">(${importLabel})</span>
            </div>
            ${readLink}
        </div>

    </article>`;
}

/* ── Empty State ── */
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
                : 'Editorials for this day have not been added yet.<br>Browse the archive or come back later.'}
        </div>
    </div>`;
}

/* ── Newspaper Index ── */
function renderNewspaperIndex() {
    const edits    = getEditorialsForDate(STATE.activeDate);
    const countMap = {};
    edits.forEach(e => {
        countMap[e.paper.name_english] =
            (countMap[e.paper.name_english] || 0) + 1;
    });

    DOM.newspaperIndex.innerHTML =
        EDITORIAL_DATA.newspapers.map(np => {
            const count = countMap[np.name_english] || 0;
            const nameBlock = np.name_bangla
                ? `<div class="np-name">${np.name_bangla}</div>
                   <div class="np-lang">Bangla · ${np.name_english}</div>`
                : `<div class="np-name">${np.name_english}</div>
                   <div class="np-lang">English</div>`;
            return `
            <a class="newspaper-row"
               href="${np.editorial_url}"
               target="_blank" rel="noopener noreferrer">
                <div class="newspaper-info">
                    <div class="np-dot" style="background:${np.color};"></div>
                    <div>${nameBlock}</div>
                </div>
                <span class="np-count ${count ? '' : 'none'}">
                    ${count || '—'}
                </span>
            </a>`;
        }).join('');
}

/* ── Archive ── */
function renderArchive() {
    let html = '';
    for (let i = 0; i < CONFIG.archiveDays; i++) {
        const dateStr   = offsetDate(STATE.todayDate, -i);
        const count     = getEditorialsForDate(dateStr).length;
        const isActive  = dateStr === STATE.activeDate;
        const isToday   = i === 0;
        const weekday   = formatWeekday(dateStr);
        const dayLabel  = isToday ? `${weekday} — Today` : weekday;

        html += `
        <a class="archive-item ${isActive ? 'is-active' : ''}"
           data-date="${dateStr}" href="#">
            <div>
                <div class="archive-date-text">
                    ${formatDateShort(dateStr)}
                </div>
                <span class="archive-day-name">${dayLabel}</span>
            </div>
            <span class="archive-count-badge ${count ? '' : 'none'}">
                ${count || '—'}
            </span>
        </a>`;
    }

    DOM.archiveList.innerHTML = html;

    DOM.archiveList.querySelectorAll('.archive-item').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const date = item.dataset.date;
            if (date === STATE.activeDate) return;
            STATE.activeDate   = date;
            STATE.activeFilter = 'all';
            STATE.searchQuery  = '';
            resetFilters();
            renderAll();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

/* ══════════════════════════════════════════════════════════
   EVENT BINDING
══════════════════════════════════════════════════════════ */
function bindEvents() {

    /* Prev Day */
    DOM.btnPrev.addEventListener('click', () => {
        STATE.activeDate   = offsetDate(STATE.activeDate, -1);
        STATE.activeFilter = 'all';
        STATE.searchQuery  = '';
        resetFilters();
        renderAll();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* Next Day */
    DOM.btnNext.addEventListener('click', () => {
        if (STATE.activeDate >= STATE.todayDate) return;
        STATE.activeDate   = offsetDate(STATE.activeDate, 1);
        STATE.activeFilter = 'all';
        STATE.searchQuery  = '';
        resetFilters();
        renderAll();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* Filter Buttons */
    DOM.filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.filterBar.querySelectorAll('.filter-btn')
               .forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            STATE.activeFilter    = btn.dataset.filter;
            STATE.searchQuery     = '';
            DOM.searchInput.value = '';
            renderCards();
        });
    });

    /* Search */
    DOM.searchBtn.addEventListener('click', doSearch);
    DOM.searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') doSearch();
    });
    DOM.searchInput.addEventListener('input', () => {
        if (!DOM.searchInput.value) {
            STATE.searchQuery = '';
            renderCards();
        }
    });
}

function doSearch() {
    STATE.searchQuery  = DOM.searchInput.value;
    STATE.activeFilter = 'all';
    resetFilters();
    renderCards();
}

function resetFilters() {
    DOM.filterBar.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'all');
    });
}

/* ══════════════════════════════════════════════════════════
   START
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', init);


/* ══════════════════════════════════════════════════════════
   ✨ AI AUTO-FETCH ENGINE
   Uses Claude API + web_search to pull today's editorials
   automatically — no manual entry needed.
══════════════════════════════════════════════════════════ */

const AI_FETCH = (() => {
    let fetchedEditorials = [];

    /* ── Build paper checkboxes in modal ── */
    function buildPaperList() {
        const container = document.getElementById('ai-paper-checkboxes');
        container.innerHTML = '';
        EDITORIAL_DATA.newspapers.forEach(np => {
            const label = document.createElement('label');
            label.style.cssText =
                'display:flex;align-items:center;gap:8px;cursor:pointer;' +
                'background:#f4f6f8;border-radius:8px;padding:8px 12px;' +
                'font-size:0.85rem;font-weight:600;color:#1a3c5e;' +
                'border:2px solid transparent;transition:border 0.2s;';
            label.innerHTML = `
                <input type="checkbox" value="${np.id}" checked
                       style="accent-color:${np.color};width:16px;height:16px;cursor:pointer;">
                <span style="display:inline-block;width:10px;height:10px;
                             border-radius:50%;background:${np.color};flex-shrink:0;"></span>
                ${np.name_bangla ? np.name_bangla + ' · ' : ''}${np.name_english}
            `;
            const cb = label.querySelector('input');
            cb.addEventListener('change', () => {
                label.style.borderColor = cb.checked ? np.color : 'transparent';
            });
            label.style.borderColor = np.color;
            container.appendChild(label);
        });
    }

    /* ── Fetch one editorial via Claude API ── */
    async function fetchOneEditorial(np, date, idx) {
        const log  = document.getElementById('ai-progress-log');
        const bar  = document.getElementById('ai-progress-bar');
        const txt  = document.getElementById('ai-progress-text');
        const total = document.querySelectorAll('#ai-paper-checkboxes input:checked').length;

        log.innerHTML += `<div>🔍 Fetching <strong>${np.name_bangla || np.name_english}</strong>...</div>`;
        log.scrollTop = log.scrollHeight;

        const today = new Date(date);
        const dateStr = today.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

        const prompt = `You are an assistant for a Bangladeshi newspaper editorial hub. Today is ${dateStr}.

Search the web for the editorial(s) published TODAY (${date}) by "${np.name_english}" (${np.name_bangla || 'English paper'}) at: ${np.editorial_url}

Return ONLY a valid JSON object (no markdown, no extra text) with this exact structure:
{
  "headline_original": "exact headline text from today's editorial",
  "headline_translation": "English translation if Bangla paper, else empty string",
  "category": one of: "economy"|"politics"|"international"|"society"|"education"|"environment"|"security"|"health",
  "summary": "3-4 sentence plain-language summary of what the editorial argues and recommends",
  "key_points": ["fact/figure 1","law or org name","main problem identified","solution recommended","any key statistic"],
  "importance": number 1-5 based on exam relevance for BCS/Bank exams in Bangladesh,
  "original_url": "direct URL to the editorial if found, else use the base url"
}

If you cannot find today's editorial, still return the JSON with headline_original set to "Editorial not available yet" and importance: 0.`;

        try {
            const res = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1000,
                    tools: [{ type: 'web_search_20250305', name: 'web_search' }],
                    messages: [{ role: 'user', content: prompt }]
                })
            });

            const data = await res.json();
            const textBlocks = (data.content || []).filter(b => b.type === 'text');
            const raw = textBlocks.map(b => b.text).join('').trim();

            /* Strip markdown fences if present */
            const cleaned = raw.replace(/```json|```/gi, '').trim();
            const parsed  = JSON.parse(cleaned);

            /* Build editorial object */
            const editorial = {
                id:                   `ai-${np.id}-${date}`,
                date:                 date,
                paper: {
                    name_bangla:      np.name_bangla,
                    name_english:     np.name_english,
                    color:            np.color,
                    language:         np.language
                },
                category:             parsed.category             || 'society',
                headline_original:    parsed.headline_original    || '—',
                headline_translation: parsed.headline_translation || '',
                summary:              parsed.summary              || '',
                key_points:           parsed.key_points           || [],
                importance:           parsed.importance           || 3,
                original_url:         parsed.original_url         || np.editorial_url,
                _ai_fetched:          true
            };

            const pct = Math.round(((idx + 1) / total) * 100);
            bar.style.width = pct + '%';
            txt.textContent = `${idx + 1} / ${total} complete (${pct}%)`;
            log.innerHTML += `<div style="color:#27ae60;">✅ Done: ${editorial.headline_original.substring(0, 60)}${editorial.headline_original.length > 60 ? '…' : ''}</div>`;
            log.scrollTop = log.scrollHeight;

            return editorial;

        } catch (err) {
            log.innerHTML += `<div style="color:#e74c3c;">❌ Error for ${np.name_english}: ${err.message}</div>`;
            log.scrollTop = log.scrollHeight;
            return null;
        }
    }

    /* ── Render result cards ── */
    function renderResults(editorials) {
        const container = document.getElementById('ai-results-container');
        container.innerHTML = '';
        editorials.forEach((e, i) => {
            const card = document.createElement('div');
            card.style.cssText =
                'background:#f8f9fa;border-radius:10px;padding:14px 16px;' +
                'border-left:4px solid ' + e.paper.color + ';';
            const impLabel = CONFIG.importanceLabels[e.importance] || '—';
            card.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                    <strong style="color:${e.paper.color};font-size:0.88rem;">
                        ${e.paper.name_bangla ? e.paper.name_bangla + ' · ' : ''}${e.paper.name_english}
                    </strong>
                    <span style="font-size:0.75rem;background:#e8ecef;padding:2px 8px;border-radius:10px;color:#4a4a6a;">
                        ${e.category} · ★ ${e.importance} ${impLabel}
                    </span>
                </div>
                <div style="font-size:0.9rem;font-weight:700;color:#1a3c5e;margin-bottom:4px;">${e.headline_original}</div>
                ${e.headline_translation ? `<div style="font-size:0.8rem;color:#7f8c8d;margin-bottom:4px;font-style:italic;">${e.headline_translation}</div>` : ''}
                <div style="font-size:0.82rem;color:#4a4a6a;line-height:1.6;">${e.summary}</div>
                ${e.key_points.length ? `<ul style="margin:8px 0 0 16px;font-size:0.8rem;color:#34495e;line-height:1.8;">${e.key_points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
                <div style="margin-top:8px;">
                    <label style="font-size:0.78rem;color:#7f8c8d;display:flex;align-items:center;gap:6px;cursor:pointer;">
                        <input type="checkbox" data-idx="${i}" checked style="accent-color:#27ae60;"> Include in feed
                    </label>
                </div>
            `;
            container.appendChild(card);
        });
    }

    /* ── Inject into live feed ── */
    function injectToFeed() {
        const checkboxes = document.querySelectorAll('#ai-results-container input[type=checkbox]');
        const toAdd = [];
        checkboxes.forEach(cb => {
            if (cb.checked) toAdd.push(fetchedEditorials[parseInt(cb.dataset.idx)]);
        });

        if (!toAdd.length) { alert('No editorials selected.'); return; }

        /* Remove existing AI-fetched for today to avoid duplicates */
        EDITORIAL_DATA.editorials =
            EDITORIAL_DATA.editorials.filter(e => !(e._ai_fetched && e.date === STATE.todayDate));

        /* Add new ones */
        toAdd.forEach(e => EDITORIAL_DATA.editorials.unshift(e));

        renderAll();
        closeModal();
        alert(`✅ ${toAdd.length} editorial(s) added to today's feed!`);
    }

    /* ── Copy as JS code ── */
    function copyAsJS() {
        const checkboxes = document.querySelectorAll('#ai-results-container input[type=checkbox]');
        const toExport = [];
        checkboxes.forEach(cb => {
            if (cb.checked) toExport.push(fetchedEditorials[parseInt(cb.dataset.idx)]);
        });

        if (!toExport.length) { alert('No editorials selected.'); return; }

        let idCounter = EDITORIAL_DATA.editorials.length + 1;
        const blocks = toExport.map(e => {
            const id = String(idCounter++).padStart(3, '0');
            return `        {
            id:                   '${id}',
            date:                 '${e.date}',
            paper: {
                name_bangla:      '${e.paper.name_bangla}',
                name_english:     '${e.paper.name_english}',
                color:            '${e.paper.color}',
                language:         '${e.paper.language}'
            },
            category:             '${e.category}',
            headline_original:    '${e.headline_original.replace(/'/g,"\\'")}',
            headline_translation: '${(e.headline_translation||'').replace(/'/g,"\\'")}',
            summary:              '${(e.summary||'').replace(/'/g,"\\'")}',
            key_points: [
${(e.key_points||[]).map(p => `                '${p.replace(/'/g,"\\'")}'`).join(',\n')}
            ],
            importance:           ${e.importance},
            original_url:         '${e.original_url}'
        }`;
        });

        const code = blocks.join(',\n\n');
        navigator.clipboard.writeText(code).then(() => {
            alert('✅ JS code copied to clipboard!\n\nPaste it into the editorials array in app.js.');
        }).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = code;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            alert('✅ JS code copied to clipboard!');
        });
    }

    /* ── Modal open/close ── */
    function openModal() {
        fetchedEditorials = [];
        document.getElementById('ai-modal').style.display = 'flex';
        document.getElementById('ai-step-select').style.display = 'block';
        document.getElementById('ai-step-progress').style.display = 'none';
        document.getElementById('ai-step-results').style.display = 'none';
        buildPaperList();
    }

    function closeModal() {
        document.getElementById('ai-modal').style.display = 'none';
    }

    /* ── Main fetch orchestrator ── */
    async function startFetch() {
        const checked = [...document.querySelectorAll('#ai-paper-checkboxes input:checked')];
        if (!checked.length) { alert('Please select at least one newspaper.'); return; }

        const selectedIds = checked.map(cb => cb.value);
        const papers = EDITORIAL_DATA.newspapers.filter(np => selectedIds.includes(np.id));

        /* Switch to progress view */
        document.getElementById('ai-step-select').style.display   = 'none';
        document.getElementById('ai-step-progress').style.display = 'block';
        document.getElementById('ai-progress-log').innerHTML       = '';
        document.getElementById('ai-progress-bar').style.width     = '0%';
        document.getElementById('ai-progress-text').textContent    = 'Starting...';

        fetchedEditorials = [];
        const date = STATE.todayDate;

        for (let i = 0; i < papers.length; i++) {
            const result = await fetchOneEditorial(papers[i], date, i);
            if (result && result.importance > 0) fetchedEditorials.push(result);
        }

        /* Show results */
        document.getElementById('ai-step-progress').style.display = 'none';
        document.getElementById('ai-step-results').style.display  = 'block';
        renderResults(fetchedEditorials);
    }

    /* ── Bind all modal events ── */
    function bindModalEvents() {
        document.getElementById('btn-ai-fetch').addEventListener('click', openModal);
        document.getElementById('ai-modal-close').addEventListener('click', closeModal);
        document.getElementById('ai-modal').addEventListener('click', e => {
            if (e.target === document.getElementById('ai-modal')) closeModal();
        });
        document.getElementById('ai-select-all').addEventListener('click', () => {
            document.querySelectorAll('#ai-paper-checkboxes input').forEach(cb => {
                cb.checked = true;
                cb.closest('label').style.borderColor =
                    EDITORIAL_DATA.newspapers.find(np => np.id === cb.value)?.color || '#ccc';
            });
        });
        document.getElementById('ai-fetch-start').addEventListener('click', startFetch);
        document.getElementById('ai-inject-all').addEventListener('click', injectToFeed);
        document.getElementById('ai-copy-js').addEventListener('click', copyAsJS);
        document.getElementById('ai-modal-reset').addEventListener('click', openModal);
    }

    return { init: bindModalEvents };
})();

/* Bind AI modal after DOM ready */
document.addEventListener('DOMContentLoaded', () => AI_FETCH.init());

