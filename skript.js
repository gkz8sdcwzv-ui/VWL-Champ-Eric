window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t3 = [
  "Ich kann die Budgetgerade aufstellen, nach $x_2$ auflösen, Achsenabschnitte und Steigung berechnen und sie zeichnen.",
  "Ich kann erklären, warum die Steigung $-p_1/p_2$ die Opportunitätskosten von Gut 1 misst.",
  "Ich weiß, wie Einkommensänderung, Preisänderung, Mengensteuer, Wertsteuer, Subvention und Rationierung die Budgetgerade verändern – und kann es zeichnen.",
  "Ich kenne die drei Präferenzrelationen und die Axiome Vollständigkeit, Reflexivität, Transitivität.",
  "Ich kann die Indifferenzkurven von perfekten Substituten, Komplementen, Ungütern, neutralen Gütern, Sättigung und Cobb-Douglas zeichnen und die Nutzenfunktion zuordnen.",
  "Ich kann begründen, warum sich Indifferenzkurven nicht schneiden und was Monotonie und Konvexität bedeuten.",
  "Ich kann die MRS definieren, als $-MU_1/MU_2$ berechnen und ihr Vorzeichen und ihre Abnahme erklären.",
  "Ich kann prüfen, ob eine Funktion eine positiv monotone Transformation ist, und weiß, dass sie die MRS nicht verändert.",
  "Ich kann das Optimum mit Tangentialbedingung, Substitutionsverfahren und Lagrange berechnen – alle drei Wege.",
  "Ich kenne die Cobb-Douglas-Nachfrage $x_1 = \\frac{c}{c+d}\\cdot\\frac{m}{p_1}$ und die Interpretation der Exponenten als Einkommensanteile.",
  "Ich kann die Nachfrage bei perfekten Substituten (Fallunterscheidung) und perfekten Komplementen (Knick) herleiten.",
  "Ich weiß, wann die Tangentialbedingung nicht gilt (Randoptimum, Knick, nicht-konvexe Präferenzen)."
];

