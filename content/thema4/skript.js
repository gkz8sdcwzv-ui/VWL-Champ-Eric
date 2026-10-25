window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t4 = [
  "Ich kann Produktionsfunktion, Produktionsmöglichkeitenmenge und Isoquante definieren und den Unterschied zur Indifferenzkurve nennen (ordinal vs. verhältnisskaliert).",
  "Ich kann die Isoquanten von konstanten Proportionen ($\\min$), perfekten Substituten (linear) und Cobb-Douglas zeichnen und Outputwerte berechnen.",
  "Ich kann das Grenzprodukt $MP_1 = \\partial y/\\partial x_1$ berechnen und erklären, warum es abnimmt.",
  "Ich kann die technische Rate der Substitution als $TRS = -MP_1/MP_2$ herleiten und in einem Punkt auswerten.",
  "Ich kann Skalenerträge mit dem Faktor $k$ prüfen und bei Cobb-Douglas sofort an $a+b$ ablesen.",
  "Ich kann die Isogewinnlinie $y = \\frac{\\pi + w_2\\bar{x}_2}{p} + \\frac{w_1}{p}x_1$ aufstellen und Steigung und Achsenabschnitt interpretieren.",
  "Ich kann die kurzfristige Gewinnmaximierung grafisch (Tangente Isogewinnlinie–Produktionsfunktion) und mathematisch ($p \\cdot MP_1 = w_1$) lösen.",
  "Ich kann die langfristige Gewinnmaximierung mit zwei Bedingungen $p\\cdot MP_1 = w_1$, $p \\cdot MP_2 = w_2$ lösen.",
  "Ich weiß, wie sich $x_1^*$ und $y^*$ ändern, wenn $p$ oder $w_1$ steigt (komparative Statik).",
  "Ich kann die Isokostengerade $x_2 = \\frac{C}{w_2} - \\frac{w_1}{w_2}x_1$ aufstellen und die Parallele zur Budgetgeraden erklären.",
  "Ich kann das Kostenminimum grafisch (Tangente Isokostengerade–Isoquante) und mit Lagrange lösen: $\\frac{MP_1}{MP_2} = \\frac{w_1}{w_2}$ plus Nebenbedingung.",
  "Ich kann aus einer Kostenfunktion $C(y)$ die Größen $MC$, $AC$, $AVC$ bestimmen, das Optimum $p = MC$ (steigender Ast) berechnen und die Stilllegungsregel anwenden."
];

