window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t5 = [
  "Ich kann die Annahmen des neoklassischen Arbeitsmarktmodells nennen und Erwerbspersonenpotenzial erklären.",
  "Ich kann Arbeitsangebot und -nachfrage als Geraden zeichnen, das Gleichgewicht berechnen und Vakanzen bzw. Arbeitslosigkeit bei $w \\ne w^*$ erklären.",
  "Ich kann die Budgetgerade im Freizeit-Konsum-Modell $C = wT + E - wh$ herleiten und Steigung $-w$ sowie Achsenabschnitte interpretieren.",
  "Ich kann das optimale Arbeitsangebot grafisch (Tangente) und mit Lagrange bestimmen: $\\frac{\\partial u/\\partial h}{\\partial u/\\partial C} = w$.",
  "Ich kann den Einkommenseffekt eines zusätzlichen Einkommens $E$ erklären und zeichnen (Parallelverschiebung, Arbeit sinkt).",
  "Ich kann bei einer Lohnerhöhung Einkommens- und Substitutionseffekt trennen (Schritte A→B→C) und erklären, warum der Gesamteffekt unbestimmt ist.",
  "Ich kann den Reservationslohn definieren, als Randlösung zeichnen und erklären, warum er bei Freizeitpräferenz höher ist.",
  "Ich kann die Arbeitsnachfrage als abgeleitete Nachfrage aus $p \\cdot MP_L = w$ herleiten.",
  "Ich kann Skalen- und Substitutionseffekt einer Lohnerhöhung auf die Arbeitsnachfrage unterscheiden."
];

