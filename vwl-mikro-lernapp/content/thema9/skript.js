window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t9 = [
  "Ich kann erklären, was strategische Interaktion von isolierten Entscheidungen unterscheidet.",
  "Ich kann simultane, wiederholte und sequenzielle Spiele mit je einem Beispiel unterscheiden.",
  "Ich kann die drei Kernelemente eines Spiels (Spieler, Strategien, Auszahlungen) benennen und eine Auszahlungsmatrix lesen (erste Zahl Zeilenspieler).",
  "Ich kann dominante und dominierte Strategien bestimmen.",
  "Ich kann das Nash-Gleichgewicht einer Matrix über die besten Antworten finden und erklären, warum im Gefangenendilemma das Gleichgewicht nicht Pareto-effizient ist.",
  "Ich kann ein sequenzielles Spiel als Spielbaum zeichnen und per Rückwärtsinduktion lösen."
];

VWL.skripte.t9 = String.raw`
## 1. Worum es geht

Bisher haben Haushalte und Unternehmen **isoliert** entschieden: Wie viel Konsum maximiert den Nutzen, welcher Output den Gewinn? In Wirklichkeit hängt das Ergebnis oft davon ab, was **andere** tun – zwei Tankstellen, zwei Banken, zwei Filmstudios. Die **Spieltheorie** analysiert solche strategischen Interaktionen, in denen Akteure die Handlungen der anderen antizipieren (Folie 3). Das Thema ist kurz (11 Folien) und in der Klausur meist eine Matrix oder ein Spielbaum zum Lösen. Prio C – aber schnelle Punkte, wenn das Verfahren sitzt.

---

## 2. Kategorien von Spielen

Drei Kategorien (Folie 4):

| Kategorie | Merkmal | Beispiel der Folien |
|---|---|---|
| **Simultanes Spiel** | Spieler handeln gleichzeitig, ohne die Entscheidung des anderen zu kennen | Zwei Lieferdienste entscheiden gleichzeitig über kostenlose Feiertagslieferung |
| **Wiederholtes Spiel** | Serie simultaner Spiele zwischen denselben Spielern | Zwei Tankstellen passen regelmäßig ihre Preise an |
| **Sequenzielles Spiel** | Spieler handeln nacheinander, der Zweite sieht den Zug des Ersten | Eine Bank senkt Kontoführungsgebühren, die Konkurrenz reagiert |

---

## 3. Ein Spiel als Modell

Jedes Spiel hat **drei Kernelemente** (Folie 5):

- **Spieler**: Teilnehmer, die Entscheidungen treffen.
- **Strategie**: Plan eines Spielers für seine Handlungen.
- **Auszahlung** (Payoff): Ergebnis, das ein Spieler erhält.

Formal $G = \{\text{Spieler};\ \text{Strategiemengen};\ \text{Auszahlungsfunktionen}\}$. Gesucht ist die **optimale Strategie**: diejenige, die die erwartete Auszahlung maximiert.

- **Dominante Strategie**: unabhängig davon, was die anderen tun, immer die beste.
- **Dominierte Strategie**: unabhängig von den anderen niemals die beste – wird nie gespielt.

---

## 4. Simultane Spiele: Auszahlungsmatrix und Nash-Gleichgewicht

### 4.1 Auszahlungsmatrix

Simultane Spiele werden in einer **Auszahlungsmatrix** dargestellt (Folie 6). Konvention: Die **erste Zahl** gehört zum **Zeilenspieler**, die zweite zum Spaltenspieler.

**Gefangenendilemma**: Zwei Verdächtige werden getrennt verhört.

| A \ B | schweigen | gestehen |
|---|---|---|
| **schweigen** | (−1, −1) | (−5, 0) |
| **gestehen** | (0, −5) | (−3, −3) |

### 4.2 Nash-Gleichgewicht

**Nash-Gleichgewicht**: Jeder Spieler trifft die für ihn beste Entscheidung, **gegeben** die Handlungen der anderen (Folie 7). Niemand möchte einseitig abweichen.

**Verfahren – beste Antworten markieren**:

1. Wenn A schweigt, was ist für B am besten? Schweigen −1, gestehen 0 → **gestehen**.
2. Wenn A gesteht? Schweigen −5, gestehen −3 → **gestehen**.
3. Wenn B schweigt, was ist für A am besten? Schweigen −1, gestehen 0 → **gestehen**.
4. Wenn B gesteht? Schweigen −5, gestehen −3 → **gestehen**.

Gestehen ist für beide eine **dominante Strategie**. Das Nash-Gleichgewicht ist **(gestehen, gestehen)** mit $(-3, -3)$. Das Feld, in dem beide Zahlen als beste Antwort markiert sind, ist das Gleichgewicht.

<div class="box merke"><strong>Das Dilemma</strong>
Beide stünden mit (schweigen, schweigen) und $(-1, -1)$ besser da. Das Nash-Gleichgewicht ist <strong>nicht Pareto-effizient</strong>: Individuell rationales Verhalten führt zu einem kollektiv schlechten Ergebnis. Dieselbe Struktur steckt im Public-Goods-Game (Thema 7.3), in Preiskämpfen zwischen Banken und im Kartellbruch. Bei wiederholten Spielen kann Kooperation entstehen, weil Abweichen in späteren Runden bestraft werden kann.</div>

<div class="box fehler"><strong>Typische Fehler</strong>
(1) Zahlen dem falschen Spieler zuordnen – erste Zahl ist immer der Zeilenspieler. (2) Das Gleichgewicht dort suchen, wo die Summe am größten ist – das ist das kollektive Optimum, nicht das Nash-Gleichgewicht. (3) Nur eine Richtung prüfen. Immer alle vier Fragen beantworten; es kann null, ein oder zwei Gleichgewichte (in reinen Strategien) geben.</div>

<div class="box beispiel"><strong>Beispiel mit zwei Gleichgewichten</strong>
Zwei Banken wählen einen Standard für Online-Überweisungen. Gleicher Standard bringt beiden Vorteile:
<br>
<table><tr><td></td><td>Standard X</td><td>Standard Y</td></tr><tr><td>Standard X</td><td>(4, 4)</td><td>(0, 0)</td></tr><tr><td>Standard Y</td><td>(0, 0)</td><td>(2, 2)</td></tr></table>
Keine dominante Strategie. Beste Antwort auf X ist X, auf Y ist Y. Zwei Nash-Gleichgewichte: (X, X) und (Y, Y). Koordinationsspiel – welches gespielt wird, hängt von Erwartungen ab.</div>

---

## 5. Sequenzielle Spiele: Spielbaum und Rückwärtsinduktion

Bei **sequenziellen Spielen** zieht ein Spieler zuerst, der andere beobachtet und entscheidet dann (Folie 8). Darstellung als **Entscheidungsbaum** (Spielbaum): Knoten = Entscheidungspunkte, Äste = Strategien, Endpunkte = Auszahlungen (erste Zahl = erster Spieler).

**Beispiel DreamWorks und Disney** (Folie 8): DreamWorks wählt den Starttermin (Mai oder Dezember), Disney sieht das und wählt dann.

- DreamWorks Mai → Disney Mai: (50, 50); Disney Dezember: (300, 200)
- DreamWorks Dezember → Disney Mai: (200, 300); Disney Dezember: (0, 0)

**Rückwärtsinduktion** (Folie 9): Man löst von hinten.

1. Wenn DreamWorks Mai wählt: Disney vergleicht 50 (Mai) mit 200 (Dezember) → **Dezember**.
2. Wenn DreamWorks Dezember wählt: Disney vergleicht 300 (Mai) mit 0 (Dezember) → **Mai**.
3. DreamWorks antizipiert das: Mai bringt 300 (Disney weicht auf Dezember aus), Dezember bringt 200. → **Mai**.

Ergebnis: DreamWorks Mai, Disney Dezember, Auszahlung (300, 200). Der Erstziehende hat hier einen **Vorteil** (first-mover advantage): Er besetzt den besseren Termin, und der Zweite muss ausweichen.

<div class="box merke"><strong>Glaubwürdigkeit</strong>
Drohungen zählen in sequenziellen Spielen nur, wenn sie glaubwürdig sind – also wenn der Drohende sie am Entscheidungsknoten tatsächlich ausführen würde. Eine etablierte Bank, die einem Neuling mit Preiskrieg droht, der ihr selbst mehr schadet als Akzeptieren, wird nicht ernst genommen: Rückwärtsinduktion zeigt, dass sie akzeptiert, also tritt der Neuling ein.</div>

---

## 6. Klausur-Check Thema 9

**Können:** Matrix lesen (Zeilenspieler zuerst); für jede Strategie des Gegners die beste Antwort markieren; dominante Strategien benennen; Nash-Gleichgewicht(e) angeben und begründen, dass niemand einseitig abweichen will; Pareto-Vergleich mit anderen Feldern; Spielbaum zeichnen und von hinten lösen; Ergebnis in Worten.

**Begriffe** (Folie 10): strategische Interaktion, simultanes / wiederholtes / sequenzielles Spiel, Spieler, Strategie, Auszahlung, dominante und dominierte Strategie, Auszahlungsmatrix, Gefangenendilemma, Nash-Gleichgewicht, Spielbaum, Rückwärtsinduktion.

<p class="folie">Quellen: Vorlesungsfolien Thema 9 (Schehl, SoSe 2026); Goolsbee/Levitt/Syverson, Mikroökonomik, Kapitel Spieltheorie. Text eigenständig formuliert.</p>
`;
