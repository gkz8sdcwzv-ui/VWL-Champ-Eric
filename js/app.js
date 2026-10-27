/* VWL Mikro Lern-App – Hauptlogik (Routing, Zustand, Ansichten). Kein Build, kein Server. */
(function () {
  'use strict';

  const EXAM = new Date(2026, 10, 27);
  const KEY = 'vwl-mikro-state-v1';
  const C = window.VWL = window.VWL || {};
  C.themen = C.themen || []; C.plan = C.plan || []; C.skripte = C.skripte || {}; C.lernziele = C.lernziele || {};
  C.formeln = C.formeln || []; C.karten = C.karten || []; C.aufgaben = C.aufgaben || []; C.quiz = C.quiz || [];

  const INTERVAL = { 1: 1, 2: 3, 3: 7 };
  const app = document.getElementById('app');

  // ---------- Zustand ----------
  function defaultState() {
    return { leitner: {}, aufgaben: {}, quiz: {}, lernziele: {}, plan: {}, leitnerThema: {}, created: new Date().toISOString() };
  }
  let S = load();
  function load() {
    try { return Object.assign(defaultState(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch (e) { return defaultState(); }
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(S)); }

  // ---------- Hilfen ----------
  const pad = n => String(n).padStart(2, '0');
  function dstr(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
  function today() { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }
  function todayStr() { return dstr(today()); }
  function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function parseD(s) { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }
  const WD = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  function fmtDate(s) { const d = parseD(s); return `${WD[d.getDay()]}, ${pad(d.getDate())}.${pad(d.getMonth() + 1)}.`; }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function themaName(id) { const t = C.themen.find(t => t.id === id); return t ? `Thema ${t.nr}` : id; }
  function themaTitel(id) { const t = C.themen.find(t => t.id === id); return t ? t.titel : id; }

  // Markdown + KaTeX: Mathe wird vor dem Markdown-Parser geschützt (Unterstriche!)
  function md(src) {
    if (!src) return '';
    const math = [];
    let s = String(src)
      .replace(/\$\$([\s\S]+?)\$\$/g, (m, x) => { math.push({ d: true, x }); return `@@M${math.length - 1}@@`; })
      .replace(/\$([^$\n]+?)\$/g, (m, x) => { math.push({ d: false, x }); return `@@M${math.length - 1}@@`; });
    let html = marked.parse(s);
    html = html.replace(/@@M(\d+)@@/g, (m, i) => {
      const o = math[+i];
      try { return katex.renderToString(o.x, { displayMode: o.d, throwOnError: false, strict: false }); }
      catch (e) { return esc(o.x); }
    });
    return html;
  }
  function tex(x, display) {
    try { return katex.renderToString(x, { displayMode: !!display, throwOnError: false, strict: false }); } catch (e) { return esc(x); }
  }

  // ---------- Leitner ----------
  function cardState(id) { return S.leitner[id] || { box: 0, due: todayStr() }; }
  function isDue(id) { return cardState(id).due <= todayStr(); }
  function rate(id, r) {
    const st = cardState(id);
    let box = st.box || 1;
    if (r === 'ok') box = Math.min(3, (st.box || 0) + 1);
    else if (r === 'unsicher') box = Math.max(1, st.box || 1);
    else box = 1;
    const due = r === 'ok' ? dstr(addDays(today(), INTERVAL[box])) : r === 'unsicher' ? dstr(addDays(today(), 1)) : todayStr();
    S.leitner[id] = { box, due, last: todayStr(), n: (st.n || 0) + 1 };
    save();
  }
  function readyThemen() { return C.themen.filter(t => t.status === 'ready'); }

  // ---------- Router ----------
  const views = {};
  let V = {}; // flüchtiger Zustand der aktuellen Ansicht
  function route() {
    const hash = location.hash.replace(/^#/, '') || 'heute';
    const [name, ...rest] = hash.split('/');
    const param = rest.join('/');
    document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.view === name));
    document.body.classList.remove('nav-open');
    if (V.view !== name || V.param !== param) V = { view: name, param };
    (views[name] || views.heute)(param);
    window.scrollTo(0, 0);
  }
  function render(html) {
    app.innerHTML = html;
    if (window.VWLGraphs) VWLGraphs.mountAll(app);
  }
  window.addEventListener('hashchange', route);

  // ---------- Fortschritt je Thema ----------
  function progress(tid) {
    const lz = C.lernziele[tid] || [];
    const lzDone = lz.filter((_, i) => S.lernziele[`${tid}:${i}`]).length;
    const aufg = C.aufgaben.filter(a => a.thema === tid);
    const aufgOk = aufg.filter(a => (S.aufgaben[a.id] || {}).r === 'ok').length;
    const aufgTeil = aufg.filter(a => (S.aufgaben[a.id] || {}).r === 'teil').length;
    const aufgNein = aufg.filter(a => (S.aufgaben[a.id] || {}).r === 'nein').length;
    const cards = [...C.formeln.filter(f => f.thema === tid), ...C.karten.filter(k => k.thema === tid)];
    const box3 = cards.filter(c => cardState(c.id).box === 3).length;
    const qs = C.quiz.filter(q => q.thema === tid);
    let qr = 0, qf = 0; qs.forEach(q => { const s = S.quiz[q.id]; if (s) { qr += s.r; qf += s.f; } });
    const parts = [];
    if (lz.length) parts.push(lzDone / lz.length);
    if (aufg.length) parts.push((aufgOk + 0.5 * aufgTeil) / aufg.length);
    if (cards.length) parts.push(box3 / cards.length);
    const total = parts.length ? parts.reduce((a, b) => a + b, 0) / parts.length : 0;
    return { lz: lz.length, lzDone, aufg: aufg.length, aufgOk, aufgTeil, aufgNein, cards: cards.length, box3, qr, qf, total };
  }

  // ---------- Ansicht: Heute ----------
  // ---------- Wochenplan-Hilfen ----------
  function zielKey(w, i) { return `w${w.woche}:${i}`; }
  function weekDone(w) { return w.ziele.filter((_, i) => S.plan[zielKey(w, i)]).length; }
  function currentWeek() {
    const ts = todayStr();
    return C.plan.find(w => w.von <= ts && ts <= w.bis) || C.plan.find(w => w.von > ts) || C.plan[C.plan.length - 1];
  }
  function weekChecklist(w) {
    return `<div class="checklist">${w.ziele.map((z, i) => {
      const k = zielKey(w, i), on = !!S.plan[k];
      return `<label><input type="checkbox" data-action="toggle-ziel" data-id="${k}" ${on ? 'checked' : ''}><span class="${on ? 'done' : ''}">${md(z).replace(/^<p>|<\/p>\s*$/g, '')}</span></label>`;
    }).join('')}</div>`;
  }
  function termineHtml(termine, onlyUpcoming) {
    const ts = todayStr();
    const list = (termine || []).filter(t => !onlyUpcoming || t.datum >= ts);
    if (!list.length) return '';
    return list.map(t => `<div class="termin ${t.datum === ts ? 'today' : t.datum < ts ? 'past' : ''}"><strong>${fmtDate(t.datum)} · ${esc(t.titel)}</strong><div class="small muted">${esc(t.hinweis || '')}</div></div>`).join('');
  }

  views.heute = function () {
    const days = Math.round((EXAM - today()) / 86400000);
    const ts = todayStr();
    const dueF = C.formeln.filter(f => readyThemen().some(t => t.id === f.thema) && isDue(f.id)).length;
    const dueK = C.karten.filter(k => readyThemen().some(t => t.id === k.thema) && isDue(k.id)).length;
    const w = currentWeek();

    let html = `<h1>Heute</h1>
      <div class="grid">
        <div class="card"><div class="muted small">Tage bis zur Klausur</div><div class="countdown">${days}</div><div class="small muted">Fr, 27.11.2026 · 120 Minuten</div></div>
        <div class="card"><div class="muted small">Fällige Wiederholung</div>
          <p><a href="#drill"><strong>${dueF}</strong> Formeln</a> · <a href="#karten"><strong>${dueK}</strong> Begriffskarten</a></p>
          <div class="small muted">Formeln müssen in der Klausur aus dem Kopf kommen – täglich 5–10 Minuten.</div></div>
      </div>`;

    if (w) {
      const done = weekDone(w), pct = Math.round(100 * done / w.ziele.length);
      const upcoming = C.plan.flatMap(x => x.termine || []).filter(t => t.datum >= ts).slice(0, 1);
      html += `<div class="card accent">
        <div class="muted small">${w.von <= ts && ts <= w.bis ? 'Diese Woche' : 'Nächste Woche'} · Woche ${w.woche} · ${fmtDate(w.von)} – ${fmtDate(w.bis)}</div>
        <h3 style="margin-top:0.2rem">${esc(w.thema)}</h3>
        <div class="progress ${pct >= 80 ? 'ok' : ''}"><div style="width:${pct}%"></div></div>
        <div class="small muted" style="margin-bottom:0.6rem">${done} von ${w.ziele.length} Zielen · Reihenfolge und Tempo bestimmst du selbst</div>
        ${weekChecklist(w)}
        <details style="margin-top:0.6rem"><summary class="small">Vorschlag für die Aufteilung</summary><div class="small">${md(w.vorschlag || '')}</div></details>
        ${upcoming.length ? `<div style="margin-top:0.8rem">${termineHtml(upcoming)}</div>` : ''}
        <div class="btnrow"><a class="btn" href="#plan">Ganzer Plan</a></div>
      </div>`;
    }

    html += `<h2>Ablauf einer 60-Minuten-Einheit</h2>
      <div class="card"><table style="width:100%;border-collapse:collapse">
        <tr><td style="width:90px"><strong>0–5</strong></td><td>Formel-Drill: alle fälligen Karten</td></tr>
        <tr><td><strong>5–20</strong></td><td>Skriptabschnitt lesen, die Grafik dazu einmal selbst zeichnen</td></tr>
        <tr><td><strong>20–50</strong></td><td>2–3 Aufgaben rechnen, erst danach Lösung aufklappen, ehrlich bewerten</td></tr>
        <tr><td><strong>50–60</strong></td><td>Ein Konzept des Tages im Tutor-Chat in eigenen Worten erklären, oder Quiz</td></tr>
      </table></div>`;

    html += `<h2>Themen</h2><div class="grid">`;
    for (const t of C.themen) {
      const pr = progress(t.id);
      const pct = Math.round(pr.total * 100);
      html += `<div class="card">
        <div class="meta"><span class="badge ${t.prio === 'A' ? 'bad' : t.prio === 'B' ? 'warn' : 'grey'}">Prio ${t.prio}</span> <span class="muted small">${t.folien} Folien</span></div>
        <h3 style="margin:0.3rem 0">Thema ${t.nr}: ${esc(t.titel)}</h3>
        ${t.status === 'ready'
          ? `<div class="progress ${pct >= 80 ? 'ok' : ''}"><div style="width:${pct}%"></div></div><div class="small muted">${pct} % · ${pr.aufgOk}/${pr.aufg} Aufgaben sicher · ${pr.box3}/${pr.cards} Karten im Langzeitfach</div>
             <div class="btnrow"><a class="btn sm" href="#skripte/${t.id}">Skript</a><a class="btn sm" href="#aufgaben/${t.id}">Aufgaben</a><a class="btn sm" href="#quiz/${t.id}">Quiz</a></div>`
          : `<div class="small muted">Material folgt laut Plan (${esc(t.wann || 'bald')}).</div>`}
      </div>`;
    }
    html += `</div>`;
    render(html);
  };

  // ---------- Ansicht: Skripte ----------
  views.skripte = function (tid) {
    if (!tid || !C.skripte[tid]) {
      let html = `<h1>Lernskripte</h1><p class="muted">Eigenständig formulierte Zusammenfassungen mit Herleitungen, Beispielen und typischen Fehlern. Folienverweise stehen in Klammern.</p><div class="grid">`;
      for (const t of C.themen) {
        html += `<div class="card"><h3 style="margin:0 0 0.3rem">Thema ${t.nr}: ${esc(t.titel)}</h3>
          ${C.skripte[t.id] ? `<a class="btn primary sm" href="#skripte/${t.id}">Öffnen</a>` : `<span class="muted small">folgt ${esc(t.wann || '')}</span>`}</div>`;
      }
      render(html + '</div>');
      return;
    }
    const t = C.themen.find(t => t.id === tid);
    const lz = C.lernziele[tid] || [];
    let html = `<div class="btnrow no-print"><a class="btn sm" href="#skripte">← Alle Skripte</a><button class="btn sm" data-action="print">Drucken / als PDF sichern</button><a class="btn sm" href="#aufgaben/${tid}">Zu den Aufgaben</a></div>
      <h1>Thema ${t.nr}: ${esc(t.titel)}</h1>`;
    if (lz.length) {
      html += `<div class="card"><strong>Lernziele – hake ab, was du ohne Hilfe kannst</strong><div class="checklist">`;
      lz.forEach((z, i) => {
        const k = `${tid}:${i}`, on = !!S.lernziele[k];
        html += `<label><input type="checkbox" data-action="toggle-lz" data-id="${k}" ${on ? 'checked' : ''}><span class="${on ? 'done' : ''}">${md(z).replace(/^<p>|<\/p>\s*$/g, '')}</span></label>`;
      });
      html += `</div></div>`;
    }
    html += `<article class="skript">${md(C.skripte[tid])}</article>`;
    render(html);
  };

  // ---------- Ansicht: Formel-Drill und Karten (Leitner) ----------
  function leitnerView(kind) {
    const items = kind === 'formel' ? C.formeln : C.karten;
    const title = kind === 'formel' ? 'Formel-Drill' : 'Begriffskarten';
    const ready = readyThemen().map(t => t.id);
    const allPool = items.filter(i => ready.includes(i.thema));
    let tf = S.leitnerThema[kind] || 'alle';
    if (tf !== 'alle' && !ready.includes(tf)) tf = 'alle';
    const pool = tf === 'alle' ? allPool : allPool.filter(i => i.thema === tf);
    if (!V.queue) {
      V.mode = V.mode || 'due';
      V.queue = shuffle(pool.filter(i => V.mode === 'all' || isDue(i.id))).map(i => i.id);
      V.done = 0; V.revealed = false;
    }
    const cur = pool.find(i => i.id === V.queue[0]);
    const boxes = [0, 1, 2, 3].map(b => pool.filter(i => cardState(i.id).box === b).length);

    let html = `<h1>${title}</h1>
      <p class="muted small">Fach 1 (neu/unsicher): täglich · Fach 2: alle 3 Tage · Fach 3 (sitzt): wöchentlich. Ehrliche Selbstbewertung ist der ganze Trick.</p>
      <div class="filterrow">
        <select data-action="leitner-thema" data-kind="${kind}"><option value="alle">Alle Themen</option>${readyThemen().map(t => `<option value="${t.id}" ${tf === t.id ? 'selected' : ''}>Thema ${t.nr}: ${esc(t.titel)}</option>`).join('')}</select>
        <span class="badge grey">Neu: ${boxes[0]}</span><span class="badge bad">Fach 1: ${boxes[1]}</span><span class="badge warn">Fach 2: ${boxes[2]}</span><span class="badge ok">Fach 3: ${boxes[3]}</span>
        <span style="flex:1"></span>
        <button class="btn sm ${V.mode === 'due' ? 'primary' : ''}" data-action="leitner-mode" data-mode="due">Nur fällige</button>
        <button class="btn sm ${V.mode === 'all' ? 'primary' : ''}" data-action="leitner-mode" data-mode="all">Alle durchgehen</button>
      </div>`;

    if (!cur) {
      html += `<div class="card"><h3>${V.done ? `Fertig – ${V.done} Karten bearbeitet.` : 'Nichts fällig.'}</h3>
        <p class="muted">${V.mode === 'due' ? 'Alle fälligen Karten sind erledigt. Du kannst trotzdem alle Karten ohne Fälligkeit durchgehen.' : 'Alle Karten durchgegangen.'}</p>
        <div class="btnrow"><button class="btn" data-action="leitner-mode" data-mode="all">Alle durchgehen</button><a class="btn" href="#heute">Zurück zu Heute</a></div></div>`;
      render(html); return;
    }
    const st = cardState(cur.id);
    const front = kind === 'formel'
      ? `<div class="side-label">Formel aufschreiben</div><div><strong>${esc(cur.name)}</strong></div>${cur.frage ? `<div class="muted small" style="margin-top:0.4rem">${md(cur.frage)}</div>` : ''}`
      : `<div class="side-label">Frage</div><div>${md(cur.vorne)}</div>`;
    const back = kind === 'formel'
      ? `${tex(cur.formel, true)}<div class="small">${md(cur.erklaerung || '')}</div>`
      : `<div>${md(cur.hinten)}</div>`;
    html += `<div class="muted small">Noch ${V.queue.length} in dieser Runde · ${themaName(cur.thema)} · Fach ${st.box || 'neu'}</div>
      <div class="flashcard" data-action="reveal">${front}${V.revealed ? `<div class="back">${back}</div>` : '<div class="muted small" style="margin-top:1rem">Klicken zum Aufdecken</div>'}</div>`;
    if (V.revealed) {
      html += `<div class="btnrow" style="justify-content:center">
        <button class="btn bad" data-action="rate" data-id="${cur.id}" data-r="nein">Nicht gewusst</button>
        <button class="btn warn" data-action="rate" data-id="${cur.id}" data-r="unsicher">Unsicher</button>
        <button class="btn ok" data-action="rate" data-id="${cur.id}" data-r="ok">Gewusst</button></div>`;
    }
    render(html);
  }
  views.drill = () => leitnerView('formel');
  views.karten = () => leitnerView('begriff');

  // ---------- Ansicht: Aufgaben ----------
  views.aufgaben = function (tid) {
    V.filterT = tid || V.filterT || 'alle';
    V.filterS = V.filterS || 'alle';
    V.filterStat = V.filterStat || 'alle';
    const ready = readyThemen().map(t => t.id);
    let list = C.aufgaben.filter(a => ready.includes(a.thema));
    if (V.filterT !== 'alle') list = list.filter(a => a.thema === V.filterT);
    if (V.filterS !== 'alle') list = list.filter(a => String(a.schwierigkeit) === V.filterS);
    if (V.filterStat !== 'alle') list = list.filter(a => ((S.aufgaben[a.id] || {}).r || 'offen') === V.filterStat);

    let html = `<h1>Übungsaufgaben</h1>
      <p class="muted small">Erst selbst rechnen – auf Papier, mit Taschenrechner, ohne Formelsammlung. Dann Lösung schrittweise aufklappen und ehrlich bewerten. Zum Drucken ohne Lösungen: alle Lösungen zugeklappt lassen.</p>
      <div class="filterrow">
        <select data-action="filter" data-key="filterT"><option value="alle">Alle Themen</option>${readyThemen().map(t => `<option value="${t.id}" ${V.filterT === t.id ? 'selected' : ''}>Thema ${t.nr}: ${esc(t.titel)}</option>`).join('')}</select>
        <select data-action="filter" data-key="filterS"><option value="alle">Alle Schwierigkeiten</option><option value="1" ${V.filterS === '1' ? 'selected' : ''}>● leicht</option><option value="2" ${V.filterS === '2' ? 'selected' : ''}>●● mittel</option><option value="3" ${V.filterS === '3' ? 'selected' : ''}>●●● schwer</option></select>
        <select data-action="filter" data-key="filterStat"><option value="alle">Alle Stati</option><option value="offen" ${V.filterStat === 'offen' ? 'selected' : ''}>offen</option><option value="ok" ${V.filterStat === 'ok' ? 'selected' : ''}>richtig</option><option value="teil" ${V.filterStat === 'teil' ? 'selected' : ''}>teilweise</option><option value="nein" ${V.filterStat === 'nein' ? 'selected' : ''}>falsch</option></select>
        <span class="muted small">${list.length} Aufgaben</span>
        <span style="flex:1"></span><button class="btn sm" data-action="print">Drucken</button>
      </div>`;
    for (const a of list) {
      const st = S.aufgaben[a.id] || {};
      const badge = st.r === 'ok' ? '<span class="badge ok">richtig</span>' : st.r === 'teil' ? '<span class="badge warn">teilweise</span>' : st.r === 'nein' ? '<span class="badge bad">falsch</span>' : '<span class="badge grey">offen</span>';
      html += `<div class="aufgabe" id="${a.id}">
        <div class="meta"><strong>${esc(a.id.toUpperCase())}</strong> · ${esc(a.titel)} <span class="badge">${themaName(a.thema)}</span> <span class="badge grey">${'●'.repeat(a.schwierigkeit)}${'○'.repeat(3 - a.schwierigkeit)}</span> <span class="badge grey">${a.punkte} P · ${a.zeit} Min</span> ${badge}${a.quelle ? ` <span class="muted small">${esc(a.quelle)}</span>` : ''}</div>
        <div class="text">${md(a.aufgabe)}</div>
        ${a.hinweis ? `<details><summary>Hinweis</summary><div>${md(a.hinweis)}</div></details>` : ''}
        ${a.ansatz ? `<details><summary>Ansatz</summary><div>${md(a.ansatz)}</div></details>` : ''}
        <details><summary>Vollständige Lösung</summary><div>${md(a.loesung)}</div></details>
        <div class="bewertung"><span class="small muted">Selbstbewertung:</span>
          <button class="btn sm ${st.r === 'ok' ? 'ok' : ''}" data-action="rate-aufgabe" data-id="${a.id}" data-r="ok">Richtig</button>
          <button class="btn sm ${st.r === 'teil' ? 'warn' : ''}" data-action="rate-aufgabe" data-id="${a.id}" data-r="teil">Teilweise</button>
          <button class="btn sm ${st.r === 'nein' ? 'bad' : ''}" data-action="rate-aufgabe" data-id="${a.id}" data-r="nein">Falsch</button>
          ${st.ts ? `<span class="small muted">zuletzt ${fmtDate(st.ts)}</span>` : ''}</div>
      </div>`;
    }
    if (!list.length) html += `<div class="card muted">Keine Aufgaben mit diesem Filter.</div>`;
    render(html);
  };

  // ---------- Ansicht: Quiz ----------
  views.quiz = function (tid) {
    const ready = readyThemen().map(t => t.id);
    if (!V.qs) {
      V.tid = tid || V.tid || 'alle';
      const pool = C.quiz.filter(q => ready.includes(q.thema) && (V.tid === 'alle' || q.thema === V.tid));
      V.qs = shuffle(pool); V.i = 0; V.score = 0; V.answered = null;
    }
    const q = V.qs[V.i];
    let html = `<h1>Quiz</h1>
      <div class="filterrow"><select data-action="quiz-thema"><option value="alle">Alle Themen</option>${readyThemen().map(t => `<option value="${t.id}" ${V.tid === t.id ? 'selected' : ''}>Thema ${t.nr}: ${esc(t.titel)}</option>`).join('')}</select>
      <span class="muted small">Frage ${Math.min(V.i + 1, V.qs.length)} von ${V.qs.length} · ${V.score} richtig</span></div>`;
    if (!q) {
      const pct = V.qs.length ? Math.round(100 * V.score / V.qs.length) : 0;
      html += `<div class="card"><h3>Ergebnis: ${V.score} von ${V.qs.length} (${pct} %)</h3>
        <p class="muted">${pct >= 90 ? 'Sehr gut – das sitzt.' : pct >= 70 ? 'Ordentlich. Die falschen Fragen noch einmal im Skript nachlesen.' : 'Noch unsicher. Lies den zugehörigen Skriptabschnitt und wiederhole morgen.'}</p>
        <div class="btnrow"><button class="btn primary" data-action="quiz-restart">Noch einmal</button><a class="btn" href="#heute">Zurück</a></div></div>`;
      render(html); return;
    }
    html += `<div class="card"><div class="muted small">${themaName(q.thema)}</div><h3 style="margin-top:0.3rem">${md(q.frage)}</h3>`;
    q.optionen.forEach((o, i) => {
      let cls = '';
      if (V.answered !== null) { if (i === q.richtig) cls = 'correct'; else if (i === V.answered) cls = 'wrong'; }
      html += `<button class="quiz-option ${cls}" data-action="quiz-answer" data-i="${i}" ${V.answered !== null ? 'disabled' : ''}>${md(o).replace(/^<p>|<\/p>\s*$/g, '')}</button>`;
    });
    if (V.answered !== null) {
      html += `<div class="card ${V.answered === q.richtig ? 'ok' : ''}" style="margin-top:0.8rem"><strong>${V.answered === q.richtig ? 'Richtig.' : 'Leider falsch.'}</strong> ${md(q.erklaerung)}</div>
        <div class="btnrow"><button class="btn primary" data-action="quiz-next">Weiter</button></div>`;
    }
    html += `</div>`;
    render(html);
  };

  // ---------- Ansicht: Plan ----------
  views.plan = function () {
    const ts = todayStr();
    let html = `<h1>Lernplan bis zur Klausur</h1><p class="muted small">Pro Woche eine Liste von Zielen – du entscheidest selbst, was du wann machst. Richtwert: rund 1 Stunde an Werktagen, 2 Stunden am Wochenende. Nur die Probeklausuren und die Klausur haben feste Termine.</p>`;
    for (const w of C.plan) {
      const cls = w.von <= ts && ts <= w.bis ? 'current' : w.bis < ts ? 'past' : '';
      const done = weekDone(w), pct = Math.round(100 * done / w.ziele.length);
      html += `<div class="card plan-week ${cls}">
        <div class="muted small">Woche ${w.woche} · ${fmtDate(w.von)} – ${fmtDate(w.bis)}${cls === 'current' ? ' · <strong>aktuell</strong>' : ''}</div>
        <h3 style="margin:0.2rem 0 0.4rem">${esc(w.thema)}</h3>
        <div class="progress ${pct >= 80 ? 'ok' : ''}"><div style="width:${pct}%"></div></div>
        <div class="small muted" style="margin-bottom:0.5rem">${done} von ${w.ziele.length} Zielen</div>
        ${weekChecklist(w)}
        <p class="small" style="margin:0.6rem 0 0"><strong>Meilenstein:</strong> ${esc(w.meilenstein || '')}</p>
        ${w.vorschlag ? `<details style="margin-top:0.4rem"><summary class="small">Vorschlag für die Aufteilung</summary><div class="small">${md(w.vorschlag)}</div></details>` : ''}
        ${termineHtml(w.termine)}
      </div>`;
    }
    render(html);
  };

  // ---------- Ansicht: Fortschritt ----------
  views.fortschritt = function () {
    let html = `<h1>Fortschritt</h1>`;
    for (const t of readyThemen()) {
      const pr = progress(t.id);
      html += `<div class="card"><h3 style="margin-top:0">Thema ${t.nr}: ${esc(t.titel)} – ${Math.round(pr.total * 100)} %</h3>
        <div class="progress"><div style="width:${Math.round(pr.total * 100)}%"></div></div>
        <table style="margin-top:0.6rem;font-size:0.92rem">
          <tr><td>Lernziele abgehakt</td><td><strong>${pr.lzDone}</strong> / ${pr.lz}</td></tr>
          <tr><td>Aufgaben</td><td><span class="badge ok">${pr.aufgOk} richtig</span> <span class="badge warn">${pr.aufgTeil} teilweise</span> <span class="badge bad">${pr.aufgNein} falsch</span> <span class="badge grey">${pr.aufg - pr.aufgOk - pr.aufgTeil - pr.aufgNein} offen</span></td></tr>
          <tr><td>Karten im Langzeitfach</td><td><strong>${pr.box3}</strong> / ${pr.cards}</td></tr>
          <tr><td>Quiz</td><td>${pr.qr + pr.qf ? `${pr.qr} richtig, ${pr.qf} falsch (${Math.round(100 * pr.qr / (pr.qr + pr.qf))} %)` : 'noch nicht gespielt'}</td></tr>
        </table></div>`;
    }
    const weak = C.aufgaben.filter(a => ['nein', 'teil'].includes((S.aufgaben[a.id] || {}).r));
    if (weak.length) {
      html += `<div class="card"><h3 style="margin-top:0">Schwachstellen – diese Aufgaben noch einmal</h3><ul>${weak.map(a => `<li><a href="#aufgaben/${a.thema}">${esc(a.id.toUpperCase())} ${esc(a.titel)}</a> <span class="badge ${S.aufgaben[a.id].r === 'nein' ? 'bad' : 'warn'}">${S.aufgaben[a.id].r === 'nein' ? 'falsch' : 'teilweise'}</span></li>`).join('')}</ul></div>`;
    }
    html += `<div class="card"><h3 style="margin-top:0">Stand sichern oder in den Tutor-Chat einfügen</h3>
      <p class="small muted">Der Fortschritt liegt nur in diesem Browser. Exportiere ihn regelmäßig – und füge den Text im Tutor-Chat ein, damit der Tutor weiß, wo du stehst.</p>
      <div class="btnrow"><button class="btn primary" data-action="export">Stand als Text anzeigen</button><button class="btn" data-action="download">Als Datei herunterladen</button><button class="btn bad" data-action="reset">Alles zurücksetzen</button></div>
      <textarea id="io" placeholder="Hier erscheint der Export – oder füge einen gespeicherten Stand ein und klicke „Importieren“."></textarea>
      <div class="btnrow"><button class="btn" data-action="import">Importieren</button></div></div>`;
    render(html);
  };

  // ---------- Export ----------
  function exportText() {
    const lines = [`VWL-Mikro Lernstand vom ${todayStr()}`];
    for (const t of readyThemen()) {
      const pr = progress(t.id);
      lines.push(`Thema ${t.nr} ${t.titel}: ${Math.round(pr.total * 100)} % | Lernziele ${pr.lzDone}/${pr.lz} | Aufgaben richtig ${pr.aufgOk}, teilweise ${pr.aufgTeil}, falsch ${pr.aufgNein} von ${pr.aufg} | Karten Langzeitfach ${pr.box3}/${pr.cards} | Quiz ${pr.qr}/${pr.qr + pr.qf}`);
    }
    const weak = C.aufgaben.filter(a => ['nein', 'teil'].includes((S.aufgaben[a.id] || {}).r));
    if (weak.length) lines.push('Schwachstellen: ' + weak.map(a => `${a.id.toUpperCase()} (${S.aufgaben[a.id].r})`).join(', '));
    const weakCards = [...C.formeln, ...C.karten].filter(c => cardState(c.id).box === 1 && cardState(c.id).n >= 2);
    if (weakCards.length) lines.push('Karten, die nicht sitzen: ' + weakCards.map(c => c.name || c.vorne.slice(0, 40)).join('; '));
    lines.push('', '--- Rohdaten (zum Import) ---', JSON.stringify(S));
    return lines.join('\n');
  }

  // ---------- Aktionen ----------
  app.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const act = el.dataset.action;
    if (act === 'print') { window.print(); }
    else if (act === 'reveal') { V.revealed = true; route(); }
    else if (act === 'rate') {
      rate(el.dataset.id, el.dataset.r);
      const id = V.queue.shift(); V.done++;
      if (el.dataset.r === 'nein') V.queue.push(id);
      V.revealed = false; route();
    }
    else if (act === 'leitner-mode') { V.mode = el.dataset.mode; V.queue = null; route(); }
    else if (act === 'rate-aufgabe') { S.aufgaben[el.dataset.id] = { r: el.dataset.r, ts: todayStr() }; save(); route(); }
    else if (act === 'quiz-answer') {
      const q = V.qs[V.i]; V.answered = +el.dataset.i;
      const st = S.quiz[q.id] || { r: 0, f: 0 };
      if (V.answered === q.richtig) { V.score++; st.r++; } else st.f++;
      S.quiz[q.id] = st; save(); route();
    }
    else if (act === 'quiz-next') { V.i++; V.answered = null; route(); }
    else if (act === 'quiz-restart') { V.qs = null; route(); }
    else if (act === 'export') { document.getElementById('io').value = exportText(); }
    else if (act === 'download') {
      const blob = new Blob([exportText()], { type: 'text/plain' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `vwl-lernstand-${todayStr()}.txt`; a.click();
    }
    else if (act === 'import') {
      const txt = document.getElementById('io').value;
      const m = txt.match(/\{[\s\S]*\}\s*$/);
      try { S = Object.assign(defaultState(), JSON.parse(m ? m[0] : txt)); save(); alert('Stand importiert.'); route(); }
      catch (err) { alert('Konnte den Text nicht lesen. Bitte den kompletten Export einfügen.'); }
    }
    else if (act === 'reset') { if (confirm('Wirklich den gesamten Lernfortschritt löschen?')) { S = defaultState(); save(); route(); } }
  });
  app.addEventListener('change', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    if (el.dataset.action === 'toggle-lz') { S.lernziele[el.dataset.id] = el.checked; save(); route(); }
    else if (el.dataset.action === 'toggle-ziel') { S.plan[el.dataset.id] = el.checked; save(); route(); }
    else if (el.dataset.action === 'filter') { V[el.dataset.key] = el.value; route(); }
    else if (el.dataset.action === 'leitner-thema') { S.leitnerThema[el.dataset.kind] = el.value; save(); V.queue = null; route(); }
    else if (el.dataset.action === 'quiz-thema') { V.tid = el.value; V.qs = null; route(); }
  });

  route();
})();