VWL.skripte.t5 = String.raw`
## 1. Worum es geht

Der Arbeitsmarkt ist ein **Faktormarkt**: Haushalte bieten Arbeit an, Unternehmen fragen sie nach, der Preis ist der Lohn $w$. Thema 5 ist die direkte Anwendung von Thema 3 und 4: Das **Arbeitsangebot** ist Haushaltstheorie (Nutzenmaximierung zwischen Konsum und Freizeit), die **Arbeitsnachfrage** ist Unternehmenstheorie ($p \cdot MP_L = w$). Wer Thema 3 und 4 kann, braucht hier nur die neuen Namen zu lernen – und den Einkommens- und Substitutionseffekt, der in dieser Vorlesung **ausschließlich hier** vorkommt.

Übungsblatt 3 deckt beide Hälften ab: Aufgabe 1 das Marktgleichgewicht, Aufgabe 2 das individuelle Arbeitsangebot mit Lagrange.

---

## 2. Der Arbeitsmarkt als Ganzes

### 2.1 Annahmen und Akteure

Modellannahmen (Folie 5): viele Arbeitnehmer und viele Arbeitgeber (Polypol), keine Zutrittsbarrieren oder Rigiditäten, vollständige Information, freiwillige Entscheidungen, flexibler Lohn.

Arbeit bieten nicht alle an. Das **Erwerbspersonenpotenzial** umfasst alle, die arbeiten *können, wollen und dürfen* – Erwerbstätige plus Erwerbslose (Folie 6). Es hängt von Demografie, Migration und Erwerbsneigung ab. (Zahlen der Folien: 83,6 Mio. Wohnbevölkerung, 48,5 Mio. Erwerbspersonenpotenzial, Stand 2024.) Im Konzept der Bundesagentur für Arbeit (Folie 12) steht dem Angebot (Erwerbstätige plus Erwerbslose plus stille Reserve) die Nachfrage (besetzte plus unbesetzte Stellen) gegenüber.

### 2.2 Angebot, Nachfrage, Gleichgewicht

- **Arbeitsangebot** $L^S$: steigt mit dem Lohn (c. p.). Beispiel der Folien: $L^S = -10 + w$ (Folie 7).
- **Arbeitsnachfrage** $L^D$: sinkt mit dem Lohn. Beispiel: $L^D = 20 - w$ (Folie 8).
- **Gleichgewicht**: $L^S = L^D$. Im Beispiel $-10 + w = 20 - w \Rightarrow w^* = 15$, $L^* = 5$ (Folie 9).

Achsen: horizontal $L$, vertikal Lohn $w$ – wie immer Preis oben.

**Lohnanpassung** (Folien 10–11): Bei $w < w^*$ übersteigt die Nachfrage das Angebot – **Vakanzen** (offene Stellen). Unternehmen müssen höhere Löhne bieten, das Angebot steigt. Bei $w > w^*$ übersteigt das Angebot die Nachfrage – **Arbeitslose**. Arbeitskräfte akzeptieren niedrigere Löhne, die Nachfrage steigt. Im Beispiel bei $w = 12$: $L^D = 8$, $L^S = 2$, sechs Vakanzen; bei $w = 18$: $L^S = 8$, $L^D = 2$, sechs Arbeitslose.

---

## 3. Individuelles Arbeitsangebot

### 3.1 Das Freizeit-Konsum-Modell

Ein Individuum hat nur eine Ressource: **Zeit** $T$ (die Folien nehmen 16 Stunden am Tag). Es teilt sie auf **Arbeit** $L$ und **Freizeit** $h$ auf. Arbeit stiftet keinen Nutzen, sondern ermöglicht **Konsum** $C$ (Folie 14). Drei Faktoren bestimmen die Entscheidung: Präferenzen für Konsum und Freizeit, sonstiges Einkommen $E$ (Vermögen, Transfers), Opportunitätskosten von Freizeit (der Lohn).

**Präferenzen**: Nutzenfunktion $u(C, h) = C^c h^d$ mit $c, d > 0$ – Cobb-Douglas (Folie 15). Indifferenzkurven im $h$-$C$-Diagramm ($h$ horizontal, $C$ vertikal). Steilere Indifferenzkurven bedeuten stärkere Präferenz für Freizeit, flachere stärkere Präferenz für Konsum (Folie 16).

**Zwei Beschränkungen** (Folie 17): Zeit $h + L = T$ und Konsum $C \le wL + E$. Einsetzen von $L = T - h$:

$$C = wT + E - wh$$

Das ist die **Budgetgerade**: vertikaler Achsenabschnitt $C_{max} = wT + E$ (alles arbeiten), Steigung $-w$. Der Lohn ist der **Preis der Freizeit**: Jede Stunde Freizeit kostet $w$ Euro Konsum. Bei $h = T$ (gar nicht arbeiten) bleibt $C = E$. Die Gerade endet bei $h = T$ (Folie 18).

<div class="box merke"><strong>Übersetzung aus Thema 3</strong>
$x_1 \to h$ (Freizeit), $x_2 \to C$ (Konsum), $p_1 \to w$, $p_2 \to 1$, $m \to wT + E$ (das „volle Einkommen“, wenn man alle Zeit verkauft). Dann ist alles wie gehabt: Steigung $-p_1/p_2 = -w$, Cobb-Douglas-Nachfrage $h^* = \frac{d}{c+d}\cdot\frac{wT+E}{w}$.</div>

<div data-graph="arbeitsangebot"></div>

### 3.2 Das Optimum

**Grafisch** (Folien 19–20): Budgetgerade, Indifferenzkurven, Tangentialpunkt B mit $(h^*, C^*)$. Arbeitszeit $L^* = T - h^*$.

**Mathematisch** mit Lagrange (Folie 21), genau in der Notation der Folien:

$$\mathcal{L} = u(C,h) - \lambda\,(C - wT - E + wh)$$

$$(1)\ \frac{\partial\mathcal{L}}{\partial C} = \frac{\partial u}{\partial C} - \lambda = 0 \qquad (2)\ \frac{\partial\mathcal{L}}{\partial h} = \frac{\partial u}{\partial h} - \lambda w = 0 \qquad (3)\ C = wT + E - wh$$

(2) ÷ (1) ergibt die Tangentialbedingung:

$$\frac{\partial u/\partial h}{\partial u/\partial C} = w$$

Links die MRS zwischen Freizeit und Konsum (wie viel Konsum ist eine Stunde Freizeit wert), rechts der Marktpreis der Freizeit.

<div class="box beispiel"><strong>Beispiel</strong>
$u = C^{1/2}h^{1/2}$, $T = 16$, $w = 15$, $E = 0$. Tangentialbedingung: $\frac{\frac12 C^{1/2}h^{-1/2}}{\frac12 C^{-1/2}h^{1/2}} = \frac{C}{h} = 15 \Rightarrow C = 15h$. Budget: $15h = 240 - 15h \Rightarrow h^* = 8$, $L^* = 8$, $C^* = 120$. Abkürzung: $h^* = \frac12 \cdot \frac{240}{15} = 8$ – bei gleichen Exponenten geht die Hälfte des vollen Einkommens in Freizeit.</div>

### 3.3 Einkommenseffekt: zusätzliches Einkommen

Bekommt die Person ein lohnunabhängiges Einkommen $E$ (Grundeinkommen, Unterstützung der Eltern), verschiebt sich die Budgetgerade **parallel nach oben** – Steigung $-w$ bleibt, $C_{max}$ steigt um $E$ (Folie 22). Freizeit ist ein normales Gut: Die Person leistet sich mehr davon. **Einkommenseffekt: Arbeitsangebot sinkt, Freizeit steigt.**

Im Beispiel mit $E = 60$: $h^* = \frac12\cdot\frac{240+60}{15} = 10$, $L^* = 6$, $C^* = 150$. Zwei Stunden weniger Arbeit.

### 3.4 Lohnerhöhung: zwei gegenläufige Effekte

Steigt $w$, **dreht** sich die Budgetgerade um den Punkt $(T, E)$ nach oben – sie wird steiler (Folie 23). Zwei Effekte wirken gleichzeitig (Folie 24):

| Effekt | Mechanismus | Wirkung auf Arbeit |
|---|---|---|
| **Substitutionseffekt (SE)** | Freizeit wird teurer (höhere Opportunitätskosten), Konsum ersetzt Freizeit | Arbeit ↑, Freizeit ↓ |
| **Einkommenseffekt (EE)** | Höherer Lohn macht reicher; von allen normalen Gütern, auch Freizeit, will man mehr | Arbeit ↓, Freizeit ↑ |
| **Gesamteffekt** | Summe | **unbestimmt**, hängt von den Präferenzen ab |

Starke Präferenz für Konsum: SE dominiert, Arbeit steigt. Starke Präferenz für Freizeit: EE dominiert, Arbeit sinkt (Folie 25). Das erklärt die **rückwärts gekrümmte** individuelle Arbeitsangebotskurve, die bei hohen Löhnen wieder zurückbiegen kann.

**Zerlegung sichtbar machen** (Folien 26–29), am Beispiel einer Person mit Freizeitpräferenz:

1. **Schritt 1, Einkommenseffekt**: Budgetgerade parallel so verschieben (alte Steigung $-w$), dass sie die neue Indifferenzkurve $U_2$ berührt. Punkt A → B: mehr Freizeit.
2. **Schritt 2, Substitutionseffekt**: Entlang $U_2$ die Gerade auf die neue Steigung $-w'$ drehen. Punkt B → C: weniger Freizeit.
3. **Gesamteffekt**: A → C, die tatsächlich beobachtete Änderung.

<div class="box fehler"><strong>Typischer Fehler</strong>
Einkommenseffekt und Substitutionseffekt mit gleichem Vorzeichen eintragen. Bei einer Lohnerhöhung wirkt der SE <em>für</em> mehr Arbeit, der EE <em>dagegen</em>. Zweiter Fehler: Die Steuer- oder Grundeinkommensaufgabe (nur EE, Parallelverschiebung) mit der Lohnaufgabe (EE und SE, Drehung) verwechseln.</div>

<div class="box beispiel"><strong>Beispiel: Cobb-Douglas ohne sonstiges Einkommen</strong>
$u = C^{1/2}h^{1/2}$, $T = 16$, $E = 0$. Bei $w = 15$: $h^* = 8$. Bei $w = 20$: $h^* = \frac12\cdot\frac{320}{20} = 8$. Die Arbeitszeit ändert sich <em>nicht</em> – bei Cobb-Douglas und $E = 0$ heben sich EE und SE exakt auf, nur der Konsum steigt (120 → 160). Mit $E = 60$ dagegen: $h^*$ sinkt von 10 auf $\frac12\cdot\frac{380}{20} = 9{,}5$, der SE überwiegt leicht. In Übungsblatt 3, Teil d), passiert genau das Erste – ein beliebter Stolperstein: „Die Arbeitszeit bleibt 40 Stunden“ ist richtig, nicht ein Rechenfehler.</div>

### 3.5 Reservationslohn

Der **Reservationslohn** ist der niedrigste Lohn, bei dem eine Person gerade bereit ist, überhaupt zu arbeiten (Folie 31). Vergleich: Wert einer Stunde Freizeit (MRS im Punkt $h = T$) gegen den Marktlohn. Ist $w \ge$ Wert der Freizeit → arbeiten; sonst nicht. Grafisch: **Randlösung** bei $h^* = T$, $C^* = E$ – die Indifferenzkurve ist dort steiler als die Budgetgerade. Personen mit starker Freizeitpräferenz (steile Indifferenzkurven) haben einen höheren Reservationslohn als Personen mit Konsumpräferenz (Folie 32).

Rechnerisch: Reservationslohn $w_R = \text{MRS}$ bei $(h, C) = (T, E)$. Für $u = C^{1/2}h^{1/2}$: $\text{MRS} = C/h = E/T$. Mit $E = 60$, $T = 16$: $w_R = 3{,}75$. Für $u = C^{1/3}h^{2/3}$ (Freizeitpräferenz): $\text{MRS} = 2C/h$, also $w_R = 7{,}5$ – doppelt so hoch. Ohne sonstiges Einkommen ($E = 0$) ist der Reservationslohn bei Cobb-Douglas null: Jeder positive Lohn lohnt sich.

### 3.6 Lebenszyklus

Empirisch: wenig Arbeit in jungen Jahren (Ausbildung), viel in der Mitte, wenig im Alter (Folie 34). Modellierbar als Zwei-Perioden-Modell mit Nutzen $u(C_1,h_1) + \frac{1}{1+\rho}u(C_2,h_2)$ und einer intertemporalen Budgetbeschränkung mit Zins $r$; $\rho$ ist die individuelle Diskontierungsrate (Zukunft wird abgewertet). Lösung wieder per Lagrange (Folie 35). Für die Klausur reicht: Struktur kennen und $\rho$ und $r$ benennen können.

---

## 4. Arbeitsnachfrage

Die Arbeitsnachfrage ist eine **abgeleitete Nachfrage**: Unternehmen wollen Arbeit nicht an sich, sondern wegen des Outputs, den sie erzeugt (Folie 37). Annahmen: kurze Frist (Kapital $K$ fix, Arbeit variabel), Preise und Technologie exogen.

Gewinn $\pi = py - wL - rK$, Bedingung erster Ordnung wie in Thema 4 (Folie 38):

$$p \cdot MP_L = w$$

Wert des Grenzprodukts der Arbeit (Grenzerlös) = Lohn (Grenzkosten). Daraus folgt die Arbeitsnachfragefunktion $L^D(w)$: fallend, weil $MP_L$ abnimmt.

<div class="box beispiel"><strong>Beispiel</strong>
$y = 10\sqrt{L}$, $p = 4$. $MP_L = 5L^{-1/2}$. $4 \cdot 5L^{-1/2} = w \Rightarrow L^D = (20/w)^2$. Bei $w = 10$: $L = 4$; bei $w = 5$: $L = 16$. Halbierung des Lohns vervierfacht die Nachfrage.</div>

**Reaktion auf eine Lohnerhöhung** (Folie 39), beide Effekte senken die Nachfrage:

- **Skaleneffekt** (kurzfristig): Produktion wird teurer, das Unternehmen produziert weniger und braucht weniger Arbeit.
- **Substitutionseffekt** (langfristig): Arbeit wird durch Kapital ersetzt (Isokostengerade dreht sich, vgl. Thema 4).

---

## 5. Klausur-Check Thema 5

**Grafiken blind:** Arbeitsmarkt mit $L^S$, $L^D$, $w^*$, Vakanzen und Arbeitslosen; Freizeit-Konsum-Budgetgerade mit $C_{max} = wT + E$, Endpunkt $(T, E)$, Steigung $-w$; Optimum als Tangente; Parallelverschiebung bei $E$; Drehung bei $w$ mit Zerlegung A→B→C; Randlösung Reservationslohn.

**Rechnungen in fünf Minuten:** Gleichgewicht aus zwei Geraden; Optimum per Lagrange oder Cobb-Douglas-Abkürzung $h^* = \frac{d}{c+d}\frac{wT+E}{w}$; Wirkung von $E$ und $w$ auf $h^*$, $L^*$, $C^*$; Reservationslohn als MRS bei $(T, E)$; $L^D$ aus $p\,MP_L = w$.

**Begriffsliste** (Folie 40): Konsum und Freizeit, Einkommenseffekt (Arbeit ↓), Substitutionseffekt (Arbeit ↑), Lebenszyklus, abgeleitete Nachfrage, Skaleneffekt (kurzfristig) und Substitutionseffekt (langfristig) der Nachfrage.

<p class="folie">Quellen: Vorlesungsfolien Thema 5 (Schehl, SoSe 2026); Franz, Arbeitsmarktökonomik; Mankiw/Taylor, Grundzüge der VWL, Kapitel zu Faktormärkten. Text eigenständig formuliert.</p>
`;
