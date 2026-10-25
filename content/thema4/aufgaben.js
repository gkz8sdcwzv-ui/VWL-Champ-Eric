window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'b1', thema: 't4', titel: 'Produktionsfunktion und Isoquante', schwierigkeit: 1, punkte: 6, zeit: 8,
  aufgabe: String.raw`Eine Druckerei stellt Flyer ($y$, in Tausend) mit Maschinenstunden ($x_1$) und Arbeitsstunden ($x_2$) her. Die Technologie wird durch $y = 2x_1^{1/3}x_2^{1/3}$ beschrieben.

a) Berechnen Sie den Output für die Inputkombinationen $(8, 1)$, $(8, 8)$ und $(1, 8)$.
b) Leiten Sie die Gleichung der Isoquante für $y = 4$ her (nach $x_2$ auflösen) und skizzieren Sie sie.
c) Die Druckerei produziert mit $(8, 8)$ tatsächlich nur $y = 6$. Wie nennt man einen solchen Produktionsplan?`,
  hinweis: 'Für b) die Produktionsfunktion gleich 4 setzen und beide Seiten so umformen, dass $x_2$ allein steht. Dritte Wurzel von 8 ist 2.',
  ansatz: String.raw`b) $2x_1^{1/3}x_2^{1/3} = 4 \Rightarrow x_2^{1/3} = 2/x_1^{1/3}$, dann beide Seiten hoch 3.`,
  loesung: String.raw`**a)** $(8,1)$: $y = 2 \cdot 8^{1/3} \cdot 1^{1/3} = 2 \cdot 2 \cdot 1 = 4$. $(8,8)$: $y = 2 \cdot 2 \cdot 2 = 8$. $(1,8)$: $y = 2 \cdot 1 \cdot 2 = 4$.

**b)** $2x_1^{1/3}x_2^{1/3} = 4 \Rightarrow x_2^{1/3} = \dfrac{2}{x_1^{1/3}} \Rightarrow x_2 = \dfrac{8}{x_1}$. Hyperbel durch $(1, 8)$, $(2, 4)$, $(4, 2)$, $(8, 1)$; fällt, ist konvex, nähert sich den Achsen, ohne sie zu berühren. Probe $(2,4)$: $2 \cdot 2^{1/3} \cdot 4^{1/3} = 2 \cdot 8^{1/3} = 4$ ✓.

**c)** Technisch **ineffizienter** Produktionsplan: Er liegt in der Produktionsmöglichkeitenmenge (machbar), aber unterhalb der Produktionsfunktion, die $y = 8$ erlauben würde. Inputs werden verschwendet.

*Klausurpunkte:* je 1 für die drei Outputs, 2 für Isoquante mit Umformung, 1 für den Begriff. Typischer Verlust: Wurzel falsch ($8^{1/3} = 2$, nicht $8/3$).`
},
{
  id: 'b2', thema: 't4', titel: 'Grenzprodukte und TRS', schwierigkeit: 1, punkte: 8, zeit: 10,
  aufgabe: String.raw`Gegeben ist $y = x_1^{1/2}x_2^{1/2}$.

a) Berechnen Sie die Grenzprodukte $MP_1$ und $MP_2$.
b) Zeigen Sie, dass das Grenzprodukt von Faktor 1 abnimmt.
c) Bestimmen Sie die technische Rate der Substitution allgemein und im Punkt $(4, 16)$. Interpretieren Sie den Wert.
d) Wie groß ist die TRS im Punkt $(16, 4)$? Was sagt der Vergleich über die Form der Isoquante?`,
  hinweis: 'Partiell ableiten: Der jeweils andere Faktor ist eine Konstante. TRS $= -MP_1/MP_2$, Minuszeichen gehört dazu.',
  ansatz: String.raw`$MP_1 = \tfrac12 x_1^{-1/2}x_2^{1/2}$. Für b) $MP_1$ noch einmal nach $x_1$ ableiten und das Vorzeichen prüfen.`,
  loesung: String.raw`**a)** $MP_1 = \dfrac{\partial y}{\partial x_1} = \tfrac12 x_1^{-1/2}x_2^{1/2} = \tfrac12\sqrt{x_2/x_1}$, $\quad MP_2 = \tfrac12 x_1^{1/2}x_2^{-1/2} = \tfrac12\sqrt{x_1/x_2}$.

**b)** $\dfrac{\partial MP_1}{\partial x_1} = -\tfrac14 x_1^{-3/2}x_2^{1/2} < 0$ für alle $x_1, x_2 > 0$. Mehr $x_1$ bei festem $x_2$ bringt immer weniger zusätzlichen Output.

**c)** $TRS = \dfrac{dx_2}{dx_1} = -\dfrac{MP_1}{MP_2} = -\dfrac{\tfrac12 x_1^{-1/2}x_2^{1/2}}{\tfrac12 x_1^{1/2}x_2^{-1/2}} = -\dfrac{x_2}{x_1}$. Im Punkt $(4,16)$: $TRS = -4$. Setzt die Firma eine Einheit $x_1$ mehr ein, kann sie auf 4 Einheiten $x_2$ verzichten und produziert denselben Output.

**d)** Im Punkt $(16, 4)$: $TRS = -4/16 = -0{,}25$. Die Isoquante ist dort viel flacher. Je mehr $x_1$ eingesetzt wird, desto weniger $x_2$ lässt sich durch eine weitere Einheit $x_1$ ersetzen – **abnehmende TRS**, die Isoquante ist konvex.

*Klausurpunkte:* 2 für Ableitungen, 1 für b), 3 für TRS mit Herleitung und Wert, 2 für Interpretation und Konvexität. Typischer Verlust: Vorzeichen vergessen oder $MP_2/MP_1$ statt $MP_1/MP_2$.`
},
{
  id: 'b3', thema: 't4', titel: 'Skalenerträge bestimmen', schwierigkeit: 1, punkte: 8, zeit: 10,
  aufgabe: String.raw`Bestimmen Sie für jede Technologie die Art der Skalenerträge. Rechnen Sie mit dem Faktor $k > 1$ vor.

a) $y = 2x_1^{1/3}x_2^{1/3}$
b) $y = 2x_1^{1/2}x_2^{1/2}$
c) $y = x_1 x_2$
d) $y = \min\{x_1, 2x_2\}$
e) $y = 3x_1 + x_2$

f) Was ist das Kopier-Argument, und warum sind trotzdem steigende oder fallende Skalenerträge möglich?`,
  hinweis: '$x_1$ durch $kx_1$ und $x_2$ durch $kx_2$ ersetzen, dann $k$ ausklammern. Bei Cobb-Douglas reicht $a+b$.',
  ansatz: String.raw`$f(kx_1,kx_2) = k^{a+b}\,f(x_1,x_2)$ bei Cobb-Douglas. Bei $\min$ und linear lässt sich $k$ direkt herausziehen.`,
  loesung: String.raw`**a)** $2(kx_1)^{1/3}(kx_2)^{1/3} = k^{2/3} \cdot 2x_1^{1/3}x_2^{1/3} = k^{2/3}\,y < k\,y$ (da $k^{2/3} < k$ für $k>1$): **fallend**. Cobb-Douglas-Check: $a + b = 2/3 < 1$.

**b)** $2(kx_1)^{1/2}(kx_2)^{1/2} = k \cdot 2x_1^{1/2}x_2^{1/2} = k\,y$: **konstant**. $a + b = 1$.

**c)** $(kx_1)(kx_2) = k^2 x_1x_2 = k^2 y > k\,y$: **steigend**. $a + b = 2$.

**d)** $\min\{kx_1, 2kx_2\} = k\min\{x_1, 2x_2\} = k\,y$: **konstant**.

**e)** $3kx_1 + kx_2 = k(3x_1 + x_2) = k\,y$: **konstant**.

**f)** Kopier-Argument: Verdoppelt man alle Inputs, kann man den bestehenden Betrieb exakt ein zweites Mal aufbauen und erhält mindestens doppelten Output – konstante Skalenerträge sind der natürliche Normalfall. Steigend, wenn Größe technische Vorteile bringt (Ölleitung: doppelter Umfang gibt vierfachen Querschnitt). Fallend, wenn in Wahrheit nicht alle Faktoren mitwachsen (z. B. Management, Koordination).

*Klausurpunkte:* je 1 für a) bis e) mit Rechnung, 3 für f). Typischer Verlust: Vorfaktor 2 fälschlich als Skalenertrag gewertet oder nur behauptet statt mit $k$ gerechnet.`
},
{
  id: 'b4', thema: 't4', titel: 'Konstante Proportionen und perfekte Substitute', schwierigkeit: 1, punkte: 7, zeit: 10,
  aufgabe: String.raw`a) Ein Bauunternehmen gräbt Gräben ($y$) mit Arbeitern ($x_1$) und Schaufeln ($x_2$): $y = \min\{x_1, x_2\}$. Berechnen Sie den Output für $(3, 2)$, $(2, 3)$ und $(5, 2)$. Welche Inputs werden jeweils verschwendet? Skizzieren Sie die Isoquanten für $y = 2$ und $y = 4$.
b) Ein Verpackungsbetrieb nutzt Roboter ($x_1$) und Menschen ($x_2$): $y = 3x_1 + x_2$. Zeigen Sie, dass $(1, 6)$, $(2, 3)$ und $(3, 0)$ auf derselben Isoquante liegen, und geben Sie deren Steigung an. Was bedeutet die Steigung?`,
  hinweis: 'Bei $\\min$ zählt der kleinere Wert. Bei der linearen Funktion die Isoquante nach $x_2$ auflösen.',
  ansatz: String.raw`b) Isoquante für $y = 9$: $x_2 = 9 - 3x_1$.`,
  loesung: String.raw`**a)** $(3,2)$: $y = \min\{3,2\} = 2$, ein Arbeiter ohne Schaufel. $(2,3)$: $y = 2$, eine Schaufel liegt herum. $(5,2)$: $y = 2$, drei Arbeiter ohne Schaufel. Isoquante $y = 2$: L-Form mit Knick in $(2,2)$ – senkrecht nach oben ab $(2,2)$ und waagerecht nach rechts ab $(2,2)$. Isoquante $y = 4$: Knick in $(4,4)$. Alle Knicke liegen auf der Geraden $x_1 = x_2$.

**b)** $(1,6)$: $3 + 6 = 9$. $(2,3)$: $6 + 3 = 9$. $(3,0)$: $9 + 0 = 9$. Alle auf der Isoquante $y = 9$, also $x_2 = 9 - 3x_1$ mit Steigung $-3$. Bedeutung: Ein Roboter ersetzt drei Menschen, und zwar in jedem Punkt gleich (konstante TRS $= -a_1/a_2 = -3$) – perfekte Substitute.

*Klausurpunkte:* 3 für a) mit Verschwendung und Skizze, 2 für die Rechnung in b), 2 für Steigung und Interpretation. Typischer Verlust: Steigung als $-1/3$ angegeben (Achsen vertauscht).`
},
{
  id: 'b5', thema: 't4', titel: 'Isogewinnlinie aufstellen', schwierigkeit: 2, punkte: 7, zeit: 10,
  aufgabe: String.raw`Ein Unternehmen produziert kurzfristig mit variablem Faktor $x_1$ und fixem Faktor $\bar x_2 = 4$. Preise: $p = 10$, $w_1 = 5$, $w_2 = 2$.

a) Stellen Sie die kurzfristige Gewinnfunktion auf.
b) Leiten Sie daraus die Isogewinnlinie für ein Gewinnniveau $\pi = 20$ her (nach $y$ auflösen). Geben Sie Steigung und Achsenabschnitt an.
c) Wie verändert sich die Isogewinnlinie, wenn $p$ auf 20 steigt? Was bedeutet das für das Gewinnmaximum?`,
  hinweis: 'Gewinn = Erlös minus variable Kosten minus Fixkosten. Dann nach $y$ umstellen.',
  ansatz: String.raw`$\pi = 10y - 5x_1 - 2\cdot 4$. Für $\pi = 20$: $10y = 20 + 8 + 5x_1$.`,
  loesung: String.raw`**a)** $\pi = p\,y - w_1x_1 - w_2\bar x_2 = 10y - 5x_1 - 8$.

**b)** $20 = 10y - 5x_1 - 8 \Rightarrow 10y = 28 + 5x_1 \Rightarrow y = 2{,}8 + 0{,}5\,x_1$. Allgemein $y = \dfrac{\pi + w_2\bar x_2}{p} + \dfrac{w_1}{p}x_1$: Achsenabschnitt $(20 + 8)/10 = 2{,}8$, Steigung $w_1/p = 0{,}5$. Jede zusätzliche Einheit $x_1$ kostet 5 Euro; dafür muss der Output um 0,5 Stück (= 5 Euro) steigen, damit der Gewinn bei 20 bleibt.

**c)** Mit $p = 20$: $y = (20+8)/20 + (5/20)x_1 = 1{,}4 + 0{,}25\,x_1$. Die Linie wird **flacher** (Steigung sinkt von 0,5 auf 0,25) und tangiert die konkave Produktionsfunktion weiter rechts: Das Unternehmen setzt mehr $x_1$ ein und produziert mehr. Nur die Steigungsänderung ist entscheidend, nicht der Achsenabschnitt – es gibt beliebig viele parallele Isogewinnlinien.

*Klausurpunkte:* 1 für a), 3 für die Herleitung mit Steigung und Abschnitt, 3 für c) mit Begründung über die Tangente. Typischer Verlust: Fixkosten $w_2\bar x_2$ vergessen.`
},
{
  id: 'b6', thema: 't4', titel: 'Kurzfristige Gewinnmaximierung', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Eine Bäckerei produziert kurzfristig mit der Produktionsfunktion $y = 4\sqrt{x_1}$ (Faktor 2 ist auf $\bar x_2 = 1$ fixiert). Der Brotpreis ist $p = 5$, der Lohn $w_1 = 2$, der Preis des fixen Faktors $w_2 = 3$.

a) Stellen Sie das Gewinnmaximierungsproblem auf und leiten Sie die Bedingung erster Ordnung her.
b) Berechnen Sie $x_1^*$, $y^*$ und den Gewinn.
c) Beschreiben Sie die grafische Lösung im $x_1$-$y$-Diagramm.
d) Interpretieren Sie die Optimalitätsbedingung ökonomisch (Grenzerlös, Grenzkosten).`,
  hinweis: '$\\sqrt{x_1} = x_1^{1/2}$, Ableitung $\\tfrac12 x_1^{-1/2}$. Die Bedingung lautet $p \\cdot MP_1 = w_1$.',
  ansatz: String.raw`$\max_{x_1}\ \pi = 5 \cdot 4\sqrt{x_1} - 2x_1 - 3$. Ableiten, gleich null setzen, nach $x_1$ auflösen.`,
  loesung: String.raw`**a)** $\max_{x_1}\ \pi = p\,f(x_1,\bar x_2) - w_1x_1 - w_2\bar x_2 = 20\sqrt{x_1} - 2x_1 - 3$.
