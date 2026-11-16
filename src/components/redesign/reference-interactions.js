/* Animation choreography ported from the supplied HTML, scoped to one mounted surface. */
export function enhanceReference(surface) {
 const controller = new AbortController();
 const intervals = new Set(), timeouts = new Set(), frames = new Set(), observers = new Set();
 const document = {
  querySelector: s => surface.querySelector(s),
  querySelectorAll: s => surface.querySelectorAll(s),
  getElementById: id => surface.querySelector('#' + CSS.escape(id)),
  createElement: tag => window.document.createElement(tag),
 };
 const setInterval = (fn, ms) => { const id = window.setInterval(fn, ms); intervals.add(id); return id; };
 const clearInterval = id => { window.clearInterval(id); intervals.delete(id); };
 const setTimeout = (fn, ms) => { const id = window.setTimeout(() => { timeouts.delete(id); fn(); }, ms); timeouts.add(id); return id; };
 const requestAnimationFrame = fn => { const id = window.requestAnimationFrame(t => { frames.delete(id); fn(t); }); frames.add(id); return id; };
 const cancelAnimationFrame = id => { window.cancelAnimationFrame(id); frames.delete(id); };
 const IntersectionObserver = class extends window.IntersectionObserver { constructor(...args) { super(...args); observers.add(this); } };
 surface.querySelectorAll('.role-filters, .dir-filters').forEach(group => {
   const buttons = [...group.querySelectorAll('button')];
   buttons.forEach(button => {
     button.setAttribute('aria-pressed', button.classList.contains('active'));
     button.addEventListener('click', () => buttons.forEach(other => other.setAttribute('aria-pressed', other === button)), { signal: controller.signal });
   });
 });
 document.querySelectorAll('.role-filters button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.role-filters button').forEach(b => b.classList.remove('active')); button.classList.add('active'); document.querySelectorAll('.support-grid article').forEach(card => card.classList.toggle('hide', button.dataset.filter !== 'all' && card.dataset.type !== button.dataset.filter)); }, { signal: controller.signal }));
