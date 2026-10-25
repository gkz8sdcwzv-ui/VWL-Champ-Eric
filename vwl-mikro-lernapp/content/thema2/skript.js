window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t2 = [
  "Ich kann endogene und exogene Variablen unterscheiden und am Wohnungsmarkt-Modell benennen.",
  "Ich kann Optimierungs- und Gleichgewichtsprinzip in je einem Satz erklären.",
  "Ich kann die Nachfragekurve aus Vorbehaltspreisen (maximalen Zahlungsbereitschaften) konstruieren und erklären, warum sie fällt.",
  "Ich kann die kurzfristige (vertikale) von der langfristigen (steigenden) Angebotskurve unterscheiden.",
  "Ich kann das Marktgleichgewicht grafisch und rechnerisch bestimmen und erklären, warum der Markt dorthin tendiert (Überschussangebot, Überschussnachfrage).",
  "Ich kann komparative Statik durchführen: Verschiebung von Angebot oder Nachfrage, Steuer auf Vermieter bei fixem Angebot.",
  "Ich kann Bewegung entlang einer Kurve von Verschiebung der Kurve unterscheiden und die Einflussgrößen aufzählen.",
  "Ich kann Wettbewerb, diskriminierenden Monopolisten, gewöhnlichen Monopolisten und Mietenkontrolle nach Preis, Menge und Verteilung vergleichen.",
  "Ich kann Pareto-Verbesserung und Pareto-Effizienz definieren und für die vier Marktformen begründen, welche effizient ist."
];