$\dfrac{\partial\pi}{\partial x_1} = 20 \cdot \tfrac12 x_1^{-1/2} - 2 = 0 \iff p\cdot MP_1 = w_1$ mit $MP_1 = 2x_1^{-1/2}$.

**b)** $10x_1^{-1/2} = 2 \Rightarrow x_1^{-1/2} = 0{,}2 \Rightarrow \sqrt{x_1} = 5 \Rightarrow x_1^* = 25$.
$y^* = 4 \cdot 5 = 20$. $\pi^* = 5 \cdot 20 - 2 \cdot 25 - 3 \cdot 1 = 100 - 50 - 3 = 47$.

**c)** Horizontal $x_1$, vertikal $y$. Die Produktionsfunktion $y = 4\sqrt{x_1}$ startet im Ursprung, steigt konkav (abnehmendes Grenzprodukt). Isogewinnlinien sind Geraden mit Steigung $w_1/p = 0{,}4$ und Achsenabschnitt $(\pi + 3)/5$. Das Optimum ist der Tangentialpunkt $(25 \mid 20)$: Dort ist die Steigung der Produktionsfunktion $MP_1 = 2/5 = 0{,}4$ gleich der Steigung der Isogewinnlinie. Höhere Isogewinnlinien schneiden die Produktionsfunktion nicht (nicht erreichbar), niedrigere schneiden sie zweimal (nicht optimal).

