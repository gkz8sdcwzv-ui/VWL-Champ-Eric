window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'c1', thema: 't5', titel: 'Arbeitsmarktgleichgewicht und Lohnanpassung', schwierigkeit: 1, punkte: 7, zeit: 8,
  aufgabe: String.raw`In einer Region gelten $L^S = -10 + w$ und $L^D = 20 - w$ (Arbeit in Tausend Stunden, Lohn in €).

a) Zeichnen Sie beide Kurven und berechnen Sie Gleichgewichtslohn und -beschäftigung.
b) Der Lohn beträgt $w = 12$. Berechnen Sie Angebot und Nachfrage. Was beobachtet man, und wie passt sich der Lohn an?
c) Dasselbe für $w = 18$.`,
  hinweis: 'Gleichsetzen. Bei $w < w^*$: Nachfrage größer als Angebot.',
  ansatz: String.raw`$-10 + w = 20 - w$.`,
  loesung: String.raw`**a)** $-10 + w = 20 - w \Rightarrow 2w = 30 \Rightarrow w^* = 15$, $L^* = 5$. Grafik: horizontal $L$, vertikal $w$. Angebot startet bei $w = 10$ ($L^S = 0$) und steigt mit Steigung 1. Nachfrage startet bei $w = 20$ und fällt. Schnittpunkt $(5 \mid 15)$.

**b)** $w = 12$: $L^D = 8$, $L^S = 2$. Nachfrageüberschuss von 6: Unternehmen haben **Vakanzen**. Sie müssen höhere Löhne bieten, um Stellen zu besetzen; bei höheren Löhnen bieten mehr Menschen Arbeit an. Der Lohn steigt bis 15.

**c)** $w = 18$: $L^S = 8$, $L^D = 2$. Angebotsüberschuss von 6: **Arbeitslose**. Arbeitskräfte akzeptieren niedrigere Löhne; bei niedrigeren Löhnen fragen Unternehmen mehr nach. Der Lohn sinkt bis 15.

*Klausurpunkte:* 3 für a) mit Grafik, je 2 für b) und c) mit Anpassungsmechanismus. Typischer Verlust: Vakanzen und Arbeitslose vertauscht.`
},
{
  id: 'c2', thema: 't5', titel: 'Budgetgerade im Freizeit-Konsum-Modell', schwierigkeit: 1, punkte: 7, zeit: 8,
  aufgabe: String.raw`Jonas hat $T = 16$ Stunden am Tag, verdient $w = 15$ € pro Stunde und hat kein sonstiges Einkommen.

a) Leiten Sie die Budgetgerade her und zeichnen Sie sie ($h$ horizontal, $C$ vertikal). Beschriften Sie Achsenabschnitte, Endpunkt und Steigung.
b) Jonas erhält zusätzlich $E = 60$ € am Tag aus einer Erbschaft. Neue Budgetgerade? Was ändert sich grafisch?
c) Statt der Erbschaft steigt sein Lohn auf 20 €. Neue Budgetgerade? Um welchen Punkt dreht sie sich?`,
  hinweis: 'Zeit $h + L = T$, Konsum $C = wL + E$, $L$ eliminieren.',
  ansatz: String.raw`$C = w(T - h) + E = wT + E - wh$.`,
  loesung: String.raw`**a)** $L = 16 - h$, $C = 15L = 15(16 - h) = 240 - 15h$. Vertikaler Achsenabschnitt $C_{max} = 240$ (16 Stunden arbeiten, keine Freizeit). Endpunkt bei $h = 16$: $C = 0$. Steigung $-15$: Jede Stunde Freizeit kostet 15 € Konsum.

**b)** $C = 240 + 60 - 15h = 300 - 15h$. Parallelverschiebung nach oben um 60: $C_{max} = 300$, bei $h = 16$ bleibt $C = 60$ – auch ohne Arbeit kann Jonas 60 € konsumieren. Steigung unverändert.

**c)** $C = 20 \cdot 16 - 20h = 320 - 20h$. Die Gerade wird steiler und dreht sich um den Endpunkt $(16 \mid 0)$ – wer nicht arbeitet, hat vom höheren Lohn nichts. $C_{max}$ steigt von 240 auf 320.

*Klausurpunkte:* 3 für a), 2 für b), 2 für c). Typischer Verlust: Drehpunkt falsch (nicht der Achsenabschnitt, sondern $(T, E)$).`
},
{
  id: 'c3', thema: 't5', titel: 'Optimales Arbeitsangebot mit Lagrange', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Jonas (aus C2: $T = 16$, $w = 15$, $E = 0$) hat die Nutzenfunktion $u(C, h) = C^{1/2}h^{1/2}$.

a) Stellen Sie das Nutzenmaximierungsproblem und die Lagrange-Funktion in der Notation der Folien auf.
b) Leiten Sie die drei Bedingungen erster Ordnung her und daraus die Tangentialbedingung.
c) Berechnen Sie $h^*$, $L^*$ und $C^*$. Beschreiben Sie die Grafik.`,
  hinweis: '$\\mathcal{L} = u(C,h) - \\lambda(C - wT - E + wh)$. (2) durch (1) teilen.',
  ansatz: String.raw`Tangentialbedingung bei $u = C^{1/2}h^{1/2}$: $\dfrac{C}{h} = w$.`,
  loesung: String.raw`**a)** $\max_{C,h}\ C^{1/2}h^{1/2}$ u.d.N. $C = 240 - 15h$.