VWL.skripte.t4 = String.raw`
## 1. Worum es geht

Die Unternehmenstheorie ist die **Spiegelseite der Haushaltstheorie**. Der Haushalt wählt das beste Güterbündel, das er sich leisten kann; das Unternehmen wählt die Inputmengen, die den Gewinn maximieren oder einen vorgegebenen Output am billigsten herstellen. Die Werkzeuge sind dieselben, nur die Namen ändern sich:

| Haushaltstheorie (Thema 3) | Unternehmenstheorie (Thema 4) |
|---|---|
| Güter $x_1, x_2$ | Inputs (Produktionsfaktoren) $x_1, x_2$ |
| Nutzen $u(x_1,x_2)$, ordinal | Output $y = f(x_1,x_2)$, messbar |
| Indifferenzkurve | Isoquante |
| Grenznutzen $MU_i$ | Grenzprodukt $MP_i$ |
| $MRS = -MU_1/MU_2$ | $TRS = -MP_1/MP_2$ |
| Budgetgerade, Steigung $-p_1/p_2$ | Isokostengerade, Steigung $-w_1/w_2$ |
| Optimum: $MU_1/MU_2 = p_1/p_2$ | Kostenminimum: $MP_1/MP_2 = w_1/w_2$ |

Die Folien behandeln drei Bausteine (Folie 2): **Technologie** (wie kann produziert werden?), **Gewinnmaximierung** (wie viel Input und Output?) und **Kostenminimierung** (wie stellt man einen Output am billigsten her?). Übungsblatt 2 braucht zusätzlich den Zusammenhang Kostenfunktion – Grenzkosten – Angebot bei vollkommener Konkurrenz; den liefert Abschnitt 5.

**Notation** wie in den Folien: Inputs $x_1, x_2$, Faktorpreise $w_1, w_2$, Output $y$, Outputpreis $p$, Gewinn $\pi$, Kosten $C$. In Mankiw/Taylor heißen die Inputs $L$ (Arbeit) und $K$ (Kapital) mit Preisen $w$ und $r$ – dieselbe Sache, andere Buchstaben.

---

## 2. Technologie

### 2.1 Produktionsfunktion und Isoquanten

Die **Technologie** beschreibt, welche Inputkombinationen welchen Output ermöglichen (Folie 7). Die **Produktionsfunktion** $y = f(x_1, x_2)$ gibt den **maximal** möglichen Output für gegebene Inputs an (Folie 8). Die **Produktionsmöglichkeitenmenge** enthält alle machbaren Input-Output-Kombinationen – also alles auf und unterhalb der Produktionsfunktion. Punkte *auf* der Funktion sind **technisch effizient**, Punkte darunter verschwenden Inputs (Folie 9).

Eine **Isoquante** ist die Menge aller Inputkombinationen $(x_1, x_2)$, die genau den Output $\bar y$ liefern (Folie 10). Höhere Isoquanten bedeuten mehr Output.

<div class="box beispiel"><strong>Beispiel (Folie 10)</strong>
$y = 2x_1^{1/3}x_2^{1/3}$. Punkt A $(8, 1)$: $y = 2 \cdot 2 \cdot 1 = 4$. Punkt B $(8, 8)$: $y = 2 \cdot 2 \cdot 2 = 8$. Die Isoquante für $y = 4$ erhält man durch Auflösen nach $x_2$: $x_2^{1/3} = \frac{4}{2x_1^{1/3}} = \frac{2}{x_1^{1/3}}$, also $x_2 = \frac{8}{x_1}$. Darauf liegen $(8,1)$, $(2,4)$, $(1,8)$.</div>

<div class="box merke"><strong>Isoquante vs. Indifferenzkurve (Folie 12)</strong>
Gleiche Form, anderer Maßstab. Das Nutzenniveau ist <em>ordinal</em>: Nur die Reihenfolge zählt, „$u = 8$“ ist nicht doppelt so gut wie „$u = 4$“. Der Output ist <em>verhältnisskaliert</em>: $y = 8$ sind wirklich doppelt so viele Stück wie $y = 4$, es gibt einen absoluten Nullpunkt. Deshalb darf man Produktionsfunktionen <em>nicht</em> beliebig monoton transformieren – Skalenerträge hängen von der konkreten Funktion ab.</div>

### 2.2 Die drei Standardtechnologien

Dieselben drei Fälle wie bei den Präferenzen (Folien 13–15):

| Technologie | Produktionsfunktion | Isoquanten | Beispiel aus den Folien |
|---|---|---|---|
| Konstante Proportionen (perfekte Komplemente) | $y = \min\{a_1x_1, a_2x_2\}$ | L-förmig, Knick auf $a_1x_1 = a_2x_2$ | Arbeiter und Schaufeln: $y = \min\{x_1, x_2\}$ |
| Perfekte Substitute | $y = a_1x_1 + a_2x_2$ | Geraden mit Steigung $-a_1/a_2$ | Roboter und Mensch: $y = 3x_1 + x_2$ |
| Cobb-Douglas | $y = A\,x_1^{a}x_2^{b}$, $A,a,b>0$ | glatt, konvex, schneiden die Achsen nicht | $y = x_1^{1/3}x_2^{1/3}$ |

Bei Cobb-Douglas steht $A$ für die **Skalierung** (wie viel Output aus je einer Einheit beider Inputs) und $a, b$ dafür, wie stark der Output auf die einzelnen Inputs reagiert (Folie 15).

<div class="box beispiel"><strong>Beispiel konstante Proportionen</strong>
$y = \min\{x_1, x_2\}$: Input $(3, 2)$ gibt $y = 2$, $(2, 3)$ gibt $y = 2$, $(5, 2)$ gibt immer noch $y = 2$ – drei Arbeiter ohne Schaufel graben nichts. Perfekte Substitute $y = 3x_1 + x_2$: $(1, 6)$, $(2, 3)$ und $(3, 0)$ liefern alle $y = 9$; ein Roboter ersetzt drei Menschen.</div>

### 2.3 Monotonie und Konvexität

Zwei Annahmen über „normale“ Technologien (Folien 16–17):

- **Monotonie**: Mehr von einem Input liefert mindestens so viel Output wie vorher. Begründung: *freie Verfügbarkeit* – wer zusätzliche Inputs kostenlos bekommt, kann sie notfalls einfach liegen lassen.
- **Konvexität**: Wenn $(x_1', x_2')$ und $(x_1'', x_2'')$ beide $y$ Einheiten erzeugen, dann erzeugt jede Mischung $(t x_1' + (1-t)x_1'',\; t x_2' + (1-t)x_2'')$ mit $0 \le t \le 1$ **mindestens** $y$. Grafisch: Die Isoquante ist zum Ursprung hin gewölbt, die Verbindungsgerade zweier Punkte liegt oberhalb.

### 2.4 Grenzprodukt

Das **Grenzprodukt** des Faktors $i$ misst, wie sich der Output ändert, wenn man eine kleine Einheit mehr von Faktor $i$ einsetzt und den anderen Faktor konstant hält (Folie 18):

$$MP_1 = \frac{\Delta y}{\Delta x_1} = \frac{\partial y}{\partial x_1}, \qquad MP_2 = \frac{\partial y}{\partial x_2}$$

Anders als der Grenznutzen ist das Grenzprodukt eine **beobachtbare Zahl** („zwei Säcke Kartoffeln mehr“). Bei normalen Technologien gilt das **Gesetz des abnehmenden Grenzprodukts**: Mit steigendem Einsatz eines Faktors wächst der Output weiter, aber mit abnehmender Rate (Folie 19). Mathematisch: $\partial MP_1/\partial x_1 < 0$.

<div class="box fehler"><strong>Typischer Fehler</strong>
Abnehmendes Grenzprodukt und fallende Skalenerträge verwechseln. Beim Grenzprodukt wird <em>ein</em> Faktor erhöht, der andere bleibt fix (kurze Frist). Bei Skalenerträgen werden <em>alle</em> Faktoren erhöht (lange Frist). Eine Technologie kann abnehmende Grenzprodukte <em>und</em> konstante Skalenerträge haben – $y = x_1^{1/2}x_2^{1/2}$ ist genau so ein Fall.</div>

### 2.5 Technische Rate der Substitution

Die **technische Rate der Substitution** $TRS$ ist die Steigung der Isoquante: Um wie viel kann das Unternehmen $x_2$ verringern, wenn es $x_1$ um eine Einheit erhöht und der Output gleich bleiben soll (Folie 20)?

$$TRS = \frac{\Delta x_2}{\Delta x_1} = \frac{dx_2}{dx_1} = -\frac{MP_1}{MP_2}$$

Herleitung wie bei der MRS (Folie 22): Entlang einer Isoquante ist $dy = 0$, also $MP_1\,dx_1 + MP_2\,dx_2 = 0$. Umstellen gibt $dx_2/dx_1 = -MP_1/MP_2$. Die TRS ist **negativ** (ein Input hoch, der andere runter) und nimmt bei konvexen Isoquanten **betragsmäßig ab**, je mehr $x_1$ eingesetzt wird (Folie 21): Wer viel von einem Faktor hat, gibt ihn leichter her.

<div class="box beispiel"><strong>Beispiel</strong>
$y = x_1^{1/2}x_2^{1/2}$: $MP_1 = \tfrac12 x_1^{-1/2}x_2^{1/2}$, $MP_2 = \tfrac12 x_1^{1/2}x_2^{-1/2}$, also $TRS = -\frac{x_2}{x_1}$. Im Punkt $(4, 16)$: $TRS = -4$. Eine Einheit $x_1$ mehr erlaubt es, auf 4 Einheiten $x_2$ zu verzichten. Im Punkt $(16, 4)$ ist $TRS = -0{,}25$ – viel flacher.</div>

### 2.6 Skalenerträge

**Skalenerträge** beschreiben, was mit dem Output passiert, wenn man **alle** Inputs um denselben Faktor $k > 1$ erhöht (Folie 23):

| Skalenerträge | Bedingung | Bedeutung | Cobb-Douglas $y = Ax_1^ax_2^b$ |
|---|---|---|---|
| konstant | $f(kx_1, kx_2) = k\,f(x_1,x_2)$ | Verdopplung der Inputs verdoppelt den Output („Kopier-Argument“: eine zweite identische Fabrik) | $a + b = 1$ |
| steigend | $f(kx_1, kx_2) > k\,f(x_1,x_2)$ | Verdopplung bringt mehr als das Doppelte (Beispiel Ölleitung: doppelter Umfang, vierfacher Querschnitt) | $a + b > 1$ |
| fallend | $f(kx_1, kx_2) < k\,f(x_1,x_2)$ | Verdopplung bringt weniger als das Doppelte (meist, weil ein Faktor wie Management nicht mitwächst) | $a + b < 1$ |

**Rechenrezept**: $x_1$ durch $kx_1$ und $x_2$ durch $kx_2$ ersetzen, $k$ ausklammern, mit $k \cdot f$ vergleichen. Bei $y = 2x_1^{1/3}x_2^{1/3}$: $f(kx_1,kx_2) = 2k^{1/3}x_1^{1/3}k^{1/3}x_2^{1/3} = k^{2/3}\,f(x_1,x_2) < k\,f$ – fallend. Bei $y = \min\{x_1,x_2\}$ und $y = 3x_1 + x_2$: konstant.

---

## 3. Gewinnmaximierung

### 3.1 Gewinnfunktion, kurze und lange Frist

Das Unternehmen ist **Preisnehmer** (Konkurrenzmarkt, Folie 25): $p$, $w_1$, $w_2$ sind vom Markt gegeben. Der **Gewinn** ist Erlös minus Kosten (Folie 26):

$$\pi = p\,y - w_1x_1 - w_2x_2 \qquad\text{mit } y = f(x_1,x_2)$$

- **Kurzfristig**: Mindestens ein Faktor ist fix, $x_2 = \bar x_2$. Gesucht ist nur $x_1^*$. Die Kosten $w_2\bar x_2$ fallen immer an – das sind die **Fixkosten**.
- **Langfristig**: Alle Faktoren variabel. Gesucht sind $x_1^*$ und $x_2^*$.

### 3.2 Isogewinnlinie

Löst man die kurzfristige Gewinnfunktion nach $y$ auf, erhält man die **Isogewinnlinie**: alle Kombinationen aus $x_1$ und $y$, die denselben Gewinn $\pi$ ergeben (Folien 27–28):

$$\pi = py - w_1x_1 - w_2\bar x_2 \;\Rightarrow\; y = \frac{\pi + w_2\bar x_2}{p} + \frac{w_1}{p}\,x_1$$

Das ist eine Gerade im $x_1$-$y$-Diagramm mit **Steigung $w_1/p$** (positiv!) und Achsenabschnitt $(\pi + w_2\bar x_2)/p$. Höhere Isogewinnlinien bedeuten höheren Gewinn. Lesart: Mehr Input $x_1$ kostet $w_1$, also muss der Output um $w_1/p$ steigen, damit der Gewinn gleich bleibt.

### 3.3 Kurzfristige Gewinnmaximierung

**Grafisch** (Folie 29): Die Produktionsfunktion $y = f(x_1, \bar x_2)$ ist konkav (abnehmendes Grenzprodukt). Gesucht ist der Punkt auf ihr, der auf der höchsten erreichbaren Isogewinnlinie liegt. Das ist der **Tangentialpunkt**: Steigung der Produktionsfunktion = Steigung der Isogewinnlinie.

**Mathematisch** (Folien 30–31):

$$\max_{x_1}\; \pi = p\,f(x_1,\bar x_2) - w_1x_1 - w_2\bar x_2 \quad\Rightarrow\quad \frac{\partial\pi}{\partial x_1} = p\cdot MP_1 - w_1 = 0$$

$$\boxed{\,p \cdot MP_1 = w_1\,}$$

Links steht der **Grenzerlös** des Faktors (Wert des Grenzprodukts: eine Einheit $x_1$ mehr bringt $MP_1$ Stück, jedes verkauft zu $p$), rechts die **Grenzkosten** des Faktors. Marginalprinzip aus Thema 1: Einsatz erhöhen, solange $p \cdot MP_1 > w_1$; aufhören, wenn Gleichheit gilt.

<div class="box beispiel"><strong>Beispiel</strong>
$y = 4\sqrt{x_1}$ (bei $\bar x_2 = 1$), $p = 5$, $w_1 = 2$, $w_2 = 3$. $MP_1 = 2x_1^{-1/2}$. Bedingung: $5 \cdot 2x_1^{-1/2} = 2 \Rightarrow x_1^{-1/2} = 0{,}2 \Rightarrow x_1^* = 25$. Output $y^* = 4 \cdot 5 = 20$. Gewinn $\pi = 5\cdot 20 - 2\cdot 25 - 3 \cdot 1 = 100 - 50 - 3 = 47$.</div>

<div data-graph="gewinn-kurz"></div>

### 3.4 Langfristige Gewinnmaximierung

Langfristig sind beide Faktoren frei (Folien 32–33). Zwei Bedingungen erster Ordnung:

$$p \cdot MP_1 = w_1 \qquad\text{und}\qquad p\cdot MP_2 = w_2$$

Zwei Gleichungen, zwei Unbekannte. Grafisch: Für jedes $x_2$ gibt es eine eigene kurzfristige Produktionsfunktion; das langfristige Optimum liegt auf derjenigen, bei der auch die zweite Bedingung erfüllt ist.

<div class="box beispiel"><strong>Beispiel</strong>
$y = x_1^{1/4}x_2^{1/4}$, $p = 8$, $w_1 = w_2 = 1$. $MP_1 = \tfrac14 x_1^{-3/4}x_2^{1/4}$, $MP_2 = \tfrac14 x_1^{1/4}x_2^{-3/4}$. Aus $8\,MP_1 = 1$ und $8\,MP_2 = 1$ folgt $MP_1 = MP_2$, also $x_2/x_1 = 1$, $x_1 = x_2 = x$. Einsetzen: $2x^{-1/2} = 1 \Rightarrow x = 4$. Also $x_1^* = x_2^* = 4$, $y^* = 2$, $\pi = 16 - 4 - 4 = 8$.</div>

<div class="box fehler"><strong>Typischer Fehler</strong>
Bei steigenden oder konstanten Skalenerträgen hat das langfristige Gewinnmaximum keine (eindeutige) Lösung – bei konstanten Skalenerträgen ist der Gewinn im Optimum null oder das Problem unbeschränkt. Klausuraufgaben zur langfristigen Gewinnmaximierung haben deshalb immer $a + b < 1$. Wenn die Exponenten in der Aufgabe sich zu 1 addieren, ist Kostenminimierung gefragt, nicht Gewinnmaximierung.</div>

### 3.5 Komparative Statik

Nur die **Steigung** $w_1/p$ der Isogewinnlinie entscheidet über den Tangentialpunkt (Folien 34–35):

| Änderung | Steigung $w_1/p$ | Tangentialpunkt | $x_1^*$ | $y^*$ |
|---|---|---|---|---|
| $p$ steigt | sinkt, Linie flacher | wandert nach rechts | steigt | steigt |
| $p$ sinkt | steigt, Linie steiler | wandert nach links | sinkt | sinkt |
| $w_1$ steigt | steigt | nach links | sinkt | sinkt |
| $w_1$ sinkt | sinkt | nach rechts | steigt | steigt |

Im Beispiel von 3.3 lässt sich die Faktornachfrage explizit ausrechnen: $p\cdot 2x_1^{-1/2} = w_1 \Rightarrow x_1^* = (2p/w_1)^2$ und $y^* = 8p/w_1$. Das ist die **Angebotsfunktion**: steigend in $p$, fallend in $w_1$.

---

## 4. Kostenminimierung

### 4.1 Das Problem

Gewinnmaximierung und Kostenminimierung sind zwei Seiten derselben Medaille (Folie 37): Wer den Gewinn maximiert, produziert seinen Output zwangsläufig so billig wie möglich. Das Kostenminimierungsproblem lautet

$$\min_{x_1,x_2}\; w_1x_1 + w_2x_2 \quad\text{u.d.N.}\quad f(x_1,x_2) = \bar y$$

Gesucht sind $x_1^*, x_2^*$, die (1) die Nebenbedingung erfüllen und (2) unter allen solchen Kombinationen die geringsten Kosten haben.

### 4.2 Isokostengerade

Die **Kostenfunktion** (für gegebene Inputs) ist $C = w_1x_1 + w_2x_2$. Aufgelöst nach $x_2$ ergibt sich die **Isokostengerade** – alle Inputkombinationen mit denselben Kosten $C$ (Folien 38–39):

$$x_2 = \frac{C}{w_2} - \frac{w_1}{w_2}\,x_1$$

Steigung $-w_1/w_2$, Achsenabschnitte $C/w_1$ und $C/w_2$. Das ist exakt die Budgetgerade mit $w$ statt $p$ und $C$ statt $m$ – nur dass $C$ hier nicht vorgegeben ist, sondern **minimiert** wird. Höhere Isokostengeraden bedeuten höhere Kosten; gesucht ist die **niedrigste**, die die Isoquante $\bar y$ noch berührt.

### 4.3 Grafische Lösung

Isoquante $\bar y$ und Isokostengeraden ins selbe $x_1$-$x_2$-Diagramm (Folie 40). Punkt A auf der Isoquante, aber auf einer hohen Isokostengeraden: nicht kostenminimal. Punkt C auf einer niedrigen Isokostengeraden, aber unterhalb der Isoquante: nicht erreichbar. Punkt B, in dem die Isokostengerade die Isoquante **tangiert**: kostenminimal.

**Tangentialbedingung**: Steigung der Isoquante = Steigung der Isokostengeraden

$$TRS = -\frac{MP_1}{MP_2} = -\frac{w_1}{w_2} \quad\Longleftrightarrow\quad \frac{MP_1}{MP_2} = \frac{w_1}{w_2} \quad\Longleftrightarrow\quad \frac{MP_1}{w_1} = \frac{MP_2}{w_2}$$

Die letzte Form liest sich am besten: Im Optimum bringt der **letzte Euro** in jedem Faktor gleich viel Output. Sonst würde man umschichten.

<div data-graph="kostenmin"></div>

### 4.4 Mathematische Lösung mit Lagrange

Lagrange-Funktion wie in Thema 3, nur dass die Zielfunktion jetzt die Kosten sind und die Nebenbedingung die Produktionsfunktion (Folie 41):

$$\mathcal{L} = w_1x_1 + w_2x_2 - \lambda\,\big(f(x_1,x_2) - \bar y\big)$$

Bedingungen erster Ordnung:

$$\frac{\partial\mathcal{L}}{\partial x_1} = w_1 - \lambda\, MP_1 = 0 \quad (1)\qquad
\frac{\partial\mathcal{L}}{\partial x_2} = w_2 - \lambda\, MP_2 = 0 \quad (2)\qquad
\frac{\partial\mathcal{L}}{\partial \lambda} = -\big(f(x_1,x_2) - \bar y\big) = 0 \quad (3)$$

(1) geteilt durch (2) eliminiert $\lambda$ und liefert die Tangentialbedingung $\frac{w_1}{w_2} = \frac{MP_1}{MP_2}$. Zusammen mit (3) sind das zwei Gleichungen für $x_1$ und $x_2$. Der Multiplikator hat hier eine klare Bedeutung: $\lambda = w_1/MP_1 = w_2/MP_2$ sind die **Grenzkosten** – was eine zusätzliche Outputeinheit kostet.

<div class="box beispiel"><strong>Beispiel – das Standardschema</strong>
$y = x_1^{1/2}x_2^{1/2}$, $\bar y = 10$, $w_1 = 4$, $w_2 = 1$.
<br>Schritt 1, Tangentialbedingung: $\frac{MP_1}{MP_2} = \frac{x_2}{x_1} = \frac{w_1}{w_2} = 4 \Rightarrow x_2 = 4x_1$.
<br>Schritt 2, Nebenbedingung: $x_1^{1/2}(4x_1)^{1/2} = 2x_1 = 10 \Rightarrow x_1^* = 5$, $x_2^* = 20$.
<br>Schritt 3, Kosten: $C = 4\cdot 5 + 1 \cdot 20 = 40$. Grenzkosten $\lambda = w_1/MP_1 = 4 / (\tfrac12\sqrt{20/5}) = 4$.
<br>Probe über die allgemeine Kostenfunktion: Für $y = x_1^{1/2}x_2^{1/2}$ gilt $C(y) = 2y\sqrt{w_1w_2} = 2 \cdot 10 \cdot 2 = 40$ ✓, und $MC = 2\sqrt{w_1w_2} = 4$ ✓.</div>

<div class="box merke"><strong>Cobb-Douglas-Abkürzung für die Tangentialbedingung</strong>
Bei $y = Ax_1^ax_2^b$ ist $\frac{MP_1}{MP_2} = \frac{a}{b}\cdot\frac{x_2}{x_1}$. Die Tangentialbedingung wird zu $\frac{x_2}{x_1} = \frac{b}{a}\cdot\frac{w_1}{w_2}$. Das spart in der Klausur zwei Zeilen Ableitungen – aber die Ableitungen trotzdem einmal hinschreiben, dafür gibt es Punkte.</div>

<div class="box fehler"><strong>Typische Fehler</strong>
(1) Vorzeichen: $TRS = -MP_1/MP_2$ und Steigung $-w_1/w_2$ – beide negativ, im Gleichsetzen fallen die Minuszeichen weg. Wer nur eines schreibt, bekommt $x_2 = -4x_1$ und merkt es nicht.
<br>(2) Nebenbedingung vergessen: Die Tangentialbedingung liefert nur das <em>Verhältnis</em> $x_2/x_1$. Erst die Produktionsfunktion mit $\bar y$ liefert die Mengen.
<br>(3) Faktorpreise vertauschen: $w_1$ gehört zu $x_1$. Steigung der Isokostengeraden ist $-w_1/w_2$, wenn $x_1$ horizontal liegt.</div>

---

## 5. Kostenfunktion, Grenzkosten und Angebot

Dieser Abschnitt steht so nicht in den Folien zu Thema 4, wird aber in **Übungsblatt 2 (Aufgabe 1)** vorausgesetzt und bei Mankiw/Taylor ausführlich behandelt. Die Dozentin nennt die Begriffe Grenzerlös und Grenzkosten bereits auf Folie 30.

### 5.1 Kostenbegriffe

Hat man das Kostenminimierungsproblem für jedes $y$ gelöst, erhält man die **Kostenfunktion** $C(y)$: die minimalen Kosten, um $y$ zu produzieren. Kurzfristig zerfällt sie in **Fixkosten** $FC$ (unabhängig von $y$, z. B. $w_2\bar x_2$) und **variable Kosten** $VC(y)$:

$$C(y) = FC + VC(y)$$

| Größe | Formel | Bedeutung |
|---|---|---|
| Grenzkosten | $MC = \dfrac{dC}{dy}$ | Kosten der nächsten Einheit |
| Durchschnittskosten | $AC = \dfrac{C(y)}{y}$ | Kosten je Stück insgesamt |
| durchschnittliche variable Kosten | $AVC = \dfrac{VC(y)}{y}$ | variable Kosten je Stück |
| durchschnittliche Fixkosten | $AFC = \dfrac{FC}{y}$ | sinken mit $y$; $AC = AVC + AFC$ |

**Lage der Kurven**: $MC$ schneidet $AVC$ und $AC$ jeweils in deren **Minimum**. Begründung: Solange die nächste Einheit billiger ist als der Durchschnitt ($MC < AC$), zieht sie den Durchschnitt nach unten; ist sie teurer, zieht sie ihn hoch. Im Minimum sind beide gleich. Typische Form bei $C(y) = y^3 - 6y^2 + 15y + 8$: $MC = 3y^2 - 12y + 15$ (U-förmig), $AVC = y^2 - 6y + 15$ mit Minimum bei $y = 3$, $AVC(3) = 6 = MC(3)$ ✓.

<div data-graph="kostenkurven"></div>

### 5.2 Gewinnmaximum bei vollkommener Konkurrenz

Das Unternehmen ist Preisnehmer: Jede Einheit bringt $p$, also ist der **Grenzerlös gleich $p$**. Gewinn $\pi(y) = py - C(y)$, Bedingung erster Ordnung:

$$\frac{d\pi}{dy} = p - MC = 0 \quad\Rightarrow\quad \boxed{\,p = MC(y^*)\,}$$

Zusätzlich muss $MC$ im Optimum **steigen** (Bedingung zweiter Ordnung, $MC' > 0$); der Schnittpunkt auf dem fallenden Ast ist ein Gewinn*minimum*. Bei quadratischen Grenzkosten gibt es zwei Lösungen – immer die größere nehmen und die Steigung prüfen.

### 5.3 Stilllegung und Marktaustritt

- **Kurzfristig**: Die Fixkosten fallen auch bei $y = 0$ an. Produzieren lohnt sich, solange der Erlös die variablen Kosten deckt: $p \ge AVC$, also **$p \ge \min AVC$**. Der Punkt $p = \min AVC$ heißt **Stilllegungspunkt**: Dort ist der Verlust bei Produktion genau gleich den Fixkosten – das Unternehmen ist indifferent.
- **Langfristig**: Alle Kosten sind variabel. Das Unternehmen bleibt im Markt, wenn **$p \ge \min AC$**; sonst Marktaustritt. Die **Angebotskurve** des Unternehmens ist der steigende Ast der $MC$-Kurve oberhalb von $\min AVC$ (kurzfristig) bzw. $\min AC$ (langfristig).

<div class="box beispiel"><strong>Beispiel (Struktur von Übungsblatt 2, Aufgabe 1)</strong>
$C(y) = y^3 - 6y^2 + 15y + 8$, $p = 15$. $MC = 3y^2 - 12y + 15 = 15 \Rightarrow 3y(y-4) = 0 \Rightarrow y^* = 4$ (bei $y = 0$ fällt $MC$ noch). Erlös $60$, Kosten $64 - 96 + 60 + 8 = 36$, Gewinn $24$.
<br>Bei $p = 6$: $MC = 6 \Rightarrow y^2 - 4y + 3 = 0 \Rightarrow y = 3$ (steigender Ast). $AVC(3) = 6 = p$: Stilllegungspunkt. Gewinn $= 18 - 26 = -8 = -FC$. Kurzfristig egal ob produzieren oder nicht; langfristig raus, wenn der Preis so bleibt.
<br>Bei $p = 4 < \min AVC$: nicht produzieren, Verlust $= FC = 8$.</div>

---

## 6. Klausur-Check Thema 4

**Diese Grafiken musst du blind zeichnen und beschriften können:**

1. Produktionsfunktion $y = f(x_1, \bar x_2)$ mit abnehmendem Grenzprodukt (konkav) und Produktionsmöglichkeitenmenge darunter
2. Isoquanten: Cobb-Douglas, konstante Proportionen (L), perfekte Substitute (Geraden)
3. Isogewinnlinie und Tangentialpunkt an der Produktionsfunktion; Verschiebung bei Änderung von $p$ oder $w_1$
4. Isokostengerade und Isoquante mit Tangentialpunkt B, nicht-optimalem A und unerreichbarem C
5. Kostenkurven $MC$, $AC$, $AVC$ mit Schnittpunkten im Minimum, Preislinie $p$ und Stilllegungspunkt

**Diese Rechnungen musst du in unter fünf Minuten können:**

- Output für gegebene Inputs ausrechnen, Isoquante nach $x_2$ auflösen
- $MP_1$, $MP_2$ und $TRS = -MP_1/MP_2$ bestimmen und in einem Punkt auswerten
- Skalenerträge mit $k$ prüfen (oder bei Cobb-Douglas $a + b$ ablesen)
- Isogewinnlinie aufstellen, $p\cdot MP_1 = w_1$ nach $x_1^*$ auflösen, $y^*$ und $\pi$ berechnen
- Kostenminimum: Tangentialbedingung → Verhältnis → Nebenbedingung → Mengen → Kosten
- $p = MC$ lösen (steigender Ast!), Erlös, Kosten, Gewinn; mit $\min AVC$ und $\min AC$ vergleichen

**Begriffsliste der Dozentin** (Folie 43): Inputs, Output, Technologie; Produktionsfunktion und Produktionsmöglichkeitenmenge; Isoquante; Grenzprodukt; technische Rate der Substitution; Skalenerträge; Gewinnfunktion; Isogewinnlinie; Gewinnmaximierung kurz- und langfristig, grafisch und mathematisch; Kostenfunktion; Isokostengerade; Kostenminimierung grafisch und mathematisch.

<p class="folie">Quellen: Vorlesungsfolien Thema 4 (Schehl, WS 2025/26); Varian, Grundzüge der Mikroökonomik, Kap. 19–21; Mankiw/Taylor, Grundzüge der VWL, Kapitel zu Produktionskosten und Unternehmen auf Wettbewerbsmärkten. Text eigenständig formuliert.</p>
`;