**d)** $p \cdot MP_1$ ist der **Grenzerlös des Faktors**: Eine Arbeitsstunde mehr bringt $MP_1$ Brote, jedes zu 5 Euro verkauft. $w_1$ sind die **Grenzkosten des Faktors**. Solange $p\,MP_1 > w_1$ (bei $x_1 < 25$), lohnt sich eine weitere Stunde; bei $x_1 = 25$ ist der Zusatzerlös genau 2 Euro – Marginalprinzip.

*Klausurpunkte:* 3 für Ansatz und Bedingung, 3 für die Zahlen, 2 für Grafikbeschreibung, 2 für Interpretation. Typischer Verlust: $x_1^{-1/2} = 0{,}2$ falsch nach $x_1$ aufgelöst ($x_1 = 1/0{,}2^2 = 25$).`
},
{
  id: 'b7', thema: 't4', titel: 'Langfristige Gewinnmaximierung', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Ein Softwarehaus produziert Lizenzen mit $y = x_1^{1/4}x_2^{1/4}$ (Entwicklerstunden $x_1$, Serverstunden $x_2$). Beide Faktoren sind langfristig variabel: $w_1 = w_2 = 1$, Lizenzpreis $p = 8$.

a) Stellen Sie das langfristige Gewinnmaximierungsproblem auf und leiten Sie beide Bedingungen erster Ordnung her.
b) Berechnen Sie $x_1^*$, $x_2^*$, $y^*$ und $\pi^*$.
c) Prüfen Sie die Skalenerträge. Warum ist das wichtig für die Existenz der Lösung?`,
  hinweis: 'Zwei partielle Ableitungen, beide gleich null. Da $w_1 = w_2$ und die Exponenten gleich sind, folgt $x_1 = x_2$.',
  ansatz: String.raw`$p\cdot MP_1 = w_1$: $8 \cdot \tfrac14 x_1^{-3/4}x_2^{1/4} = 1$. Analog für Faktor 2. Dividieren der beiden Gleichungen gibt $x_2/x_1 = 1$.`,
  loesung: String.raw`**a)** $\max_{x_1,x_2}\ \pi = 8x_1^{1/4}x_2^{1/4} - x_1 - x_2$.
$\dfrac{\partial\pi}{\partial x_1} = 2x_1^{-3/4}x_2^{1/4} - 1 = 0$, $\qquad \dfrac{\partial\pi}{\partial x_2} = 2x_1^{1/4}x_2^{-3/4} - 1 = 0$.
Allgemein: $p\cdot MP_1 = w_1$ und $p \cdot MP_2 = w_2$.

**b)** Dividieren: $\dfrac{2x_1^{-3/4}x_2^{1/4}}{2x_1^{1/4}x_2^{-3/4}} = \dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} = 1 \Rightarrow x_1 = x_2 =: x$.
Einsetzen in die erste Bedingung: $2x^{-3/4}x^{1/4} = 2x^{-1/2} = 1 \Rightarrow \sqrt{x} = 2 \Rightarrow x = 4$.
$x_1^* = x_2^* = 4$, $y^* = 4^{1/4}\cdot 4^{1/4} = 4^{1/2} = 2$, $\pi^* = 8 \cdot 2 - 4 - 4 = 8$.

**c)** $a + b = 1/4 + 1/4 = 1/2 < 1$: **fallende** Skalenerträge. Nur dann ist der Gewinn nach oben beschränkt und hat ein eindeutiges Maximum. Bei konstanten Skalenerträgen ($a+b = 1$) wäre der Gewinn entweder null für jede Skala oder unbeschränkt; bei steigenden unbeschränkt – die Bedingungen erster Ordnung liefern dann kein Maximum.

*Klausurpunkte:* 3 für Ansatz und beide Bedingungen, 4 für die Rechnung, 3 für Skalenerträge mit Begründung. Typischer Verlust: Exponentenregel $x^{-3/4}\cdot x^{1/4} = x^{-1/2}$ falsch.`
},
{
  id: 'b8', thema: 't4', titel: 'Isokostengerade', schwierigkeit: 2, punkte: 6, zeit: 8,
  aufgabe: String.raw`Ein Unternehmen zahlt $w_1 = 4$ je Einheit Kapital ($x_1$) und $w_2 = 2$ je Arbeitsstunde ($x_2$).

a) Stellen Sie die Isokostengerade für $C = 80$ auf und zeichnen Sie sie mit Achsenabschnitten und Steigung.
b) Wie verändert sich die Gerade, wenn $w_1$ auf 8 steigt? Wenn stattdessen das Kostenniveau auf $C = 120$ steigt?
c) Vergleichen Sie die Isokostengerade mit der Budgetgeraden aus Thema 3: Was ist gleich, was ist der entscheidende Unterschied?`,
  hinweis: '$C = w_1x_1 + w_2x_2$ nach $x_2$ auflösen. Gleiche Logik wie bei der Budgetgeraden.',
  ansatz: String.raw`$x_2 = \dfrac{C}{w_2} - \dfrac{w_1}{w_2}x_1$.`,
  loesung: String.raw`**a)** $4x_1 + 2x_2 = 80 \Rightarrow x_2 = 40 - 2x_1$. Achsenabschnitte $C/w_1 = 20$ (horizontal) und $C/w_2 = 40$ (vertikal), Steigung $-w_1/w_2 = -2$: Eine Einheit Kapital mehr kostet so viel wie zwei Arbeitsstunden.

**b)** $w_1 = 8$: $x_2 = 40 - 4x_1$, horizontaler Abschnitt sinkt auf 10, vertikaler bleibt 40 – **Drehung** um den Punkt $(0 \mid 40)$, steiler. $C = 120$: $x_2 = 60 - 2x_1$, beide Abschnitte steigen (30 und 60), Steigung gleich – **Parallelverschiebung** nach außen.

**c)** Gleich: lineare Gleichung, Steigung = negatives Preisverhältnis, Achsenabschnitte = Betrag geteilt durch den jeweiligen Preis, Parallelverschiebung bei Niveauänderung, Drehung bei Preisänderung. Unterschied: Das Einkommen $m$ ist **gegeben** und der Haushalt sucht die höchste erreichbare Indifferenzkurve. Die Kosten $C$ sind **nicht gegeben**, sondern werden minimiert – das Unternehmen sucht die **niedrigste** Isokostengerade, die die vorgegebene Isoquante noch berührt.

*Klausurpunkte:* 2 für a), 2 für b), 2 für c). Typischer Verlust: Drehpunkt falsch (der Achsenabschnitt des Faktors, dessen Preis sich *nicht* ändert, bleibt).`
},
{
  id: 'b9', thema: 't4', titel: 'Kostenminimum: grafisch und mit Tangentialbedingung', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Eine Fahrradwerkstatt montiert Räder mit $y = x_1^{1/2}x_2^{1/2}$ (Maschinenstunden $x_1$, Arbeitsstunden $x_2$). Faktorpreise $w_1 = 4$, $w_2 = 1$. Es sollen $\bar y = 10$ Räder montiert werden.

a) Formulieren Sie das Kostenminimierungsproblem.
b) Bestimmen Sie die kostenminimale Inputkombination über die Tangentialbedingung und berechnen Sie die minimalen Kosten.
c) Beschreiben Sie die grafische Lösung mit Isoquante und Isokostengerade. Kennzeichnen Sie einen nicht kostenminimalen und einen nicht erreichbaren Punkt.`,
  hinweis: 'Schritt 1: $MP_1/MP_2 = w_1/w_2$ liefert das Verhältnis $x_2/x_1$. Schritt 2: in $f(x_1,x_2) = 10$ einsetzen.',
  ansatz: String.raw`$\dfrac{MP_1}{MP_2} = \dfrac{x_2}{x_1} = 4 \Rightarrow x_2 = 4x_1$. Dann $\sqrt{x_1 \cdot 4x_1} = 10$.`,
  loesung: String.raw`**a)** $\min_{x_1,x_2}\ 4x_1 + x_2 \quad\text{u.d.N.}\quad x_1^{1/2}x_2^{1/2} = 10$.

