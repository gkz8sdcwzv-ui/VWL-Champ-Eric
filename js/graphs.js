/* Interaktive SVG-Grafiken. Einbindung im Skript über <div data-graph="NAME"></div>. */
(function () {
  const W = 520, H = 400, M = { l: 50, r: 20, t: 20, b: 44 };
  const PW = W - M.l - M.r, PH = H - M.t - M.b;

  function fmt(x, d = 2) {
    if (!isFinite(x)) return '–';
    return (Math.round(x * 10 ** d) / 10 ** d).toLocaleString('de-DE');
  }

  function scaler(maxX, maxY) {
    return {
      x: v => M.l + (v / maxX) * PW,
      y: v => M.t + PH - (v / maxY) * PH,
      maxX, maxY
    };
  }

  function axes(sc, labelX, labelY) {
    const ticks = (max) => {
      const step = niceStep(max);
      const out = [];
      for (let v = 0; v <= max + 1e-9; v += step) out.push(v);
      return out;
    };
    let s = `<line x1="${M.l}" y1="${M.t + PH}" x2="${M.l + PW}" y2="${M.t + PH}" stroke="#333" stroke-width="1.2"/>`;
    s += `<line x1="${M.l}" y1="${M.t}" x2="${M.l}" y2="${M.t + PH}" stroke="#333" stroke-width="1.2"/>`;
    for (const v of ticks(sc.maxX)) {
      if (v === 0) continue;
      s += `<line x1="${sc.x(v)}" y1="${M.t + PH}" x2="${sc.x(v)}" y2="${M.t + PH + 4}" stroke="#333"/>`;
      s += `<text x="${sc.x(v)}" y="${M.t + PH + 16}" font-size="10" text-anchor="middle" fill="#555">${fmt(v, 0)}</text>`;
    }
    for (const v of ticks(sc.maxY)) {
      if (v === 0) continue;
      s += `<line x1="${M.l - 4}" y1="${sc.y(v)}" x2="${M.l}" y2="${sc.y(v)}" stroke="#333"/>`;
      s += `<text x="${M.l - 7}" y="${sc.y(v) + 3}" font-size="10" text-anchor="end" fill="#555">${fmt(v, 0)}</text>`;
    }
    s += `<text x="${M.l + PW}" y="${M.t + PH + 34}" font-size="12" text-anchor="end" fill="#333">${labelX}</text>`;
    s += `<text x="${M.l + 6}" y="${M.t + 10}" font-size="12" fill="#333">${labelY}</text>`;
    return s;
  }

  function niceStep(max) {
    const raw = max / 6;
    const pow = 10 ** Math.floor(Math.log10(raw));
    const n = raw / pow;
    const step = n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10;
    return step * pow;
  }

  function line(sc, x1, y1, x2, y2, color, dash, width = 2) {
    return `<line x1="${sc.x(x1)}" y1="${sc.y(y1)}" x2="${sc.x(x2)}" y2="${sc.y(y2)}" stroke="${color}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
  }

  function curve(sc, fn, color, width = 2, dash) {
    const pts = [];
    const n = 300;
    for (let i = 1; i <= n; i++) {
      const x = (sc.maxX * i) / n;
      const y = fn(x);
      if (!isFinite(y) || y < 0 || y > sc.maxY) continue;
      pts.push(`${sc.x(x).toFixed(1)},${sc.y(y).toFixed(1)}`);
    }
    if (pts.length < 2) return '';
    return `<polyline points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
  }

  function dot(sc, x, y, color, label) {
    return `<circle cx="${sc.x(x)}" cy="${sc.y(y)}" r="5" fill="${color}"/>` +
      (label ? `<text x="${sc.x(x) + 8}" y="${sc.y(y) - 8}" font-size="12" font-weight="600" fill="${color}">${label}</text>` : '');
  }

  function slider(id, label, min, max, step, val) {
    return `<label>${label}: <strong data-out="${id}">${fmt(val)}</strong>
      <input type="range" data-param="${id}" min="${min}" max="${max}" step="${step}" value="${val}"></label>`;
  }

  // ---------- Grafik 1: Budgetgerade und ihre Veränderung ----------
  function budgetGraph(el) {
    const base = { m: 120, p1: 4, p2: 2 };
    const p = { ...base };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('m', 'Einkommen m', 40, 240, 10, p.m)}
        ${slider('p1', 'Preis p₁', 1, 10, 0.5, p.p1)}
        ${slider('p2', 'Preis p₂', 1, 10, 0.5, p.p2)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const maxX = Math.max(base.m / base.p1, p.m / p.p1) * 1.15;
      const maxY = Math.max(base.m / base.p2, p.m / p.p2) * 1.15;
      const sc = scaler(maxX, maxY);
      let s = axes(sc, 'x₁', 'x₂');
      s += line(sc, 0, base.m / base.p2, base.m / base.p1, 0, '#9aa3b2', '6 5');
      s += line(sc, 0, p.m / p.p2, p.m / p.p1, 0, '#1f5fbf');
      s += dot(sc, 0, p.m / p.p2, '#1f5fbf', 'm/p₂');
      s += dot(sc, p.m / p.p1, 0, '#1f5fbf', 'm/p₁');
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Grau gestrichelt: Ausgangslage (m = 120, p₁ = 4, p₂ = 2). Blau: aktuelle Budgetgerade.<br>` +
        `Gleichung: x₂ = ${fmt(p.m / p.p2)} − ${fmt(p.p1 / p.p2)} · x₁ &nbsp;|&nbsp; Achsenabschnitte: m/p₁ = ${fmt(p.m / p.p1)}, m/p₂ = ${fmt(p.m / p.p2)} &nbsp;|&nbsp; Steigung −p₁/p₂ = ${fmt(-p.p1 / p.p2)}`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 2: Cobb-Douglas-Optimum ----------
  function optimumGraph(el) {
    const p = { m: 120, p1: 4, p2: 2, a: 0.5 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('m', 'Einkommen m', 40, 240, 10, p.m)}
        ${slider('p1', 'Preis p₁', 1, 10, 0.5, p.p1)}
        ${slider('p2', 'Preis p₂', 1, 10, 0.5, p.p2)}
        ${slider('a', 'Exponent a (u = x₁ᵃ · x₂¹⁻ᵃ)', 0.1, 0.9, 0.05, p.a)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const x1 = p.a * p.m / p.p1, x2 = (1 - p.a) * p.m / p.p2;
      const u = Math.pow(x1, p.a) * Math.pow(x2, 1 - p.a);
      const ic = (uu) => (x) => Math.pow(uu / Math.pow(x, p.a), 1 / (1 - p.a));
      const sc = scaler(p.m / p.p1 * 1.3, p.m / p.p2 * 1.3);
      let s = axes(sc, 'x₁', 'x₂');
      s += curve(sc, ic(u * 0.75), '#c9ced8', 1.5);
      s += curve(sc, ic(u * 1.25), '#c9ced8', 1.5);
      s += curve(sc, ic(u), '#1f8a4c', 2.2);
      s += line(sc, 0, p.m / p.p2, p.m / p.p1, 0, '#1f5fbf');
      s += line(sc, x1, 0, x1, x2, '#999', '3 4', 1);
      s += line(sc, 0, x2, x1, x2, '#999', '3 4', 1);
      s += dot(sc, x1, x2, '#b23a3a', `(${fmt(x1, 1)} | ${fmt(x2, 1)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      const mrs = -(p.a / (1 - p.a)) * (x2 / x1);
      el.querySelector('.readout').innerHTML =
        `Optimum: x₁* = a·m/p₁ = ${fmt(x1)}, &nbsp; x₂* = (1−a)·m/p₂ = ${fmt(x2)} &nbsp;|&nbsp; Nutzen u* = ${fmt(u)}<br>` +
        `Tangentialbedingung: MRS = −(a/(1−a))·(x₂/x₁) = ${fmt(mrs)} &nbsp;=&nbsp; −p₁/p₂ = ${fmt(-p.p1 / p.p2)} ✓ &nbsp;|&nbsp; ` +
        `Ausgaben: p₁x₁ = ${fmt(p.p1 * x1)} (Anteil ${fmt(p.a * 100, 0)} %), p₂x₂ = ${fmt(p.p2 * x2)} (Anteil ${fmt((1 - p.a) * 100, 0)} %)`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 3: Perfekte Substitute – Randlösung ----------
  function substituteGraph(el) {
    const p = { m: 60, p1: 3, p2: 1, a: 2, b: 1 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('p1', 'Preis p₁', 0.5, 6, 0.25, p.p1)}
        ${slider('p2', 'Preis p₂', 0.5, 6, 0.25, p.p2)}
        ${slider('a', 'a in u = a·x₁ + b·x₂', 0.5, 4, 0.5, p.a)}
        ${slider('b', 'b in u = a·x₁ + b·x₂', 0.5, 4, 0.5, p.b)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const perEuro1 = p.a / p.p1, perEuro2 = p.b / p.p2;
      let x1, x2, txt;
      if (Math.abs(perEuro1 - perEuro2) < 1e-9) { x1 = p.m / p.p1 / 2; x2 = p.m / p.p2 / 2; txt = 'Jeder Punkt auf der Budgetgeraden ist optimal (gleiche Steigung).'; }
      else if (perEuro1 > perEuro2) { x1 = p.m / p.p1; x2 = 0; txt = 'Gut 1 bringt mehr Nutzen pro Euro → Randlösung: nur Gut 1.'; }
      else { x1 = 0; x2 = p.m / p.p2; txt = 'Gut 2 bringt mehr Nutzen pro Euro → Randlösung: nur Gut 2.'; }
      const u = p.a * x1 + p.b * x2;
      const sc = scaler(p.m / p.p1 * 1.3, p.m / p.p2 * 1.3);
      let s = axes(sc, 'x₁', 'x₂');
      for (const uu of [u * 0.6, u, u * 1.3]) {
        const col = uu === u ? '#1f8a4c' : '#c9ced8';
        s += line(sc, 0, uu / p.b, uu / p.a, 0, col, null, uu === u ? 2.2 : 1.5);
      }
      s += line(sc, 0, p.m / p.p2, p.m / p.p1, 0, '#1f5fbf');
      s += dot(sc, x1, x2, '#b23a3a', `(${fmt(x1, 1)} | ${fmt(x2, 1)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Steigung Indifferenzkurve (MRS) = −a/b = ${fmt(-p.a / p.b)} &nbsp;|&nbsp; Steigung Budgetgerade = −p₁/p₂ = ${fmt(-p.p1 / p.p2)}<br>` +
        `Nutzen pro Euro: Gut 1 = a/p₁ = ${fmt(perEuro1)}, Gut 2 = b/p₂ = ${fmt(perEuro2)} → ${txt}`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 4: Perfekte Komplemente ----------
  function complementGraph(el) {
    const p = { m: 160, p1: 2, p2: 4, a: 1, b: 2 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('m', 'Einkommen m', 40, 240, 10, p.m)}
        ${slider('p1', 'Preis p₁', 1, 8, 0.5, p.p1)}
        ${slider('p2', 'Preis p₂', 1, 8, 0.5, p.p2)}
        ${slider('b', 'b in u = min{x₁, b·x₂}', 0.5, 3, 0.5, p.b)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      // Knick: x1 = b x2  → x2 = x1/b; Budget: p1 x1 + p2 x1/b = m
      const x1 = p.m / (p.p1 + p.p2 / p.b), x2 = x1 / p.b;
      const u = Math.min(x1, p.b * x2);
      const sc = scaler(p.m / p.p1 * 1.3, p.m / p.p2 * 1.3);
      let s = axes(sc, 'x₁', 'x₂');
      for (const uu of [u * 0.6, u, u * 1.3]) {
        const col = uu === u ? '#1f8a4c' : '#c9ced8', w = uu === u ? 2.2 : 1.5;
        const kx = uu, ky = uu / p.b;
        s += line(sc, kx, ky, kx, sc.maxY, col, null, w);
        s += line(sc, kx, ky, sc.maxX, ky, col, null, w);
      }
      s += curve(sc, x => x / p.b, '#999', 1, '3 4');
      s += line(sc, 0, p.m / p.p2, p.m / p.p1, 0, '#1f5fbf');
      s += dot(sc, x1, x2, '#b23a3a', `(${fmt(x1, 1)} | ${fmt(x2, 1)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Optimum liegt immer im Knick: x₁ = b·x₂ (gestrichelte Linie). Einsetzen in die Budgetgerade: p₁x₁ + p₂·(x₁/b) = m → x₁* = ${fmt(x1)}, x₂* = ${fmt(x2)}, u* = ${fmt(u)}`;
    };
    bind(el, p, draw);
    draw();
  }

  function bind(el, p, draw) {
    el.querySelectorAll('input[data-param]').forEach(inp => {
      inp.addEventListener('input', () => {
        p[inp.dataset.param] = parseFloat(inp.value);
        const out = el.querySelector(`[data-out="${inp.dataset.param}"]`);
        if (out) out.textContent = fmt(p[inp.dataset.param]);
        draw();
      });
    });
  }

  // ---------- Grafik 5 (Thema 2): Angebot, Nachfrage, Gleichgewicht ----------
  function marktGraph(el) {
    const p = { a: 120, b: 2, c: -30, d: 3, fix: 0 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('a', 'Nachfrage: Achsenabschnitt a (Q_D = a − b·p)', 60, 200, 10, p.a)}
        ${slider('b', 'Nachfrage: Steigung b', 0.5, 5, 0.5, p.b)}
        ${slider('c', 'Angebot: Achsenabschnitt c (Q_S = c + d·p)', -60, 60, 10, p.c)}
        ${slider('d', 'Angebot: Steigung d', 0.5, 6, 0.5, p.d)}
        ${slider('fix', 'Kurzfristig fixes Angebot (0 = aus)', 0, 150, 10, p.fix)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const short = p.fix > 0;
      const pStar = short ? (p.a - p.fix) / p.b : (p.a - p.c) / (p.b + p.d);
      const qStar = short ? p.fix : p.a - p.b * pStar;
      const maxQ = Math.max(p.a, qStar, p.fix) * 1.15, maxP = Math.max(p.a / p.b, pStar) * 1.15;
      const sc = scaler(maxQ, maxP);
      let s = axes(sc, 'Menge Q', 'Preis p');
      s += line(sc, 0, p.a / p.b, p.a, 0, '#1f5fbf');
      if (short) s += line(sc, p.fix, 0, p.fix, maxP, '#b23a3a');
      else {
        const q0 = Math.max(0, p.c), p0 = p.c < 0 ? -p.c / p.d : 0;
        s += line(sc, q0, p0, p.c + p.d * maxP, maxP, '#b23a3a');
      }
      if (pStar > 0 && qStar > 0) {
        s += line(sc, 0, pStar, qStar, pStar, '#999', '3 4', 1);
        s += line(sc, qStar, 0, qStar, pStar, '#999', '3 4', 1);
        s += dot(sc, qStar, pStar, '#1f8a4c', `(${fmt(qStar, 1)} | ${fmt(pStar, 1)})`);
      }
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML = short
        ? `Blau: Nachfrage Q_D = ${fmt(p.a, 0)} − ${fmt(p.b)}·p. Rot: kurzfristig fixes Angebot Q_S = ${fmt(p.fix, 0)}.<br>Gleichgewicht aus Q_D = ${fmt(p.fix, 0)}: p* = ${fmt(pStar)}. Bei fixem Angebot bestimmt allein die Nachfrage den Preis – eine Nachfrageverschiebung geht voll in den Preis.`
        : `Blau: Nachfrage Q_D = ${fmt(p.a, 0)} − ${fmt(p.b)}·p. Rot: Angebot Q_S = ${fmt(p.c, 0)} + ${fmt(p.d)}·p.<br>Gleichsetzen: p* = (a − c)/(b + d) = ${fmt(pStar)}, Q* = ${fmt(qStar)}. Schiebe a nach rechts (Einkommen steigt): Preis und Menge steigen. Schiebe c nach rechts (mehr Anbieter): Preis sinkt, Menge steigt.`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 6 (Thema 4): Kurzfristige Gewinnmaximierung ----------
  function gewinnKurzGraph(el) {
    const p = { p: 5, w1: 2, w2: 3, A: 4 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('p', 'Outputpreis p', 1, 10, 0.5, p.p)}
        ${slider('w1', 'Faktorpreis w₁', 0.5, 6, 0.5, p.w1)}
        ${slider('w2', 'Fixkosten w₂·x̄₂', 0, 20, 1, p.w2)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      // y = A sqrt(x1); p*MP1 = w1 → A p / (2 sqrt x1) = w1 → sqrt x1 = A p / (2 w1)
      const sx = p.A * p.p / (2 * p.w1), x1 = sx * sx, y = p.A * sx;
      const pi = p.p * y - p.w1 * x1 - p.w2;
      const maxX = Math.max(60, x1 * 1.6), maxY = p.A * Math.sqrt(maxX) * 1.1;
      const sc = scaler(maxX, maxY);
      let s = axes(sc, 'x₁ (variabler Input)', 'y (Output)');
      s += curve(sc, x => p.A * Math.sqrt(x), '#1f8a4c', 2.2);
      const iso = (pp) => (x) => (pp + p.w2) / p.p + (p.w1 / p.p) * x;
      s += curve(sc, iso(pi * 0.5), '#c9ced8', 1.5);
      s += curve(sc, iso(pi * 1.5), '#c9ced8', 1.5);
      s += curve(sc, iso(pi), '#1f5fbf', 2);
      s += line(sc, x1, 0, x1, y, '#999', '3 4', 1);
      s += line(sc, 0, y, x1, y, '#999', '3 4', 1);
      s += dot(sc, x1, y, '#b23a3a', `(${fmt(x1, 1)} | ${fmt(y, 1)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Grün: Produktionsfunktion y = ${fmt(p.A, 0)}·√x₁ (konkav, abnehmendes Grenzprodukt). Blau: Isogewinnlinie y = (π + w₂x̄₂)/p + (w₁/p)·x₁ mit Steigung w₁/p = ${fmt(p.w1 / p.p)}; grau: niedrigerer und (unerreichbarer) höherer Gewinn.<br>` +
        `Tangentialpunkt aus p·MP₁ = w₁: x₁* = ${fmt(x1)}, y* = ${fmt(y)}, Gewinn π = ${fmt(pi)}. Erhöhe p: Linie flacher, Optimum wandert nach rechts. Erhöhe w₁: Linie steiler, Optimum nach links.`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 7 (Thema 4): Kostenminimum mit Isoquante und Isokostengerade ----------
  function kostenminGraph(el) {
    const p = { w1: 4, w2: 1, y: 10, a: 0.5 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('w1', 'Faktorpreis w₁', 0.5, 8, 0.5, p.w1)}
        ${slider('w2', 'Faktorpreis w₂', 0.5, 8, 0.5, p.w2)}
        ${slider('y', 'Output ȳ', 2, 20, 1, p.y)}
        ${slider('a', 'Exponent a (y = x₁ᵃ · x₂¹⁻ᵃ)', 0.2, 0.8, 0.05, p.a)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const a = p.a, b = 1 - a;
      // Tangente: x2/x1 = (b/a)(w1/w2) =: r ; y = x1^a (r x1)^b = x1 r^b → x1 = y / r^b
      const r = (b / a) * (p.w1 / p.w2);
      const x1 = p.y / Math.pow(r, b), x2 = r * x1, C = p.w1 * x1 + p.w2 * x2;
      const isoq = (x) => Math.pow(p.y / Math.pow(x, a), 1 / b);
      const maxX = Math.max(x1 * 2.5, C / p.w1 * 1.2), maxY = Math.max(x2 * 2.5, C / p.w2 * 1.2);
      const sc = scaler(maxX, maxY);
      let s = axes(sc, 'x₁', 'x₂');
      s += curve(sc, isoq, '#1f8a4c', 2.2);
      for (const CC of [C * 0.7, C * 1.3]) s += line(sc, 0, CC / p.w2, CC / p.w1, 0, '#c9ced8', null, 1.5);
      s += line(sc, 0, C / p.w2, C / p.w1, 0, '#1f5fbf');
      s += line(sc, x1, 0, x1, x2, '#999', '3 4', 1);
      s += line(sc, 0, x2, x1, x2, '#999', '3 4', 1);
      s += dot(sc, x1, x2, '#b23a3a', `B (${fmt(x1, 1)} | ${fmt(x2, 1)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Grün: Isoquante ȳ = ${fmt(p.y, 0)}. Blau: niedrigste Isokostengerade, die sie berührt (Steigung −w₁/w₂ = ${fmt(-p.w1 / p.w2)}); grau: C zu niedrig (unerreichbar) bzw. zu hoch (nicht minimal).<br>` +
        `Tangentialbedingung x₂/x₁ = (b/a)·(w₁/w₂) = ${fmt(r)} → mit der Nebenbedingung: x₁* = ${fmt(x1)}, x₂* = ${fmt(x2)}, minimale Kosten C = ${fmt(C)}. Erhöhe w₁: die Firma ersetzt x₁ durch x₂, Punkt B wandert nach links oben.`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 8 (Thema 4): Kostenkurven und Angebotsentscheidung ----------
  function kostenkurvenGraph(el) {
    const p = { p: 15, FC: 8 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('p', 'Marktpreis p', 2, 40, 1, p.p)}
        ${slider('FC', 'Fixkosten FC', 0, 30, 1, p.FC)}
      </div>
      <div class="readout"></div>`;
    const VC = y => y * y * y - 6 * y * y + 15 * y;
    const MC = y => 3 * y * y - 12 * y + 15;
    const AVC = y => y * y - 6 * y + 15;
    const draw = () => {
      const AC = y => AVC(y) + p.FC / y;
      // p = MC auf steigendem Ast: 3y² − 12y + 15 − p = 0 → y = 2 + sqrt(4 − (15 − p)/3)
      const disc = 4 - (15 - p.p) / 3;
      const yStar = disc >= 0 ? 2 + Math.sqrt(disc) : null;
      const minAVC = 6, minAC = (() => { let best = Infinity; for (let y = 0.5; y < 8; y += 0.01) best = Math.min(best, AC(y)); return best; })();
      const produce = yStar !== null && p.p >= minAVC;
      const pi = produce ? p.p * yStar - VC(yStar) - p.FC : -p.FC;
      const sc = scaler(8, 45);
      let s = axes(sc, 'y (Menge)', 'Euro je Stück');
      s += curve(sc, MC, '#b23a3a', 2.2);
      s += curve(sc, AVC, '#1f8a4c', 2);
      s += curve(sc, AC, '#1f5fbf', 2);
      s += line(sc, 0, p.p, 8, p.p, '#333', '6 4', 1.5);
      if (produce) {
        s += line(sc, yStar, 0, yStar, p.p, '#999', '3 4', 1);
        s += dot(sc, yStar, p.p, '#333', `y* = ${fmt(yStar, 2)}`);
      }
      s += dot(sc, 3, 6, '#1f8a4c', 'min AVC');
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `C(y) = y³ − 6y² + 15y + FC. Rot: MC = 3y² − 12y + 15. Grün: AVC = y² − 6y + 15 (Minimum 6 bei y = 3). Blau: AC = AVC + FC/y (Minimum ≈ ${fmt(minAC, 1)}). MC schneidet beide im Minimum. Gestrichelt: Preis p = ${fmt(p.p, 0)}.<br>` +
        (produce
          ? `p = MC auf dem steigenden Ast: y* = ${fmt(yStar, 2)}. Gewinn = p·y* − VC − FC = ${fmt(pi)}. ${p.p < minAC ? 'Verlust kleiner als FC: kurzfristig produzieren, langfristig Marktaustritt (p < min AC).' : 'Gewinn ≥ 0: Unternehmen bleibt im Markt.'}`
          : `p < min AVC = 6: Stilllegen, y = 0. Der Verlust beträgt die Fixkosten (${fmt(-pi)}); jede produzierte Einheit würde ihn vergrößern.`);
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 9 (Thema 5): Freizeit-Konsum-Modell ----------
  function arbeitsangebotGraph(el) {
    const p = { w: 15, E: 0, d: 0.5, T: 16 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('w', 'Lohn w', 5, 40, 1, p.w)}
        ${slider('E', 'Sonstiges Einkommen E', 0, 200, 10, p.E)}
        ${slider('d', 'Exponent d der Freizeit (u = C¹⁻ᵈ · hᵈ)', 0.2, 0.8, 0.05, p.d)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const c = 1 - p.d, full = p.w * p.T + p.E;
      let h = (p.d * full) / p.w; if (h > p.T) h = p.T;
      const C = full - p.w * h, L = p.T - h;
      const u = Math.pow(C, c) * Math.pow(h, p.d);
      const ic = (uu) => (x) => Math.pow(uu / Math.pow(x, p.d), 1 / c);
      const sc = scaler(p.T * 1.1, Math.max(full, 40 * p.T) * 0.6 > full ? full * 1.15 : full * 1.15);
      let s = axes(sc, 'h (Freizeit)', 'C (Konsum)');
      s += line(sc, 0, full, p.T, p.E, '#1f5fbf');
      s += line(sc, p.T, 0, p.T, p.E, '#1f5fbf', '3 4', 1);
      s += curve(sc, ic(u * 0.8), '#c9ced8', 1.5);
      s += curve(sc, ic(u), '#1f8a4c', 2.2);
      s += line(sc, h, 0, h, C, '#999', '3 4', 1);
      s += line(sc, 0, C, h, C, '#999', '3 4', 1);
      s += dot(sc, h, C, '#b23a3a', `(${fmt(h, 1)} | ${fmt(C, 0)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Budgetgerade C = wT + E − w·h = ${fmt(full, 0)} − ${fmt(p.w, 0)}·h (Steigung −w, Endpunkt bei h = ${p.T}, C = E = ${fmt(p.E, 0)}). Grün: Indifferenzkurve im Optimum.<br>` +
        `Optimum h* = d·(wT+E)/w = ${fmt(h, 2)} Stunden Freizeit → Arbeit L* = ${fmt(L, 2)} h, Konsum C* = ${fmt(C, 1)}. ` +
        (p.E === 0 ? 'Bei E = 0 ändert der Lohn die Arbeitszeit nicht: Einkommens- und Substitutionseffekt heben sich bei Cobb-Douglas auf.' : 'Erhöhe E: Parallelverschiebung, weniger Arbeit (Einkommenseffekt). Erhöhe w: Drehung um den Endpunkt; mit E > 0 steigt die Arbeitszeit leicht (Substitutionseffekt dominiert).');
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 10 (Thema 6/8): Renten, Preiskontrolle ----------
  function rentenGraph(el) {
    const p = { a: 100, c: 20, pfix: 0 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('a', 'Prohibitivpreis der Nachfrage (Q_D = a − p)', 60, 140, 5, p.a)}
        ${slider('c', 'Mindestpreis des Angebots (Q_S = p − c)', 0, 50, 5, p.c)}
        ${slider('pfix', 'Fixierter Preis (0 = Markt)', 0, 100, 1, p.pfix)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const pStar = (p.a + p.c) / 2, qStar = p.a - pStar;
      const fixed = p.pfix > 0;
      const P = fixed ? p.pfix : pStar;
      const qd = Math.max(0, p.a - P), qs = Math.max(0, P - p.c), q = fixed ? Math.min(qd, qs) : qStar;
      const pd = p.a - q, ps = p.c + q;
      const KR = 0.5 * q * (p.a - pd) + q * (pd - P);
      const PR = 0.5 * q * (ps - p.c) + q * (P - ps);
      const WV = 0.5 * (qStar - q) * (pd - ps);
      const sc = scaler(p.a * 1.05, p.a * 1.05);
      const poly = (pts, col) => `<polygon points="${pts.map(([x, y]) => `${sc.x(x)},${sc.y(y)}`).join(' ')}" fill="${col}" opacity="0.35"/>`;
      let s = axes(sc, 'Menge Q', 'Preis p');
      if (q > 0) {
        s += poly([[0, p.a], [0, P], [q, P], [q, pd]], '#1f5fbf');
        s += poly([[0, p.c], [0, P], [q, P], [q, ps]], '#1f8a4c');
        if (WV > 0.01) s += poly([[q, pd], [q, ps], [qStar, pStar]], '#b23a3a');
      }
      s += line(sc, 0, p.a, p.a, 0, '#1f5fbf');
      s += line(sc, 0, p.c, p.a - p.c, p.a, '#1f8a4c');
      s += line(sc, 0, P, Math.max(q, 1), P, '#333', '6 4', 1.5);
      s += dot(sc, qStar, pStar, '#333', `GG (${fmt(qStar, 0)} | ${fmt(pStar, 0)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Gleichgewicht p* = ${fmt(pStar, 1)}, Q* = ${fmt(qStar, 1)}. ${fixed ? `Fixierter Preis ${fmt(P, 0)}: Q_D = ${fmt(qd, 0)}, Q_S = ${fmt(qs, 0)}, gehandelt wird ${fmt(q, 0)} (${P < pStar ? 'Nachfrageüberschuss' : 'Angebotsüberschuss'} ${fmt(Math.abs(qd - qs), 0)}).` : 'Kein Eingriff.'}<br>` +
        `Blau: Konsumentenrente = ${fmt(KR, 1)} · Grün: Produzentenrente = ${fmt(PR, 1)} · Rot: Wohlfahrtsverlust = ${fmt(WV, 1)} · Gesamtrente = ${fmt(KR + PR, 1)}. Schiebe den fixierten Preis über oder unter p* und beobachte, wie das rote Dreieck wächst.`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 11 (Thema 7.1): Monopol ----------
  function monopolGraph(el) {
    const p = { a: 100, b: 2, mc: 20 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('a', 'Nachfrage: Achsenabschnitt a (P = a − b·Q)', 60, 140, 5, p.a)}
        ${slider('b', 'Nachfrage: Steigung b', 0.5, 4, 0.25, p.b)}
        ${slider('mc', 'Grenzkosten MC (konstant)', 0, 60, 5, p.mc)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      const qm = (p.a - p.mc) / (2 * p.b), pm = p.a - p.b * qm, qw = (p.a - p.mc) / p.b;
      const KR = 0.5 * qm * (p.a - pm), PR = (pm - p.mc) * qm, WV = 0.5 * (qw - qm) * (pm - p.mc);
      const sc = scaler(p.a / p.b * 1.05, p.a * 1.05);
      const poly = (pts, col) => `<polygon points="${pts.map(([x, y]) => `${sc.x(x)},${sc.y(y)}`).join(' ')}" fill="${col}" opacity="0.35"/>`;
      let s = axes(sc, 'Menge Q', 'Preis');
      s += poly([[0, p.a], [0, pm], [qm, pm]], '#1f5fbf');
      s += poly([[0, pm], [0, p.mc], [qm, p.mc], [qm, pm]], '#1f8a4c');
      s += poly([[qm, pm], [qm, p.mc], [qw, p.mc]], '#b23a3a');
      s += line(sc, 0, p.a, p.a / p.b, 0, '#1f5fbf');
      s += line(sc, 0, p.a, p.a / (2 * p.b), 0, '#7a4fb5', '6 4');
      s += line(sc, 0, p.mc, p.a / p.b, p.mc, '#b23a3a');
      s += line(sc, qm, 0, qm, pm, '#999', '3 4', 1);
      s += line(sc, 0, pm, qm, pm, '#999', '3 4', 1);
      s += dot(sc, qm, p.mc, '#7a4fb5', 'MR = MC');
      s += dot(sc, qm, pm, '#b23a3a', `(${fmt(qm, 1)} | ${fmt(pm, 1)})`);
      s += dot(sc, qw, p.mc, '#333', `Wettbewerb (${fmt(qw, 1)} | ${fmt(p.mc, 0)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Blau: Nachfrage P = ${fmt(p.a, 0)} − ${fmt(p.b)}·Q. Lila gestrichelt: Grenzerlös MR = ${fmt(p.a, 0)} − ${fmt(2 * p.b)}·Q (doppelte Steigung). Rot: MC = ${fmt(p.mc, 0)}.<br>` +
        `MR = MC → Q_M = ${fmt(qm, 2)}; Preis auf der Nachfrage abgelesen: P_M = ${fmt(pm, 2)}. Wettbewerb (P = MC): Q_W = ${fmt(qw, 2)}. KR = ${fmt(KR, 1)} (blau), PR = ${fmt(PR, 1)} (grün), Wohlfahrtsverlust = ${fmt(WV, 1)} (rot).`;
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 12 (Thema 8): Mengensteuer ----------
  function steuerGraph(el) {
    const p = { t: 10, d: 1, s: 1 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('t', 'Steuer t je Einheit (negativ = Subvention)', -20, 30, 1, p.t)}
        ${slider('d', 'Steigung Nachfrage (Q_D = 100 − d·p; groß = elastisch)', 0.5, 3, 0.25, p.d)}
        ${slider('s', 'Steigung Angebot (Q_S = s·(p − 20); groß = elastisch)', 0.5, 3, 0.25, p.s)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      // Q_D = 100 − d p ; Q_S = s (p_s − 20), p_s = p_b − t
      const pStar = (100 + 20 * p.s) / (p.d + p.s), qStar = 100 - p.d * pStar;
      const pb = (100 + p.s * (20 + p.t)) / (p.d + p.s), ps = pb - p.t, q = 100 - p.d * pb;
      const T = p.t * q, WV = 0.5 * Math.abs(p.t) * Math.abs(qStar - q);
      const maxP = 100 / p.d * 1.05, maxQ = Math.max(qStar, q) * 1.3;
      const sc = scaler(maxQ, maxP);
      const poly = (pts, col) => `<polygon points="${pts.map(([x, y]) => `${sc.x(x)},${sc.y(y)}`).join(' ')}" fill="${col}" opacity="0.35"/>`;
      let s = axes(sc, 'Menge Q', 'Preis p');
      if (q > 0) {
        s += poly([[0, pb], [0, ps], [q, ps], [q, pb]], p.t >= 0 ? '#c97b00' : '#7a4fb5');
        s += poly([[q, pb], [q, ps], [qStar, pStar]], '#b23a3a');
      }
      s += line(sc, 0, 100 / p.d, 100, 0, '#1f5fbf');
      s += line(sc, 0, 20, p.s * (maxP - 20), maxP, '#1f8a4c');
      s += line(sc, 0, 20 + p.t, p.s * (maxP - 20 - p.t), maxP, '#1f8a4c', '6 4');
      s += line(sc, q, 0, q, pb, '#999', '3 4', 1);
      s += dot(sc, qStar, pStar, '#333', `alt (${fmt(qStar, 1)} | ${fmt(pStar, 1)})`);
      s += dot(sc, q, pb, '#1f5fbf', `P_b = ${fmt(pb, 1)}`);
      s += dot(sc, q, ps, '#1f8a4c', `P_s = ${fmt(ps, 1)}`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      const share = p.t !== 0 ? (pb - pStar) / p.t : 0;
      el.querySelector('.readout').innerHTML =
        `Grün: Angebot, gestrichelt: Angebot ${p.t >= 0 ? 'plus Steuer' : 'minus Subvention'} (um ${fmt(Math.abs(p.t), 0)} ${p.t >= 0 ? 'nach oben' : 'nach unten'}). Neues Gleichgewicht Q = ${fmt(q, 2)}; Käufer zahlen P_b = ${fmt(pb, 2)}, Verkäufer erhalten P_s = ${fmt(ps, 2)}.<br>` +
        (p.t !== 0
          ? `Inzidenz: Käufer tragen ${fmt(100 * share, 0)} % (${fmt(pb - pStar, 2)} von ${fmt(p.t, 0)}), Verkäufer ${fmt(100 * (1 - share), 0)} %. ${p.t > 0 ? 'Steueraufkommen' : 'Kosten der Subvention'} = ${fmt(Math.abs(T), 1)} (orange/lila), Wohlfahrtsverlust = ${fmt(WV, 1)} (rot). Mache die Nachfrage steiler (d klein): Käufer tragen mehr.`
          : 'Kein Eingriff. Schiebe t nach oben für eine Steuer, nach unten für eine Subvention.');
    };
    bind(el, p, draw);
    draw();
  }

  // ---------- Grafik 13 (Thema 7.2): Negative Externalität und Pigou-Steuer ----------
  function externGraph(el) {
    const p = { ext: 20, tax: 0 };
    el.innerHTML = `
      <div class="svgwrap"></div>
      <div class="controls">
        ${slider('ext', 'Externe Kosten je Einheit', 0, 50, 5, p.ext)}
        ${slider('tax', 'Pigou-Steuer t', 0, 50, 5, p.tax)}
      </div>
      <div class="readout"></div>`;
    const draw = () => {
      // P_D = 100 − Q ; MC_p = 20 + Q ; MC_s = 20 + ext + Q ; Angebot mit Steuer: 20 + tax + Q
      const qM = (100 - 20 - p.tax) / 2, pM = 100 - qM;
      const qS = (100 - 20 - p.ext) / 2, pS = 100 - qS;
      const WV = 0.5 * Math.abs(qM - qS) * Math.abs(p.ext - p.tax);
      const sc = scaler(90, 110);
      const poly = (pts, col) => `<polygon points="${pts.map(([x, y]) => `${sc.x(x)},${sc.y(y)}`).join(' ')}" fill="${col}" opacity="0.35"/>`;
      let s = axes(sc, 'Menge Q', 'Preis');
      if (WV > 0.01) s += poly([[qS, pS], [qM, 100 - qM], [qM, 20 + p.ext + qM]], '#b23a3a');
      s += line(sc, 0, 100, 90, 10, '#1f5fbf');
      s += line(sc, 0, 20, 80, 100, '#1f8a4c');
      s += line(sc, 0, 20 + p.ext, 80 - p.ext, 100, '#b23a3a');
      if (p.tax > 0) s += line(sc, 0, 20 + p.tax, 80 - p.tax, 100, '#1f8a4c', '6 4');
      s += dot(sc, qM, pM, '#1f8a4c', `Markt (${fmt(qM, 1)} | ${fmt(pM, 1)})`);
      s += dot(sc, qS, pS, '#b23a3a', `Optimum (${fmt(qS, 1)} | ${fmt(pS, 1)})`);
      el.querySelector('.svgwrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${s}</svg>`;
      el.querySelector('.readout').innerHTML =
        `Blau: Nachfrage P = 100 − Q. Grün: private Grenzkosten 20 + Q (Angebot). Rot: volkswirtschaftliche Grenzkosten = privat + ${fmt(p.ext, 0)}.${p.tax > 0 ? ` Gestrichelt: Angebot mit Steuer t = ${fmt(p.tax, 0)}.` : ''}<br>` +
        `Marktmenge ${fmt(qM, 2)}, gesellschaftliches Optimum ${fmt(qS, 2)}. Wohlfahrtsverlust = ${fmt(WV, 1)} (rot). ${Math.abs(p.tax - p.ext) < 0.01 && p.ext > 0 ? 'Die Pigou-Steuer entspricht genau den externen Kosten – der Markt produziert die optimale Menge.' : 'Setze die Steuer gleich den externen Kosten, dann verschwindet das Dreieck.'}`;
    };
    bind(el, p, draw);
    draw();
  }

  const registry = {
    'budget': budgetGraph,
    'optimum-cd': optimumGraph,
    'substitute': substituteGraph,
    'komplemente': complementGraph,
    'markt': marktGraph,
    'gewinn-kurz': gewinnKurzGraph,
    'kostenmin': kostenminGraph,
    'kostenkurven': kostenkurvenGraph,
    'arbeitsangebot': arbeitsangebotGraph,
    'renten': rentenGraph,
    'monopol': monopolGraph,
    'steuer': steuerGraph,
    'extern': externGraph
  };

  window.VWLGraphs = {
    mount(el) {
      const fn = registry[el.dataset.graph];
      if (!fn) { el.textContent = 'Grafik nicht gefunden: ' + el.dataset.graph; return; }
      el.classList.add('graph');
      fn(el);
    },
    mountAll(root) { (root || document).querySelectorAll('[data-graph]').forEach(el => this.mount(el)); }
  };
})();