VWL.skripte.t3 = String.raw`
## 1. Worum es geht

Die Haushaltstheorie beantwortet eine einzige Frage: **Welches Güterbündel kauft ein Konsument, wenn er sich das Beste aussucht, das er sich leisten kann?** Dafür braucht es zwei Zutaten, die am Ende zusammengeführt werden:

| Zutat | Frage | Werkzeug | Folien |
|---|---|---|---|
| Budget | Was kann ich mir leisten? | Budgetgerade | 7–26 |
| Präferenzen | Was will ich? | Indifferenzkurven, Nutzenfunktion, MRS | 28–65 |
| Konsumwahl | Was kaufe ich? | Tangentialbedingung, Lagrange, Nachfragefunktion | 67–82 |

Der rote Faden: Die Budgetgerade hat die Steigung $-p_1/p_2$ (das sagt der **Markt**). Die Indifferenzkurve hat die Steigung MRS (das sagt der **Konsument**). Im Optimum sind beide gleich. Alles andere in diesem Thema sind Vorbereitungen auf diesen Satz.

Wir rechnen immer mit **zwei Gütern** $x_1$ und $x_2$ zu Preisen $p_1$, $p_2$ und Einkommen $m$. Zwei Güter reichen, weil man Gut 2 als „alles andere“ (zusammengesetztes Gut) auffassen kann (Folie 7).

---

## 2. Die Budgetbeschränkung

### 2.1 Budgetmenge und Budgetgerade

Ein Güterbündel $(x_1, x_2)$ ist **leistbar**, wenn es nicht mehr kostet als das Einkommen:

$$p_1 x_1 + p_2 x_2 \le m$$

Alle leistbaren Bündel zusammen heißen **Budget** oder Budgetmenge (Folie 8). Die **Budgetgerade** ist der Rand dieser Menge – die Bündel, die genau $m$ kosten:

$$p_1 x_1 + p_2 x_2 = m$$

Auflösen nach $x_2$ liefert die Form, die man zum Zeichnen braucht (Folie 10):

$$x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}\, x_1$$

<div class="box merke"><strong>Merke – die drei Kennzahlen der Budgetgeraden</strong>
Vertikaler Achsenabschnitt $m/p_2$: alles Geld in Gut 2. &nbsp; Horizontaler Achsenabschnitt $m/p_1$: alles Geld in Gut 1. &nbsp; Steigung $-p_1/p_2$: immer negativ.
Faustregel zum Merken: Der Achsenabschnitt auf einer Achse ist $m$ geteilt durch den Preis <em>dieses</em> Gutes. Die Steigung ist der Preis des Gutes auf der <em>horizontalen</em> Achse durch den Preis des Gutes auf der <em>vertikalen</em> Achse, mit Minus.</div>

<div class="box beispiel"><strong>Beispiel</strong>
$m = 120$, $p_1 = 4$, $p_2 = 2$. Budgetgerade: $4x_1 + 2x_2 = 120$, also $x_2 = 60 - 2x_1$. Achsenabschnitte: $m/p_1 = 30$ und $m/p_2 = 60$. Steigung $-2$: Für jede Einheit Gut 1 mehr muss der Konsument auf 2 Einheiten Gut 2 verzichten.</div>

### 2.2 Die Steigung als Opportunitätskosten

Warum ist die Steigung genau $-p_1/p_2$? Die Budgetgerade muss vor und nach einer Umschichtung erfüllt sein (Folie 11):

$$p_1 x_1 + p_2 x_2 = m \quad\text{und}\quad p_1(x_1+\Delta x_1) + p_2(x_2+\Delta x_2) = m$$

Zieht man die erste Gleichung von der zweiten ab, bleibt $p_1 \Delta x_1 + p_2 \Delta x_2 = 0$, also

$$\frac{\Delta x_2}{\Delta x_1} = -\frac{p_1}{p_2}$$

Ökonomisch: Die Steigung ist das Tauschverhältnis, das der **Markt** vorgibt. Eine Einheit Gut 1 mehr kostet $p_1$ Euro, und für $p_1$ Euro bekommt man $p_1/p_2$ Einheiten Gut 2. Diese $p_1/p_2$ Einheiten sind die **Opportunitätskosten** von Gut 1 (Folie 12). Umgekehrt kostet eine Einheit Gut 2 genau $p_2/p_1$ Einheiten Gut 1.

<div data-graph="budget"></div>

### 2.3 Wie sich die Budgetgerade verändert

Immer ceteris paribus: eine Größe ändert sich, alle anderen bleiben gleich (Folie 14). Die Tabelle ist Klausurstandard (Folie 19):

| Änderung | Neue Gleichung | Achsenabschnitt $m/p_2$ | Steigung | Grafisch |
|---|---|---|---|---|
| Einkommen steigt ($m \to am$, $a>1$) | $x_2 = \frac{am}{p_2} - \frac{p_1}{p_2}x_1$ | höher | unverändert | Parallelverschiebung nach außen |
| Einkommen sinkt ($0<a<1$) | wie oben | niedriger | unverändert | Parallelverschiebung nach innen |
| $p_1$ steigt ($p_1 \to ap_1$, $a>1$) | $x_2 = \frac{m}{p_2} - \frac{ap_1}{p_2}x_1$ | unverändert | steiler | Drehung nach innen um den Punkt $m/p_2$ |
| $p_1$ sinkt ($0<a<1$) | wie oben | unverändert | flacher | Drehung nach außen |
| $p_2$ steigt | $x_2 = \frac{m}{ap_2} - \frac{p_1}{ap_2}x_1$ | niedriger | flacher | Drehung um den Punkt $m/p_1$ |

<div class="box fehler"><strong>Typischer Fehler</strong>
„Preis von Gut 1 steigt, also verschiebt sich die Gerade parallel.“ Falsch: Nur eine Einkommensänderung (oder eine Änderung <em>beider</em> Preise um denselben Faktor) verschiebt parallel. Eine Änderung <em>eines</em> Preises dreht die Gerade um den Achsenabschnitt des <em>anderen</em> Gutes, denn der bleibt unverändert.</div>

**Staatliche Eingriffe** sind nur Spezialfälle davon (Folien 20–26):

- **Mengensteuer** $t$ je Einheit von Gut 1: Der Preis wird zu $p_1 + t$. Gleichung $(p_1+t)x_1 + p_2x_2 = m$, Steigung $-(p_1+t)/p_2$ – wirkt wie eine Preiserhöhung, die Gerade wird steiler.
- **Mengensteuer erst ab einer Menge** $\bar{x}_1$: Bis $\bar{x}_1$ gilt die alte Steigung $-p_1/p_2$, danach $-(p_1+t)/p_2$. Die Budgetgerade hat einen **Knick** bei $\bar{x}_1$.
- **Wertsteuer** $\tau$ auf alle Güter (z. B. Mehrwertsteuer): $(1+\tau)p_1x_1 + (1+\tau)p_2x_2 = m$, also $p_1x_1 + p_2x_2 = \frac{m}{1+\tau}$. Die Steigung bleibt, der Achsenabschnitt sinkt: **wirkt wie ein Einkommensrückgang**. Der Einkommensverlust beträgt $m - \frac{m}{1+\tau} = \frac{\tau}{1+\tau}\,m$ (Folie 24).
- **Mengensubvention** $s$ auf Gut 1: Preis wird $p_1 - s$, Gerade flacher. **Ad-valorem-Subvention** $\sigma$: Preis wird $(1-\sigma)p_1$, ebenfalls flacher. **Pauschalsubvention**: Einkommen steigt um einen festen Betrag, Parallelverschiebung nach außen.
- **Rationierung** von Gut 1 bei $\bar{x}_1$: Gleichung unverändert, aber alle Bündel mit $x_1 > \bar{x}_1$ fallen weg – die Budgetmenge wird rechts abgeschnitten.

<div class="box beispiel"><strong>Beispiel Wertsteuer</strong>
$m = 240$, $p_1 = 1$, $p_2 = 3$, Mehrwertsteuer $\tau = 1/3$ auf alles. Neues effektives Einkommen: $240 / (1 + 1/3) = 240 \cdot 3/4 = 180$. Neue Gleichung $x_1 + 3x_2 = 180$. Steigung weiterhin $-1/3$; Achsenabschnitte sinken von 240 und 80 auf 180 und 60. Einkommensverlust: $\frac{1/3}{4/3}\cdot 240 = 60$.</div>

---

## 3. Präferenzen

### 3.1 Präferenzrelationen und Axiome

Der Konsument kann je zwei Bündel vergleichen (Folien 29–30):

| Symbol | Name | Bedeutung |
|---|---|---|
| $(x_1,x_2) \succ (y_1,y_2)$ | strenge Präferenz | $x$ wird eindeutig vorgezogen |
| $(x_1,x_2) \succeq (y_1,y_2)$ | schwache Präferenz | $x$ ist mindestens so gut wie $y$ |
| $(x_1,x_2) \sim (y_1,y_2)$ | Indifferenz | beide sind gleich gut |

Die Relationen hängen zusammen: Gilt $x \succeq y$ und $y \succeq x$, dann $x \sim y$. Gilt $x \succeq y$, aber nicht $x \sim y$, dann $x \succ y$.

Drei **Axiome** werden immer vorausgesetzt (Folie 31):

1. **Vollständigkeit**: Je zwei Bündel lassen sich vergleichen – es gilt $x \succeq y$ oder $y \succeq x$ (oder beides). Der Konsument kann sich immer entscheiden.
2. **Reflexivität**: Jedes Bündel ist mindestens so gut wie es selbst, $x \succeq x$.
3. **Transitivität**: Aus $x \succeq y$ und $y \succeq z$ folgt $x \succeq z$. Ohne Transitivität gäbe es Kreisschlüsse und kein bestes Bündel.

Präferenzen sind **ordinal**: Sie geben nur eine Reihenfolge an, keine Abstände.

### 3.2 Indifferenzkurven

Eine **Indifferenzkurve** ist die Menge aller Bündel, die der Konsument genauso gut findet wie ein gegebenes Bündel (Folie 32). Bündel auf einer höheren Kurve sind streng besser.

<div class="box merke"><strong>Indifferenzkurven schneiden sich nie</strong> (Folie 33)
Beweis durch Widerspruch: Angenommen zwei Kurven $I_1$ und $I_2$ schneiden sich in $Z$. Dann gilt $X \sim Z$ (beide auf $I_2$) und $Z \sim Y$ (beide auf $I_1$), also nach Transitivität $X \sim Y$. Aber $I_1$ und $I_2$ stehen für verschiedene Niveaus, also $X \succ Y$. Widerspruch. In der Klausur reicht genau diese Argumentation in drei Sätzen.</div>

### 3.3 Die Gütertypen und ihre Kurven

Diese Tabelle muss sitzen – Zeichnen und Zuordnen ist eine typische Klausuraufgabe (Folien 36–41, 57–60):

| Typ | Beispiel | Form der Indifferenzkurven | Nutzenfunktion |
|---|---|---|---|
| Perfekte Substitute | rote und blaue Bleistifte | parallele Geraden, Steigung $-a/b$ | $u = a x_1 + b x_2$ |
| Perfekte Komplemente | rechte und linke Schuhe | L-förmig, Knick auf der Linie $a x_1 = b x_2$ | $u = \min\{a x_1, b x_2\}$ |
| Ungut | Sardellen zu Käse | steigende Geraden/Kurven (mehr Ungut muss durch mehr Gut entschädigt werden) | – |
| Neutrales Gut | Sardellen, die egal sind | senkrechte Geraden (nur $x_1$ zählt) | $u = u(x_1)$ |
| Sättigung | Kuchen und Eis | geschlossene Ovale um den Sättigungspunkt $(\bar{x}_1,\bar{x}_2)$ | – |
| Unteilbares Gut | Autos | einzelne Punkte statt Kurve | – |
| Quasilinear | – | vertikal verschobene Kopien einer Kurve | $u = f(x_1) + x_2$, z. B. $\ln x_1 + x_2$ |
| Cobb-Douglas (Normalfall) | fast alles | fallend, konvex, berühren die Achsen nie | $u = x_1^c x_2^d$ |

<div class="box fehler"><strong>Typischer Fehler</strong>
Bei perfekten Komplementen $u = \min\{a x_1, b x_2\}$ liegt der Knick <em>nicht</em> auf der 45-Grad-Linie, sondern dort, wo $a x_1 = b x_2$. Bei $u = \min\{x_1, 2x_2\}$ etwa auf $x_1 = 2x_2$: Der Konsument braucht zu jeder Einheit $x_2$ zwei Einheiten $x_1$.</div>

### 3.4 Der Normalfall: Monotonie und Konvexität

Präferenzen heißen **normal** (Varian: „wohlverhalten“), wenn sie monoton und konvex sind (Folien 42–44):

- **Monotonie**: Mehr ist besser. Enthält $y$ von beiden Gütern mindestens so viel wie $x$ und von einem mehr, dann $y \succ x$. Folge: Indifferenzkurven fallen. Wir schließen damit Ungüter und Sättigung aus.
- **(Strenge) Konvexität**: Durchschnitte werden Extremen vorgezogen. Ist $X \sim Y$ und $Z = tX + (1-t)Y$ mit $0<t<1$, dann $Z \succ X$ und $Z \succ Y$. Folge: Indifferenzkurven sind zum Ursprung hin gewölbt. Begründung: Güter werden meist gemeinsam konsumiert, Mischung ist besser als Einseitigkeit.
- **Nicht-konvex** (konkav): Der Konsument spezialisiert sich – Oliven *oder* Eis, nicht beides zusammen. Dann liegt das Optimum am Rand.

### 3.5 Die Grenzrate der Substitution (MRS)

Die **MRS** ist die Steigung der Indifferenzkurve (Folie 45):

$$MRS = \frac{\Delta x_2}{\Delta x_1} = \frac{dx_2}{dx_1}$$

Sie misst, wie viel Gut 2 der Konsument **gerade noch** hergeben würde, um eine Einheit Gut 1 mehr zu bekommen – ohne schlechter gestellt zu sein. Bei normalen Präferenzen ist die MRS **negativ** (man gibt etwas her) und nimmt entlang der Kurve nach rechts **betragsmäßig ab** (Folie 46): Wer schon viel von Gut 1 hat, gibt für eine weitere Einheit nur noch wenig Gut 2 her.

<div class="box merke"><strong>Vorzeichenkonvention der Dozentin</strong>
Auf den Folien ist die MRS die Steigung selbst und damit negativ, z. B. $MRS_A = -2$. Manche Lehrbücher nehmen den Betrag. Schreibe in der Klausur wie in den Folien mit Minus und sage dazu, dass das Vorzeichen den Tausch ausdrückt. Dann bist du auf der sicheren Seite.</div>

---

## 4. Nutzen

### 4.1 Nutzenfunktion und ordinaler Nutzen

Eine **Nutzenfunktion** $u(x_1,x_2)$ ordnet jedem Bündel eine Zahl zu, sodass bessere Bündel höhere Zahlen bekommen (Folie 49):

$$(x_1,x_2) \succ (y_1,y_2) \iff u(x_1,x_2) > u(y_1,y_2)$$

Nutzen ist **ordinal**: Nur die Reihenfolge zählt. $u(x) = 6$ und $u(y) = 2$ heißt nicht, dass $x$ dreimal so gut ist – nur, dass $x$ besser ist. Jede Indifferenzkurve ist eine Höhenlinie der Nutzenfunktion.

### 4.2 Monotone Transformationen

Weil nur die Reihenfolge zählt, beschreiben unendlich viele Funktionen dieselben Präferenzen. Ist $f$ **streng steigend**, dann stellt $v = f(u)$ dieselben Präferenzen dar wie $u$ (Folie 52). Beispiele für positiv monotone Transformationen: $u^2$ (für $u>0$), $2u+10$, $\ln u$, $\sqrt{u}$, $u^{1/(c+d)}$. **Keine** monotone Transformation: $-u$, $1/u$, $(u-5)^2$ – sie kehren die Reihenfolge um oder sind nicht überall steigend.

<div class="box beispiel"><strong>Prüfschema in der Klausur</strong> (Folien 53–54)
Nimm drei Bündel, berechne $u$ und $v$, vergleiche die Reihenfolgen. Für $u = x_1x_2$ und die Bündel $(2,3)$, $(4,1)$, $(2,2)$: $u = 6, 4, 4$. Mit $v = u^2$: $v = 36, 16, 16$. Mit $w = 2u+10$: $w = 22, 18, 18$. Reihenfolge jeweils identisch, also monotone Transformationen. Eleganter: $f'(u) > 0$ zeigen, z. B. $f(u) = u^2$ hat $f'(u) = 2u > 0$ für $u > 0$.</div>

Nützliche Anwendung (Folie 61): Jede Cobb-Douglas-Funktion $x_1^c x_2^d$ lässt sich durch die Transformation $u^{1/(c+d)}$ in die Form $x_1^a x_2^{1-a}$ mit $a = \frac{c}{c+d}$ bringen. Die Exponenten summieren sich dann zu 1 – und sind direkt die Einkommensanteile (siehe Abschnitt 5.3).

### 4.3 Grenznutzen

Der **Grenznutzen** $MU_i$ ist die Nutzenänderung durch eine kleine Mehrmenge von Gut $i$ bei konstanter Menge des anderen Gutes – mathematisch die **partielle Ableitung** (Folien 62, 64):

$$MU_1 = \frac{\partial u}{\partial x_1}, \qquad MU_2 = \frac{\partial u}{\partial x_2}$$

Für eine kleine Änderung gilt $\Delta u \approx MU_1 \Delta x_1 + MU_2 \Delta x_2$ (totales Differential). Achtung: Die **Höhe** des Grenznutzens ist ordinal bedeutungslos – sie ändert sich mit jeder monotonen Transformation. Nur das **Verhältnis** $MU_1/MU_2$ hat Bedeutung.

### 4.4 Von Grenznutzen zur MRS

Entlang einer Indifferenzkurve bleibt der Nutzen konstant, also $\Delta u = 0$ (Folie 63):

$$MU_1\,\Delta x_1 + MU_2\,\Delta x_2 = 0 \quad\Longrightarrow\quad MRS = \frac{dx_2}{dx_1} = -\frac{MU_1}{MU_2} = -\frac{\partial u/\partial x_1}{\partial u/\partial x_2}$$

<div class="box merke"><strong>Das ist die wichtigste Formel des Themas.</strong> Mit ihr rechnet man die MRS aus jeder Nutzenfunktion aus. Die MRS einer monotonen Transformation ist dieselbe wie die der Originalfunktion (Folie 65) – der Faktor $f'(u)$ steht in Zähler und Nenner und kürzt sich.</div>

| Nutzenfunktion | $MU_1$ | $MU_2$ | $MRS = -MU_1/MU_2$ |
|---|---|---|---|
| $x_1 x_2$ | $x_2$ | $x_1$ | $-\dfrac{x_2}{x_1}$ |
| $x_1^c x_2^d$ | $c\,x_1^{c-1}x_2^d$ | $d\,x_1^c x_2^{d-1}$ | $-\dfrac{c}{d}\cdot\dfrac{x_2}{x_1}$ |
| $a x_1 + b x_2$ | $a$ | $b$ | $-\dfrac{a}{b}$ (konstant) |
| $\ln x_1 + x_2$ | $1/x_1$ | $1$ | $-\dfrac{1}{x_1}$ |
| $\sqrt{x_1} + x_2$ | $\dfrac{1}{2\sqrt{x_1}}$ | $1$ | $-\dfrac{1}{2\sqrt{x_1}}$ |
| $\min\{a x_1, b x_2\}$ | – | – | nicht definiert (Knick), 0 bzw. $-\infty$ auf den Schenkeln |

<div class="box beispiel"><strong>Beispiel</strong>
$u = x_1^{1/2} x_2^{1/2}$ im Punkt $(4, 9)$. $MU_1 = \tfrac12 x_1^{-1/2} x_2^{1/2} = \tfrac12\cdot\tfrac12\cdot 3 = 0{,}75$. $MU_2 = \tfrac12 x_1^{1/2}x_2^{-1/2} = \tfrac12 \cdot 2 \cdot \tfrac13 = \tfrac13$. $MRS = -0{,}75 / (1/3) = -2{,}25$. Schneller mit der Tabelle: $-\frac{c}{d}\cdot\frac{x_2}{x_1} = -1\cdot\frac{9}{4} = -2{,}25$. Interpretation: Im Punkt (4, 9) würde der Konsument für eine Einheit Gut 1 mehr bis zu 2,25 Einheiten Gut 2 hergeben.</div>

---

## 5. Die Konsumentscheidung

### 5.1 Das Optimum und die Tangentialbedingung

Der Konsument wählt das Bündel auf der höchsten erreichbaren Indifferenzkurve. Bei normalen Präferenzen und einem **inneren Optimum** ($x_1^* > 0$, $x_2^* > 0$) berührt diese Kurve die Budgetgerade genau in einem Punkt (Folien 67–70). Dort gilt:

$$\text{(1) Tangentialbedingung:}\quad MRS = -\frac{p_1}{p_2} \quad\Longleftrightarrow\quad \frac{MU_1}{MU_2} = \frac{p_1}{p_2}$$
$$\text{(2) Budget ausgeschöpft:}\quad p_1 x_1 + p_2 x_2 = m$$

Ökonomisch: Die Rate, zu der der Konsument tauschen **will** (MRS), ist gleich der Rate, zu der er am Markt tauschen **kann** ($-p_1/p_2$). Wäre $|MRS| > p_1/p_2$, würde er für Gut 1 mehr hergeben, als der Markt verlangt – also mehr Gut 1 kaufen, bis Gleichheit herrscht.

Umgeformt lautet (1) auch $\frac{MU_1}{p_1} = \frac{MU_2}{p_2}$: Der **Grenznutzen pro Euro** ist bei beiden Gütern gleich. Das ist dieselbe Bedingung, oft leichter zu merken.

**Wann die Tangentialbedingung nicht reicht oder nicht gilt** (Folien 68–69):

- Sie ist **notwendig, aber nicht hinreichend**, wenn Präferenzen nicht konvex sind: Es kann Tangentialpunkte geben, die ein Minimum sind. Bei streng konvexen Präferenzen und innerem Optimum ist sie notwendig und hinreichend.
- **Randoptimum**: Von einem Gut wird nichts konsumiert. Tritt auf bei perfekten Substituten, konkaven Präferenzen oder wenn das Einkommen zu klein ist (quasilinear).
- **Knick**: Bei perfekten Komplementen gibt es keine Tangente; das Optimum liegt im Knick.

### 5.2 Drei Rechenwege zum Optimum

Alle drei liefern dasselbe Ergebnis. Die Dozentin verlangt in Übungsblatt 1 ausdrücklich Substitution **und** Lagrange – beide müssen sitzen (Folien 78–82).

**Weg A – Tangentialbedingung direkt.** $MU_1/MU_2 = p_1/p_2$ aufstellen, nach $x_2$ (oder $x_1$) auflösen, in die Budgetgerade einsetzen.

**Weg B – Substitutionsverfahren.** Budgetgerade nach $x_2$ auflösen: $x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}x_1$. In $u$ einsetzen – jetzt hängt $u$ nur noch von $x_1$ ab. Ableiten nach $x_1$, gleich null setzen, auflösen, dann $x_2$ aus der Budgetgeraden.

**Weg C – Lagrange.** Hilfsfunktion aufstellen (genau in dieser Form, Folie 82):

$$\mathcal{L} = u(x_1,x_2) - \lambda\,(p_1 x_1 + p_2 x_2 - m)$$

Drei Bedingungen erster Ordnung:

$$\frac{\partial \mathcal{L}}{\partial x_1} = MU_1 - \lambda p_1 = 0 \quad (1)$$
$$\frac{\partial \mathcal{L}}{\partial x_2} = MU_2 - \lambda p_2 = 0 \quad (2)$$
$$\frac{\partial \mathcal{L}}{\partial \lambda} = -(p_1 x_1 + p_2 x_2 - m) = 0 \quad (3)$$

Gleichung (1) durch (2) teilen eliminiert $\lambda$ und ergibt $\frac{MU_1}{MU_2} = \frac{p_1}{p_2}$ – die Tangentialbedingung. Mit (3) hat man zwei Gleichungen für zwei Unbekannte.

<div class="box beispiel"><strong>Durchgerechnetes Beispiel – alle drei Wege</strong>
$u = x_1 x_2$, $p_1 = 2$, $p_2 = 5$, $m = 100$.

<em>Weg A:</em> $MU_1 = x_2$, $MU_2 = x_1$. Tangentialbedingung $\frac{x_2}{x_1} = \frac{2}{5}$, also $x_2 = 0{,}4\,x_1$. In das Budget: $2x_1 + 5(0{,}4x_1) = 4x_1 = 100$, also $x_1^* = 25$, $x_2^* = 10$.

<em>Weg B:</em> $x_2 = 20 - 0{,}4x_1$. $u(x_1) = x_1(20 - 0{,}4x_1) = 20x_1 - 0{,}4x_1^2$. $u'(x_1) = 20 - 0{,}8x_1 = 0$, also $x_1^* = 25$, $x_2^* = 20 - 10 = 10$.

<em>Weg C:</em> $\mathcal{L} = x_1x_2 - \lambda(2x_1 + 5x_2 - 100)$. (1) $x_2 = 2\lambda$, (2) $x_1 = 5\lambda$, (3) $2x_1 + 5x_2 = 100$. Aus (1)/(2): $x_2/x_1 = 2/5$. Weiter wie Weg A: $x_1^* = 25$, $x_2^* = 10$, $\lambda = 5$.

Probe: $2\cdot 25 + 5\cdot 10 = 100$ ✓. Nutzen $u^* = 250$. Ausgabenanteile: $50/100$ und $50/100$ – je die Hälfte, wie es bei $u = x_1 x_2$ sein muss.</div>

<div class="box fehler"><strong>Typische Fehler beim Lagrange-Verfahren</strong>
(1) Vorzeichen in der Nebenbedingung vertauscht – die Form $(p_1x_1 + p_2x_2 - m)$ konsequent beibehalten, dann stimmt alles. (2) Nach dem Teilen von (1) durch (2) vergessen, die Budgetgerade zu benutzen – ohne sie hat man nur ein Verhältnis, keine Mengen. (3) Die Probe weglassen: Immer das Ergebnis in die Budgetgerade einsetzen. Das kostet 20 Sekunden und fängt jeden Rechenfehler.</div>

### 5.3 Die Nachfragefunktion – Cobb-Douglas

Die **Nachfragefunktion** $x_1(p_1,p_2,m)$ gibt die optimale Menge in Abhängigkeit von Preisen und Einkommen an (Folie 71). Rechnet man das Optimum für $u = x_1^c x_2^d$ allgemein durch, erhält man (Folie 76):

$$x_1^* = \frac{c}{c+d}\cdot\frac{m}{p_1}, \qquad x_2^* = \frac{d}{c+d}\cdot\frac{m}{p_2}$$

Herleitung in zwei Zeilen: $MRS$-Bedingung $\frac{c}{d}\cdot\frac{x_2}{x_1} = \frac{p_1}{p_2}$ ergibt $p_2 x_2 = \frac{d}{c}\,p_1 x_1$. In das Budget eingesetzt: $p_1x_1 + \frac{d}{c}p_1x_1 = m$, also $p_1 x_1 = \frac{c}{c+d}\,m$.

**Interpretation** (Folie 77): Der Konsument gibt den festen Anteil $\frac{c}{c+d}$ seines Einkommens für Gut 1 aus und $\frac{d}{c+d}$ für Gut 2 – unabhängig von den Preisen. Normiert man die Exponenten auf $a$ und $1-a$, sind die Exponenten direkt die **Einkommensanteile**. Bei $u = x_1^{1/3}x_2^{2/3}$ fließt ein Drittel des Einkommens in Gut 1.

Eigenschaften der Cobb-Douglas-Nachfrage: Steigt $p_1$, sinkt $x_1$ proportional (Nachfrage fällt), $x_2$ bleibt unverändert. Steigt $m$, steigen beide Mengen proportional.

<div data-graph="optimum-cd"></div>

### 5.4 Nachfrage in den Sonderfällen

**Perfekte Substitute** $u = a x_1 + b x_2$ (Folie 72): Die Indifferenzkurven sind Geraden mit Steigung $-a/b$, die Budgetgerade hat Steigung $-p_1/p_2$. Es gibt keinen Tangentialpunkt – der Konsument kauft nur das Gut mit dem höheren **Nutzen pro Euro**:

$$x_1^* = \begin{cases} m/p_1 & \text{wenn } a/p_1 > b/p_2 \\ \text{beliebig zwischen } 0 \text{ und } m/p_1 & \text{wenn } a/p_1 = b/p_2 \\ 0 & \text{wenn } a/p_1 < b/p_2 \end{cases}$$

Für $a = b = 1$ heißt das schlicht: das billigere Gut. Grafisch: Ist die Budgetgerade steiler als die Indifferenzkurven ($p_1/p_2 > a/b$), liegt das Optimum oben auf der $x_2$-Achse.

<div data-graph="substitute"></div>

**Perfekte Komplemente** $u = \min\{a x_1, b x_2\}$ (Folie 73): Das Optimum liegt immer im Knick, also auf $a x_1 = b x_2$. Zusammen mit der Budgetgerade folgt für $a = b = 1$:

$$x_1^* = x_2^* = \frac{m}{p_1 + p_2}$$

Logik: Da nur Paare zählen, gibt der Konsument sein ganzes Geld für „Paare“ zum Paarpreis $p_1 + p_2$ aus. Für allgemeine $a$, $b$: $x_2 = \frac{a}{b}x_1$ in die Budgetgerade einsetzen.

<div data-graph="komplemente"></div>

**Neutrales Gut oder Ungut** als Gut 2 (Folie 74): $x_1^* = m/p_1$, $x_2^* = 0$. Alles Geld in das Gut, das Nutzen stiftet.

**Konkave Präferenzen** (Folie 75): Randlösung, der Konsument spezialisiert sich auf ein Gut. Der Tangentialpunkt ist hier das schlechteste Bündel auf der Budgetgeraden, nicht das beste.

**Quasilinear** $u = f(x_1) + x_2$: Die Tangentialbedingung $f'(x_1) = p_1/p_2$ legt $x_1^*$ fest – unabhängig vom Einkommen. Der Rest $x_2^* = (m - p_1x_1^*)/p_2$ geht in Gut 2. Reicht das Einkommen nicht ($m < p_1 x_1^*$), gibt es ein Randoptimum mit $x_1 = m/p_1$, $x_2 = 0$.

### 5.5 Was $\lambda$ bedeutet

Aus den Lagrange-Bedingungen folgt $\lambda = \frac{MU_1}{p_1} = \frac{MU_2}{p_2}$: der **Grenznutzen des Einkommens**, also der zusätzliche Nutzen, den ein Euro mehr Einkommen bringt. Für die Klausur reicht dieser Satz; den Zahlenwert sollte man nach Lagrange trotzdem angeben können.

---

## 6. Klausur-Check Thema 3

**Diese Grafiken musst du blind zeichnen und beschriften können:**

1. Budgetgerade mit Achsenabschnitten und Steigung
2. Parallelverschiebung (Einkommen) vs. Drehung (ein Preis)
3. Budgetgerade mit Knick (Mengensteuer ab $\bar{x}_1$) und mit Rationierung
4. Indifferenzkurven: Cobb-Douglas, perfekte Substitute, perfekte Komplemente, Ungut, neutrales Gut, Sättigung
5. Optimum: Tangentialpunkt von Budgetgerade und höchster Indifferenzkurve, mit $x_1^*$, $x_2^*$
6. Randoptimum bei perfekten Substituten und Optimum im Knick bei Komplementen

**Diese Rechnungen musst du in unter fünf Minuten können:**

- Budgetgerade aufstellen, umstellen, Achsenabschnitte und Steigung angeben
- Effekt einer Wertsteuer als Einkommensäquivalent $\frac{m}{1+\tau}$ ausrechnen
- MRS aus einer Nutzenfunktion über $-MU_1/MU_2$ berechnen und in einem Punkt auswerten
- Monotone Transformation mit drei Bündeln oder über $f' > 0$ prüfen
- Cobb-Douglas-Optimum mit der Anteilsformel in einer Zeile, dann mit Lagrange ausführlich
- Nachfrage bei Substituten (Nutzen pro Euro vergleichen) und Komplementen (Knick plus Budget)

**Begriffsliste der Dozentin** (Folie 84): Budget und Budgetgerade, Opportunitätskosten, strenge und schwache Präferenz, Indifferenz, Vollständigkeit, Reflexivität, Transitivität, Indifferenzkurven, Gütertypen, Monotonie und Konvexität, Cobb-Douglas, Grenzrate der Substitution, Nutzenfunktion, monotone Transformation, Grenznutzen, optimale Konsumentscheidung, Lagrange-Funktion.

<p class="folie">Quellen: Vorlesungsfolien Thema 3 (Schehl, WS 2025/26); Varian, Grundzüge der Mikroökonomik, Kap. 2–6; Mankiw/Taylor, Grundzüge der VWL, Kapitel zur Theorie der Konsumentscheidung. Text eigenständig formuliert.</p>
`;