$\mathcal{L} = C^{1/2}h^{1/2} - \lambda\,(C - 240 + 15h)$.

**b)** (1) $\dfrac{\partial\mathcal{L}}{\partial C} = \tfrac12 C^{-1/2}h^{1/2} - \lambda = 0$
(2) $\dfrac{\partial\mathcal{L}}{\partial h} = \tfrac12 C^{1/2}h^{-1/2} - 15\lambda = 0$
(3) $\dfrac{\partial\mathcal{L}}{\partial\lambda} = -(C - 240 + 15h) = 0$
(2) ÷ (1): $\dfrac{\tfrac12 C^{1/2}h^{-1/2}}{\tfrac12 C^{-1/2}h^{1/2}} = \dfrac{C}{h} = 15$. Allgemein $\dfrac{\partial u/\partial h}{\partial u/\partial C} = w$: MRS zwischen Freizeit und Konsum gleich Lohn.

**c)** $C = 15h$ in (3): $15h = 240 - 15h \Rightarrow h^* = 8$, $L^* = 8$, $C^* = 120$. Probe mit der Abkürzung: $h^* = \frac12 \cdot \frac{240}{15} = 8$ ✓.
Grafik: Budgetgerade von $(0 \mid 240)$ nach $(16 \mid 0)$; Indifferenzkurve $C = u^2/h$ mit $u^* = \sqrt{120 \cdot 8} \approx 31$ berührt sie in B $= (8 \mid 120)$. Punkte auf der Geraden links oder rechts von B liegen auf niedrigeren Indifferenzkurven.

