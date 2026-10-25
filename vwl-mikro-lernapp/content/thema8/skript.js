window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t8 = [
  "Ich kann Effizienz (Größe des Kuchens) von Verteilungsgerechtigkeit (Aufteilung) unterscheiden und erklären, warum der Staat trotz Markteffizienz eingreift.",
  "Ich kann eine bindende von einer wirkungslosen Preisobergrenze unterscheiden und den Nachfrageüberschuss sowie die Rationierungsfolgen erklären.",
  "Ich kann eine bindende Preisuntergrenze analysieren (Angebotsüberschuss) und beurteilen, ob das Ziel erreicht wird.",
  "Ich kann direkte und indirekte Steuern sowie Mengen- und Wertsteuer unterscheiden.",
  "Ich kann eine Mengensteuer grafisch einbauen (Angebotskurve um $t$ nach oben), Käufer- und Verkäuferpreis bestimmen und die Steuerinzidenz berechnen.",
  "Ich kann die Änderung von KR und PR in Steuerlast und Wohlfahrtsverlust zerlegen.",
  "Ich kann erklären, warum die elastischere Marktseite den kleineren Teil der Steuerlast trägt.",
  "Ich kann eine Subvention analysieren: $P_s = P_b + S$, Zuwachs von KR und PR, Kosten $(P_s - P_b)\\cdot Q_2$ und Wohlfahrtsverlust."
];

