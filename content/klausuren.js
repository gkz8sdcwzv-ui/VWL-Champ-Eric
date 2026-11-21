window.VWL = window.VWL || {};
/* Probeklausuren im Stil der Modulklausur W3BW_501 (120 Minuten, 120 Punkte, 1 Punkt ≈ 1 Minute).
   Jede Aufgabe: Text mit Punkten je Teilaufgabe, vollständige Lösung mit Bewertungshinweisen. */
VWL.klausuren = [
{
  id: 'pk1', nr: 1, titel: 'Probeklausur 1', datum: '2026-11-21', dauer: 120, punkte: 120,
  schwerpunkt: 'Thema 2–6 und 8 (Markt, Haushalt, Unternehmen, Arbeitsmarkt, Renten, Staat)',
  hinweis: 'Erlaubt: nicht programmierbarer Taschenrechner. Keine Formelsammlung. Alle Rechenwege und Ansätze aufschreiben – Ansätze geben Punkte, auch ohne Endergebnis. Zeichnungen beschriften (Achsen, Kurven, Punkte).',
  aufgaben: [
  {
    nr: 1, titel: 'Markt, Renten und staatliche Eingriffe', themen: ['t2', 't6', 't8'], punkte: 24,
    aufgabe: String.raw`Auf dem Markt für Leih-E-Scooter-Minuten in einer Stadt gelten die Nachfragefunktion $Q_D = 300 - 5p$ und die Angebotsfunktion $Q_S = 5p - 100$ ($p$ in Cent je Minute, $Q$ in Tausend Minuten).

a) Berechnen Sie Gleichgewichtspreis und -menge. Skizzieren Sie den Markt mit beschrifteten Achsenabschnitten. **(4 P)**

b) Berechnen Sie Konsumentenrente, Produzentenrente und Gesamtrente im Gleichgewicht und markieren Sie sie in der Skizze. **(6 P)**

c) Die Stadt setzt einen Höchstpreis von 30 Cent fest. Bestimmen Sie gehandelte Menge, Nachfrage- oder Angebotsüberschuss, neue Konsumenten- und Produzentenrente sowie den Wohlfahrtsverlust. **(6 P)**

d) Statt des Höchstpreises erhebt die Stadt eine Mengensteuer von 6 Cent je Minute bei den Anbietern. Bestimmen Sie Käuferpreis, Verkäuferpreis, gehandelte Menge, Steueraufkommen, Wohlfahrtsverlust und die Verteilung der Steuerlast. Begründen Sie die Verteilung mit den Steigungen der Kurven. **(8 P)**`,
    loesung: String.raw`**a)** $300 - 5p = 5p - 100 \Rightarrow 10p = 400 \Rightarrow p^* = 40$, $Q^* = 300 - 200 = 100$. Probe: $5 \cdot 40 - 100 = 100$ ✓. Skizze: Nachfrage von $(0 \mid 60)$ (Prohibitivpreis $300/5$) fallend, Angebot ab $(0 \mid 20)$ (Mindestpreis $100/5$) steigend, Schnitt bei $(100 \mid 40)$. *(2 P Rechnung, 2 P Skizze mit Achsenabschnitten)*

**b)** $KR = \tfrac12 \cdot 100 \cdot (60 - 40) = 1000$. $PR = \tfrac12 \cdot 100 \cdot (40 - 20) = 1000$. Gesamtrente $= 2000$. KR ist das Dreieck unter der Nachfrage über $p^* = 40$, PR das Dreieck über dem Angebot unter $p^*$. *(je 2 P)*

**c)** $p_{max} = 30 < p^*$, also bindend. $Q_S(30) = 50$, $Q_D(30) = 150$: gehandelt werden $Q = \min\{150, 50\} = 50$, Nachfrageüberschuss $100$ (Warteschlangen, Rationierung, Schwarzmarkt).
Zahlungsbereitschaft bei $Q = 50$: $P_D(50) = (300 - 50)/5 = 50$. Angebotspreis $P_S(50) = (50 + 100)/5 = 30$.
$WV = \tfrac12 \cdot (100 - 50) \cdot (50 - 30) = 500$.
$KR_{neu}$ = Dreieck $\tfrac12 \cdot 50 \cdot (60 - 50) = 250$ plus Rechteck $50 \cdot (50 - 30) = 1000$, zusammen $1250$ (steigt, weil die verbleibenden Käufer nur 30 zahlen). $PR_{neu} = \tfrac12 \cdot 50 \cdot (30 - 20) = 250$. Probe: $1250 + 250 + 500 = 2000$ ✓. *(1 P Menge/Überschuss, 1 P Preise, 2 P Renten, 2 P WV)*

**d)** Anbieter erhalten $p - 6$: $Q_S' = 5(p - 6) - 100 = 5p - 130$. Gleichgewicht: $300 - 5p = 5p - 130 \Rightarrow p_K = 43$, Verkäuferpreis $p_V = 37$, $Q = 300 - 215 = 85$.
Steueraufkommen $T = 6 \cdot 85 = 510$. $WV = \tfrac12 \cdot (100 - 85) \cdot 6 = 45$.
Lastverteilung: Käufer zahlen $43 - 40 = 3$ mehr, Verkäufer bekommen $40 - 37 = 3$ weniger: je 50 %. Begründung: Beide Kurven haben betragsmäßig dieselbe Steigung ($|dQ/dp| = 5$), also im Gleichgewicht dieselbe Elastizität ($\varepsilon_D = -5 \cdot 40/100 = -2$, $\varepsilon_S = +2$). Die Seite mit der kleineren Elastizität trüge den größeren Anteil – hier sind sie gleich. Es spielt keine Rolle, dass die Steuer bei den Anbietern erhoben wird (Steuerinzidenz ist unabhängig von der formalen Zahllast). *(2 P Verschiebung/Gleichung, 2 P Preise und Menge, 1 P Aufkommen, 1 P WV, 2 P Verteilung mit Begründung)*`
  },
  {
    nr: 2, titel: 'Haushaltstheorie: Optimum, Nachfrage, Sonderfall', themen: ['t3'], punkte: 30,
    aufgabe: String.raw`Lena hat ein monatliches Budget von $m = 180$ € für Streaming-Abos ($x_1$, $p_1 = 6$) und Kinobesuche ($x_2$, $p_2 = 4$). Ihre Präferenzen werden durch $u(x_1, x_2) = x_1 \, x_2^{2}$ beschrieben.

a) Stellen Sie die Budgetgerade auf (nach $x_2$ aufgelöst), nennen Sie Achsenabschnitte und Steigung und interpretieren Sie die Steigung ökonomisch. **(4 P)**

b) Leiten Sie die Grenzrate der Substitution her und erklären Sie in einem Satz, was sie angibt. **(4 P)**

c) Bestimmen Sie das nutzenmaximale Güterbündel mit dem Lagrange-Verfahren. Geben Sie auch $\lambda$ und das Nutzenniveau an und machen Sie die Probe mit der Budgetgleichung. **(10 P)**

d) Leiten Sie die allgemeinen Nachfragefunktionen $x_1(p_1, p_2, m)$ und $x_2(p_1, p_2, m)$ her. Wie reagiert die Nachfrage nach Kinobesuchen, wenn der Abo-Preis auf $p_1 = 9$ steigt? Was sagt das über die Beziehung der beiden Güter in der Nachfrage? **(6 P)**

e) Angenommen, Lenas Präferenzen wären stattdessen $u(x_1, x_2) = 2x_1 + x_2$. Bestimmen Sie das Optimum bei den ursprünglichen Preisen und begründen Sie Ihr Ergebnis ohne Lagrange. **(6 P)**`,
    loesung: String.raw`**a)** $6x_1 + 4x_2 = 180 \Rightarrow x_2 = 45 - 1{,}5\,x_1$. Achsenabschnitte: $m/p_1 = 30$ Abos, $m/p_2 = 45$ Kinobesuche. Steigung $-p_1/p_2 = -1{,}5$: Ein Abo mehr kostet 1,5 Kinobesuche – die Opportunitätskosten eines Abos in Kinobesuchen, vorgegeben durch den Markt. *(1 P Gleichung, 1 P Abschnitte, 1 P Steigung, 1 P Interpretation)*

**b)** $MU_1 = \partial u/\partial x_1 = x_2^2$, $MU_2 = \partial u/\partial x_2 = 2x_1x_2$.
$MRS = \dfrac{MU_1}{MU_2} = \dfrac{x_2^2}{2x_1x_2} = \dfrac{x_2}{2x_1}$.
Die MRS gibt an, auf wie viele Kinobesuche Lena für ein zusätzliches Abo höchstens verzichten würde, ohne schlechter gestellt zu sein (Betrag der Steigung der Indifferenzkurve). *(2 P Herleitung, 1 P Ergebnis, 1 P Interpretation)*

**c)** $\mathcal{L} = x_1x_2^2 - \lambda(6x_1 + 4x_2 - 180)$.
(1) $\partial\mathcal{L}/\partial x_1 = x_2^2 - 6\lambda = 0$
(2) $\partial\mathcal{L}/\partial x_2 = 2x_1x_2 - 4\lambda = 0$
(3) $\partial\mathcal{L}/\partial\lambda = -(6x_1 + 4x_2 - 180) = 0$
(1) ÷ (2): $\dfrac{x_2^2}{2x_1x_2} = \dfrac{6}{4} \Rightarrow \dfrac{x_2}{2x_1} = 1{,}5 \Rightarrow x_2 = 3x_1$ (Tangentialbedingung $MRS = p_1/p_2$).
In (3): $6x_1 + 12x_1 = 180 \Rightarrow x_1^* = 10$, $x_2^* = 30$.
$\lambda = x_2^2/6 = 900/6 = 150$ (Grenznutzen des Einkommens: ein Euro mehr bringt etwa 150 Nutzeneinheiten). Nutzen $u^* = 10 \cdot 900 = 9000$. Probe: $60 + 120 = 180$ ✓.
Kontrolle mit der Cobb-Douglas-Regel: Ausgabenanteil Gut 1 $= \frac{1}{1+2} = \frac13$, also $x_1 = \frac13 \cdot 180/6 = 10$ ✓. *(2 P Lagrange-Ansatz, 3 P Bedingungen, 2 P Tangentialbedingung, 2 P Lösung, 1 P λ/Nutzen/Probe)*

**d)** Aus $x_2 = \frac{p_1}{p_2} \cdot 2x_1$ (allgemein: $\frac{x_2}{2x_1} = \frac{p_1}{p_2}$) und dem Budget: $p_1x_1 + 2p_1x_1 = m \Rightarrow x_1 = \dfrac{m}{3p_1}$, $x_2 = \dfrac{2m}{3p_2}$.
Bei $p_1 = 9$: $x_1 = 180/27 \approx 6{,}67$, $x_2 = 2 \cdot 180/12 = 30$ – unverändert. Die Nachfrage nach Gut 2 hängt nicht von $p_1$ ab (Kreuzpreiselastizität null): Bei Cobb-Douglas-Präferenzen sind die Güter in der Nachfrage weder Substitute noch Komplemente; der Ausgabenanteil jedes Gutes ist konstant, der Substitutionseffekt und der Einkommenseffekt auf Gut 2 heben sich genau auf. *(3 P Herleitung, 1 P Zahlen, 2 P Interpretation)*

**e)** Perfekte Substitute: $MRS = MU_1/MU_2 = 2$ konstant. Preisverhältnis $p_1/p_2 = 1{,}5$. Da $MRS = 2 > 1{,}5$, ist Lena bereit, für ein Abo zwei Kinobesuche herzugeben, muss am Markt aber nur 1,5 hergeben – Abos sind relativ „zu billig“, sie kauft **nur Gut 1**: Randlösung $x_1 = 30$, $x_2 = 0$, $u = 60$.
Alternative Begründung über Nutzen je Euro: Gut 1 bringt $2/6 = 0{,}33$ Nutzeneinheiten je Euro, Gut 2 nur $1/4 = 0{,}25$. Vergleich: Nur Kino ergäbe $u = 45 < 60$. Lagrange funktioniert hier nicht, weil die Indifferenzkurven linear sind und keine Tangentiallösung im Inneren existiert. *(2 P MRS vs. Preisverhältnis, 2 P Randlösung, 2 P Begründung)*`
  },
  {
    nr: 3, titel: 'Unternehmenstheorie: Kosten, Angebot, Kostenminimum', themen: ['t4'], punkte: 28,
    aufgabe: String.raw`Ein Hersteller von Fahrradanhängern hat kurzfristig die Kostenfunktion $C(y) = y^3 - 6y^2 + 20y + 32$ (Menge $y$ in Hundert Stück, Kosten in Tausend Euro). Er ist Preisnehmer.

a) Geben Sie Fixkosten, variable Kosten, Grenzkosten $MC$, durchschnittliche variable Kosten $AVC$ und Durchschnittskosten $AC$ an. **(5 P)**

b) Bestimmen Sie Betriebsminimum (Minimum der $AVC$) und Betriebsoptimum (Minimum der $AC$) und zeigen Sie rechnerisch, dass die Grenzkostenkurve beide Kurven in ihrem Minimum schneidet. Skizzieren Sie $MC$, $AVC$ und $AC$. **(7 P)**

c) Der Marktpreis beträgt $p = 35$. Bestimmen Sie die gewinnmaximale Menge und den Gewinn. Begründen Sie, warum die zweite Lösung der Gleichung ausscheidet. **(6 P)**

d) Beschreiben Sie die kurzfristige Angebotskurve des Unternehmens. Was tut es bei $p = 8$, was bei $p = 15$? Begründen Sie jeweils mit Zahlen. **(4 P)**

e) Langfristig produziert ein anderes Unternehmen mit $y = x_1^{1/2}x_2^{1/2}$ bei Faktorpreisen $w_1 = 4$ und $w_2 = 1$. Bestimmen Sie die kostenminimale Faktorkombination für $\bar y = 10$, die minimalen Kosten und die langfristige Kostenfunktion $C(y)$. **(6 P)**`,
    loesung: String.raw`**a)** $FC = C(0) = 32$. $VC(y) = y^3 - 6y^2 + 20y$. $MC = C'(y) = 3y^2 - 12y + 20$. $AVC = VC/y = y^2 - 6y + 20$. $AC = C/y = y^2 - 6y + 20 + 32/y$. *(je 1 P)*

**b)** Betriebsminimum: $AVC' = 2y - 6 = 0 \Rightarrow y = 3$, $AVC(3) = 9 - 18 + 20 = 11$. Prüfung: $MC(3) = 27 - 36 + 20 = 11 = AVC(3)$ ✓.
Betriebsoptimum: $AC' = 2y - 6 - 32/y^2 = 0 \Rightarrow 2y^3 - 6y^2 - 32 = 0 \Rightarrow y^3 - 3y^2 - 16 = 0$. Probieren: $y = 4$: $64 - 48 - 16 = 0$ ✓. $AC(4) = 16 - 24 + 20 + 8 = 20$. Prüfung: $MC(4) = 48 - 48 + 20 = 20 = AC(4)$ ✓.
Allgemeiner Grund: $AC' = (MC - AC)/y$. Solange $MC < AC$, fällt $AC$; sobald $MC > AC$, steigt $AC$ – also schneidet $MC$ die $AC$ genau im Minimum (für $AVC$ ebenso).
Skizze: $MC$ U-förmig mit Minimum bei $y = 2$ ($MC' = 6y - 12 = 0$, $MC(2) = 8$), $AVC$ mit Minimum $(3 \mid 11)$, $AC$ oberhalb mit Minimum $(4 \mid 20)$; $MC$ schneidet beide von unten in den Minima. *(2 P Betriebsminimum, 3 P Betriebsoptimum, 1 P Begründung, 1 P Skizze)*

**c)** $p = MC$: $3y^2 - 12y + 20 = 35 \Rightarrow 3y^2 - 12y - 15 = 0 \Rightarrow y^2 - 4y - 5 = 0 \Rightarrow (y - 5)(y + 1) = 0$. $y = -1$ ist ökonomisch sinnlos (negative Menge); außerdem gilt im Gewinnmaximum $MC' > 0$, und $MC'(5) = 30 - 12 = 18 > 0$ ✓. Also $y^* = 5$.
Gewinn: $\pi = 35 \cdot 5 - C(5) = 175 - (125 - 150 + 100 + 32) = 175 - 107 = 68$. *(3 P Gleichung und Lösung, 1 P Ausschluss, 2 P Gewinn)*

**d)** Die kurzfristige Angebotskurve ist der steigende Ast der $MC$-Kurve oberhalb des Betriebsminimums, also für $p \ge 11$; darunter wird nichts angeboten.
$p = 8 < 11 = \min AVC$: Der Preis deckt nicht einmal die variablen Kosten. Stilllegen, Verlust = Fixkosten = 32. Bei Produktion wäre der Verlust größer.
$p = 15$: $11 < 15 < 20 = \min AC$. Produzieren (auf dem $MC$-Ast, $y \approx 3{,}5$): Der Preis deckt die variablen Kosten und einen Teil der Fixkosten, der Verlust ist kleiner als 32. Langfristig müsste das Unternehmen bei diesem Preis aber austreten. *(1 P Angebotskurve, 1,5 P je Fall)*

**e)** $\min\ 4x_1 + x_2$ u.d.N. $x_1^{1/2}x_2^{1/2} = 10$.
Tangentialbedingung: $\dfrac{MP_1}{MP_2} = \dfrac{\tfrac12 x_1^{-1/2}x_2^{1/2}}{\tfrac12 x_1^{1/2}x_2^{-1/2}} = \dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} = 4 \Rightarrow x_2 = 4x_1$.
In die Isoquante: $\sqrt{x_1 \cdot 4x_1} = 2x_1 = 10 \Rightarrow x_1^* = 5$, $x_2^* = 20$. Kosten $C = 4 \cdot 5 + 20 = 40$.
Allgemein: $2x_1 = y \Rightarrow x_1 = y/2$, $x_2 = 2y$, also $C(y) = 4 \cdot y/2 + 2y = 4y$. Konstante Skalenerträge ($a + b = 1$) → konstante Durchschnitts- und Grenzkosten von 4. *(2 P Tangentialbedingung, 2 P Lösung und Kosten, 2 P Kostenfunktion mit Begründung)*`
  },
  {
    nr: 4, titel: 'Arbeitsmarkt: Arbeitsangebot eines Haushalts', themen: ['t5'], punkte: 20,
    aufgabe: String.raw`Jonas hat täglich $T = 16$ Stunden, die er auf Freizeit $h$ und Arbeit $L$ aufteilt. Er erhält unabhängig von seiner Arbeit $E = 32$ € pro Tag (Unterstützung der Eltern) und kann zu einem Stundenlohn von $w = 10$ € arbeiten. Sein Konsum $C$ (Preis 1) entspricht seinem gesamten Einkommen. Seine Präferenzen: $u(C, h) = C \cdot h$.

a) Stellen Sie die Budgetgerade im Freizeit-Konsum-Diagramm auf und zeichnen Sie sie mit Achsenabschnitten und Endpunkt. **(3 P)**

b) Bestimmen Sie optimale Freizeit, Arbeitszeit und Konsum (Lagrange oder Tangentialbedingung). **(7 P)**

c) Berechnen Sie Jonas' Reservationslohn und erklären Sie seine Bedeutung. **(4 P)**

d) Der Lohn steigt auf $w = 14$. Berechnen Sie das neue Optimum. Erklären Sie mit Substitutions- und Einkommenseffekt, warum sich die Arbeitszeit so verändert, wie sie es tut. **(6 P)**`,
    loesung: String.raw`**a)** $L = T - h$, $C = wL + E = w(T - h) + E = wT + E - wh = 160 + 32 - 10h = 192 - 10h$.
Achsenabschnitt $C_{max} = 192$ (bei $h = 0$), Steigung $-w = -10$: Der Lohn ist der Preis einer Freizeitstunde. Endpunkt $(h, C) = (16 \mid 32)$: Ohne Arbeit bleibt das Einkommen $E$. Die Gerade endet dort (mehr als 16 h Freizeit gibt es nicht). *(1 P Gleichung, 1 P Zeichnung, 1 P Endpunkt/Steigung)*

**b)** Tangentialbedingung: $\dfrac{\partial u/\partial h}{\partial u/\partial C} = \dfrac{C}{h} = w = 10 \Rightarrow C = 10h$.
In die Budgetgerade: $10h = 192 - 10h \Rightarrow h^* = 9{,}6$ Stunden, $L^* = 6{,}4$ Stunden, $C^* = 96$ €.
Mit Lagrange: $\mathcal{L} = Ch - \lambda(C + wh - wT - E)$, (1) $h = \lambda$, (2) $C = \lambda w$, (3) Budget; (2)/(1) ergibt $C/h = w$.
Kontrolle mit der Cobb-Douglas-Abkürzung: $h^* = \frac{d}{c+d} \cdot \frac{wT + E}{w} = \frac12 \cdot \frac{192}{10} = 9{,}6$ ✓, $C^* = \frac12 \cdot 192 = 96$ ✓. *(3 P Bedingung, 3 P Lösung, 1 P Probe)*

**c)** Reservationslohn $w_R = MRS$ am Punkt ohne Arbeit $(h, C) = (T, E) = (16, 32)$: $w_R = C/h = 32/16 = 2$ €.
Bedeutung: Unterhalb von 2 € je Stunde bietet Jonas keine Arbeit an, weil ihm eine Freizeitstunde mehr wert ist als der Lohn; erst ab $w \ge 2$ beginnt er zu arbeiten. Je höher $E$, desto höher der Reservationslohn. *(2 P Rechnung, 2 P Erklärung)*

**d)** Neue Budgetgerade: $C = 14 \cdot 16 + 32 - 14h = 256 - 14h$. Optimum: $C = 14h \Rightarrow 28h = 256 \Rightarrow h^* = 9{,}14$, $L^* = 6{,}86$, $C^* = 128$.
Die Arbeitszeit steigt (von 6,4 auf 6,86 h). Zerlegung: **Substitutionseffekt** – Freizeit ist teurer geworden (jede Stunde kostet jetzt 14 statt 10 € entgangenen Lohn), also weniger Freizeit, mehr Arbeit. **Einkommenseffekt** – bei gleicher Arbeitszeit ist Jonas reicher, und Freizeit ist ein normales Gut, also mehr Freizeit, weniger Arbeit. Hier überwiegt der Substitutionseffekt knapp. Grund: Bei $u = Ch$ gilt $L^* = T/2 - E/(2w)$; ohne $E$ würden sich beide Effekte genau aufheben, mit $E > 0$ verliert der Einkommenseffekt relativ an Gewicht, weil der Lohn nur einen Teil des Einkommens ausmacht. *(2 P neues Optimum, 2 P beide Effekte korrekt, 2 P Erklärung des Nettoeffekts)*`
  },
  {
    nr: 5, titel: 'Verständnisfragen', themen: ['t1', 't2', 't3', 't6'], punkte: 18,
    aufgabe: String.raw`Beantworten Sie knapp, aber vollständig. Skizzen sind beschriftet. **(je 3 P)**

a) Erklären Sie den Begriff Opportunitätskosten an der Entscheidung für ein duales Studium. Welche Kosten gehören dazu, welche nicht?

b) Ordnen Sie ein und begründen Sie: (i) „Ein Mindestlohn von 15 € erhöht die Arbeitslosigkeit unter Geringqualifizierten.“ (ii) „Der Staat sollte den Mindestlohn auf 15 € erhöhen.“

c) Warum ist das Gleichgewicht eines Wettbewerbsmarktes Pareto-effizient? Argumentieren Sie mit Zahlungsbereitschaft und Kosten der letzten gehandelten Einheit.

d) Was unterscheidet eine Bewegung entlang der Nachfragekurve von einer Verschiebung der Nachfragekurve? Nennen Sie je ein Beispiel.

e) Skizzieren Sie die Budgetgerade eines Haushalts, der höchstens $\bar x_1$ Einheiten von Gut 1 kaufen darf (Rationierung). Was ändert sich am Optimum, wenn das unbeschränkte Optimum rechts von $\bar x_1$ läge?

f) Zeichnen Sie Indifferenzkurven für perfekte Komplemente (z. B. linke und rechte Handschuhe) und begründen Sie die Form mit der Nutzenfunktion.`,
    loesung: String.raw`**a)** Opportunitätskosten sind der Wert der besten nicht gewählten Alternative. Beim dualen Studium: das entgangene (höhere) Gehalt einer Vollzeitstelle plus die eingesetzte Zeit; explizite Ausgaben wie Fachbücher oder Fahrtkosten gehören dazu. **Nicht** dazu gehören Kosten, die ohnehin anfallen (Miete, Essen), und versunkene Kosten (bereits bezahlte, nicht erstattbare Gebühren). *(1 P Definition, 1 P richtiges Beispiel, 1 P Abgrenzung)*

**b)** (i) **Positive Aussage**: beschreibt einen Ursache-Wirkungs-Zusammenhang, der empirisch überprüfbar ist (wahr oder falsch). (ii) **Normative Aussage**: enthält ein Werturteil („sollte“), hängt von Zielen und Präferenzen ab, nicht allein durch Daten entscheidbar. Ökonomen können zu (i) als Wissenschaftler beitragen, zu (ii) nur als Bürger mit Werten. *(1 P je Einordnung, 1 P Begründung)*

**c)** Im Gleichgewicht gilt für die letzte gehandelte Einheit: Zahlungsbereitschaft des Grenznachfragers $= p^* =$ Grenzkosten des Grenzanbieters. Jede weitere Einheit kostete mehr, als sie wert ist; jede Einheit weniger ließe einen vorteilhaften Tausch ungenutzt. Es gibt also keinen Tausch mehr, der jemanden besser stellt, ohne jemanden schlechter zu stellen – die Summe aus KR und PR ist maximal. (Voraussetzungen: vollkommene Konkurrenz, keine externen Effekte.) *(1 P Bedingung, 1 P Argument in beide Richtungen, 1 P Rentenmaximum/Voraussetzung)*

**d)** Bewegung entlang der Kurve: Änderung der nachgefragten Menge, weil sich **der Preis des Gutes selbst** ändert (Beispiel: Kaffeepreis steigt, weniger Kaffee). Verschiebung: Änderung der Nachfrage bei **jedem** Preis durch andere Faktoren – Einkommen, Preise anderer Güter, Präferenzen, Erwartungen, Zahl der Nachfrager (Beispiel: Teepreis steigt, Nachfrage nach Kaffee verschiebt sich nach rechts). *(1,5 P je Fall mit Beispiel)*

**e)** Die Budgetgerade verläuft normal von $(0 \mid m/p_2)$ mit Steigung $-p_1/p_2$, bricht aber bei $x_1 = \bar x_1$ ab; die Budgetmenge wird dort durch eine senkrechte Linie begrenzt. Liegt das unbeschränkte Optimum rechts von $\bar x_1$, ist es nicht erreichbar: Der Haushalt wählt die **Ecke** $(\bar x_1 \mid (m - p_1\bar x_1)/p_2)$. Dort ist $MRS > p_1/p_2$ (keine Tangente) – der Haushalt würde gern mehr von Gut 1 kaufen und steht auf einer niedrigeren Indifferenzkurve als ohne Rationierung. *(1 P Skizze, 1 P Ecklösung, 1 P MRS-Argument)*

**f)** $u(x_1, x_2) = \min\{x_1, x_2\}$ (bei 1:1-Verhältnis). Indifferenzkurven sind L-förmig mit Knick auf der 45°-Linie. Begründung: Mehr von nur einem Gut erhöht den Nutzen nicht, weil das Minimum unverändert bleibt – daher die senkrechten und waagerechten Schenkel; nur gleichzeitige Erhöhung beider Güter bringt eine höhere Indifferenzkurve. Die MRS ist auf den Schenkeln 0 bzw. unendlich, am Knick nicht definiert; Substitution ist unmöglich. *(1 P Zeichnung, 1 P Nutzenfunktion, 1 P Begründung)*`
  }
  ]
},
{
  id: 'pk2', nr: 2, titel: 'Probeklausur 2', datum: '2026-11-23', dauer: 120, punkte: 120,
  schwerpunkt: 'Gesamter Stoff (Thema 1–9)',
  hinweis: 'Realbedingungen wie in der Klausur: 120 Minuten am Stück, Papier, Taschenrechner, keine Formelsammlung, Handy aus. Zuerst alle Aufgaben überfliegen und mit der sichersten beginnen. Pro Punkt etwa eine Minute.',
  aufgaben: [
  {
    nr: 1, titel: 'Haushalt: Mengensteuer oder Einkommensteuer?', themen: ['t3'], punkte: 26,
    aufgabe: String.raw`Ein Haushalt hat $m = 240$, konsumiert Benzin ($x_1$, $p_1 = 4$) und ein zusammengesetztes Gut ($x_2$, $p_2 = 8$) und hat die Nutzenfunktion $u(x_1, x_2) = x_1 \cdot x_2$.

a) Bestimmen Sie das optimale Güterbündel und das Nutzenniveau (Substitutionsverfahren oder Lagrange). **(6 P)**

b) Der Staat erhebt eine Mengensteuer von $t = 2$ je Einheit Benzin. Bestimmen Sie das neue Optimum, das Steueraufkommen und das Nutzenniveau. **(6 P)**

c) Alternativ erhebt der Staat eine Einkommensteuer (Pauschalsteuer), die genau das Aufkommen aus b) erbringt. Bestimmen Sie Optimum und Nutzen. Welche Steuer ist aus Sicht des Haushalts besser, und warum? **(6 P)**

d) Zerlegen Sie die Reaktion der Benzinnachfrage aus b) in Substitutions- und Einkommenseffekt nach Slutsky (Kompensation, sodass das alte Bündel gerade noch erschwinglich ist). Skizzieren Sie die drei Punkte. **(8 P)**`,
    loesung: String.raw`**a)** Tangentialbedingung: $MRS = \dfrac{x_2}{x_1} = \dfrac{p_1}{p_2} = \dfrac{4}{8} \Rightarrow x_1 = 2x_2$. Budget: $4 \cdot 2x_2 + 8x_2 = 240 \Rightarrow x_2^* = 15$, $x_1^* = 30$. (Cobb-Douglas: je halbes Budget: $x_1 = 120/4 = 30$, $x_2 = 120/8 = 15$ ✓.) $u^* = 450$. *(2 P Bedingung, 3 P Lösung, 1 P Nutzen)*

**b)** Neuer Preis $p_1' = 6$. $x_1 = \dfrac{m}{2p_1'} = \dfrac{240}{12} = 20$, $x_2 = 15$ (unverändert, Cobb-Douglas). Steueraufkommen $T = 2 \cdot 20 = 40$. $u = 20 \cdot 15 = 300$. *(3 P Optimum, 1 P Aufkommen, 2 P Nutzen)*

**c)** Einkommen nach Steuer: $m' = 240 - 40 = 200$, Preise unverändert. $x_1 = 200/8 = 25$, $x_2 = 200/16 = 12{,}5$. $u = 25 \cdot 12{,}5 = 312{,}5 > 300$.
Bei gleichem Aufkommen stellt die Einkommensteuer den Haushalt besser. Grund: Sie verschiebt die Budgetgerade nur parallel (reiner Einkommenseffekt). Die Mengensteuer verzerrt zusätzlich das Preisverhältnis und löst einen Substitutionseffekt aus – der Haushalt weicht von Benzin aus, was ihm Nutzen kostet, dem Staat aber nichts bringt (Zusatzlast der Besteuerung). *(3 P Optimum/Nutzen, 1 P Vergleich, 2 P Begründung)*

**d)** Altes Bündel $(30 \mid 15)$ zu neuen Preisen: $6 \cdot 30 + 8 \cdot 15 = 300$. Nötiges kompensierendes Einkommen $m'' = 300$, also $\Delta m = 60$.
Hypothetisches Optimum bei $p_1' = 6$, $m'' = 300$: $x_1 = 300/12 = 25$ (Punkt B).
**Substitutionseffekt:** $30 \to 25$, also $-5$ (relativ teureres Benzin wird ersetzt, Kaufkraft konstant).
**Einkommenseffekt:** $25 \to 20$, also $-5$ (Kaufkraftverlust durch die Steuer, Benzin ist normales Gut).
Gesamteffekt $-10$. Skizze: A $= (30 \mid 15)$ auf der alten Budgetgeraden ($x_2 = 30 - 0{,}5x_1$), C $= (20 \mid 15)$ auf der neuen ($x_2 = 30 - 0{,}75x_1$), B $= (25 \mid 18{,}75)$ auf der gedrehten, parallel nach außen verschobenen Hilfsgeraden ($x_2 = 37{,}5 - 0{,}75x_1$) durch A. *(2 P Kompensation, 2 P Punkt B, 2 P Effekte benannt und beziffert, 2 P Skizze)*`
  },
  {
    nr: 2, titel: 'Polypol: kurz- und langfristiges Gleichgewicht', themen: ['t4', 't2'], punkte: 26,
    aufgabe: String.raw`Auf einem Wettbewerbsmarkt für handgeröstete Kaffeebohnen haben alle Unternehmen die Kostenfunktion $C(y) = y^2 + 4y + 16$ ($y$ in Tonnen, Kosten in Tausend Euro). Die Marktnachfrage lautet $Q_D = 600 - 10p$.

a) Leiten Sie die Angebotsfunktion eines einzelnen Unternehmens her. Ab welchem Preis bietet es an? **(5 P)**

b) Kurzfristig sind 50 Unternehmen am Markt. Bestimmen Sie Marktangebot, Gleichgewichtspreis und -menge, die Produktionsmenge und den Gewinn je Unternehmen. **(6 P)**

c) Beschreiben Sie den Anpassungsprozess zum langfristigen Gleichgewicht und berechnen Sie langfristigen Preis, Menge je Unternehmen, Marktmenge und Anzahl der Unternehmen. **(8 P)**

d) Erklären Sie den Unterschied zwischen abnehmenden Grenzerträgen und abnehmenden Skalenerträgen. Welche Skalenerträge hat $y = x_1^{1/3}x_2^{2/3}$? **(4 P)**

e) Ein Unternehmen mit $y = x_1^{1/2}x_2^{1/2}$ zahlt $w_1 = 1$ und $w_2 = 4$. Bestimmen Sie die kostenminimale Faktorkombination für $\bar y = 12$ und die Kosten. **(3 P)**`,
    loesung: String.raw`**a)** Preisnehmer: $p = MC = 2y + 4 \Rightarrow y(p) = \dfrac{p - 4}{2}$. $AVC = y + 4$ ist minimal bei $y \to 0$ mit Wert 4, also Angebot für $p \ge 4$ (darunter $y = 0$). *(2 P Bedingung, 2 P Funktion, 1 P Schwelle)*

**b)** Marktangebot: $Q_S = 50 \cdot \dfrac{p - 4}{2} = 25p - 100$. Gleichgewicht: $600 - 10p = 25p - 100 \Rightarrow 35p = 700 \Rightarrow p^* = 20$, $Q^* = 400$. Je Unternehmen $y = (20 - 4)/2 = 8$ (Probe: $50 \cdot 8 = 400$ ✓).
Gewinn: $\pi = 20 \cdot 8 - (64 + 32 + 16) = 160 - 112 = 48 > 0$. *(2 P Marktangebot, 2 P Gleichgewicht, 2 P Menge und Gewinn)*

**c)** Positive Gewinne locken neue Anbieter an (freier Marktzutritt). Das Marktangebot verschiebt sich nach rechts, der Preis sinkt, bis der Gewinn null ist: $p = \min AC$.
$AC = y + 4 + 16/y$, $AC' = 1 - 16/y^2 = 0 \Rightarrow y = 4$, $AC(4) = 4 + 4 + 4 = 12$. Kontrolle: $MC(4) = 12$ ✓.
Langfristig: $p^{LR} = 12$, $y = 4$ je Unternehmen, $Q = 600 - 120 = 480$, Anzahl $n = 480/4 = 120$ Unternehmen (70 treten ein). Jedes Unternehmen produziert im Betriebsoptimum mit Gewinn null (Normalgewinn). *(2 P Prozess, 3 P min AC, 3 P Zahlen)*

**d)** **Abnehmende Grenzerträge:** Ein Faktor wird erhöht, die anderen bleiben fix (kurzfristig); der Zuwachs des Outputs je zusätzlicher Faktoreinheit sinkt ($\partial MP_i/\partial x_i < 0$). **Skalenerträge:** Alle Faktoren werden im gleichen Verhältnis erhöht (langfristig); gefragt ist, ob der Output unter-, über- oder proportional steigt. Beides kann gleichzeitig gelten. $y = x_1^{1/3}x_2^{2/3}$: $f(\lambda x_1, \lambda x_2) = \lambda^{1/3 + 2/3} y = \lambda y$ – **konstante** Skalenerträge, obwohl jeder Faktor einzeln abnehmende Grenzerträge hat. *(1,5 P je Begriff, 1 P Beispiel)*

**e)** $\dfrac{MP_1}{MP_2} = \dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} = \dfrac14 \Rightarrow x_1 = 4x_2$. Isoquante: $\sqrt{4x_2 \cdot x_2} = 2x_2 = 12 \Rightarrow x_2 = 6$, $x_1 = 24$. Kosten $C = 24 + 24 = 48$. *(1 P Bedingung, 1 P Faktoren, 1 P Kosten)*`
  },
  {
    nr: 3, titel: 'Monopol', themen: ['t7'], punkte: 24,
    aufgabe: String.raw`Ein Pharmaunternehmen hält das Patent auf ein Medikament. Nachfrage: $P = 120 - 2Q$ ($Q$ in Tausend Packungen, $P$ in Euro). Kosten: $C(Q) = 20Q + 500$.

a) Leiten Sie die Grenzerlösfunktion her und begründen Sie, warum der Grenzerlös unter dem Preis liegt. Bestimmen Sie gewinnmaximale Menge, Preis (Cournot-Punkt) und Gewinn. **(8 P)**

b) Welche Menge und welcher Preis ergäben sich bei vollkommener Konkurrenz (Preis = Grenzkosten)? Berechnen Sie den Wohlfahrtsverlust des Monopols und die Konsumentenrente in beiden Fällen. Zeichnen Sie Nachfrage, $MR$, $MC$, Cournot-Punkt und Wohlfahrtsdreieck. **(6 P)**

c) Der Staat erwägt einen Höchstpreis. Bestimmen Sie Menge und Wohlfahrtsverlust bei $P_{max} = 40$. Was spricht gegen einen Höchstpreis von $P_{max} = 20$? **(5 P)**

d) Angenommen, das Unternehmen könnte jedem Käufer genau seine Zahlungsbereitschaft abverlangen (perfekte Preisdifferenzierung). Bestimmen Sie Menge, Gewinn, Konsumentenrente und Wohlfahrtsverlust. **(5 P)**`,
    loesung: String.raw`**a)** $TR = P \cdot Q = 120Q - 2Q^2 \Rightarrow MR = \dfrac{dTR}{dQ} = 120 - 4Q$ (gleicher Achsenabschnitt, doppelte Steigung). $MR < P$, weil der Monopolist für eine zusätzliche Einheit den Preis **aller** Einheiten senken muss: Mengeneffekt ($+P$) minus Preiseffekt ($Q \cdot |dP/dQ|$).
$MR = MC$: $120 - 4Q = 20 \Rightarrow Q_M = 25$. Preis aus der **Nachfrage**: $P_M = 120 - 50 = 70$ (nicht im Schnittpunkt ablesen!). $\pi = 70 \cdot 25 - (20 \cdot 25 + 500) = 1750 - 1000 = 750$. *(2 P MR, 2 P Begründung, 2 P Cournot-Punkt, 2 P Gewinn)*

**b)** Wettbewerb: $P = MC = 20 \Rightarrow Q_W = 50$. $WV = \tfrac12 \cdot (50 - 25) \cdot (70 - 20) = 625$.
$KR_{Monopol} = \tfrac12 \cdot 25 \cdot (120 - 70) = 625$; $KR_{Wettbewerb} = \tfrac12 \cdot 50 \cdot (120 - 20) = 2500$. Von den 1875 verlorener KR gehen 1250 als Gewinn an den Monopolisten (Umverteilung, $50 \cdot 25$), 625 verschwinden (Wohlfahrtsverlust).
Skizze: Nachfrage von $(0 \mid 120)$ nach $(60 \mid 0)$, $MR$ von $(0 \mid 120)$ nach $(30 \mid 0)$, $MC$ waagerecht bei 20, Cournot-Punkt $(25 \mid 70)$ auf der Nachfrage, Dreieck zwischen Nachfrage und $MC$ von $Q = 25$ bis 50. *(1 P Wettbewerb, 2 P WV, 1 P KR, 2 P Zeichnung)*

**c)** $P_{max} = 40$: Bis zur Menge, bei der die Nachfrage 40 erreicht ($120 - 2Q = 40 \Rightarrow Q = 40$), ist der Grenzerlös konstant 40 (der Monopolist muss den Preis nicht senken). Da $40 > MC = 20$, produziert er bis $Q = 40$. Der Höchstpreis **erhöht** also die Menge. $WV = \tfrac12 \cdot (50 - 40) \cdot (40 - 20) = 100$. Gewinn $40 \cdot 40 - 800 - 500 = 300 > 0$.
$P_{max} = 20 = MC$: effiziente Menge 50 und $WV = 0$, aber $\pi = 20 \cdot 50 - 1000 - 500 = -500$: Die Fixkosten (Forschung) werden nicht gedeckt; langfristig würde das Medikament nicht angeboten oder nicht entwickelt. *(3 P Fall 40, 2 P Fall 20)*

**d)** Jede Einheit wird zur Zahlungsbereitschaft verkauft; der Grenzerlös ist dann die Nachfragekurve selbst. Verkauft wird, solange $P(Q) \ge MC$: $Q = 50$. Gewinn $=$ gesamte Fläche unter der Nachfrage über $MC$ minus Fixkosten $= \tfrac12 \cdot 50 \cdot 100 - 500 = 2000$. $KR = 0$, $WV = 0$. Effizient, aber die gesamte Rente geht an das Unternehmen. Voraussetzungen: Zahlungsbereitschaften erkennbar, kein Weiterverkauf (Arbitrage). *(2 P Menge, 1 P Gewinn, 1 P KR/WV, 1 P Voraussetzungen)*`
  },
  {
    nr: 4, titel: 'Externe Effekte und öffentliche Güter', themen: ['t7'], punkte: 20,
    aufgabe: String.raw`Ein Zementwerk verursacht Staubemissionen. Marktnachfrage nach Zement: $P = 90 - Q$. Private Grenzkosten: $MC_{priv} = 10 + Q$. Jede Tonne verursacht zusätzlich externe Kosten von 20 bei den Anwohnern.

a) Bestimmen Sie das Marktgleichgewicht ohne staatlichen Eingriff. **(3 P)**

b) Bestimmen Sie die volkswirtschaftlich optimale Menge und den zugehörigen Preis. **(4 P)**

c) Berechnen Sie den Wohlfahrtsverlust der Marktlösung und zeichnen Sie das Diagramm (Nachfrage, private und soziale Grenzkosten, beide Mengen, Wohlfahrtsdreieck). **(4 P)**

d) Welche Pigou-Steuer stellt das Optimum her? Wie hoch ist das Steueraufkommen? Warum ist die Steuer dem Verbot der Produktion überlegen? **(4 P)**

e) Zwei Anwohner wünschen sich einen Lärmschutzwall (öffentliches Gut, Menge $M$ in Metern Höhe). Zahlungsbereitschaften: $D_1 = 40 - M$, $D_2 = 60 - 2M$; Grenzkosten $MC = 16$. Bestimmen Sie die optimale Höhe und erklären Sie, warum hier anders aggregiert wird als bei privaten Gütern. **(5 P)**`,
    loesung: String.raw`**a)** $90 - Q = 10 + Q \Rightarrow Q_{Markt} = 40$, $P = 50$. *(3 P)*

**b)** Soziale Grenzkosten $MC_{soz} = MC_{priv} + 20 = 30 + Q$. Optimum: $90 - Q = 30 + Q \Rightarrow Q^* = 30$, $P^* = 60$. Der Markt produziert zu viel, weil die Anbieter die externen Kosten nicht tragen. *(2 P Ansatz, 2 P Lösung)*

**c)** Für jede Einheit zwischen 30 und 40 übersteigen die sozialen Grenzkosten die Zahlungsbereitschaft. $WV = \tfrac12 \cdot (40 - 30) \cdot 20 = 100$ (Dreieck zwischen $MC_{soz}$ und Nachfrage von $Q = 30$ bis 40; bei $Q = 40$ ist der Abstand genau 20). Zeichnung: Nachfrage von $(0 \mid 90)$, $MC_{priv}$ ab $(0 \mid 10)$, $MC_{soz}$ parallel 20 darüber ab $(0 \mid 30)$. *(2 P WV, 2 P Zeichnung)*

**d)** $t = 20$ je Tonne = externe Grenzkosten. Dann gilt $MC_{priv} + t = MC_{soz}$; der Markt findet $Q^* = 30$ selbst. Aufkommen $20 \cdot 30 = 600$ (kann zur Entschädigung der Anwohner verwendet werden). Ein Verbot ($Q = 0$) vernichtete auch die Einheiten, deren Nutzen die vollen Kosten übersteigt (Gesamtrente bei $Q = 30$: $\tfrac12 \cdot 30 \cdot 60 = 900$); die Steuer internalisiert die Kosten, lässt den effizienten Teil der Produktion zu und gibt Anreize zur Emissionsvermeidung. *(1 P Steuer, 1 P Aufkommen, 2 P Begründung)*

**e)** Öffentliches Gut: nicht rival, alle konsumieren dieselbe Menge. Die marginalen Zahlungsbereitschaften werden daher **vertikal** addiert: $MSB = D_1 + D_2 = 100 - 3M$ (solange beide positiv sind). $100 - 3M = 16 \Rightarrow M^* = 28$. Kontrolle: $D_1(28) = 12$, $D_2(28) = 4$, Summe $16 = MC$ ✓.
Bei privaten Gütern wird horizontal addiert (Mengen bei gegebenem Preis), weil jeder seine eigene Menge konsumiert. Problem der Bereitstellung: Jeder hat einen Anreiz, seine Zahlungsbereitschaft zu verschweigen (Trittbrettfahrer); privat würde zu wenig gebaut. *(1 P Aggregation, 2 P Lösung, 2 P Begründung)*`
  },
  {
    nr: 5, titel: 'Spieltheorie: Zinswettbewerb zweier Banken', themen: ['t9'], punkte: 12,
    aufgabe: String.raw`Zwei Banken A und B entscheiden gleichzeitig, ob sie ihren Tagesgeldzins **erhöhen** oder **halten**. Gewinne in Mio. € (A, B):

| | B: erhöhen | B: halten |
|---|---|---|
| **A: erhöhen** | (4, 4) | (8, 2) |
| **A: halten** | (2, 8) | (6, 6) |

a) Prüfen Sie, ob eine der Banken eine dominante Strategie hat. **(4 P)**

b) Bestimmen Sie das Nash-Gleichgewicht und vergleichen Sie es mit dem Pareto-Kriterium. Um welchen Spieltyp handelt es sich? **(4 P)**

c) Die Situation wiederholt sich jeden Monat. Erklären Sie, ob und warum Kooperation (beide halten) möglich wird, und was sich ändert, wenn beide Banken wissen, dass das Spiel nach genau zwölf Monaten endet. **(4 P)**`,
    loesung: String.raw`**a)** Bank A: Wenn B erhöht, ist für A „erhöhen“ besser ($4 > 2$); wenn B hält, ebenfalls ($8 > 6$). **Erhöhen ist dominante Strategie** für A. Das Spiel ist symmetrisch, also gilt dasselbe für B ($4 > 2$, $8 > 6$). *(2 P je Bank mit beiden Vergleichen)*

**b)** Nash-Gleichgewicht: (erhöhen, erhöhen) mit $(4, 4)$ – keine Bank kann sich durch einseitiges Abweichen verbessern. Das Ergebnis ist **nicht Pareto-effizient**: (halten, halten) mit $(6, 6)$ stellt beide besser. Individuell rationales Verhalten führt zu einem kollektiv schlechten Ergebnis: **Gefangenendilemma**. *(2 P NE, 1 P Pareto, 1 P Typ)*

**c)** Bei unbestimmt oft wiederholtem Spiel kann Kooperation ein Gleichgewicht sein: Eine Bank, die abweicht, wird in Zukunft bestraft (z. B. Tit-for-Tat: „Ich halte, solange du hältst“). Der kurzfristige Gewinn aus Abweichen ($8$ statt $6$) wird gegen den dauerhaften Verlust ($4$ statt $6$ in allen Folgeperioden) abgewogen; bei genügend Gewicht der Zukunft lohnt sich Kooperation.
Endet das Spiel sicher nach zwölf Runden, bricht die Kooperation durch **Rückwärtsinduktion** zusammen: In Runde 12 gibt es keine Zukunft, also wird erhöht; dann ist auch in Runde 11 keine Bestrafung mehr möglich, also wird erhöht – und so weiter bis zur ersten Runde. *(2 P Kooperationsmechanismus, 2 P Rückwärtsinduktion)*`
  },
  {
    nr: 6, titel: 'Kurzaufgaben', themen: ['t2', 't5', 't4'], punkte: 12,
    aufgabe: String.raw`**(je 4 P)**

a) Für die Nachfrage $Q_D = 300 - 5p$ gilt beim Preis $p = 40$ ein Umsatz von $4000$. Berechnen Sie die Preiselastizität der Nachfrage in diesem Punkt und begründen Sie damit, ob eine kleine Preiserhöhung den Umsatz erhöht oder senkt.

b) Arbeitsmarkt: $L^S = -10 + w$, $L^D = 20 - w$. Bestimmen Sie das Gleichgewicht. Es wird ein Mindestlohn von 18 eingeführt: Wie hoch ist die Arbeitslosigkeit? Skizze.

c) Begründen Sie ohne Rechnung, warum die Grenzkostenkurve die Durchschnittskostenkurve in deren Minimum schneidet. Verwenden Sie den Vergleich mit einem Notendurchschnitt.`,
    loesung: String.raw`**a)** $\varepsilon = \dfrac{dQ}{dp} \cdot \dfrac{p}{Q} = -5 \cdot \dfrac{40}{100} = -2$. Betrag größer als 1: **elastische** Nachfrage. Eine Preiserhöhung um 1 % senkt die Menge um 2 %, der Umsatz $p \cdot Q$ sinkt also. Probe: $p = 41$: $Q = 95$, Umsatz $3895 < 4000$ ✓. *(2 P Elastizität, 2 P Schluss)*

**b)** $-10 + w = 20 - w \Rightarrow w^* = 15$, $L^* = 5$. Mindestlohn $18 > 15$, bindend: $L^S(18) = 8$, $L^D(18) = 2$. Beschäftigt werden 2 (kurze Marktseite), Arbeitslosigkeit $8 - 2 = 6$. Skizze: steigendes Angebot ab $w = 10$, fallende Nachfrage ab $w = 20$, waagerechte Linie bei 18, Abstand zwischen den Kurven = Arbeitslosigkeit. *(1 P Gleichgewicht, 2 P Arbeitslosigkeit, 1 P Skizze)*

**c)** Die Durchschnittskosten sind der „Notendurchschnitt“ aller bisher produzierten Einheiten, die Grenzkosten die „Note“ der nächsten Einheit. Ist die nächste Note besser (niedriger) als der Durchschnitt, sinkt der Durchschnitt; ist sie schlechter (höher), steigt er. Solange $MC < AC$, fällt $AC$; sobald $MC > AC$, steigt $AC$. Der Übergang – das Minimum von $AC$ – liegt also genau dort, wo $MC = AC$. Formal: $AC' = (MC - AC)/y$. *(2 P Analogie, 2 P Übertragung auf MC/AC)*`
  }
  ]
},
{
  id: 'pk3', nr: 3, titel: 'Probeklausur 3', datum: '2026-11-25', dauer: 120, punkte: 120,
  schwerpunkt: 'Gesamter Stoff, anspruchsvoller, mit Transferaufgaben',
  hinweis: 'Die schwerste der drei. Danach nur noch kleine Lücken schließen, nichts Neues anfangen. Wenn eine Aufgabe nicht aufgeht: Ansatz hinschreiben, weitergehen, am Ende zurückkommen.',
  aufgaben: [
  {
    nr: 1, titel: 'Haushalt: Subvention, Rationierung, Komplemente', themen: ['t3'], punkte: 26,
    aufgabe: String.raw`Ein Haushalt mit $m = 400$ konsumiert ÖPNV-Fahrten ($x_1$, $p_1 = 5$) und sonstige Güter ($x_2$, $p_2 = 10$). Nutzenfunktion: $u(x_1, x_2) = x_1^{1/4} x_2^{3/4}$.

a) Bestimmen Sie das Optimum mit dem Lagrange-Verfahren. Welche Einkommensanteile entfallen auf die Güter? **(8 P)**

b) Die Stadt subventioniert jede Fahrt mit 1 €. Bestimmen Sie das neue Optimum und die Kosten der Subvention für die Stadt. **(5 P)**

c) Statt der Subvention (also bei $p_1 = 5$) wird der ÖPNV rationiert: höchstens 15 Fahrten je Monat. Bestimmen Sie das Optimum, skizzieren Sie die Budgetmenge und erklären Sie, warum keine Tangentiallösung vorliegt. **(6 P)**

d) Ein anderer Haushalt hat $u(x_1, x_2) = \min\{x_1,\ 2x_2\}$ bei denselben Preisen und $m = 400$. Bestimmen Sie sein Optimum und die allgemeine Nachfragefunktion $x_1(p_1, p_2, m)$. Warum hat eine Preisänderung bei ihm keinen Substitutionseffekt? **(7 P)**`,
    loesung: String.raw`**a)** $\mathcal{L} = x_1^{1/4}x_2^{3/4} - \lambda(5x_1 + 10x_2 - 400)$.
(1) $\tfrac14 x_1^{-3/4}x_2^{3/4} = 5\lambda$ &nbsp; (2) $\tfrac34 x_1^{1/4}x_2^{-1/4} = 10\lambda$ &nbsp; (3) $5x_1 + 10x_2 = 400$.
(1) ÷ (2): $\dfrac{\tfrac14 x_2}{\tfrac34 x_1} = \dfrac{x_2}{3x_1} = \dfrac{5}{10} \Rightarrow x_2 = 1{,}5x_1$.
In (3): $5x_1 + 15x_1 = 400 \Rightarrow x_1^* = 20$, $x_2^* = 30$. Probe: $100 + 300 = 400$ ✓.
Einkommensanteile: Gut 1: $100/400 = 1/4$, Gut 2: $300/400 = 3/4$ – genau die Exponenten (Cobb-Douglas-Regel $\frac{c}{c+d}$, $\frac{d}{c+d}$). *(2 P Ansatz, 3 P Bedingungen und Tangentialbedingung, 2 P Lösung, 1 P Anteile)*

**b)** $p_1' = 4$. Cobb-Douglas: $x_1 = \frac14 \cdot 400/4 = 25$, $x_2 = \frac34 \cdot 400/10 = 30$ (unverändert). Kosten der Subvention: $1 \cdot 25 = 25$ €. Der Haushalt gibt weiterhin 100 € für den ÖPNV aus, fährt aber 25 statt 20 Mal. *(3 P Optimum, 2 P Kosten)*

**c)** Unbeschränktes Optimum $x_1 = 20 > 15$: Die Rationierung ist bindend. Budgetmenge: Dreieck unter $x_2 = 40 - 0{,}5x_1$, bei $x_1 = 15$ senkrecht abgeschnitten. Optimum in der **Ecke**: $x_1 = 15$, $x_2 = (400 - 75)/10 = 32{,}5$.
Keine Tangentiallösung: Dort gilt $MRS = \dfrac{x_2}{3x_1} = \dfrac{32{,}5}{45} \approx 0{,}72 > \dfrac{p_1}{p_2} = 0{,}5$. Der Haushalt wäre bereit, mehr für Fahrten zu zahlen als der Markt verlangt, darf aber nicht mehr kaufen; die Indifferenzkurve schneidet die Budgetgerade an der Ecke. Nutzen sinkt: $15^{1/4} \cdot 32{,}5^{3/4} \approx 26{,}8$ gegenüber $20^{1/4} \cdot 30^{3/4} \approx 27{,}1$. *(2 P Ecklösung, 2 P Skizze, 2 P MRS-Argument)*

**d)** Perfekte Komplemente im Verhältnis 2 Fahrten je Einheit Gut 2. Kein Geld wird für überschüssige Einheiten verschwendet: $x_1 = 2x_2$. Budget: $5 \cdot 2x_2 + 10x_2 = 400 \Rightarrow x_2 = 20$, $x_1 = 40$.
Allgemein: $p_1 \cdot 2x_2 + p_2x_2 = m \Rightarrow x_2 = \dfrac{m}{2p_1 + p_2}$, $x_1 = \dfrac{2m}{2p_1 + p_2}$.
Kein Substitutionseffekt: Die Indifferenzkurven sind L-förmig, das Optimum liegt immer am Knick auf dem Strahl $x_1 = 2x_2$. Eine Preisänderung dreht die Budgetgerade, aber bei konstantem Nutzen bleibt der Knick derselbe Punkt – der Haushalt kann nicht substituieren. Die gesamte Mengenreaktion ist Einkommenseffekt. *(2 P Bedingung, 2 P Optimum, 2 P Nachfragefunktion, 1 P Begründung)*`
  },
  {
    nr: 2, titel: 'Unternehmen: Gewinnmaximierung und Kostenfunktion', themen: ['t4'], punkte: 24,
    aufgabe: String.raw`Ein Unternehmen produziert langfristig mit $y = x_1^{1/4}x_2^{1/2}$. Faktorpreise $w_1 = 1$, $w_2 = 2$; Marktpreis $p = 8$.

a) Stellen Sie die Gewinnfunktion auf und leiten Sie die Bedingungen erster Ordnung her. Interpretieren Sie eine davon ökonomisch. **(10 P)**

b) Berechnen Sie die gewinnmaximierenden Faktormengen, die Produktionsmenge und den Gewinn. **(4 P)**

c) Zeigen Sie mit dem Kostenminimierungsansatz, dass dieselben Faktormengen für $\bar y = 8$ kostenminimal sind, und leiten Sie die langfristige Kostenfunktion $C(y)$ her. Prüfen Sie $MC(8) = p$. **(6 P)**

d) Warum hätte das Gewinnmaximierungsproblem bei konstanten Skalenerträgen (z. B. $y = x_1^{1/2}x_2^{1/2}$) im Polypol keine eindeutige Lösung? **(4 P)**`,
    loesung: String.raw`**a)** $\pi(x_1, x_2) = 8x_1^{1/4}x_2^{1/2} - x_1 - 2x_2$.
(1) $\dfrac{\partial\pi}{\partial x_1} = 2x_1^{-3/4}x_2^{1/2} - 1 = 0$
(2) $\dfrac{\partial\pi}{\partial x_2} = 4x_1^{1/4}x_2^{-1/2} - 2 = 0$
Interpretation von (1): $p \cdot MP_1 = w_1$ – der Wert des Grenzprodukts von Faktor 1 (zusätzlicher Erlös durch eine Einheit mehr) ist gleich seinem Preis. Solange $p\,MP_1 > w_1$, lohnt mehr Einsatz; darüber hinaus nicht. *(2 P Gewinnfunktion, 3 P je Bedingung, 2 P Interpretation)*

**b)** Aus (1): $x_2^{1/2} = \tfrac12 x_1^{3/4}$. Aus (2): $x_2^{1/2} = 2x_1^{1/4}$. Gleichsetzen: $\tfrac12 x_1^{3/4} = 2x_1^{1/4} \Rightarrow x_1^{1/2} = 4 \Rightarrow x_1^* = 16$. Dann $x_2^{1/2} = 2 \cdot 16^{1/4} = 2 \cdot 2 = 4 \Rightarrow x_2^* = 16$.
$y^* = 16^{1/4} \cdot 16^{1/2} = 2 \cdot 4 = 8$. $\pi^* = 8 \cdot 8 - 16 - 32 = 16$. (Skalenerträge $1/4 + 1/2 = 3/4 < 1$: Maximum existiert.) *(2 P Faktoren, 1 P Menge, 1 P Gewinn)*

**c)** $\min\ x_1 + 2x_2$ u.d.N. $x_1^{1/4}x_2^{1/2} = \bar y$. Tangentialbedingung: $\dfrac{MP_1}{MP_2} = \dfrac{\tfrac14 x_1^{-3/4}x_2^{1/2}}{\tfrac12 x_1^{1/4}x_2^{-1/2}} = \dfrac{x_2}{2x_1} = \dfrac{w_1}{w_2} = \dfrac12 \Rightarrow x_2 = x_1$.
In die Isoquante: $x_1^{1/4}x_1^{1/2} = x_1^{3/4} = \bar y \Rightarrow x_1 = x_2 = \bar y^{4/3}$. Für $\bar y = 8$: $8^{4/3} = 16$ ✓ – dieselben Mengen wie in b).
Kostenfunktion: $C(y) = x_1 + 2x_2 = 3y^{4/3}$. $MC = 4y^{1/3}$, $MC(8) = 4 \cdot 2 = 8 = p$ ✓ – Gewinnmaximierung schließt Kostenminimierung ein und erfüllt $p = MC$. *(2 P Tangentialbedingung, 2 P Kostenfunktion, 2 P MC-Probe)*

**d)** Bei konstanten Skalenerträgen sind die langfristigen Durchschnitts- und Grenzkosten konstant ($C(y) = c \cdot y$). Ist $p > c$, steigt der Gewinn mit jeder Einheit unbegrenzt – keine endliche Lösung; ist $p < c$, ist $y = 0$ optimal; ist $p = c$, ist jede Menge gleich gut (Gewinn null). Die Bedingung $p = MC$ legt dann keine Menge fest, und die Bedingung zweiter Ordnung ($MC$ steigend) ist verletzt. Deshalb braucht das Polypol-Modell abnehmende Skalenerträge oder Fixkosten für eine bestimmte Unternehmensgröße. *(2 P Fallunterscheidung, 2 P Bezug zu den Bedingungen)*`
  },
  {
    nr: 3, titel: 'Steuerinzidenz, Elastizität, Subvention', themen: ['t2', 't8'], punkte: 22,
    aufgabe: String.raw`Markt für Flugtickets einer Strecke: $Q_D = 400 - 4p$, $Q_S = 6p - 100$.

a) Berechnen Sie das Gleichgewicht sowie Preiselastizität der Nachfrage und des Angebots im Gleichgewicht. **(6 P)**

b) Eine Ticketabgabe von 10 € je Ticket wird bei den **Käufern** erhoben. Bestimmen Sie Käuferpreis, Verkäuferpreis, Menge, Steueraufkommen, Wohlfahrtsverlust und die Lastverteilung. Zeigen Sie, dass die Lastverteilung dem Elastizitätsverhältnis entspricht. **(8 P)**

c) Zeigen Sie rechnerisch, dass sich dasselbe Ergebnis ergibt, wenn die Abgabe bei den Fluggesellschaften erhoben wird. **(4 P)**

d) Stattdessen subventioniert der Staat jedes Ticket mit 10 €. Bestimmen Sie Käuferpreis, Verkäuferpreis, Menge, Kosten für den Staat und den Wohlfahrtsverlust. Warum entsteht auch bei einer Subvention ein Wohlfahrtsverlust? **(4 P)**`,
    loesung: String.raw`**a)** $400 - 4p = 6p - 100 \Rightarrow p^* = 50$, $Q^* = 200$. $\varepsilon_D = -4 \cdot \dfrac{50}{200} = -1$ (einheitselastisch). $\varepsilon_S = 6 \cdot \dfrac{50}{200} = 1{,}5$. *(2 P Gleichgewicht, 2 P je Elastizität)*

**b)** Käufer zahlen $p_V + 10$: $Q_D' = 400 - 4(p_V + 10) = 360 - 4p_V$. Gleichgewicht: $360 - 4p_V = 6p_V - 100 \Rightarrow p_V = 46$, $p_K = 56$, $Q = 176$.
Aufkommen $T = 10 \cdot 176 = 1760$. $WV = \tfrac12 \cdot (200 - 176) \cdot 10 = 120$.
Lastverteilung: Käufer $56 - 50 = 6$ (60 %), Verkäufer $50 - 46 = 4$ (40 %). Elastizitäten: Anteil der Käufer $= \dfrac{\varepsilon_S}{|\varepsilon_D| + \varepsilon_S} = \dfrac{1{,}5}{2{,}5} = 0{,}6$ ✓. Die unelastischere Seite (Nachfrage) trägt mehr, weil sie weniger ausweichen kann. *(2 P Verschiebung, 2 P Preise/Menge, 1 P Aufkommen, 1 P WV, 2 P Verteilung mit Elastizitätsformel)*

**c)** Anbieter erhalten $p_K - 10$: $Q_S' = 6(p_K - 10) - 100 = 6p_K - 160$. $400 - 4p_K = 6p_K - 160 \Rightarrow p_K = 56$, $p_V = 46$, $Q = 176$. Identisch: Die ökonomische Inzidenz hängt nur von den Elastizitäten ab, nicht davon, wer die Steuer abführt (Steuerkeil zwischen Nachfrage- und Angebotskurve ist derselbe). *(3 P Rechnung, 1 P Schluss)*

**d)** Anbieter erhalten $p_K + 10$: $Q_S'' = 6(p_K + 10) - 100 = 6p_K - 40$. $400 - 4p_K = 6p_K - 40 \Rightarrow p_K = 44$, $p_V = 54$, $Q = 224$. Kosten $10 \cdot 224 = 2240$. $WV = \tfrac12 \cdot (224 - 200) \cdot 10 = 120$.
Wohlfahrtsverlust, weil für die Einheiten 201 bis 224 die Zahlungsbereitschaft der Käufer unter den Grenzkosten der Anbieter liegt: Die Subvention erzeugt Tickets, deren Kosten höher sind als ihr Wert; die Gewinne an KR und PR sind kleiner als die Ausgaben des Staates. *(2 P Zahlen, 2 P Begründung)*`
  },
  {
    nr: 4, titel: 'Arbeitsmarkt: Nachfrage und Angebot', themen: ['t5'], punkte: 16,
    aufgabe: String.raw`a) Ein Unternehmen produziert kurzfristig mit $y = 20\sqrt{L}$ und verkauft zum Preis $p = 3$. Leiten Sie die Arbeitsnachfragefunktion $L^D(w)$ her und erklären Sie, warum sie fallend verläuft. **(6 P)**

b) Bestimmen Sie für $w = 10$ Beschäftigung, Produktion und Gewinn (keine weiteren Kosten). **(3 P)**

c) Der Lohn steigt auf $w = 15$. Wie reagiert die Beschäftigung? Wie heißt dieser Effekt, und welcher zweite Effekt käme langfristig hinzu? **(3 P)**

d) Ein Arbeitnehmer hat $u(C, h) = C^{1/3}h^{2/3}$, $T = 16$, kein sonstiges Einkommen. Bestimmen Sie sein Arbeitsangebot bei $w = 10$ und bei $w = 15$. Erklären Sie das Ergebnis mit Einkommens- und Substitutionseffekt. **(4 P)**`,
    loesung: String.raw`**a)** $\pi = p \cdot 20\sqrt{L} - wL$. $\dfrac{d\pi}{dL} = p \cdot \dfrac{10}{\sqrt L} - w = 0 \Rightarrow p \cdot MP_L = w$: $\dfrac{30}{\sqrt L} = w \Rightarrow L^D(w) = \dfrac{900}{w^2}$.
Fallend, weil das Grenzprodukt der Arbeit abnimmt ($MP_L = 10/\sqrt L$ sinkt in $L$): Jede weitere Arbeitsstunde bringt weniger zusätzlichen Erlös, also wird nur bei niedrigerem Lohn mehr eingestellt. Die Arbeitsnachfrage ist der Wertgrenzproduktverlauf $p \cdot MP_L$. *(2 P Ansatz, 2 P Funktion, 2 P Begründung)*

**b)** $L = 900/100 = 9$, $y = 20 \cdot 3 = 60$, $\pi = 3 \cdot 60 - 10 \cdot 9 = 180 - 90 = 90$. *(1 P je Größe)*

**c)** $L = 900/225 = 4$: Beschäftigung sinkt von 9 auf 4. Kurzfristig ist das der **Skaleneffekt** (Produktion wird gedrosselt, weil Arbeit teurer ist; $y$ sinkt auf 40). Langfristig kommt der **Substitutionseffekt** hinzu: Arbeit wird durch Kapital ersetzt. Beide wirken in dieselbe Richtung – anders als beim Arbeitsangebot. *(1 P Zahl, 2 P Effekte)*

**d)** Cobb-Douglas mit $E = 0$: $h^* = \dfrac{d}{c+d} \cdot \dfrac{wT}{w} = \dfrac23 \cdot 16 = 10{,}67$ Stunden – **unabhängig vom Lohn**. $L^* = 5{,}33$ Stunden bei $w = 10$ und bei $w = 15$. (Konsum steigt von 53,3 auf 80.)
Der Substitutionseffekt der Lohnerhöhung (Freizeit teurer, mehr arbeiten) und der Einkommenseffekt (reicher, mehr Freizeit) heben sich bei dieser Nutzenfunktion genau auf. Der Arbeitnehmer gibt konstant ein Drittel seiner Zeit für Arbeit her. Mit zusätzlichem Einkommen $E > 0$ oder anderen Präferenzen wäre die Reaktion positiv oder negativ. *(2 P Rechnung, 2 P Erklärung)*`
  },
  {
    nr: 5, titel: 'Sequenzielles Spiel: Markteintritt', themen: ['t9'], punkte: 14,
    aufgabe: String.raw`Eine Fintech-Firma (E) überlegt, in den Markt einer etablierten Bank (I) einzutreten. Zuerst entscheidet E über **Eintritt** oder **Verzicht**. Bei Eintritt entscheidet I, ob sie einen **Preiskampf** beginnt oder den Eintritt **duldet**. Auszahlungen (E, I): Verzicht: $(0, 10)$; Eintritt und Preiskampf: $(-2, 2)$; Eintritt und Dulden: $(4, 5)$.

a) Zeichnen Sie den Spielbaum. **(3 P)**

b) Lösen Sie das Spiel durch Rückwärtsinduktion und geben Sie das Ergebnis an. **(5 P)**

c) Vor dem Eintritt droht I öffentlich mit einem Preiskampf. Ist die Drohung glaubwürdig? Zeigen Sie, dass (Verzicht, Preiskampf) zwar ein Nash-Gleichgewicht der Normalform ist, aber nicht teilspielperfekt. Wie könnte I die Drohung glaubwürdig machen? **(6 P)**`,
    loesung: String.raw`**a)** Wurzel: E wählt Verzicht (Endknoten $(0, 10)$) oder Eintritt. Nach Eintritt Knoten von I mit Preiskampf $(-2, 2)$ oder Dulden $(4, 5)$. *(3 P: Reihenfolge, Verzweigungen, Auszahlungen)*

**b)** Letzter Zug zuerst: Steht I nach dem Eintritt vor der Wahl, erhält sie bei Dulden 5, bei Preiskampf 2 – sie **duldet**. E antizipiert das: Eintritt bringt 4, Verzicht 0 – E **tritt ein**. Teilspielperfektes Gleichgewicht: (Eintritt, Dulden) mit Auszahlung $(4, 5)$. *(2 P Zug von I, 2 P Zug von E, 1 P Ergebnis)*

**c)** Die Drohung ist **nicht glaubwürdig**: Ist der Eintritt erst erfolgt, schadet sich I mit dem Preiskampf selbst ($2 < 5$). Ein rationaler Spieler führt eine solche Drohung nicht aus; E weiß das.
Normalform (Strategien: E $\in$ {Eintritt, Verzicht}, I $\in$ {Preiskampf, Dulden}): Bei (Verzicht, Preiskampf) kann E nicht gewinnen, wenn E zu Eintritt wechselt ($-2 < 0$), und I ist indifferent, weil ihr Zug nicht erreicht wird ($10$ in beiden Fällen) – also ein Nash-Gleichgewicht. Es ist aber **nicht teilspielperfekt**, weil im Teilspiel nach dem Eintritt „Preiskampf“ keine beste Antwort ist. Nash-Gleichgewichte können auf leeren Drohungen beruhen; Teilspielperfektheit schließt das aus.
Glaubwürdig würde die Drohung durch **Selbstbindung**: z. B. irreversible Investition in Überkapazitäten, die den Preiskampf billig macht, oder ein Ruf aus früheren Märkten, der die Auszahlung bei Dulden senkt – sodass Preiskampf nach dem Eintritt tatsächlich besser für I ist. *(2 P Unglaubwürdigkeit, 2 P NE vs. Teilspielperfektheit, 2 P Selbstbindung)*`
  },
  {
    nr: 6, titel: 'Transfer: Allmende, Coase, Konsumentenrente', themen: ['t7', 't6', 't1'], punkte: 18,
    aufgabe: String.raw`**(je 6 P)**

a) Ein Küstengewässer wird von vielen Fischern befischt, der Bestand geht zurück. Ordnen Sie das Gut in die Gütertypologie ein, erklären Sie den Mechanismus der Übernutzung mit externen Effekten und nennen Sie zwei Lösungsansätze mit ihrem Nachteil.

b) Eine Druckerei erzielt mit Nachtbetrieb einen Gewinn von 100, ohne Nachtbetrieb 60. Der Nachbar erleidet durch den Lärm einen Schaden von 30. Verhandlungen sind kostenlos. Bestimmen Sie das effiziente Ergebnis und zeigen Sie für beide Rechtszuteilungen (Recht auf Ruhe beim Nachbarn; Recht auf Betrieb bei der Druckerei), wer wem wie viel zahlt. Was folgt daraus?

c) Die Nachfrage nach einem Streamingdienst sei $Q_D = 100 - 2p$. Der Preis sinkt von 30 auf 20. Berechnen Sie die Veränderung der Konsumentenrente und zerlegen Sie sie in den Anteil der bisherigen und den der neuen Kunden.`,
    loesung: String.raw`**a)** Fischbestand: **rival** (jeder gefangene Fisch fehlt den anderen) und **nicht ausschließbar** (offener Zugang) – ein **Allmendegut**. Jeder Fischer trägt die vollen Erträge seines Fangs, aber nur einen Bruchteil der Kosten des sinkenden Bestands; die übrigen Kosten sind **negative externe Effekte** auf die anderen Fischer und künftige Perioden. Individuell rational wird gefischt, bis der Durchschnittsertrag den Kosten entspricht, nicht bis der soziale Grenzertrag den Kosten entspricht – Übernutzung („Tragik der Allmende“).
Lösungen: (1) Fangquoten oder handelbare Fangrechte (Eigentumsrechte schaffen) – Nachteil: Kontrolle und Zuteilung sind aufwendig, Verteilungskonflikte. (2) Pigou-Abgabe je Fang – Nachteil: Höhe der externen Kosten schwer messbar. (3) Privatisierung/Zugangsbeschränkung – Nachteil: bei beweglichen Beständen kaum durchsetzbar. *(2 P Einordnung, 2 P Mechanismus, 2 P Lösungen mit Nachteil)*

**b)** Gesamtwohlfahrt: mit Nachtbetrieb $100 - 30 = 70$, ohne $60$. **Effizient: Nachtbetrieb.**
Recht auf Ruhe beim Nachbarn: Die Druckerei gewinnt 40 durch Nachtbetrieb, der Nachbar verliert 30. Sie zahlt ihm einen Betrag $z$ mit $30 \le z \le 40$ – beide sind besser gestellt, Nachtbetrieb findet statt.
Recht auf Betrieb bei der Druckerei: Der Nachbar könnte höchstens 30 zahlen, damit sie nachts ruht; sie verlangt mindestens 40. Keine Einigung, Nachtbetrieb bleibt – ebenfalls effizient, der Nachbar trägt den Schaden.
**Coase-Theorem:** Bei kostenlosen Verhandlungen und klaren Rechten ist das Ergebnis unabhängig von der Rechtszuteilung effizient; die Zuteilung bestimmt nur die **Verteilung** (wer zahlt). Grenzen: Transaktionskosten, viele Betroffene, unvollständige Information. *(1 P Effizienz, 2 P je Zuteilung, 1 P Folgerung)*

**c)** $Q_1 = 100 - 60 = 40$, $Q_2 = 100 - 40 = 60$. $\Delta KR = \underbrace{Q_1 \cdot (p_1 - p_2)}_{\text{Bestandskunden}} + \underbrace{\tfrac12 (Q_2 - Q_1)(p_1 - p_2)}_{\text{neue Kunden}} = 40 \cdot 10 + \tfrac12 \cdot 20 \cdot 10 = 400 + 100 = 500$.
Probe: $KR$ vorher $\tfrac12 \cdot 40 \cdot (50 - 30) = 400$, nachher $\tfrac12 \cdot 60 \cdot (50 - 20) = 900$, Differenz 500 ✓. Die Bestandskunden sparen je 10 € (Rechteck), die 20 neuen Kunden gewinnen im Schnitt 5 € (Dreieck), weil ihre Zahlungsbereitschaft zwischen 20 und 30 liegt. *(2 P Mengen, 2 P Zerlegung, 2 P Rechnung mit Probe)*`
  }
  ]
}
];