*Klausurpunkte:* 2 für Ansatz, 4 für Bedingungen und Tangentialbedingung, 4 für Lösung und Grafik. Typischer Verlust: Vorzeichen in der Nebenbedingung vertauscht oder (1) durch (2) geteilt und dann $h/C = w$ geschrieben.`
},
{
  id: 'c4', thema: 't5', titel: 'Einkommenseffekt eines Grundeinkommens', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Jonas (C3) erhält ein lohnunabhängiges Grundeinkommen von $E = 60$ € am Tag.

a) Berechnen Sie das neue Optimum $(h^*, L^*, C^*)$.
b) Erklären Sie die Veränderung grafisch und benennen Sie den Effekt.
c) Ein Politiker behauptet, ein Grundeinkommen verändere das Arbeitsangebot nicht, weil der Lohn gleich bleibt. Nehmen Sie Stellung.`,
  hinweis: 'Cobb-Douglas-Abkürzung mit vollem Einkommen $wT + E$.',
  ansatz: String.raw`$h^* = \frac12 \cdot \frac{wT + E}{w}$.`,
  loesung: String.raw`**a)** Tangentialbedingung weiterhin $C = 15h$. Budget: $C = 300 - 15h$. $15h = 300 - 15h \Rightarrow h^* = 10$, $L^* = 6$, $C^* = 150$. (Abkürzung: $h^* = \frac12\cdot\frac{300}{15} = 10$.)

**b)** Die Budgetgerade verschiebt sich parallel nach oben (Steigung $-15$ bleibt, $C_{max}$ von 240 auf 300). Der Tangentialpunkt wandert auf eine höhere Indifferenzkurve nach rechts oben: mehr Freizeit (8 → 10), mehr Konsum (120 → 150), weniger Arbeit (8 → 6). Das ist der reine **Einkommenseffekt**: Freizeit ist ein normales Gut, von dem man sich bei höherem Einkommen mehr leistet.

**c)** Die Behauptung ist falsch. Der Lohn und damit der Substitutionseffekt bleiben zwar unverändert, aber das Grundeinkommen erhöht das verfügbare Einkommen, und dieser Einkommenseffekt senkt das Arbeitsangebot – im Beispiel um zwei Stunden täglich. Wie stark, hängt von den Präferenzen ab; bei Cobb-Douglas geht die Hälfte des zusätzlichen Einkommens in zusätzliche Freizeit (60 € / 15 € = 4 Stunden, davon die Hälfte, also 2 Stunden).

*Klausurpunkte:* 3 für a), 3 für b), 2 für c). Typischer Verlust: Drehung statt Parallelverschiebung gezeichnet.`
},
{
  id: 'c5', thema: 't5', titel: 'Lohnerhöhung: Einkommens- und Substitutionseffekt', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`Jonas mit $u = C^{1/2}h^{1/2}$, $T = 16$.

a) Ohne sonstiges Einkommen ($E = 0$) steigt der Lohn von 15 auf 20 €. Berechnen Sie das alte und das neue Optimum. Was fällt auf?
b) Mit Grundeinkommen $E = 60$ steigt der Lohn von 15 auf 20 €. Berechnen Sie beide Optima. Welcher Effekt dominiert?
c) Erklären Sie allgemein, welche zwei Effekte bei einer Lohnerhöhung wirken, und beschreiben Sie die grafische Zerlegung in drei Schritten (Punkte A, B, C) für eine Person mit starker Freizeitpräferenz.`,
  hinweis: 'Abkürzung $h^* = \\frac12 \\frac{wT+E}{w}$. Bei $E = 0$ kürzt sich $w$ heraus.',
  ansatz: String.raw`a) $h^* = T/2$ unabhängig von $w$. b) $h^*(15) = 10$, $h^*(20) = \frac12 \cdot \frac{380}{20}$.`,
  loesung: String.raw`**a)** $w = 15$: $h^* = \frac12\cdot\frac{240}{15} = 8$, $L^* = 8$, $C^* = 120$. $w = 20$: $h^* = \frac12\cdot\frac{320}{20} = 8$, $L^* = 8$, $C^* = 160$. Die **Arbeitszeit ändert sich nicht**, nur der Konsum steigt. Bei Cobb-Douglas ohne sonstiges Einkommen ist $h^* = \frac{d}{c+d}T$ unabhängig vom Lohn: Einkommens- und Substitutionseffekt heben sich exakt auf. Grafisch dreht sich die Budgetgerade um $(16 \mid 0)$, der neue Tangentialpunkt liegt senkrecht über dem alten.

**b)** $w = 15$: $h^* = \frac12\cdot\frac{300}{15} = 10$, $L^* = 6$, $C^* = 150$. $w = 20$: $h^* = \frac12\cdot\frac{380}{20} = 9{,}5$, $L^* = 6{,}5$, $C^* = 190$. Die Arbeitszeit steigt um eine halbe Stunde: Der **Substitutionseffekt dominiert** leicht. Grund: Mit $E > 0$ ist der Einkommensgewinn der Lohnerhöhung relativ kleiner (er betrifft nur den Arbeitsteil des Einkommens), der Preiseffekt der Freizeit aber gleich stark.

**c)** **Substitutionseffekt**: Freizeit wird teurer (Opportunitätskosten = Lohn), Konsum ersetzt Freizeit → Arbeit steigt. **Einkommenseffekt**: Der höhere Lohn erhöht das Einkommen; Freizeit ist ein normales Gut → mehr Freizeit, Arbeit sinkt. Gesamteffekt unbestimmt.
Zerlegung (Folien 27–29): Ausgangspunkt A auf $U_1$ mit alter Budgetgeraden. **Schritt 1, EE**: Budgetgerade parallel (alte Steigung $-w$) nach oben verschieben, bis sie die neue Indifferenzkurve $U_2$ berührt – Punkt B, weiter rechts (mehr Freizeit). **Schritt 2, SE**: Die Gerade entlang $U_2$ auf die neue, steilere Steigung $-w'$ drehen – Punkt C, links von B (weniger Freizeit). **Gesamteffekt** A → C. Bei starker Freizeitpräferenz liegt C rechts von A: Die Person arbeitet weniger, der EE überwiegt.

*Klausurpunkte:* 3 für a) mit Erklärung, 4 für b), 5 für c) mit korrekter Zerlegung. Typischer Verlust: in a) ein „Rechenfehler“ vermutet, weil sich nichts ändert; in c) Reihenfolge oder Richtung von EE und SE vertauscht.`
},
{
  id: 'c6', thema: 't5', titel: 'Reservationslohn', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Zwei Personen haben $T = 16$ und ein sonstiges Einkommen von $E = 60$ € pro Tag. Anna: $u = C^{1/2}h^{1/2}$. Ben: $u = C^{1/3}h^{2/3}$.

a) Definieren Sie den Reservationslohn und beschreiben Sie die grafische Lösung.
b) Berechnen Sie den Reservationslohn beider Personen. Wer hat die stärkere Freizeitpräferenz?
c) Bei welchem Marktlohn arbeitet Anna, Ben aber nicht? Was gilt ohne sonstiges Einkommen ($E = 0$)?`,
  hinweis: 'Reservationslohn = MRS im Punkt $(h, C) = (T, E)$, also $\\frac{\\partial u/\\partial h}{\\partial u/\\partial C}$ bei $h = 16$, $C = 60$.',
  ansatz: String.raw`Anna: MRS $= C/h$. Ben: MRS $= \dfrac{\frac23 C^{1/3}h^{-1/3}}{\frac13 C^{-2/3}h^{2/3}} = \dfrac{2C}{h}$.`,
  loesung: String.raw`**a)** Der Reservationslohn ist der niedrigste Lohn, bei dem eine Person gerade bereit ist, in den Arbeitsmarkt einzutreten. Sie vergleicht den Wert einer Stunde Freizeit (MRS) mit dem Lohn: Ist $w \ge$ MRS bei voller Freizeit, lohnt sich die erste Arbeitsstunde. Grafisch: Randlösung bei $h^* = T = 16$, $C^* = E = 60$. Dort ist die Indifferenzkurve steiler als (oder gleich steil wie) die Budgetgerade; erst wenn die Budgetgerade steiler wird als die Indifferenzkurve im Endpunkt, entsteht ein innerer Tangentialpunkt.

