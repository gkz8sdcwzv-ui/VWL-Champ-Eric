window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t6 = [
  "Ich kann objektive und subjektive ökonomische Wohlfahrt unterscheiden und je einen Indikator nennen (BIP, Glücksatlas).",
  "Ich kann die Nachfragekurve aus Zahlungsbereitschaften und die Angebotskurve aus Kosten (Verkaufsbereitschaften) als Treppe konstruieren.",
  "Ich kann Konsumentenrente (Zahlungsbereitschaft minus Preis) und Produzentenrente (Preis minus Kosten) für einzelne Käufer/Verkäufer und als Fläche berechnen.",
  "Ich kann erklären, warum die Höhe der Nachfragekurve die Zahlungsbereitschaft des Grenznachfragers und die Höhe der Angebotskurve die Kosten des Grenzanbieters angibt.",
  "Ich kann die Änderung der Konsumentenrente bei einer Preissenkung in zwei Teile zerlegen (Bestandskäufer, neue Käufer); analog für die Produzentenrente.",
  "Ich kann begründen, warum das Marktgleichgewicht die Gesamtrente maximiert.",
  "Ich kann den Wohlfahrtsverlust bei einem Preis über oder unter dem Gleichgewichtspreis zeichnen und berechnen."
];

VWL.skripte.t6 = String.raw`
## 1. Worum es geht

Thema 2 hat gezeigt, dass der Wettbewerbsmarkt Pareto-effizient ist. Thema 6 macht daraus ein **messbares Konzept**: Die Wohlfahrt der Konsumenten heißt **Konsumentenrente**, die der Produzenten **Produzentenrente**, beides zusammen **Gesamtrente**. Das Marktgleichgewicht maximiert die Gesamtrente; jede Abweichung erzeugt einen **Wohlfahrtsverlust**. Diese Flächen sind das Werkzeug für Thema 7 (Monopol, externe Effekte) und Thema 8 (Steuern, Preiskontrollen, Subventionen) – wer sie hier sicher zeichnen und berechnen kann, hat drei Themen auf einmal.

---

## 2. Wohlfahrtsökonomik

**Wohlfahrtsökonomik** untersucht, wie die Allokation der Ressourcen die wirtschaftliche Wohlfahrt beeinflusst (Folie 5). Zwei Perspektiven:

- **Objektive Wohlfahrt**: Lebensqualität, gemessen über Bildungsstand, Lebensstandard, Lebenserwartung. Wichtigster Indikator ist das **Bruttoinlandsprodukt (BIP)** als Maß der Wirtschaftsleistung. Kritik: Das BIP erfasst nur, was über Marktpreise messbar ist (keine Hausarbeit, keine Umweltschäden). Alternativen: Human Development Index, Better Life Index der OECD (Folie 6).
- **Subjektive Wohlfahrt**: Wie zufrieden sind Menschen mit Leben, Arbeit, Einkommen? Glücksforschung, in Deutschland der **Glücksatlas** (seit 2011, Skala 0 bis 10) (Folie 7).

**Allokationseffizienz** ist ein Maßstab für den Nutzen aus der Zuteilung (Folie 8): Konsumentenrente misst den Nutzen der Konsumenten, Produzentenrente den der Produzenten, Gesamtrente die Wohlfahrt der Gesellschaft. Eine Allokation ist effizient, wenn die Verkäufer der produzierten Menge denselben Nutzen beimessen wie die Käufer dem Konsum – anders gesagt: Produziert wird genau so viel, dass die Kosten der letzten Einheit ihrer Zahlungsbereitschaft entsprechen.

---

## 3. Konsumentenrente

### 3.1 Nachfragekurve aus Zahlungsbereitschaften

Beispiel der Folien (Folie 9): Nina versteigert eine signierte Gitarre. Vier Sammler mit **maximalen Zahlungsbereitschaften** John 1000, Paul 800, George 700, Ringo 500. Bei jedem Preis fragen alle nach, deren Zahlungsbereitschaft mindestens so hoch ist (Folie 10, kleinste Geldeinheit 1 €):

| Preis | Käufer | Nachfragemenge |
|---|---|---|
| über 1000 | niemand | 0 |
| 801–1000 | John | 1 |
| 701–800 | John, Paul | 2 |
| 501–700 | John, Paul, George | 3 |
| bis 500 | alle vier | 4 |

Die **Höhe der Nachfragekurve** bei jeder Menge ist die Zahlungsbereitschaft des **Grenznachfragers** – des Käufers, der bei einem höheren Preis als Erster aussteigen würde (Folie 11). Bei vielen Käufern mit dicht liegenden Zahlungsbereitschaften werden die Stufen winzig: glatte fallende Kurve (Folie 14).

### 3.2 Definition und Berechnung

$$\text{Konsumentenrente (KR)} = \text{Zahlungsbereitschaft} - \text{tatsächlich gezahlter Preis}$$

Der Nutzen, den Käufer aus der Marktteilnahme ziehen (Folie 12). Eine Gitarre zu 801 €: John kauft, $KR = 1000 - 801 = 199$. Zwei Gitarren zu 701 €: John und Paul kaufen, $KR = 299 + 99 = 398$ (Folie 13). Grafisch: Fläche **unter der Nachfragekurve und über dem Preis** bis zur verkauften Menge.

Bei einer linearen Nachfragekurve ist das ein Dreieck:

$$KR = \tfrac12 \cdot Q \cdot (\text{Prohibitivpreis} - p)$$

<div class="box beispiel"><strong>Beispiel</strong>
$Q_D = 100 - p$, Preis $p = 60$: $Q = 40$, Prohibitivpreis (bei dem niemand mehr kauft) 100. $KR = \tfrac12 \cdot 40 \cdot (100 - 60) = 800$.</div>

### 3.3 Preisänderung

Sinkt der Preis von $P_1$ auf $P_2$, steigt die Konsumentenrente aus zwei Gründen (Folie 15): Die **bisherigen Käufer** zahlen weniger (Rechteck $Q_1 \cdot (P_1 - P_2)$), und **neue Käufer** treten ein, deren Zahlungsbereitschaft zwischen $P_2$ und $P_1$ liegt (Dreieck $\tfrac12 (Q_2 - Q_1)(P_1 - P_2)$). Preis ↑ ⇒ KR ↓, Preis ↓ ⇒ KR ↑.

---

## 4. Produzentenrente

### 4.1 Angebotskurve aus Kosten

Spiegelbild (Folie 16): Antonia vergibt einen Malerauftrag an den günstigsten Bieter. Vier Malerinnen mit **Kosten** (Farbe, Zeit, Anfahrt) Marie 900, Lola 800, Thea 600, Paula 500. Die Kosten sind die **Verkaufsbereitschaft**: der Mindestpreis, zu dem jemand anbietet (Folie 17).

| Preis | Anbieter | Angebotsmenge |
|---|---|---|
| ab 900 | alle vier | 4 |
| 800–899 | Paula, Thea, Lola | 3 |
| 600–799 | Paula, Thea | 2 |
| 500–599 | Paula | 1 |
| unter 500 | niemand | 0 |

Die **Höhe der Angebotskurve** ist bei jeder Menge die Verkaufsbereitschaft (= Kosten) des **Grenzanbieters** – desjenigen, der bei einem niedrigeren Preis als Erster aussteigt (Folie 18). Bei vielen Anbietern: glatte steigende Kurve (Folie 21). Verbindung zu Thema 4: Die Angebotskurve ist die Grenzkostenkurve.

### 4.2 Definition und Berechnung

$$\text{Produzentenrente (PR)} = \text{tatsächlich erhaltener Preis} - \text{Kosten}$$

Ein Auftrag zu 599 €: Paula malt, $PR = 599 - 500 = 99$ (Folie 19). Zwei Aufträge zu 799 €: Paula ($299$) und Thea ($199$), zusammen $498$ (Folie 20). Grafisch: Fläche **über der Angebotskurve und unter dem Preis**.

Bei linearer Angebotskurve:

$$PR = \tfrac12 \cdot Q \cdot (p - \text{Mindestpreis})$$

<div class="box beispiel"><strong>Beispiel</strong>
$Q_S = p - 20$, Preis 60: $Q = 40$, Mindestpreis (ab dem überhaupt angeboten wird) 20. $PR = \tfrac12 \cdot 40 \cdot (60 - 20) = 800$.</div>

Steigt der Preis, wächst die Produzentenrente zweifach (Folie 22): bisherige Anbieter erhalten mehr, neue Anbieter treten ein.

---

## 5. Markteffizienz und Wohlfahrtsverlust

### 5.1 Gleichgewicht maximiert die Gesamtrente

$$\text{Gesamtrente} = KR + PR$$

Eine Allokation ist **effizient**, wenn sie die Gesamtrente maximiert (Folie 23). Im Marktgleichgewicht $(Q^*, P^*)$ ist das der Fall: Links von $Q^*$ liegt die Zahlungsbereitschaft über den Kosten – jede zusätzliche Einheit erhöht die Gesamtrente. Rechts von $Q^*$ liegen die Kosten über der Zahlungsbereitschaft – jede weitere Einheit senkt sie. Genau bei $Q^*$ ist die Zahlungsbereitschaft des Grenznachfragers gleich den Kosten des Grenzanbieters. Das ist die formale Fassung der „unsichtbaren Hand“.

Drei Eigenschaften des Marktergebnisses (Mankiw): Die Güter gehen an die Käufer mit der höchsten Zahlungsbereitschaft, sie werden von den Anbietern mit den niedrigsten Kosten produziert, und die Menge maximiert die Gesamtrente.

<div data-graph="renten"></div>

### 5.2 Wohlfahrtsverlust

Liegt der Preis **über** dem Gleichgewicht bei $P'$ (Folie 24), wird nur $Q' < Q^*$ gehandelt. Die Konsumentenrente schrumpft auf $KR'$, die Produzentenrente wird $PR'$ (ein Teil wandert von den Konsumenten zu den Produzenten), und die Einheiten zwischen $Q'$ und $Q^*$ werden gar nicht gehandelt, obwohl die Zahlungsbereitschaft die Kosten übersteigt. Diese verlorene Rente ist das **Wohlfahrtsverlust-Dreieck** (dead weight loss) zwischen Nachfrage- und Angebotskurve von $Q'$ bis $Q^*$.

Liegt der Preis **unter** dem Gleichgewicht bei $P''$ (Folie 25), bieten die Anbieter nur $Q''$ an; wieder entsteht ein Dreieck zwischen $Q''$ und $Q^*$. Diesmal verlieren vor allem die Produzenten.

$$\text{Wohlfahrtsverlust} = \tfrac12 \cdot (Q^* - Q') \cdot \big(P_D(Q') - P_S(Q')\big)$$

wobei $P_D(Q')$ die Zahlungsbereitschaft und $P_S(Q')$ die Kosten bei der gehandelten Menge sind.

<div class="box beispiel"><strong>Beispiel</strong>
$Q_D = 100 - p$, $Q_S = p - 20$. Gleichgewicht $p^* = 60$, $Q^* = 40$, $KR = PR = 800$, Gesamtrente 1600. Preis wird auf $P' = 70$ fixiert: $Q' = 30$. $KR' = \tfrac12 \cdot 30 \cdot 30 = 450$. Kosten des Grenzanbieters bei $Q = 30$: $P_S = 50$. $PR' = $ Trapez $= \tfrac12 (70 - 20 + 70 - 50) \cdot 30 = 1050$. Gesamtrente $1500$. Wohlfahrtsverlust $= 1600 - 1500 = 100 = \tfrac12 \cdot 10 \cdot (70 - 50)$ ✓. Die Produzenten gewinnen 250, die Konsumenten verlieren 350.</div>

<div class="box fehler"><strong>Typische Fehler</strong>
(1) Wohlfahrtsverlust als Rechteck statt Dreieck. (2) Die Rente, die von Konsumenten zu Produzenten wandert, als Verlust zählen – das ist Umverteilung, kein Verlust. (3) Bei der Produzentenrente den Preis statt der Kosten des Grenzanbieters als untere Grenze nehmen. Immer erst die gehandelte Menge bestimmen (die kleinere von $Q_D$ und $Q_S$), dann die Höhen der Kurven an dieser Menge ablesen.</div>

---

## 6. Klausur-Check Thema 6

**Grafiken blind:** Nachfragetreppe mit Konsumentenrente als Rechtecke; Angebotstreppe mit Produzentenrente; glatte Kurven mit $KR$-Dreieck über dem Preis und $PR$-Dreieck unter dem Preis; Zerlegung der KR-Änderung bei Preissenkung; Wohlfahrtsverlust bei $P' > P^*$ und $P'' < P^*$.

**Rechnungen in fünf Minuten:** KR und PR einzelner Akteure aus Tabellen; Gleichgewicht aus linearen Kurven, dann $KR = \tfrac12 Q^*(P_{max} - p^*)$ und $PR = \tfrac12 Q^*(p^* - P_{min})$; bei fixiertem Preis Menge, Renten (Dreieck plus Trapez) und Wohlfahrtsverlust.

**Begriffsliste** (Folie 26): objektive und subjektive Wohlfahrt (BIP, Glücksforschung), Konsumentenrente = Zahlungsbereitschaft − gezahlter Preis, Produzentenrente = erhaltener Preis − Kosten, Gesamtrente, Markteffizienz, Wohlfahrtsverlust.

<p class="folie">Quellen: Vorlesungsfolien Thema 6 (Schehl, SoSe 2026); Mankiw/Taylor, Grundzüge der VWL, Kapitel „Konsumenten, Produzenten und die Effizienz von Märkten“. Text eigenständig formuliert.</p>
`;