VWL.skripte.t8 = String.raw`
## 1. Worum es geht

Der Markt maximiert die Gesamtrente (Thema 6) – aber **Effizienz sagt nichts über Verteilung** (Folie 5). Die Handelsvorteile sind ein Kuchen: Effizienz fragt, ob er so groß wie möglich ist; Gerechtigkeit fragt, ob er fair verteilt wird. Weil das Marktergebnis politisch oder gesellschaftlich nicht immer erwünscht ist, greift der Staat ein – mit **Preiskontrollen**, **Steuern** und **Subventionen**. Thema 8 zeigt mit den Renten aus Thema 6, was jeder Eingriff kostet.

Durchgehendes Rechenbeispiel: $Q_D = 100 - p$, $Q_S = p - 20$, Gleichgewicht $p^* = 60$, $Q^* = 40$, $KR = PR = 800$.

---

## 2. Preiskontrollen

### 2.1 Preisobergrenze (Mietpreisbremse)

Der Staat setzt einen Höchstpreis $P_{max}$ (Folie 6). Zwei Fälle:

- $P_{max} > P^*$: **wirkungslos** – der Markt ist ohnehin darunter.
- $P_{max} < P^*$: **bindend** – zum niedrigen Preis sinkt das Angebot ($Q_S$) und steigt die Nachfrage ($Q_D$): **Nachfrageüberschuss** $Q_D - Q_S$.

Folgen (Folie 7): Für manche Vermieter lohnt sich das Vermieten nicht mehr (Angebot ↓), mehr Haushalte suchen (Nachfrage ↑). Die knappen Wohnungen müssen anders verteilt werden – **Rationierung** über Warteschlangen, Beziehungen, Schwarzmarkt. Obwohl die Maßnahme Mietern helfen soll, profitieren nicht alle: Wer eine Wohnung bekommt, zahlt weniger; wer leer ausgeht, steht schlechter da als ohne Eingriff.

<div class="box beispiel"><strong>Beispiel</strong>
$P_{max} = 50$: $Q_D = 50$, $Q_S = 30$, Nachfrageüberschuss 20. Gehandelt werden 30 Einheiten. Wohlfahrtsverlust $= \tfrac12 (40 - 30)(P_D(30) - P_S(30)) = \tfrac12 \cdot 10 \cdot (70 - 50) = 100$. $P_{max} = 70$ wäre wirkungslos.</div>

### 2.2 Preisuntergrenze (Mindestpreis für Alkohol)

Der Staat setzt einen Mindestpreis $P_{min}$ (Folie 8). $P_{min} < P^*$: wirkungslos. $P_{min} > P^*$: bindend – Angebot steigt, Nachfrage sinkt: **Angebotsüberschuss** $Q_S - Q_D$.

Folgen (Folie 9): Produzenten wollen mehr anbieten, Konsumenten kaufen weniger. Ist das Ziel die Reduktion des Konsums (Alkohol), wird es erreicht – die gehandelte Menge ist $Q_D(P_{min}) < Q^*$. Der Überschuss bleibt unverkauft (bei Agrarmindestpreisen kauft ihn der Staat auf; beim Mindestlohn heißt er Arbeitslosigkeit).

<div class="box beispiel"><strong>Beispiel</strong>
$P_{min} = 70$: $Q_S = 50$, $Q_D = 30$, Angebotsüberschuss 20. Gehandelt 30. Wohlfahrtsverlust wieder 100 – dasselbe Dreieck wie bei $P_{max} = 50$, nur mit umgekehrter Verteilung.</div>

<div class="box merke"><strong>Regel</strong>
Bei jeder Preiskontrolle wird die <em>kürzere Marktseite</em> gehandelt: $Q = \min\{Q_D(P), Q_S(P)\}$. Obergrenze → Angebot ist knapp. Untergrenze → Nachfrage ist knapp. Der Wohlfahrtsverlust ist das Dreieck zwischen dieser Menge und $Q^*$.</div>

---

## 3. Steuern

### 3.1 Steuerarten

Der Staat erhebt Steuern, um Einnahmen zu erzielen und Verhalten zu lenken (Folie 10).

- **Direkte Steuern** auf Einkommen und Erträge: Steuerzahler und Steuerträger (Destinatar) sind identisch. Lohnsteuer, Kapitalertragsteuer.
- **Indirekte Steuern** auf Ausgaben bzw. Verkäufe: Steuerzahler (das Unternehmen führt ab) und Steuerträger (wer die Last wirklich trägt) sind nicht identisch. Mehrwertsteuer. Unterarten: **Mengensteuer** (fester Betrag $t$ je Einheit, z. B. Energiesteuer auf Benzin) und **Wertsteuer** (Prozentsatz $\tau$ des Preises, z. B. Mehrwertsteuer).

Die zentrale Frage: Wer trägt die Steuer wirklich – **Steuerinzidenz**?

### 3.2 Mengensteuer grafisch

Steuer $t$ auf Benzin, vom Verkäufer abgeführt (Folie 11): Für jede Menge verlangt der Verkäufer nun $t$ mehr – die **Angebotskurve verschiebt sich um $t$ nach oben** (parallel). Neues Gleichgewicht bei kleinerer Menge $Q'$ und höherem Käuferpreis $P'$. Der Verkäufer erhält $P' - t$. Zwischen Käufer- und Verkäuferpreis liegt der **Steuerkeil** der Höhe $t$. Ziel (weniger Benzinverbrauch) erreicht.

<div class="box beispiel"><strong>Beispiel</strong>
$t = 10$ auf das Angebot $Q_S = p - 20$: Verkäufer erhält $p - 10$, also $Q_S' = (p - 10) - 20 = p - 30$. Gleichgewicht $100 - p = p - 30 \Rightarrow P' = 65$ (Käufer), Verkäufer erhält $55$, $Q' = 35$. Käufer zahlen 5 mehr als vorher (60 → 65), Verkäufer erhalten 5 weniger (60 → 55): Last je zur Hälfte, weil beide Kurven gleich steil sind.</div>

<div data-graph="steuer"></div>

### 3.3 Steuerinzidenz und Wohlfahrtsverlust

Vergleich der Renten vor und nach der Steuer (Folien 12–13):

| | vorher | nachher |
|---|---|---|
| Konsumentenrente | Dreieck über $P^*$ | kleineres Dreieck über $P'$ |
| Produzentenrente | Dreieck unter $P^*$ | kleineres Dreieck unter $P' - t$ |
| Steueraufkommen | – | Rechteck $t \cdot Q'$ |
| Wohlfahrtsverlust | – | Dreieck zwischen den Kurven von $Q'$ bis $Q^*$ |

Die Reduktion von KR und PR besteht aus zwei Teilen: der **Steuerlast** (geht an den Staat, Umverteilung) und dem **Wohlfahrtsverlust** (dead weight loss – Einheiten, die wegen der Steuer nicht mehr gehandelt werden, obwohl Zahlungsbereitschaft > Kosten).

Im Beispiel: $KR' = \tfrac12 \cdot 35 \cdot (100 - 65) = 612{,}5$ (vorher 800, minus 187,5). $PR' = \tfrac12 \cdot 35 \cdot (55 - 20) = 612{,}5$ (minus 187,5). Steueraufkommen $10 \cdot 35 = 350$. Wohlfahrtsverlust $= 375 - 350 = 25 = \tfrac12 \cdot 10 \cdot 5$ ✓. Konsumenten tragen 175 Steuerlast plus 12,5 Verlust, Produzenten ebenso.

### 3.4 Wertsteuer

Eine Wertsteuer $\tau$ (Energydrinks, Folie 14) wirkt genauso: Menge sinkt, Käuferpreis steigt, Verkäuferpreis sinkt, Ziel erreicht. Unterschied in der Grafik: Die neue Angebotskurve ist nicht parallel verschoben, sondern **gedreht** – der Keil $\tau \cdot P_s$ wächst mit dem Preis. Rechnerisch: Käuferpreis $P_b = (1+\tau)\,P_s$.

### 3.5 Wer trägt die Steuer?

Die Aufteilung hängt von der **Elastizität** von Angebot und Nachfrage ab (Folie 15): **Wer flexibler ausweichen kann (elastischer reagiert), trägt den kleineren Teil.**

- Elastisches Angebot, unelastische Nachfrage: Konsumenten tragen den Großteil (z. B. Benzin, Zigaretten – Käufer können kaum ausweichen).
- Unelastisches Angebot, elastische Nachfrage: Produzenten tragen den Großteil (Extremfall: fixes Wohnungsangebot in Thema 2 – Vermieter tragen alles).

Grafisch: Die steilere Kurve gehört zur unelastischeren Seite; der Preis bewegt sich für sie stärker. Wer die Steuer formal abführt, ist für die Inzidenz unerheblich.

<div class="box fehler"><strong>Typischer Fehler</strong>
„Die Steuer wird vom Verkäufer gezahlt, also trägt er sie.“ Falsch – Steuerzahler und Steuerträger sind bei indirekten Steuern verschieden. Die Last verteilt sich nach den Elastizitäten, egal auf welcher Seite die Steuer erhoben wird. Zweiter Fehler: Steueraufkommen als Wohlfahrtsverlust zählen – es ist Umverteilung an den Staat.</div>

---

## 4. Subventionen

**Subventionen** sind Zahlungen an Käufer oder Verkäufer, die das Einkommen erhöhen oder Produktionskosten senken sollen (Folie 16) – das Gegenteil einer Steuer, eingesetzt, wenn der Staat den Konsum eines Gutes fördern will (Bildung, Verkehr, Landwirtschaft). Meist an Verkäufer gezahlt.

Subvention $S$ je Bahnfahrt (Folie 17): Die Angebotskurve verschiebt sich um $S$ **nach unten**. Menge steigt von $Q_1$ auf $Q_2$, der Käuferpreis $P_b$ sinkt, der Verkäufer erhält $P_s = P_b + S$. Ziel (mehr Bahnfahrten) erreicht.

Wer profitiert (Folien 18–19)? **Konsumentenrente steigt** – bisherige Käufer zahlen weniger, neue Käufer kommen hinzu. **Produzentenrente steigt** – bisherige Anbieter erhalten mehr, neue Anbieter kommen hinzu. Wer zahlt (Folie 20)? **Der Staat**: Kosten der Subvention $= (P_s - P_b)\cdot Q_2 = S \cdot Q_2$.

**Wohlfahrtsverlust** (Folie 21): Obwohl KR und PR steigen, sind die Kosten der Subvention größer als der Zuwachs der Gesamtrente. Die Differenz ist der Wohlfahrtsverlust – ein Dreieck zwischen den Kurven von $Q_1$ bis $Q_2$: Einheiten, deren Kosten über der Zahlungsbereitschaft liegen, werden nur wegen der Subvention produziert.

$$\text{Wohlfahrtsverlust} = \text{Kosten der Subvention} - \Delta(KR + PR)$$

<div class="box beispiel"><strong>Beispiel</strong>
$S = 10$ an Verkäufer: $Q_S' = (p + 10) - 20 = p - 10$. $100 - p = p - 10 \Rightarrow P_b = 55$, $P_s = 65$, $Q_2 = 45$. $KR' = \tfrac12 \cdot 45 \cdot 45 = 1012{,}5$ ($+212{,}5$). $PR' = \tfrac12 \cdot 45 \cdot 45 = 1012{,}5$ ($+212{,}5$). Kosten $10 \cdot 45 = 450$. Wohlfahrtsverlust $450 - 425 = 25 = \tfrac12 \cdot 5 \cdot 10$ ✓.</div>

---

## 5. Klausur-Check Thema 8

**Grafiken blind:** bindende und wirkungslose Preisobergrenze mit Nachfrageüberschuss; Preisuntergrenze mit Angebotsüberschuss; Mengensteuer als Parallelverschiebung des Angebots mit Käuferpreis, Verkäuferpreis, Steuerkeil, Aufkommen-Rechteck und Wohlfahrtsverlust-Dreieck; Inzidenz bei steiler vs. flacher Nachfrage; Subvention als Verschiebung nach unten mit $P_b$, $P_s$, Kostenrechteck, Verlustdreieck.

**Rechnungen in fünf Minuten:** gehandelte Menge bei Preiskontrolle als Minimum; Renten und Wohlfahrtsverlust; Steuer einbauen (Angebot $Q_S(p - t)$), $P'$, $P' - t$, $Q'$; Inzidenz als Preisänderung je Seite; Aufkommen $t\,Q'$; Wohlfahrtsverlust $\tfrac12\, t\,(Q^* - Q')$; Subvention analog mit $Q_S(p + S)$.

**Begriffe** (Folie 22): Effizienz vs. Verteilungsgerechtigkeit, Preisobergrenze/-untergrenze, bindend/wirkungslos, Nachfrage-/Angebotsüberschuss, Rationierung, direkte/indirekte Steuer, Mengen-/Wertsteuer, Steuerinzidenz, Steuerkeil, Wohlfahrtsverlust, Elastizität, Subvention, $P_b$ und $P_s$.

<p class="folie">Quellen: Vorlesungsfolien Thema 8 (Schehl, SoSe 2026); Mankiw/Taylor, Grundzüge der VWL, Kapitel „Angebot, Nachfrage und wirtschaftspolitische Maßnahmen“ und „Die Kosten der Besteuerung“; Goolsbee/Levitt/Syverson, Mikroökonomik. Text eigenständig formuliert.</p>
`;