(() => { const root = document.getElementById('hiw'); if (!root)
    return; const S = [{ "phase": "GETTING STARTED", "title": "Tell us what you need", "items": ["Your role and tools", "Talk to a founder"] }, { "phase": "THE MATCH", "title": "Meet your specialist", "items": ["Hand-picked for you", "Free replacement"] }, { "phase": "WORKING TOGETHER", "title": "Watch your business run smoother", "items": ["Joins your team", "Scale up or down"] }]; const CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'; const cardImgs = document.querySelectorAll('.agent-photo img'); root.querySelectorAll('img[data-src-from]').forEach(i => { const c = cardImgs[+i.dataset.srcFrom]; if (c)
    i.src = c.src; }); const path = root.querySelector('.hiw-base'), mask = root.querySelector('.hiw-mask'), dot = root.querySelector('.hiw-dot'), L = path.getTotalLength(); const nodes = [...root.querySelectorAll('.hiw-node')], tabs = [...document.querySelectorAll('.hiw-steps button')]; const num = root.querySelector('.hiw-num'), title = root.querySelector('.hiw-title'), phase = root.querySelector('.hiw-phase'), list = root.querySelector('.hiw-list'), timer = root.querySelector('.hiw-timer i'), toggle = root.querySelector('.hiw-toggle'); const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, DUR = 3600, TRAVEL = 750; let cur = 0, v = 0, from = 0, to = 0, tEl = TRAVEL, el = 0, last = 0, raf = 0, visible = false, userPaused = reduce; const ease = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; function place() { mask.style.strokeDashoffset = 100 - v; const p = path.getPointAtLength(L * v / 100); dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y); dot.style.opacity = (tEl < TRAVEL && from !== to) ? 1 : 0; } function prog(x) { timer.style.transform = 'scaleX(' + x + ')'; tabs.forEach((t, k) => { t.querySelector('.hiw-prog i').style.transform = 'scaleX(' + (k === cur ? x : 0) + ')'; }); } function render(i) { root.dataset.step = i; nodes.forEach((n, k) => { n.classList.toggle('is-active', k === i); n.classList.toggle('is-done', k < i); }); tabs.forEach((t, k) => { t.classList.toggle('is-active', k === i); t.classList.toggle('is-done', k < i); t.setAttribute('aria-pressed', k === i); }); num.textContent = i + 1; title.textContent = S[i].title; phase.textContent = 'STEP 0' + (i + 1) + ' \u00b7 ' + S[i].phase; list.innerHTML = S[i].items.map((x, k) => '<li style="--d:' + k + '">' + CHECK + '<span>' + x + '</span></li>').join(''); root.classList.remove('swap'); void root.offsetWidth; root.classList.add('swap'); } function go(i) { from = v; to = i * 50; cur = i; tEl = reduce ? TRAVEL : 0; el = 0; render(i); prog(0); place(); } function frame(now) { const dt = last ? Math.min(now - last, 100) : 0; last = now; if (tEl < TRAVEL) {
    tEl += dt;
    v = from + (to - from) * ease(Math.min(tEl / TRAVEL, 1));
    place();
} if (!userPaused) {
    el += dt;
    prog(Math.min(el / DUR, 1));
    if (el >= DUR)
        go((cur + 1) % S.length);
} raf = requestAnimationFrame(frame); } function run() { cancelAnimationFrame(raf); last = 0; if (visible)
    raf = requestAnimationFrame(frame); } function setPaused(p) { userPaused = p; root.classList.toggle('is-paused', p); toggle.setAttribute('aria-label', p ? 'Play animation' : 'Pause animation'); } toggle.addEventListener('click', () => setPaused(!userPaused), { signal: controller.signal }); nodes.concat(tabs).forEach(b => b.addEventListener('click', () => { go(+b.dataset.step); }, { signal: controller.signal })); setPaused(userPaused); place(); if ('IntersectionObserver' in window) {
    new IntersectionObserver(e => { visible = e[0].isIntersecting; run(); }, { threshold: .25 }).observe(root);
}
else {
    visible = true;
    run();
} })();
(() => { const D = [{ "id": "roxana", "name": "Roxana Alvarado", "role": "Bookkeeping & Accounting Specialist", "code": "FIN", "years": 8, "english": "C1 \u00b7 Advanced", "industries": "Accounting firms \u00b7 Small business", "quote": "Clean books, no month-end surprises.", "pos": "center 22%", "tools": ["QuickBooks Online", "Xero", "Excel"], "skills": ["AP & AR", "Bank reconciliations", "Month-end close"] }, { "id": "daniel", "name": "Daniel Portillo", "role": "Customer Support Specialist", "code": "CX", "years": 4, "english": "C2 \u00b7 Proficient", "industries": "E-commerce \u00b7 Retail", "quote": "Every customer should feel heard on the first reply.", "pos": "center 18%", "tools": ["Zendesk", "Gorgias", "HubSpot"], "skills": ["Email & chat support", "Order issues", "Customer follow-ups"] }, { "id": "patricia", "name": "Patricia Guevara", "role": "Project Coordinator", "code": "OPS", "years": 12, "english": "C1 \u00b7 Advanced", "industries": "Construction \u00b7 Professional services", "quote": "If it has a deadline, it has a plan.", "pos": "center 18%", "tools": ["Asana", "Monday.com", "Google Workspace"], "skills": ["Task tracking", "Team follow-ups", "Weekly reporting"] }, { "id": "andrea", "name": "Andrea Molina", "role": "Marketing Support Specialist", "code": "MKT", "years": 5, "english": "C2 \u00b7 Proficient", "industries": "Real estate \u00b7 Home services", "quote": "Consistent content, every single week.", "pos": "center 14%", "tools": ["Canva", "Meta Ads", "HubSpot"], "skills": ["Social content", "Campaign coordination", "Email marketing"] }, { "id": "gabriela", "name": "Gabriela Rivas", "role": "Sales & Lead Generation Specialist", "code": "SAL", "years": 6, "english": "C1 \u00b7 Advanced", "industries": "B2B services \u00b7 Insurance", "quote": "A clean pipeline is a full pipeline.", "pos": "center 20%", "tools": ["Salesforce", "Apollo", "Sales Navigator"], "skills": ["Prospect research", "Outbound outreach", "CRM hygiene"] }, { "id": "carlos", "name": "Carlos Menj\u00edvar", "role": "Estimating & Bid Support", "code": "EST", "years": 6, "english": "C1 \u00b7 Advanced", "industries": "Roofing \u00b7 Construction", "quote": "Accurate takeoffs, faster bids.", "pos": "center 18%", "tools": ["Xactimate", "Bluebeam Revu", "PlanSwift"], "skills": ["Material takeoffs", "Bid preparation", "Cost comparisons"] }, { "id": "kevin", "name": "Kevin Orellana", "role": "Virtual Assistant", "code": "VA", "years": 4, "english": "C1 \u00b7 Advanced", "industries": "Professional services \u00b7 Real estate", "quote": "Your calendar, inbox and docs, handled.", "pos": "center 18%", "tools": ["Google Workspace", "Microsoft Office", "Calendly"], "skills": ["Calendar management", "Inbox triage", "Document prep"] }, { "id": "sofia", "name": "Sof\u00eda Mart\u00ednez", "role": "Property Manager", "code": "PM", "years": 5, "english": "C1 \u00b7 Advanced", "industries": "Property management", "quote": "Happy tenants, on-time owner reports.", "pos": "center 18%", "tools": ["ManageGo", "AppFolio", "Google Workspace"], "skills": ["Tenant support", "Leasing admin", "Work orders"] }]; document.querySelectorAll('img[data-from]').forEach(i => { const c = document.querySelector('#' + i.dataset.from + ' .ag-photo img'); if (c)
    i.src = c.src; }); const deck = document.getElementById('deck'); if (!deck)
    return; const flip = document.getElementById('flip'), btn = flip.querySelector('.flip-btn'), back = flip.querySelector('.flip-back'), front = flip.querySelector('.flip-front'); const thumbs = [...deck.querySelectorAll('.deck-thumb')]; const q = s => flip.querySelectorAll(s); let cur = 0, timer = null, touched = false; const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; function show(i) { cur = i; const a = D[i]; const img = flip.querySelector('.fc-img'); const src = document.querySelector('#agent-' + a.id + ' .ag-photo img'); flip.classList.add('swap'); setTimeout(() => { if (src) {
    img.removeAttribute('srcset');
    img.src = src.src;
} img.style.objectPosition = a.pos; img.alt = a.name; q('.fc-code').forEach(c => c.textContent = a.code); q('.fc-name,.fb-name').forEach(c => c.textContent = a.name); q('.fc-role,.fb-role').forEach(c => c.textContent = a.role); flip.querySelector('.fb-quote').textContent = '\u201c' + a.quote + '\u201d'; flip.querySelector('.fb-years').textContent = a.years + ' years'; flip.querySelector('.fb-eng').textContent = a.english; flip.querySelector('.fb-ind').textContent = a.industries; flip.querySelector('.fb-tools').textContent = a.tools.join(', '); flip.querySelector('.fb-link').href = '#agent-' + a.id; flip.classList.remove('swap'); }, reduce ? 0 : 220); thumbs.forEach((t, k) => { t.classList.toggle('is-active', k === i); t.setAttribute('aria-pressed', k === i); }); } function setFlip(on) { flip.classList.toggle('flipped', on); btn.setAttribute('aria-pressed', on); back.setAttribute('aria-hidden', !on); front.setAttribute('aria-hidden', on); back.inert = !on; front.inert = on; } function stop() { touched = true; clearInterval(timer); } thumbs.forEach((t, k) => t.addEventListener('click', () => { stop(); setFlip(false); show(k); }, { signal: controller.signal })); btn.addEventListener('click', () => { stop(); setFlip(!flip.classList.contains('flipped')); }, { signal: controller.signal }); flip.querySelector('.fb-link').addEventListener('click', e => { const t = document.querySelector(e.currentTarget.getAttribute('href')); if (t) {
    const filter = document.querySelector('.dir-filters button[data-filter="all"]');
    if(t.classList.contains('hide')) filter?.click();
    const more=t.querySelector('.ag-more'), toggle=t.querySelector('.ag-toggle');
    if(more){more.hidden=false;toggle?.setAttribute('aria-expanded','true');if(toggle)toggle.textContent='Show less';}
    t.classList.remove('pulse');
    void t.offsetWidth;
    t.classList.add('pulse');
} }, { signal: controller.signal }); if (!reduce) {
    timer = setInterval(() => { if (!touched && !deck.matches(':hover'))
        show((cur + 1) % D.length); }, 5000);
} const fb = [...document.querySelectorAll('.dir-filters button')], cards = [...document.querySelectorAll('.ag-card')]; fb.forEach(b => b.addEventListener('click', () => { fb.forEach(x => x.classList.toggle('active', x === b)); cards.forEach(c => c.classList.toggle('hide', b.dataset.filter !== 'all' && c.dataset.cat !== b.dataset.filter)); }, { signal: controller.signal })); })();
(() => {
    const root = document.querySelector('.cl');
    if (root) {
        const nodes = [...root.querySelectorAll('.cl-node')], panels = [...root.querySelectorAll('.cl-panel')], line = root.querySelector('.cl-line i');
        function show(i, focus) {
            nodes.forEach((n, k) => { n.classList.toggle('is-active', k === i); n.classList.toggle('is-done', k < i); n.setAttribute('aria-selected', k === i); n.tabIndex = k === i ? 0 : -1; });
            panels.forEach((p, k) => { p.hidden = k !== i; if (k === i) {
                p.classList.remove('in');
                void p.offsetWidth;
                p.classList.add('in');
            } });
            line.style.transform = 'scaleX(' + (i / (nodes.length - 1)) + ')';
            if (focus)
                nodes[i].focus();
        }
        nodes.forEach((n, k) => { n.addEventListener('click', () => show(k), { signal: controller.signal }); n.addEventListener('keydown', ev => { if (ev.key === 'ArrowRight')
            show((k + 1) % nodes.length, true); if (ev.key === 'ArrowLeft')
            show((k - 1 + nodes.length) % nodes.length, true); }, { signal: controller.signal }); });
        show(0);
    }
})();
(() => {
    document.querySelectorAll('.ag-toggle').forEach(b => b.addEventListener('click', () => { const m = document.getElementById(b.getAttribute('aria-controls')); const open = m.hidden; m.hidden = !open; b.setAttribute('aria-expanded', open); b.textContent = open ? 'Show less' : 'View full profile'; }, { signal: controller.signal }));
    const cards = [...document.querySelectorAll('.ag-card')];
    document.querySelectorAll('.dir-filters button').forEach(b => { const f = b.dataset.filter; const n = f === 'all' ? cards.length : cards.filter(c => c.dataset.cat === f).length; if (b.querySelector('.cnt'))
        return; const sp = document.createElement('span'); sp.className = 'cnt'; sp.textContent = '(' + n + ')'; b.appendChild(sp); });
    const fb = document.querySelector('.flip-btn');
    if (fb)
        fb.addEventListener('click', () => fb.classList.remove('hint'), { signal: controller.signal });
    const all = document.querySelector('.cl-all'), cl = document.querySelector('.cl');
    if (all && cl)
        all.addEventListener('click', () => { const on = !cl.classList.contains('all'); cl.classList.toggle('all', on); all.setAttribute('aria-expanded', on); all.textContent = on ? 'Show one role at a time' : 'See all 4 roles at once'; }, { signal: controller.signal });
})();

 return () => { controller.abort(); intervals.forEach(window.clearInterval); timeouts.forEach(window.clearTimeout); frames.forEach(window.cancelAnimationFrame); observers.forEach(o => o.disconnect()); };
}