**b)** $MP_1 = \tfrac12 x_1^{-1/2}x_2^{1/2}$, $MP_2 = \tfrac12 x_1^{1/2}x_2^{-1/2}$, also $\dfrac{MP_1}{MP_2} = \dfrac{x_2}{x_1}$.
Tangentialbedingung: $\dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} = 4 \Rightarrow x_2 = 4x_1$.
Nebenbedingung: $x_1^{1/2}(4x_1)^{1/2} = 2x_1 = 10 \Rightarrow x_1^* = 5$, $x_2^* = 20$.
Kosten: $C = 4 \cdot 5 + 1 \cdot 20 = 40$. Plausibel: Der viermal so teure Faktor wird nur zu einem Viertel eingesetzt.

**c)** Horizontal $x_1$, vertikal $x_2$. Isoquante $y = 10$: $x_2 = 100/x_1$, konvexe Hyperbel durch $(5 \mid 20)$, $(10 \mid 10)$, $(20 \mid 5)$. Isokostengeraden: Steigung $-4$. Die Gerade $x_2 = 40 - 4x_1$ (für $C = 40$) berührt die Isoquante genau in **B** $= (5 \mid 20)$; Steigung der Isoquante dort $TRS = -x_2/x_1 = -4$ ✓. Punkt **A** $= (10 \mid 10)$ liegt auf der Isoquante, aber auf der Isokostengeraden $C = 50$ – nicht kostenminimal. Punkt **C** $= (4 \mid 10)$ auf $C = 26$ liegt unterhalb der Isoquante – mit diesen Kosten sind 10 Räder nicht machbar.

*Klausurpunkte:* 2 für das Problem, 5 für Tangentialbedingung, Nebenbedingung und Kosten, 3 für die Grafik mit A, B, C. Typischer Verlust: nach der Tangentialbedingung aufhören – ohne Nebenbedingung keine Mengen.`
},
{
  id: 'b10', thema: 't4', titel: 'Kostenminimum mit Lagrange', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`Lösen Sie das Problem aus B9 ($y = x_1^{1/2}x_2^{1/2}$, $w_1 = 4$, $w_2 = 1$, $\bar y = 10$) vollständig mit dem Lagrange-Ansatz.

a) Stellen Sie die Lagrange-Funktion auf und leiten Sie die drei Bedingungen erster Ordnung her.
b) Lösen Sie das Gleichungssystem nach $x_1^*$, $x_2^*$ und $\lambda^*$.
c) Interpretieren Sie $\lambda^*$. Prüfen Sie Ihre Interpretation, indem Sie die Kosten für $\bar y = 11$ ausrechnen.`,
  hinweis: 'Notation der Dozentin: $\\mathcal{L} = w_1x_1 + w_2x_2 - \\lambda(f(x_1,x_2) - \\bar y)$. Bedingung (1) durch (2) teilen eliminiert $\\lambda$.',
  ansatz: String.raw`(1) $4 - \lambda\cdot\tfrac12 x_1^{-1/2}x_2^{1/2} = 0$, (2) $1 - \lambda\cdot\tfrac12 x_1^{1/2}x_2^{-1/2} = 0$, (3) $x_1^{1/2}x_2^{1/2} = 10$.`,
  loesung: String.raw`**a)** $\mathcal{L} = 4x_1 + x_2 - \lambda\big(x_1^{1/2}x_2^{1/2} - 10\big)$.
(1) $\dfrac{\partial\mathcal{L}}{\partial x_1} = 4 - \lambda \cdot \tfrac12 x_1^{-1/2}x_2^{1/2} = 0$
(2) $\dfrac{\partial\mathcal{L}}{\partial x_2} = 1 - \lambda \cdot \tfrac12 x_1^{1/2}x_2^{-1/2} = 0$
(3) $\dfrac{\partial\mathcal{L}}{\partial \lambda} = -\big(x_1^{1/2}x_2^{1/2} - 10\big) = 0$

**b)** Aus (1): $\lambda = \dfrac{4}{\tfrac12 x_1^{-1/2}x_2^{1/2}} = 8\sqrt{x_1/x_2}$. Aus (2): $\lambda = \dfrac{1}{\tfrac12 x_1^{1/2}x_2^{-1/2}} = 2\sqrt{x_2/x_1}$.
Gleichsetzen: $8\sqrt{x_1/x_2} = 2\sqrt{x_2/x_1} \Rightarrow 4\,x_1/x_2 = x_2/x_1 \cdot$ … kürzer: (1) ÷ (2) gibt $\dfrac{4}{1} = \dfrac{x_2}{x_1}$, also $x_2 = 4x_1$ (die Tangentialbedingung).
In (3): $\sqrt{x_1 \cdot 4x_1} = 2x_1 = 10 \Rightarrow x_1^* = 5$, $x_2^* = 20$.
$\lambda^* = 2\sqrt{20/5} = 2 \cdot 2 = 4$. Kosten $C^* = 20 + 20 = 40$.