**b)** Anna: MRS $= C/h$, im Punkt $(16, 60)$: $w_R = 60/16 = 3{,}75$ €. Ben: MRS $= 2C/h$, also $w_R = 120/16 = 7{,}5$ €. Ben hat die stärkere Freizeitpräferenz (Exponent $2/3$ auf $h$, steilere Indifferenzkurven) und braucht den doppelten Lohn, um überhaupt anzufangen.

**c)** Für $3{,}75 \le w < 7{,}5$ arbeitet Anna, Ben nicht. Bei $E = 0$ ist für beide MRS $= 0$ im Punkt $(16, 0)$ – der Reservationslohn ist null, jeder positive Lohn lohnt sich. Bei Cobb-Douglas-Nutzen ist Konsum null unerträglich (Nutzen null), also wird immer etwas gearbeitet.

*Klausurpunkte:* 3 für a), 3 für b), 2 für c). Typischer Verlust: MRS im Optimum statt im Randpunkt $(T, E)$ ausgewertet.`
},
{
  id: 'c7', thema: 't5', titel: 'Arbeitsnachfrage des Unternehmens', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Eine Bäckerei produziert kurzfristig mit $y = 10\sqrt{L}$ (Kapital fix), Brotpreis $p = 4$.

a) Erklären Sie, warum die Arbeitsnachfrage eine abgeleitete Nachfrage ist, und leiten Sie die Optimalitätsbedingung her.
b) Bestimmen Sie die Arbeitsnachfragefunktion $L^D(w)$ und die Nachfrage bei $w = 10$ und $w = 5$.
c) Der Lohn steigt dauerhaft. Erklären Sie die Reaktion des Unternehmens kurz- und langfristig.`,
  hinweis: '$\\pi = py - wL - rK$, nach $L$ ableiten. $MP_L = 5L^{-1/2}$.',
  ansatz: String.raw`$p \cdot MP_L = w \Rightarrow 20L^{-1/2} = w$.`,
  loesung: String.raw`**a)** Unternehmen fragen Arbeit nicht um ihrer selbst willen nach, sondern wegen des Outputs, den sie erzeugt – die Nachfrage ist von der Güternachfrage und der Technologie **abgeleitet**. Gewinn $\pi = p\,f(L) - wL - rK$; $\partial\pi/\partial L = p \cdot MP_L - w = 0$, also $p \cdot MP_L = w$: Wert des Grenzprodukts (Grenzerlös der Arbeit) gleich Lohn (Grenzkosten).

**b)** $MP_L = 5L^{-1/2}$. $4 \cdot 5L^{-1/2} = w \Rightarrow L^{-1/2} = w/20 \Rightarrow L^D(w) = \left(\dfrac{20}{w}\right)^2 = \dfrac{400}{w^2}$. Bei $w = 10$: $L = 4$ (Output 20, Erlös 80, Lohnkosten 40). Bei $w = 5$: $L = 16$. Fallende Nachfragekurve, weil das Grenzprodukt abnimmt.

**c)** **Kurzfristig, Skaleneffekt**: Kapital ist fix, Produktion wird teurer, das Unternehmen senkt den Output und braucht weniger Arbeit – Bewegung entlang $L^D$. **Langfristig, Substitutionseffekt**: Kapital ist variabel; Arbeit wird durch Maschinen ersetzt (Tangentialbedingung $MP_L/MP_K = w/r$ aus Thema 4 verschiebt sich zugunsten von $K$). Beide Effekte senken die Arbeitsnachfrage.

*Klausurpunkte:* 3 für a), 3 für b), 2 für c). Typischer Verlust: $L^D = 20/w$ (Quadrieren vergessen).`
},
{
  id: 'ub3-1', thema: 't5', titel: 'Übungsblatt 3, Aufgabe 1: Aggregierter Arbeitsmarkt', schwierigkeit: 1, punkte: 8, zeit: 10, quelle: 'Übungsblatt 3 (Schehl)',
  aufgabe: String.raw`In einer kleinen Stadt gelten $L^S = -40 + 10w$ und $L^D = 160 - 10w$.

a) Stellen Sie Angebot und Nachfrage grafisch dar, ermitteln Sie das Gleichgewicht und kennzeichnen Sie es.
b) Die Stadt wird als lebenswert ausgezeichnet; das neue Angebot ist $L^S_{neu} = -20 + 10w$. Ermitteln Sie das neue Gleichgewicht und ergänzen Sie die Grafik.`,
  hinweis: 'Achsenabschnitte: $L^S = 0$ bei $w = 4$, $L^D = 0$ bei $w = 16$. Für die Grafik Lohn vertikal.',
  ansatz: String.raw`$-40 + 10w = 160 - 10w$.`,
  loesung: String.raw`**a)** $-40 + 10w = 160 - 10w \Rightarrow 20w = 200 \Rightarrow w^* = 10$, $L^* = -40 + 100 = 60$ (Probe: $160 - 100 = 60$ ✓).
Grafik: horizontal $L$ (0 bis 160), vertikal $w$ (0 bis 16). Angebot: Gerade durch $(0 \mid 4)$ mit Steigung $1/10$ (je 10 Einheiten $L$ ein Euro mehr), z. B. durch $(60 \mid 10)$ und $(120 \mid 16)$. Nachfrage: Gerade durch $(0 \mid 16)$ fallend, durch $(60 \mid 10)$ und $(160 \mid 0)$. Gleichgewicht im Schnittpunkt $(60 \mid 10)$, mit gestrichelten Linien zu den Achsen markieren.

**b)** Mehr Menschen wollen in der Stadt arbeiten – das Angebot verschiebt sich nach rechts (bei jedem Lohn 20 Einheiten mehr). $-20 + 10w = 160 - 10w \Rightarrow 20w = 180 \Rightarrow w^*_{neu} = 9$, $L^*_{neu} = 70$. In der Grafik: neue Angebotsgerade parallel rechts, durch $(0 \mid 2)$ und $(70 \mid 9)$; neues Gleichgewicht $(70 \mid 9)$. Höheres Angebot senkt den Lohn und erhöht die Beschäftigung – Bewegung entlang der unveränderten Nachfragekurve.

*Klausurpunkte:* 4 für a) (Rechnung 2, Grafik 2), 4 für b). Typischer Verlust: Verschiebung der Nachfrage statt des Angebots gezeichnet; Achsen vertauscht.`
},
{
  id: 'ub3-2', thema: 't5', titel: 'Übungsblatt 3, Aufgabe 2: Paulas Arbeitsentscheidung', schwierigkeit: 3, punkte: 16, zeit: 20, quelle: 'Übungsblatt 3 (Schehl)',
  aufgabe: String.raw`Paula hat pro Woche $T = 80$ Stunden für Arbeit und Freizeit. Der Marktlohn beträgt $w = 24$ € pro Stunde. Nutzenfunktion $u(C, h) = C^{1/2}h^{1/2}$.

a) Stellen Sie das Nutzenmaximierungsproblem auf und ermitteln Sie die optimale Zahl an Arbeitsstunden sowie den optimalen Konsum.
b) Stellen Sie das Ergebnis grafisch dar.
c) Paulas Eltern unterstützen sie mit 120 € pro Woche. Wie verändert das ihre Arbeitsentscheidung? Ergänzen Sie die Grafik.
d) Der Marktlohn soll auf 32 € steigen (ohne Unterstützung). Wie verändert das ihre ursprüngliche Entscheidung? Separate Skizze.`,
  hinweis: 'Budget $C = wT + E - wh$ mit $T = 80$. Lagrange wie auf Folie 21 oder Abkürzung $h^* = \\frac12 \\frac{wT+E}{w}$. In d) nicht erschrecken, wenn sich die Arbeitszeit nicht ändert.',
  ansatz: String.raw`a) $C = 1920 - 24h$; Tangentialbedingung $C/h = 24$. c) $E = 120$. d) $w = 32$, $E = 0$.`,
  loesung: String.raw`**a)** Zeitbeschränkung $h + L = 80$, Konsum $C = 24L$. Budgetgerade: $C = 24(80 - h) = 1920 - 24h$.
$\max_{C,h}\ C^{1/2}h^{1/2}$ u.d.N. $C = 1920 - 24h$.
$\mathcal{L} = C^{1/2}h^{1/2} - \lambda(C - 1920 + 24h)$.
(1) $\tfrac12 C^{-1/2}h^{1/2} = \lambda$, (2) $\tfrac12 C^{1/2}h^{-1/2} = 24\lambda$, (3) $C = 1920 - 24h$.
(2) ÷ (1): $C/h = 24 \Rightarrow C = 24h$. In (3): $24h = 1920 - 24h \Rightarrow h^* = 40$. Also $L^* = 40$ Stunden, $C^* = 960$ €.
(Abkürzung: $h^* = \frac12\cdot\frac{1920}{24} = 40$.)

**b)** Horizontal $h$ (0 bis 80), vertikal $C$ (0 bis 1920). Budgetgerade von $(0 \mid 1920)$ nach $(80 \mid 0)$, Steigung $-24$. Indifferenzkurve zum Nutzen $u^* = \sqrt{960 \cdot 40} \approx 196$ berührt sie im Tangentialpunkt $(40 \mid 960)$. Gestrichelte Hilfslinien zu beiden Achsen.

**c)** $E = 120$: Budget $C = 1920 + 120 - 24h = 2040 - 24h$, Parallelverschiebung nach oben; bei $h = 80$ bleibt $C = 120$. Tangentialbedingung unverändert $C = 24h$: $24h = 2040 - 24h \Rightarrow h^* = 42{,}5$, $L^* = 37{,}5$, $C^* = 1020$. Paula arbeitet 2,5 Stunden weniger und konsumiert 60 € mehr – **Einkommenseffekt**. In der Grafik: zweite Gerade parallel oberhalb, neuer Tangentialpunkt $(42{,}5 \mid 1020)$ rechts oberhalb des alten.

**d)** $w = 32$, $E = 0$: Budget $C = 2560 - 32h$, Drehung um $(80 \mid 0)$ nach oben, steiler. Tangentialbedingung $C = 32h$: $32h = 2560 - 32h \Rightarrow h^* = 40$. **Die Arbeitszeit bleibt 40 Stunden**, der Konsum steigt auf $C^* = 1280$. Grund: Bei Cobb-Douglas-Nutzen ohne sonstiges Einkommen heben sich Substitutionseffekt (Freizeit teurer → weniger Freizeit) und Einkommenseffekt (reicher → mehr Freizeit) exakt auf. Skizze: alte und neue Budgetgerade mit gemeinsamem Endpunkt $(80 \mid 0)$, neuer Tangentialpunkt $(40 \mid 1280)$ senkrecht über dem alten $(40 \mid 960)$.

*Klausurpunkte:* 6 für a) (Ansatz 2, Lagrange 2, Lösung 2), 3 für b), 4 für c), 3 für d). Typischer Verlust: in d) das Ergebnis „keine Änderung“ nicht geglaubt und nachträglich „korrigiert“; in c) Drehung statt Parallelverschiebung.`
}
);