VWL.skripte.t2 = String.raw`
## 1. Worum es geht

Thema 2 baut das erste vollständige Marktmodell – am Beispiel des **Wohnungsmarkts einer Universitätsstadt** (nach Varian, Kap. 1). Hier lernst du die Denkweise, die in allen späteren Themen vorausgesetzt wird: Nachfragekurve, Angebotskurve, Gleichgewicht, komparative Statik, und als Bewertungsmaßstab die **Pareto-Effizienz**. Rechnen muss man wenig; die Klausur fragt Grafiken und Argumentationen ab.

---

## 2. Die Konstruktion eines Modells

### 2.1 Annahmen des Wohnungsmarkt-Modells

Ein Modell lässt irrelevante Einzelheiten weg (Folie 4). Hier: Alle Wohnungen sind gleich, unterscheiden sich nur in der Lage – **innerer Ring** (nahe der Uni, Mietpreis $p_{nah}$) oder **äußerer Ring** (weit weg, $p_{weit}$). Viele Mieter, viele Vermieter.

- $p_{nah}$ wird **im Modell erklärt**: eine **endogene** Variable.
- $p_{weit}$ ist **von außen vorgegeben** und wird nicht erklärt: eine **exogene** Variable. Ebenso exogen: die Zahl der Wohnungen (z. B. 100), das Einkommen der Mieter.

Drei Fragen: Wer bekommt die nahen Wohnungen? Zu welchem Preis? Ist das Ergebnis wünschenswert?

### 2.2 Zwei Grundprinzipien

Jedes ökonomische Modell ruht auf zwei Prinzipien (Folie 5):

- **Optimierungsprinzip**: Jeder wählt die beste Alternative, die er sich leisten kann (Haushalte in Thema 3, Unternehmen in Thema 4).
- **Gleichgewichtsprinzip**: Preise passen sich an, bis nachgefragte und angebotene Menge übereinstimmen. Im Gleichgewicht sind die Pläne aller Akteure miteinander verträglich; alle freiwilligen Tauschgeschäfte sind getätigt.

---

## 3. Nachfrage, Angebot, Gleichgewicht

### 3.1 Die Nachfragekurve

Jeder Mieter hat einen **Vorbehaltspreis** (maximale Zahlungsbereitschaft): den höchsten Preis, den er gerade noch zahlen würde – dort ist er indifferent zwischen Mieten und Nichtmieten (Folie 6). Ordnet man die Vorbehaltspreise absteigend (500, 480, 455, …), erhält man die Nachfragekurve als **Treppe**: Bei $p = 500$ will genau eine Person mieten, bei $p = 480$ zwei, usw. Je niedriger der Preis, desto mehr Nachfrage: $p \downarrow \Rightarrow Q_D \uparrow$.

Bei vielen Nachfragern mit eng beieinanderliegenden Vorbehaltspreisen werden die Stufen winzig – die Nachfragekurve wird als **glatte, fallende Kurve** gezeichnet (Folie 7). Achsen: horizontal die Menge $Q_D$, vertikal der Preis.

### 3.2 Die Angebotskurve

Viele unabhängige Vermieter wollen zum höchstmöglichen Preis vermieten – ein **Konkurrenzmarkt** (Folie 8). Das Angebot hängt vom Zeithorizont ab:

- **Kurzfristig**: Neubau ist unmöglich, die Zahl der Wohnungen ist fix (100). Die Angebotskurve ist **vertikal**: $Q_S = 100$, unabhängig vom Preis (Folie 9).
- **Langfristig**: Neubau möglich, das Angebot reagiert auf den Preis – **steigende** Angebotskurve (Folie 29).

Das Modell betrachtet zunächst die kurze Frist.

### 3.3 Marktgleichgewicht

**Marktgleichgewicht**: Weder Anbieter noch Nachfrager haben einen Grund, ihr Verhalten zu ändern (Folie 10). Bei vollständiger Information muss es **einen einheitlichen Preis** geben: Gäbe es einen hohen und einen niedrigen Mietpreis für identische Wohnungen, würde ein Mieter der teuren Wohnung zum günstigen Vermieter wechseln und einen Preis dazwischen bieten – vorteilhaft für beide (Optimierungsprinzip).

Grafisch: Schnittpunkt von Nachfragekurve und vertikaler Angebotskurve, Preis $p^*$, Menge 100 (Folie 11). Jeder, der mindestens $p^*$ zahlen will, bekommt eine Wohnung; jeder Vermieter vermietet zu $p^*$.

**Warum landet der Markt dort?** (Folie 12)

- $p'' < p^*$: Mehr Interessenten als Wohnungen – **Überschussnachfrage** ($Q_D > Q_S$). Vermieter können den Preis erhöhen. Preis steigt.
- $p' > p^*$: Weniger Interessenten als Wohnungen – **Überschussangebot** ($Q_S > Q_D$). Vermieter senken den Preis. Preis sinkt.

**Wer bekommt die Wohnungen?** (Folie 13) Die Zuteilung erfolgt über die Zahlungsbereitschaft: Wer mehr als $p^*$ zahlen würde, bekommt eine nahe Wohnung und zahlt *weniger* als seinen Vorbehaltspreis (ein Vorteil – in Thema 6 heißt das Konsumentenrente). Wer genau $p^*$ bieten würde, bekommt eine Wohnung und zahlt genau seinen Vorbehaltspreis. Wer unter $p^*$ liegt, zieht in den äußeren Ring.

<div class="box beispiel"><strong>Rechenbeispiel mit linearen Kurven</strong>
Nachfrage $Q_D = 120 - 2p$, Angebot (langfristig) $Q_S = 3p - 30$. Gleichgewicht: $120 - 2p = 3p - 30 \Rightarrow 5p = 150 \Rightarrow p^* = 30$, $Q^* = 60$. Bei $p = 40$: $Q_D = 40$, $Q_S = 90$, Überschussangebot 50 → Preis sinkt. Bei fixem Angebot $Q_S = 100$: $120 - 2p = 100 \Rightarrow p^* = 10$.</div>

<div data-graph="markt"></div>

---

## 4. Komparative Statik

**Komparative Statik** vergleicht zwei Gleichgewichte, ohne den Anpassungsweg zu betrachten (Folie 14): Was passiert mit den endogenen Variablen (Gleichgewichtspreis und -menge), wenn sich eine exogene Variable ändert?

| Beispiel (Folien 15–17) | Was verschiebt sich | Neuer Preis | Neue Menge | Wer trägt die Last? |
|---|---|---|---|---|
| Neues Haus mit 100 Wohnungen (Angebot steigt) | Angebotskurve nach rechts ($Q_S = 200$) | sinkt | steigt auf 200 | – |
| Alle Mieter bekommen eine Gehaltserhöhung (Nachfrage steigt) | Nachfragekurve nach rechts | steigt | unverändert (100, Angebot fix) | – |
| Steuer auf Vermieter bei fixem Angebot | nichts – beide Kurven bleiben | unverändert | unverändert | **Vermieter tragen die gesamte Steuer** |

Das dritte Beispiel überrascht oft: Die Steuer ändert weder die Zahlungsbereitschaft der Mieter noch die Zahl der Wohnungen. Der Marktpreis bleibt $p^*$; der Vermieter erhält $p^* - t$. Keine Überwälzung – weil das Angebot vollkommen unelastisch ist. (In Thema 8 wird das mit steigendem Angebot verallgemeinert.)

<div class="box merke"><strong>Bewegung entlang vs. Verschiebung (Folie 18)</strong>
Ändert sich der <em>Preis</em> (endogen): <strong>Bewegung entlang</strong> der Kurve. Ändert sich eine <em>exogene</em> Variable: <strong>Verschiebung</strong> der Kurve.
<br>Verschiebt die Nachfrage: Preise verwandter Güter, Einkommen, Präferenzen, Bevölkerungsgröße und -struktur, Werbung.
<br>Verschiebt das Angebot: Inputpreise, Rentabilität, Technik, natürliche und gesellschaftliche Faktoren, Anzahl der Anbieter.</div>

<div class="box fehler"><strong>Typischer Fehler</strong>
„Der Preis steigt, also verschiebt sich die Nachfragekurve nach links.“ Falsch: Eine Preisänderung bewegt entlang der Kurve. Verschoben wird nur durch exogene Größen. Umgekehrt: Steigt die Nachfrage (Verschiebung), <em>folgt</em> daraus ein höherer Preis – nicht umgekehrt.</div>

---

## 5. Andere Allokationsmechanismen

Der Konkurrenzmarkt ist nur eine Möglichkeit, die Wohnungen zu verteilen (Folie 19). Drei Alternativen, jeweils mit fixem Angebot von 100 Wohnungen:

### 5.1 Diskriminierender Monopolist (Folie 20)

Ein Vermieter besitzt alle Wohnungen und **versteigert jede einzeln** an den Höchstbietenden. Jeder zahlt genau seinen Vorbehaltspreis: $p_1 = 500$, $p_2 = 480$, $p_3 = 455$, … Ergebnis: **dieselben** 100 Personen wie im Wettbewerb bekommen die Wohnungen (alle mit Zahlungsbereitschaft $\ge p^*$), aber zu **individuellen Preisen**. Der Monopolist streicht die gesamte Zahlungsbereitschaft ein.

### 5.2 Gewöhnlicher Monopolist (Folie 21)

Ein Vermieter, ein Preis $\hat p$ für alle. Er **verknappt** das Angebot, um den Preis zu treiben: Er vermietet nur $\hat Q_D < 100$ Wohnungen zu $\hat p > p^*$, weil ihm der Erlös $\hat p \cdot \hat Q_D$ so am höchsten ist. Es bleiben Wohnungen **leer**, obwohl es Interessenten gäbe. (Formal mit Grenzerlös in Thema 7.1.)

### 5.3 Mietenkontrolle (Folie 22)

Die Stadt setzt eine **Höchstmiete** $p_{max} < p^*$. Zu diesem Preis wollen mehr Leute mieten als Wohnungen da sind – **Überschussnachfrage**. Die Zuteilung muss anders erfolgen, z. B. per **Losverfahren**. Es werden weiterhin 100 Wohnungen vermietet (gleiche Menge), zu niedrigerem Preis, aber an **andere Personen**: Wer die Wohnung bekommt, hängt vom Glück ab, nicht von der Zahlungsbereitschaft.

| Mechanismus | Menge | Preis | Wer bekommt die Wohnungen? |
|---|---|---|---|
| Wettbewerb | 100 | $p^*$ einheitlich | die 100 mit höchster Zahlungsbereitschaft |
| Diskriminierender Monopolist | 100 | individuell = Vorbehaltspreis | dieselben 100 |
| Gewöhnlicher Monopolist | $\hat Q < 100$ | $\hat p > p^*$ | weniger Personen, Leerstand |
| Mietenkontrolle | 100 | $p_{max} < p^*$ | per Los – nicht nach Zahlungsbereitschaft |

---

## 6. Pareto-Effizienz

### 6.1 Definitionen (Folie 23)

- **Pareto-Verbesserung**: Jemand wird besser gestellt, ohne dass jemand anderes schlechter gestellt wird.
- **Pareto-Effizienz**: Es gibt **keine** Pareto-Verbesserung mehr. Alle freiwilligen Tauschgeschäfte zu beiderseitigem Vorteil sind ausgeschöpft; keine Wohlfahrt wird verschwendet.

<div class="box fehler"><strong>Effizienz ist nicht Gerechtigkeit</strong>
Pareto-Effizienz sagt nichts über die Verteilung. Eine Allokation, in der einer alles hat, kann Pareto-effizient sein (man kann ihm nichts nehmen, ohne ihn schlechter zu stellen). Diese Klarstellung ist in der Klausur fast immer einen Punkt wert.</div>

<div class="box beispiel"><strong>Beispiel Frieda und Karl (Folie 24)</strong>
Wohnungen werden zufällig verteilt. Frieda bekommt eine nahe Wohnung, die ihr nur 300 wert ist. Karl bekommt eine ferne Wohnung, würde für eine nahe aber 500 zahlen. Frieda vermietet an Karl für 400 unter: Frieda hat 400 statt einer Wohnung im Wert von 300 (besser), Karl zahlt 400 für etwas, das ihm 500 wert ist (besser), niemand verliert – <strong>Pareto-Verbesserung</strong>. Die zufällige Zuteilung war also <strong>nicht</strong> Pareto-effizient.</div>

### 6.2 Welche Mechanismen sind effizient? (Folien 25–28)

Prüfkriterium: Gibt es noch einen Tausch zu beiderseitigem Vorteil?

- **Wettbewerb: effizient.** Alle Mieter naher Wohnungen haben Zahlungsbereitschaft $\ge p^*$, alle anderen $< p^*$. Niemand ohne Wohnung würde einem Mieter mehr bieten, als diesem die Wohnung wert ist. Kein Tausch möglich.
- **Diskriminierender Monopolist: effizient.** Gleiche Verteilung der Wohnungen wie im Wettbewerb, nur andere Preise. Kein Leerstand, kein Tausch möglich. (Effizient, aber die gesamte Rente geht an den Monopolisten – Effizienz ≠ Gerechtigkeit.)
- **Gewöhnlicher Monopolist: ineffizient.** Es stehen Wohnungen leer. Der Monopolist könnte eine leere Wohnung zu irgendeinem positiven Preis vermieten: Er gewinnt, der neue Mieter gewinnt, kein bisheriger Mieter verliert. Pareto-Verbesserung möglich → ineffizient.
- **Mietenkontrolle mit Los: ineffizient.** Per Los bekommt jemand eine Wohnung (Frieda, Wert 300), während jemand mit höherer Zahlungsbereitschaft (Karl, 500) leer ausgeht. Untervermietung zu 400 wäre eine Pareto-Verbesserung → ineffizient.

---

## 7. Klausur-Check Thema 2

**Diese Grafiken musst du blind zeichnen können:** Nachfragetreppe aus Vorbehaltspreisen und glatte Nachfragekurve; vertikales kurzfristiges Angebot mit Gleichgewicht; Überschussnachfrage und -angebot bei $p'' < p^*$ und $p' > p^*$; Rechtsverschiebung von Angebot und Nachfrage mit neuem Gleichgewicht; Monopol mit Leerstand; Mietenkontrolle mit Überschussnachfrage; langfristig steigendes Angebot.

**Diese Argumentationen musst du in drei Sätzen können:** Warum ein einheitlicher Preis im Gleichgewicht; warum der Markt zum Gleichgewicht tendiert; warum die Steuer bei fixem Angebot voll bei den Vermietern bleibt; warum Wettbewerb Pareto-effizient ist und Monopol/Mietenkontrolle nicht; warum Effizienz nichts über Gerechtigkeit sagt.

**Begriffsliste der Dozentin** (Folie 30): endogene und exogene Variablen, Optimierungsprinzip, Gleichgewichtsprinzip, maximale Zahlungsbereitschaft (Vorbehaltspreis), Nachfragekurve, Angebotskurve, Marktgleichgewicht (Gleichgewichtsmenge und -preis), komparative Statik, Marktformen (vollkommene Konkurrenz, Monopol, diskriminierendes Monopol), Pareto-Effizienz, Pareto-Ineffizienz, Pareto-Verbesserung.

<p class="folie">Quellen: Vorlesungsfolien Thema 2 (Schehl, WS 2025/26); Varian, Grundzüge der Mikroökonomik, Kap. 1; Mankiw/Taylor, Grundzüge der VWL, Kap. 4. Text eigenständig formuliert.</p>
`;