**c)** $\lambda^* = 4$ sind die **Grenzkosten**: Eine zusätzliche Outputeinheit kostet im Optimum 4 Euro. Probe mit $\bar y = 11$: Tangentialbedingung unverändert $x_2 = 4x_1$, Nebenbedingung $2x_1 = 11 \Rightarrow x_1 = 5{,}5$, $x_2 = 22$, $C = 22 + 22 = 44$. Differenz $44 - 40 = 4 = \lambda^*$ ✓. (Allgemein gilt hier $C(y) = 2y\sqrt{w_1w_2} = 4y$, also $MC = 4$ für jedes $y$ – konstante Skalenerträge ergeben lineare Kosten.)

*Klausurpunkte:* 4 für Lagrange-Funktion und drei Bedingungen, 5 für die Lösung, 3 für Interpretation und Probe. Typischer Verlust: Vorzeichen in der Lagrange-Funktion durcheinander (dann wird $\lambda$ negativ – Warnsignal) oder $\lambda$ gar nicht ausgerechnet.`
},
{
  id: 'b11', thema: 't4', titel: 'Bedingte Faktornachfrage und Kostenfunktion herleiten', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`Gegeben ist $y = x_1^{1/2}x_2^{1/2}$ mit allgemeinen Faktorpreisen $w_1, w_2$ und beliebigem Output $y$.

a) Leiten Sie die kostenminimalen Inputmengen $x_1^*(w_1,w_2,y)$ und $x_2^*(w_1,w_2,y)$ her (bedingte Faktornachfrage).
b) Bestimmen Sie daraus die Kostenfunktion $C(w_1,w_2,y)$.
c) Berechnen Sie $MC$ und $AC$. Was fällt auf, und wie hängt das mit den Skalenerträgen zusammen?
d) Prüfen Sie Ihre Formel mit $w_1 = 4$, $w_2 = 1$, $y = 10$.`,
  hinweis: 'Gleiches Schema wie B9, nur mit Buchstaben statt Zahlen. Tangentialbedingung: $x_2/x_1 = w_1/w_2$.',
  ansatz: String.raw`$x_2 = \dfrac{w_1}{w_2}x_1$ in $\sqrt{x_1x_2} = y$ einsetzen: $x_1\sqrt{w_1/w_2} = y$.`,
  loesung: String.raw`**a)** Tangentialbedingung $\dfrac{MP_1}{MP_2} = \dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} \Rightarrow x_2 = \dfrac{w_1}{w_2}x_1$.
Nebenbedingung: $\sqrt{x_1 \cdot \tfrac{w_1}{w_2}x_1} = x_1\sqrt{w_1/w_2} = y \Rightarrow x_1^* = y\sqrt{\dfrac{w_2}{w_1}}$, $\quad x_2^* = \dfrac{w_1}{w_2}\cdot y\sqrt{\dfrac{w_2}{w_1}} = y\sqrt{\dfrac{w_1}{w_2}}$.
Plausibel: Steigt $w_1$, sinkt $x_1^*$ und steigt $x_2^*$. Beide Nachfragen sind proportional zu $y$.

**b)** $C = w_1x_1^* + w_2x_2^* = w_1 y\sqrt{w_2/w_1} + w_2 y\sqrt{w_1/w_2} = y\sqrt{w_1w_2} + y\sqrt{w_1w_2} = 2y\sqrt{w_1w_2}$.

**c)** $MC = \dfrac{dC}{dy} = 2\sqrt{w_1w_2}$, $\quad AC = \dfrac{C}{y} = 2\sqrt{w_1w_2}$. Beide sind **konstant und gleich** – die Kostenfunktion ist linear in $y$. Grund: $a + b = 1$, konstante Skalenerträge. Doppelter Output braucht doppelte Inputs, also doppelte Kosten. (Bei fallenden Skalenerträgen wären $MC$ und $AC$ steigend, bei steigenden fallend.)

**d)** $x_1^* = 10\sqrt{1/4} = 5$, $x_2^* = 10\sqrt{4} = 20$, $C = 2 \cdot 10 \cdot \sqrt{4} = 40$ ✓ (vgl. B9). $MC = 4$ ✓ (vgl. $\lambda^*$ in B10).

*Klausurpunkte:* 5 für a), 3 für b), 3 für c), 1 für d). Typischer Verlust: Wurzelregeln ($\sqrt{w_2/w_1}\cdot w_1 = \sqrt{w_1w_2}$) falsch angewendet.`
},
{
  id: 'b12', thema: 't4', titel: 'Kostenfunktion zerlegen: FC, VC, MC, AC, AVC', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Ein Unternehmen hat kurzfristig die Kostenfunktion $C(y) = y^3 - 6y^2 + 15y + 8$.

a) Bestimmen Sie Fixkosten, variable Kosten, Grenzkosten, durchschnittliche variable Kosten und Durchschnittskosten als Funktionen von $y$.
b) Bei welcher Menge sind die $AVC$ minimal, und wie hoch sind sie dort? Zeigen Sie, dass $MC$ dort genau gleich $AVC$ ist.
c) Zeichnen Sie $MC$, $AVC$ und $AC$ qualitativ in ein Diagramm und begründen Sie, warum $MC$ beide Durchschnittskurven im Minimum schneidet.`,
  hinweis: 'Fixkosten = $C(0)$. $MC$ ist die Ableitung. $AVC = VC/y$ – vor dem Ableiten kürzen.',
  ansatz: String.raw`$FC = 8$, $VC = y^3 - 6y^2 + 15y$, $AVC = y^2 - 6y + 15$, $MC = 3y^2 - 12y + 15$.`,
  loesung: String.raw`**a)** $FC = C(0) = 8$. $VC(y) = y^3 - 6y^2 + 15y$. $MC = C'(y) = 3y^2 - 12y + 15$. $AVC = VC/y = y^2 - 6y + 15$. $AC = C/y = y^2 - 6y + 15 + 8/y$ (also $AC = AVC + AFC$ mit $AFC = 8/y$).

**b)** $AVC' = 2y - 6 = 0 \Rightarrow y = 3$; $AVC(3) = 9 - 18 + 15 = 6$. $MC(3) = 27 - 36 + 15 = 6 = AVC(3)$ ✓.

**c)** Horizontal $y$, vertikal Euro. $MC$: U-förmig (Parabel), Minimum bei $y = 2$ mit $MC = 3$. $AVC$: U-förmig, Minimum $(3 \mid 6)$, dort von $MC$ geschnitten. $AC$: liegt oberhalb von $AVC$ (Abstand $8/y$, schrumpft mit $y$), Minimum weiter rechts (bei etwa $y \approx 3{,}4$, $AC \approx 8{,}5$), ebenfalls von $MC$ im Minimum geschnitten. Links von den Schnittpunkten liegt $MC$ unter den Durchschnittskurven, rechts darüber.
Begründung: Der Durchschnitt sinkt, solange die nächste Einheit billiger ist als der bisherige Durchschnitt ($MC < AC$), und steigt, sobald sie teurer ist ($MC > AC$). Also hört der Durchschnitt genau dort auf zu fallen, wo $MC = AC$ – im Minimum. Wie ein Notenschnitt, der sinkt, solange die neue Note besser ist als der Schnitt.

*Klausurpunkte:* 4 für die fünf Funktionen, 3 für b), 3 für Grafik und Begründung. Typischer Verlust: $AVC$ mit $FC$ gebildet oder $MC$ als $C/y$ statt $C'$.`
},
{
  id: 'b13', thema: 't4', titel: 'Angebotsentscheidung bei vollkommener Konkurrenz', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`Weiter mit $C(y) = y^3 - 6y^2 + 15y + 8$ aus B12. Das Unternehmen ist Preisnehmer.

a) Leiten Sie die Gewinnmaximierungsbedingung allgemein her.
b) Der Marktpreis beträgt $p = 15$. Berechnen Sie die gewinnmaximale Menge, Erlös, Kosten und Gewinn. Prüfen Sie die Bedingung zweiter Ordnung.
c) Der Preis fällt auf $p = 6$. Wie viel sollte das Unternehmen kurzfristig produzieren? Wie hoch ist der Gewinn, und wie heißt diese Situation?
d) Der Preis fällt auf $p = 4$. Was ist kurzfristig optimal? Was langfristig?`,
  hinweis: '$p = MC$ ergibt eine quadratische Gleichung mit zwei Lösungen – nur die auf dem steigenden Ast zählt. Für c) und d) $p$ mit $\\min AVC = 6$ vergleichen.',
  ansatz: String.raw`$\pi(y) = py - C(y)$, $\pi'(y) = p - MC(y) = 0$. Bei $p = 15$: $3y^2 - 12y + 15 = 15$.`,
  loesung: String.raw`**a)** $\pi(y) = p\,y - C(y)$. $\dfrac{d\pi}{dy} = p - C'(y) = 0 \Rightarrow p = MC(y)$. Für einen Preisnehmer ist der Grenzerlös gleich $p$. Zweite Ordnung: $\pi'' = -MC'(y) < 0$, also $MC$ muss steigen.

**b)** $3y^2 - 12y + 15 = 15 \Rightarrow 3y(y - 4) = 0 \Rightarrow y = 0$ oder $y = 4$. $MC' = 6y - 12$: bei $y = 0$ negativ (Minimum), bei $y = 4$ gleich $12 > 0$ ✓. Also $y^* = 4$.
Erlös $15 \cdot 4 = 60$. Kosten $64 - 96 + 60 + 8 = 36$. Gewinn $24$.

**c)** $3y^2 - 12y + 15 = 6 \Rightarrow y^2 - 4y + 3 = 0 \Rightarrow y = 1$ oder $y = 3$. Steigender Ast: $y^* = 3$ ($MC'(3) = 6 > 0$). Erlös $18$, Kosten $27 - 54 + 45 + 8 = 26$, Gewinn $-8$. Das ist genau $-FC$: Der Preis deckt die variablen Kosten exakt ($p = 6 = \min AVC$). **Stilllegungspunkt** – das Unternehmen ist indifferent zwischen Produzieren ($\pi = -8$) und Stilllegen ($\pi = -FC = -8$).

**d)** $p = 4 < \min AVC = 6$: Jede produzierte Einheit erhöht den Verlust über die Fixkosten hinaus. Kurzfristig **stilllegen**, $y = 0$, Verlust $= FC = 8$. Langfristig sind alle Kosten variabel; da $p < \min AC$ (≈ 8,5), **Marktaustritt**, wenn der Preis so bleibt.

*Klausurpunkte:* 2 für Herleitung, 4 für b) inkl. zweiter Ordnung, 3 für c), 3 für d). Typischer Verlust: bei b) $y = 0$ als Lösung angeben, oder bei d) trotzdem $p = MC$ lösen und produzieren.`
},
{
  id: 'b14', thema: 't4', titel: 'Faktornachfrage und Angebotsfunktion (komparative Statik)', schwierigkeit: 3, punkte: 10, zeit: 12,
  aufgabe: String.raw`Zurück zur Bäckerei aus B6: $y = 4\sqrt{x_1}$ kurzfristig, allgemeine Preise $p$ und $w_1$.

a) Leiten Sie die Faktornachfrage $x_1^*(p, w_1)$ und die Angebotsfunktion $y^*(p, w_1)$ her.
b) Wie reagieren $x_1^*$ und $y^*$ auf einen Anstieg von $p$? Auf einen Anstieg von $w_1$? Begründen Sie zusätzlich grafisch über die Isogewinnlinie.
c) Für $w_1 = 2$: Skizzieren Sie die Angebotskurve im $y$-$p$-Diagramm und lesen Sie die Menge bei $p = 5$ ab.`,
  hinweis: 'Bedingung $p \\cdot MP_1 = w_1$ mit $MP_1 = 2x_1^{-1/2}$ nach $x_1$ auflösen; dann in die Produktionsfunktion einsetzen.',
  ansatz: String.raw`$2p\,x_1^{-1/2} = w_1 \Rightarrow \sqrt{x_1} = 2p/w_1$.`,
  loesung: String.raw`**a)** $p \cdot 2x_1^{-1/2} = w_1 \Rightarrow x_1^{1/2} = \dfrac{2p}{w_1} \Rightarrow x_1^*(p,w_1) = \left(\dfrac{2p}{w_1}\right)^2 = \dfrac{4p^2}{w_1^2}$.
$y^* = 4\sqrt{x_1^*} = 4 \cdot \dfrac{2p}{w_1} = \dfrac{8p}{w_1}$.

**b)** $x_1^*$ und $y^*$ steigen mit $p$ (quadratisch bzw. linear) und fallen mit $w_1$. Grafisch: Steigung der Isogewinnlinie ist $w_1/p$. Steigt $p$, wird die Linie flacher und tangiert die konkave Produktionsfunktion weiter rechts – mehr Input, mehr Output. Steigt $w_1$, wird sie steiler, Tangentialpunkt weiter links. Nur die Steigung zählt; der Achsenabschnitt verschiebt die Linie nur parallel.

**c)** $w_1 = 2$: $y^* = 4p$. Angebotskurve: Gerade durch den Ursprung mit Steigung $1/4$ im $y$-$p$-Diagramm (horizontal $y$, vertikal $p$), also $p = y/4$. Bei $p = 5$: $y^* = 20$ – wie in B6 ✓. Das Angebot steigt mit dem Preis, weil ein höherer Preis den Einsatz des variablen Faktors trotz abnehmenden Grenzprodukts lohnender macht.

*Klausurpunkte:* 4 für die beiden Funktionen, 4 für b) mit grafischer Begründung, 2 für c). Typischer Verlust: $x_1^* = 2p/w_1$ (Quadrieren vergessen).`
},
{
  id: 'b15', thema: 't4', titel: 'Transfer Bank: Kreditbearbeitung kostenminimal', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`Eine Bankfiliale bearbeitet Kreditanträge ($y$) mit Beraterstunden ($x_1$) und IT-Stunden ($x_2$): $y = 10x_1^{1/2}x_2^{1/2}$. Eine Beraterstunde kostet $w_1 = 4000$ (inkl. Nebenkosten, je Monat und Vollzeitstelle), eine IT-Stunde $w_2 = 1000$. Im Monat sollen $\bar y = 200$ Anträge bearbeitet werden.

a) Bestimmen Sie die kostenminimale Kombination aus Berater- und IT-Stunden sowie die Kosten.
b) Durch eine Gesetzesänderung verteuert sich IT auf $w_2 = 4000$. Wie reagiert die Filiale, und was kostet die Bearbeitung nun?
c) Die Zentrale möchte die Antragszahl verdoppeln. Welche Skalenerträge hat die Technologie, und was bedeutet das für die Kosten je Antrag?`,
  hinweis: 'Cobb-Douglas-Abkürzung: $x_2/x_1 = (b/a)(w_1/w_2)$ mit $a = b = 1/2$. Der Vorfaktor 10 ändert das Verhältnis nicht, aber die Nebenbedingung.',
  ansatz: String.raw`a) $x_2/x_1 = w_1/w_2 = 4 \Rightarrow x_2 = 4x_1$. Dann $10\sqrt{x_1 \cdot 4x_1} = 20x_1 = 200$.`,
  loesung: String.raw`**a)** Tangentialbedingung: $\dfrac{MP_1}{MP_2} = \dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} = \dfrac{4000}{1000} = 4 \Rightarrow x_2 = 4x_1$.
Nebenbedingung: $10\sqrt{x_1 \cdot 4x_1} = 20x_1 = 200 \Rightarrow x_1^* = 10$, $x_2^* = 40$.
Kosten: $4000 \cdot 10 + 1000 \cdot 40 = 40\,000 + 40\,000 = 80\,000$. (Bei Cobb-Douglas mit gleichen Exponenten fließt in beide Faktoren gleich viel Geld.)

**b)** Neues Verhältnis $x_2/x_1 = 4000/4000 = 1 \Rightarrow x_2 = x_1$. Nebenbedingung: $10x_1 = 200 \Rightarrow x_1^* = x_2^* = 20$. Kosten: $4000 \cdot 20 + 4000 \cdot 20 = 160\,000$. Die Filiale **substituiert** IT durch Berater (IT-Stunden von 40 auf 20, Beraterstunden von 10 auf 20). Die Kosten verdoppeln sich; ohne Anpassung (bei $(10, 40)$ bleiben) wären es $40\,000 + 160\,000 = 200\,000$ – die Substitution spart 40 000.

**c)** $a + b = 1$: **konstante Skalenerträge**. Verdopplung aller Inputs verdoppelt den Output; die Kosten verdoppeln sich ebenfalls, die Kosten je Antrag ($AC$) bleiben konstant: $80\,000/200 = 400$ je Antrag, bei 400 Anträgen $160\,000/400 = 400$. Allgemein $C(y) = 2y\sqrt{w_1w_2}/10 = 400y$, also $AC = MC = 400$.

*Klausurpunkte:* 5 für a), 4 für b) mit Interpretation, 3 für c). Typischer Verlust: Vorfaktor 10 in der Nebenbedingung vergessen (ergibt $x_1 = 100$).`
},
{
  id: 'ub2-1', thema: 't4', titel: 'Übungsblatt 2, Aufgabe 1: Smartphone-Hersteller im Wettbewerb', schwierigkeit: 3, punkte: 14, zeit: 20, quelle: 'Übungsblatt 2 (Schehl)',
  aufgabe: String.raw`Ein gewinnmaximierendes Unternehmen produziert Smartphones und konkurriert mit zahlreichen anderen Herstellern um ebenso zahlreiche Käufer.

a) Wie sehen Preis- und Mengenpolitik des Unternehmens aus?
b) Wie lautet allgemein die Gewinnmaximierungsbedingung eines Anbieters bei vollkommener Konkurrenz? Leiten Sie sie analytisch her.
c) Kurzfristige Kostenfunktion $C(x) = x^3 - 12x^2 + 60x + 12$. Berechnen Sie die gewinnmaximale Menge bei einem Marktpreis $p = 24$.
d) Berechnen Sie Umsatz, Kosten und Gewinn.
e) Welche Strategie sollte das Unternehmen langfristig verfolgen? Beziehen Sie sich auf den Gewinn aus c).`,
  hinweis: 'Viele Anbieter, viele Nachfrager, homogenes Gut: Polypol. Bei c) entsteht eine quadratische Gleichung mit zwei Lösungen – Steigung der Grenzkosten prüfen. Für e) den Gewinn mit den Fixkosten und $\\min AVC$ vergleichen.',
  ansatz: String.raw`$MC = 3x^2 - 24x + 60 = 24 \Rightarrow x^2 - 8x + 12 = 0$. $AVC = x^2 - 12x + 60$.`,
  loesung: String.raw`**a)** Vollkommene Konkurrenz (Polypol): Das Unternehmen ist **Preisnehmer** – es kann den Marktpreis nicht beeinflussen, weil es einer von vielen Anbietern eines homogenen Guts ist. Seine einzige Entscheidung ist die **Menge** (Mengenanpasser). Zu einem höheren Preis als dem Marktpreis verkauft es nichts, ein niedrigerer wäre unnötig.

**b)** Gewinn $\pi(x) = p\,x - C(x)$. Bedingung erster Ordnung: $\dfrac{d\pi}{dx} = p - C'(x) = 0 \Rightarrow p = MC(x)$. Der Grenzerlös ist $p$, weil jede zusätzliche Einheit genau zum Marktpreis verkauft wird. Bedingung zweiter Ordnung: $\pi'' = -MC'(x) < 0$, also $MC$ muss im Optimum steigen.

**c)** $MC = 3x^2 - 24x + 60$. $3x^2 - 24x + 60 = 24 \Rightarrow 3x^2 - 24x + 36 = 0 \Rightarrow x^2 - 8x + 12 = 0 \Rightarrow x = 2$ oder $x = 6$.
$MC' = 6x - 24$: bei $x = 2$ gleich $-12$ (fallender Ast, Gewinn**minimum**), bei $x = 6$ gleich $+12$ ✓. Also $x^* = 6$.

**d)** Umsatz $24 \cdot 6 = 144$. Kosten $C(6) = 216 - 432 + 360 + 12 = 156$. Gewinn $144 - 156 = -12$.

**e)** Der Verlust von 12 entspricht **genau den Fixkosten** $C(0) = 12$. Das heißt, der Erlös deckt exakt die variablen Kosten: $AVC(6) = 36 - 72 + 60 = 24 = p$, und $AVC$ ist bei $x = 6$ minimal ($AVC' = 2x - 12 = 0$). Das Unternehmen steht im **Stilllegungspunkt**: Kurzfristig ist es indifferent zwischen Weiterproduzieren und Stilllegen – in beiden Fällen Verlust 12. Langfristig sind alle Kosten variabel; da $p = 24 < \min AC$ (≈ 26), kann es dauerhaft nicht kostendeckend produzieren. Strategie: **Marktaustritt**, sofern der Preis nicht steigt oder die Kosten (insbesondere Fixkosten) nicht gesenkt werden können. Alternativ: In Erwartung steigender Preise kurzfristig weiterproduzieren, da das keinen zusätzlichen Verlust bedeutet.

*Klausurpunkte:* 2 für a), 3 für b), 4 für c) inkl. Auswahl der Lösung, 2 für d), 3 für e). Typischer Verlust: $x = 2$ gewählt; oder in e) nur „Verlust, also aufhören“ ohne den Vergleich mit den Fixkosten.`
},
{
  id: 'ub2-2', thema: 't4', titel: 'Übungsblatt 2, Aufgabe 2: Spielzeugautos – langfristige Gewinnmaximierung', schwierigkeit: 3, punkte: 12, zeit: 15, quelle: 'Übungsblatt 2 (Schehl)',
  aufgabe: String.raw`Ein Unternehmen produziert Spielzeugautos mit Kapital ($x_1$) und Arbeit ($x_2$): $y = x_1^{1/2}x_2^{1/4}$. Faktorpreise $w_1 = 1$, $w_2 = 2$, Marktpreis $p = 4$.

a) Wie lautet die Gewinnfunktion?
b) Ermitteln Sie die gewinnmaximierende Produktionsmenge.
c) Ermitteln Sie den Gewinn $\pi$ im Optimum.`,
  hinweis: 'Langfristig: beide Faktoren variabel, zwei Bedingungen $p\\,MP_1 = w_1$ und $p\\,MP_2 = w_2$. Die beiden Gleichungen durcheinander teilen liefert $x_1$ in Abhängigkeit von $x_2$.',
  ansatz: String.raw`$\partial\pi/\partial x_1 = 2x_1^{-1/2}x_2^{1/4} - 1 = 0$, $\quad \partial\pi/\partial x_2 = x_1^{1/2}x_2^{-3/4} - 2 = 0$.`,
  loesung: String.raw`**a)** $\pi(x_1,x_2) = p\,y - w_1x_1 - w_2x_2 = 4x_1^{1/2}x_2^{1/4} - x_1 - 2x_2$.

**b)** Bedingungen erster Ordnung:
(1) $\dfrac{\partial\pi}{\partial x_1} = 4 \cdot \tfrac12 x_1^{-1/2}x_2^{1/4} - 1 = 2x_1^{-1/2}x_2^{1/4} - 1 = 0 \Rightarrow x_1^{1/2} = 2x_2^{1/4} \Rightarrow x_1 = 4x_2^{1/2}$
(2) $\dfrac{\partial\pi}{\partial x_2} = 4 \cdot \tfrac14 x_1^{1/2}x_2^{-3/4} - 2 = x_1^{1/2}x_2^{-3/4} - 2 = 0 \Rightarrow x_1^{1/2} = 2x_2^{3/4} \Rightarrow x_1 = 4x_2^{3/2}$
Gleichsetzen: $4x_2^{1/2} = 4x_2^{3/2} \Rightarrow x_2^{1/2}(1 - x_2) = 0 \Rightarrow x_2^* = 1$ (da $x_2 > 0$). Dann $x_1^* = 4$.
Produktionsmenge: $y^* = 4^{1/2} \cdot 1^{1/4} = 2$.
Kontrolle Skalenerträge: $a + b = 3/4 < 1$, fallend – ein Maximum existiert.

**c)** $\pi^* = 4 \cdot 2 - 1 \cdot 4 - 2 \cdot 1 = 8 - 4 - 2 = 2$.
Probe mit (1): $2 \cdot 4^{-1/2} \cdot 1 = 2 \cdot 0{,}5 = 1$ ✓. Probe mit (2): $4^{1/2} \cdot 1 = 2$ ✓.

*Klausurpunkte:* 2 für die Gewinnfunktion, 7 für die beiden Bedingungen und die Lösung, 3 für den Gewinn mit Probe. Typischer Verlust: Exponenten beim Auflösen nach $x_1$ falsch quadriert ($x_1^{1/2} = 2x_2^{1/4} \Rightarrow x_1 = 4x_2^{1/2}$, nicht $2x_2^{1/2}$).`
},
{
  id: 'ub2-3', thema: 't4', titel: 'Übungsblatt 2, Aufgabe 3: Kostenminimierung für die optimale Menge', schwierigkeit: 3, punkte: 10, zeit: 12, quelle: 'Übungsblatt 2 (Schehl)',
  aufgabe: String.raw`Betrachten Sie erneut das Unternehmen aus Aufgabe 2 ($y = x_1^{1/2}x_2^{1/4}$, $w_1 = 1$, $w_2 = 2$) und nehmen Sie die ermittelte gewinnmaximierende Menge $\bar y = 2$ als gegeben an. Stellen Sie das Kostenminimierungsproblem auf und lösen Sie es nach den Inputfaktoren auf.`,
  hinweis: 'Lagrange nach dem Schema der Folien oder direkt Tangentialbedingung $MP_1/MP_2 = w_1/w_2$ plus Nebenbedingung $f(x_1,x_2) = 2$. Das Ergebnis muss mit Aufgabe 2 übereinstimmen.',
  ansatz: String.raw`$\mathcal{L} = x_1 + 2x_2 - \lambda\big(x_1^{1/2}x_2^{1/4} - 2\big)$. $\dfrac{MP_1}{MP_2} = \dfrac{\tfrac12 x_1^{-1/2}x_2^{1/4}}{\tfrac14 x_1^{1/2}x_2^{-3/4}} = \dfrac{2x_2}{x_1}$.`,
  loesung: String.raw`**Problem:** $\min_{x_1,x_2}\ x_1 + 2x_2 \quad\text{u.d.N.}\quad x_1^{1/2}x_2^{1/4} = 2$.

**Lagrange:** $\mathcal{L} = x_1 + 2x_2 - \lambda\big(x_1^{1/2}x_2^{1/4} - 2\big)$.
(1) $\partial\mathcal{L}/\partial x_1 = 1 - \lambda \cdot \tfrac12 x_1^{-1/2}x_2^{1/4} = 0$
(2) $\partial\mathcal{L}/\partial x_2 = 2 - \lambda \cdot \tfrac14 x_1^{1/2}x_2^{-3/4} = 0$
(3) $\partial\mathcal{L}/\partial\lambda = -\big(x_1^{1/2}x_2^{1/4} - 2\big) = 0$

(1) ÷ (2): $\dfrac{1}{2} = \dfrac{\tfrac12 x_1^{-1/2}x_2^{1/4}}{\tfrac14 x_1^{1/2}x_2^{-3/4}} = \dfrac{2x_2}{x_1} \Rightarrow x_1 = 4x_2$. (Das ist $\frac{MP_1}{MP_2} = \frac{w_1}{w_2}$, oder mit der Cobb-Douglas-Abkürzung $x_2/x_1 = \frac{b}{a}\frac{w_1}{w_2} = \frac{1/4}{1/2}\cdot\frac12 = \frac14$.)

In (3): $(4x_2)^{1/2}x_2^{1/4} = 2x_2^{1/2}x_2^{1/4} = 2x_2^{3/4} = 2 \Rightarrow x_2^{3/4} = 1 \Rightarrow x_2^* = 1$, $x_1^* = 4$.

**Kosten:** $C = 4 + 2 \cdot 1 = 6$. $\lambda^* = 1/(\tfrac12 \cdot 4^{-1/2} \cdot 1) = 4$: Grenzkosten der Produktionsmenge 2 betragen 4 – genau der Marktpreis $p = 4$ aus Aufgabe 2, wie es im Gewinnmaximum sein muss ($p = MC$).

**Zusammenhang zu Aufgabe 2:** Dieselben Inputmengen $(4, 1)$. Gewinnmaximierung schließt Kostenminimierung ein: Wer bei $y = 2$ nicht kostenminimal produzierte, könnte den Gewinn durch Umschichten erhöhen. Gewinn: $4 \cdot 2 - 6 = 2$ ✓.

*Klausurpunkte:* 2 für die Problemformulierung, 5 für Lagrange und Lösung, 3 für Kosten und Bezug zu Aufgabe 2. Typischer Verlust: Nebenbedingung mit $y$ statt $\bar y = 2$ stehen lassen, Faktorpreise vertauscht.`
}
);
