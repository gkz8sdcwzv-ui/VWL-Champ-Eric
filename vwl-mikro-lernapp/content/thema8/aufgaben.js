window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'h1', thema: 't8', titel: 'Preisobergrenze: Mietpreisbremse', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Wohnungsmarkt einer Stadt: $Q_D = 100 - p$, $Q_S = p - 20$ (Preis in 10 €, Menge in Hundert Wohnungen).

a) Berechnen Sie das Gleichgewicht sowie KR und PR.
b) Die Stadt führt eine Mietobergrenze von $P_{max} = 50$ ein. Berechnen Sie Angebot, Nachfrage, Nachfrageüberschuss und gehandelte Menge.
c) Berechnen Sie KR, PR und Wohlfahrtsverlust nach dem Eingriff. Wer gewinnt, wer verliert?
d) Was passiert bei $P_{max} = 70$? Welche Rationierungsmechanismen nennen die Folien für den bindenden Fall?`,
  hinweis: 'Gehandelt wird die kürzere Seite. KR nach dem Eingriff ist ein Trapez: Käufer zahlen 50, die Zahlungsbereitschaft des Grenznachfragers bei $Q = 30$ ist 70.',
  ansatz: String.raw`b) $Q_D(50) = 50$, $Q_S(50) = 30$. c) $KR' = \tfrac12(100 - 50 + 70 - 50)\cdot 30$.`,
  loesung: String.raw`**a)** $100 - p = p - 20 \Rightarrow p^* = 60$, $Q^* = 40$. $KR = \tfrac12 \cdot 40 \cdot 40 = 800$, $PR = \tfrac12 \cdot 40 \cdot 40 = 800$, Gesamtrente 1600.

**b)** $Q_D(50) = 50$, $Q_S(50) = 30$. Nachfrageüberschuss $20$. Gehandelt werden $30$ Wohnungen (kürzere Seite: Angebot).

**c)** Bei $Q = 30$: $P_D(30) = 70$, $P_S(30) = 50$.
$KR' = $ Fläche unter der Nachfrage über dem Preis 50 bis $Q = 30$ $= \tfrac12 (100 - 50 + 70 - 50)\cdot 30 = \tfrac12 \cdot 70 \cdot 30 = 1050$ (+250).
$PR' = \tfrac12 \cdot 30 \cdot (50 - 20) = 450$ (−350).
Wohlfahrtsverlust $= 1600 - 1500 = 100 = \tfrac12 \cdot 10 \cdot (70 - 50)$ ✓.
Die Mieter, die eine Wohnung bekommen, gewinnen (zahlen 50 statt 60: 300 Umverteilung von den Vermietern). Die Vermieter verlieren 350. Die zehn Wohnungen zwischen 30 und 40 werden nicht mehr angeboten – deren Mieter gehen leer aus, obwohl sie mehr als die Kosten zahlen würden. Nicht alle Mieter profitieren.

**d)** $P_{max} = 70 > p^* = 60$: nicht bindend, wirkungslos, der Markt bleibt bei 60. Im bindenden Fall nennen die Folien lange Warteschlangen und Schwarzmarkt als Rationierungsmechanismen; die Zuteilung erfolgt nicht mehr nach Zahlungsbereitschaft.

*Klausurpunkte:* 2 für a), 2 für b), 4 für c), 2 für d). Typischer Verlust: $KR'$ als Dreieck über 50 bis zur Nachfrage gerechnet ($\tfrac12 \cdot 50 \cdot 50$), also mit $Q = 50$ statt der gehandelten 30.`
},
{
  id: 'h2', thema: 't8', titel: 'Preisuntergrenze: Mindestpreis', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Markt für ein alkoholisches Getränk: $Q_D = 100 - p$, $Q_S = p - 20$. Die Regierung führt einen Mindestpreis von $P_{min} = 70$ ein, um den Konsum zu senken.

a) Berechnen Sie Angebot, Nachfrage, Angebotsüberschuss und gehandelte Menge. Wird das Ziel erreicht?
b) Berechnen Sie KR, PR und Wohlfahrtsverlust.
c) Vergleichen Sie mit der Preisobergrenze 50 aus H1. Was ist gleich, was ist verschieden?
d) Was würde bei $P_{min} = 50$ passieren?`,
  hinweis: 'Jetzt ist die Nachfrage die kürzere Seite. PR nach dem Eingriff: Verkäufer erhalten 70, die Kosten des Grenzanbieters bei $Q = 30$ sind 50.',
  ansatz: String.raw`a) $Q_S(70) = 50$, $Q_D(70) = 30$.`,
  loesung: String.raw`**a)** $Q_S(70) = 50$, $Q_D(70) = 30$. Angebotsüberschuss $20$. Gehandelt werden $30$ Einheiten (kürzere Seite: Nachfrage). Der Konsum sinkt von 40 auf 30 – **Ziel erreicht**. Der Überschuss von 20 bleibt unverkauft.

**b)** Bei $Q = 30$: $P_D(30) = 70$, $P_S(30) = 50$.
$KR' = \tfrac12 \cdot 30 \cdot (100 - 70) = 450$ (−350).
$PR' = \tfrac12 (70 - 20 + 70 - 50) \cdot 30 = \tfrac12 \cdot 70 \cdot 30 = 1050$ (+250).
Wohlfahrtsverlust $= 1600 - 1500 = 100$.

**c)** Gleich: gehandelte Menge 30, Wohlfahrtsverlust 100 (dasselbe Dreieck zwischen den Kurven von 30 bis 40), Gesamtrente 1500. Verschieden: die Verteilung – bei der Obergrenze gewinnen die (bedienten) Käufer 250 und die Verkäufer verlieren 350; bei der Untergrenze ist es umgekehrt. Und: Bei der Obergrenze fehlt Angebot (Rationierung der Käufer), bei der Untergrenze fehlt Nachfrage (unverkaufte Ware, beim Mindestlohn: Arbeitslosigkeit).

**d)** $P_{min} = 50 < p^* = 60$: nicht bindend, wirkungslos.

*Klausurpunkte:* 3 für a), 3 für b), 1 für c), 1 für d). Typischer Verlust: Angebotsüberschuss von 20 als gehandelte Menge interpretiert.`
},
{
  id: 'h3', thema: 't8', titel: 'Mengensteuer: Inzidenz und Wohlfahrtsverlust', schwierigkeit: 3, punkte: 14, zeit: 18,
  aufgabe: String.raw`Benzinmarkt: $Q_D = 100 - p$, $Q_S = p - 20$. Die Regierung erhebt eine Mengensteuer von $t = 10$ je Einheit, die von den Tankstellen abgeführt wird.

a) Leiten Sie die neue Angebotsfunktion her und berechnen Sie neue Menge, Käuferpreis und Verkäuferpreis.
b) Bestimmen Sie die Steuerinzidenz: Welchen Teil der Steuer tragen Käufer, welchen Verkäufer? Warum gerade so?
c) Berechnen Sie KR und PR vor und nach der Steuer, das Steueraufkommen und den Wohlfahrtsverlust. Zerlegen Sie die Rentenverluste in Steuerlast und Wohlfahrtsverlust.
d) Zeichnen Sie das Diagramm mit beiden Angebotskurven, $P_b$, $P_s$, Steuerkeil, Aufkommen und Wohlfahrtsverlust.`,
  hinweis: 'Verkäufer behalten $p - 10$: $Q_S\' = (p - 10) - 20$. Renten mit $P_b$ (Käufer) bzw. $P_s$ (Verkäufer) als Grenze.',
  ansatz: String.raw`a) $100 - p = p - 30$.`,
  loesung: String.raw`**a)** Der Verkäufer erhält vom Käuferpreis $p$ nur $p - 10$: $Q_S'(p) = (p - 10) - 20 = p - 30$. Grafisch: Angebot um 10 nach oben. Gleichgewicht $100 - p = p - 30 \Rightarrow P_b = 65$. Verkäuferpreis $P_s = 55$. Menge $Q' = 35$.

**b)** Käufer zahlen 65 statt 60: tragen $5$. Verkäufer erhalten 55 statt 60: tragen $5$. Je die Hälfte, weil Nachfrage und Angebot betragsmäßig gleich steil sind (gleiche Elastizität im Gleichgewicht). Dass die Tankstellen die Steuer abführen, spielt für die Verteilung keine Rolle.

**c)** Vorher: $KR = PR = 800$. Nachher: $KR' = \tfrac12 \cdot 35 \cdot (100 - 65) = 612{,}5$, $PR' = \tfrac12 \cdot 35 \cdot (55 - 20) = 612{,}5$. Steueraufkommen $T = 10 \cdot 35 = 350$. Gesamtrente inkl. Staat: $612{,}5 + 612{,}5 + 350 = 1575$. Wohlfahrtsverlust $1600 - 1575 = 25 = \tfrac12 \cdot 10 \cdot (40 - 35)$ ✓.
Zerlegung: Konsumenten verlieren 187,5 = 175 Steuerlast ($5 \cdot 35$) + 12,5 Wohlfahrtsverlust. Produzenten verlieren 187,5 = 175 Steuerlast + 12,5 Wohlfahrtsverlust. Steuerlast gesamt 350 = Aufkommen; Wohlfahrtsverlust gesamt 25.

**d)** Horizontal $Q$, vertikal $p$. Nachfrage von $(0 \mid 100)$ nach $(100 \mid 0)$. Angebot alt von $(0 \mid 20)$, Angebot neu parallel von $(0 \mid 30)$. Altes Gleichgewicht $(40 \mid 60)$, neues $(35 \mid 65)$ auf der Nachfrage. Senkrecht unter dem neuen Gleichgewicht trifft die alte Angebotskurve bei $(35 \mid 55)$ – der Verkäuferpreis. Steuerkeil: senkrechte Strecke von 55 bis 65 bei $Q = 35$. Aufkommen: Rechteck von $Q = 0$ bis 35 zwischen 55 und 65. Wohlfahrtsverlust: Dreieck mit Ecken $(35 \mid 65)$, $(35 \mid 55)$, $(40 \mid 60)$.

*Klausurpunkte:* 3 für a), 3 für b), 5 für c), 3 für d). Typischer Verlust: Steuer auf die Nachfrage gelegt und dann „Käufer tragen alles“; Steueraufkommen als Verlust gezählt.`
},
{
  id: 'h4', thema: 't8', titel: 'Steuerinzidenz und Elastizität', schwierigkeit: 3, punkte: 10, zeit: 12,
  aufgabe: String.raw`Zwei Märkte mit demselben Gleichgewicht $(Q^*, p^*) = (40, 60)$ und derselben Nachfrage $Q_D = 100 - p$, aber unterschiedlichem Angebot:
Markt A: $Q_S = p - 20$ (wie bisher). Markt B: $Q_S = 3p - 140$ (elastischeres Angebot).
Steuer $t = 10$ auf Verkäufer.

a) Berechnen Sie für beide Märkte Käuferpreis, Verkäuferpreis und Menge.
b) Vergleichen Sie die Steuerinzidenz. Formulieren Sie die allgemeine Regel.
c) Erklären Sie mit der Regel, warum bei einem fixen Wohnungsangebot (Thema 2) die Vermieter die gesamte Steuer tragen, und warum Konsumenten bei Zigaretten den Großteil tragen.
d) Vergleichen Sie den Wohlfahrtsverlust in A und B. Wann ist eine Steuer besonders verzerrend?`,
  hinweis: 'Markt B: $Q_S\'(p) = 3(p - 10) - 140 = 3p - 170$. Die elastischere Seite trägt weniger.',
  ansatz: String.raw`B: $100 - p = 3p - 170 \Rightarrow p = 67{,}5$.`,
  loesung: String.raw`**a)** Markt A (aus H3): $P_b = 65$, $P_s = 55$, $Q' = 35$. Markt B: $Q_S'(p) = 3(p - 10) - 140 = 3p - 170$. $100 - p = 3p - 170 \Rightarrow 4p = 270 \Rightarrow P_b = 67{,}5$, $P_s = 57{,}5$, $Q' = 32{,}5$.

**b)** Markt A: Käufer $+5$, Verkäufer $-5$ – je die Hälfte. Markt B: Käufer $+7{,}5$ (drei Viertel), Verkäufer $-2{,}5$ (ein Viertel). Im Markt B ist das Angebot elastischer (flacher, reagiert stärker auf den Preis); die Anbieter können ausweichen, indem sie weniger anbieten, und wälzen den Großteil ab. **Regel: Die Marktseite, die elastischer reagiert (flexibler ausweichen kann), trägt den kleineren Teil der Steuerlast.** Wer die Steuer formal zahlt, ist unerheblich.

**c)** Fixes Wohnungsangebot = vollkommen unelastisches Angebot (vertikal). Vermieter können gar nicht ausweichen – die Menge bleibt 100, der Marktpreis bleibt $p^*$, die Vermieter erhalten $p^* - t$ und tragen alles. Zigaretten: sehr unelastische Nachfrage (Sucht), Konsumenten können kaum ausweichen, das Angebot dagegen flexibel – die Konsumenten tragen den Großteil; der Preis steigt fast um die volle Steuer.

**d)** $WV_A = \tfrac12 \cdot 10 \cdot (40 - 35) = 25$. $WV_B = \tfrac12 \cdot 10 \cdot (40 - 32{,}5) = 37{,}5$. Je elastischer die Kurven, desto stärker sinkt die Menge und desto größer der Wohlfahrtsverlust. Eine Steuer verzerrt besonders, wenn Angebot und Nachfrage elastisch sind; bei unelastischen Märkten (fixe Wohnungen) ist der Wohlfahrtsverlust null – deshalb gelten Steuern auf unelastische Güter als effizient, wenn auch nicht unbedingt als gerecht.

*Klausurpunkte:* 3 für a), 3 für b), 2 für c), 2 für d). Typischer Verlust: „steilere Kurve = elastischer“ (es ist umgekehrt).`
},
{
  id: 'h5', thema: 't8', titel: 'Subvention: Bahntickets', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`Markt für Bahnfahrten: $Q_D = 100 - p$, $Q_S = p - 20$. Die Regierung zahlt den Bahnunternehmen eine Subvention von $S = 10$ je Fahrt.

a) Leiten Sie die neue Angebotsfunktion her und berechnen Sie Menge, Käuferpreis $P_b$ und Verkäuferpreis $P_s$.
b) Berechnen Sie KR und PR vor und nach der Subvention und erklären Sie jeweils die zwei Gründe für den Anstieg.
c) Berechnen Sie die Kosten der Subvention und den Wohlfahrtsverlust. Warum entsteht er trotz steigender Renten?
d) Zeichnen Sie das Diagramm mit $P_b$, $P_s$, $Q_1$, $Q_2$, Kostenrechteck und Verlustdreieck.`,
  hinweis: 'Verkäufer erhalten $p + 10$: $Q_S\' = (p + 10) - 20$. Kosten $= S \cdot Q_2$. $WV = $ Kosten − Zuwachs der Gesamtrente.',
  ansatz: String.raw`a) $100 - p = p - 10$.`,
  loesung: String.raw`**a)** Der Verkäufer erhält $p + 10$: $Q_S'(p) = (p + 10) - 20 = p - 10$. Angebot um 10 nach unten. $100 - p = p - 10 \Rightarrow P_b = 55$, $P_s = 65$, $Q_2 = 45$ (vorher $Q_1 = 40$).

**b)** Vorher $KR = PR = 800$. Nachher: $KR' = \tfrac12 \cdot 45 \cdot (100 - 55) = 1012{,}5$ (+212,5): Die 40 bisherigen Fahrgäste zahlen je 5 weniger (200), und 5 neue Fahrgäste mit Zahlungsbereitschaft zwischen 55 und 60 kommen hinzu (12,5). $PR' = \tfrac12 \cdot 45 \cdot (65 - 20) = 1012{,}5$ (+212,5): Die bisherigen 40 Fahrten bringen je 5 mehr (200), und 5 neue Fahrten mit Kosten zwischen 60 und 65 werden angeboten (12,5).

**c)** Kosten $= (P_s - P_b)\cdot Q_2 = 10 \cdot 45 = 450$, zahlt der Staat. Zuwachs der Gesamtrente $= 212{,}5 + 212{,}5 = 425$. Wohlfahrtsverlust $= 450 - 425 = 25 = \tfrac12 \cdot 10 \cdot (45 - 40)$ ✓. Grund: Die fünf zusätzlichen Fahrten kosten zwischen 60 und 65, sind den Fahrgästen aber nur zwischen 55 und 60 wert. Sie finden nur statt, weil der Staat die Lücke füllt – Ressourcen werden für Fahrten eingesetzt, die weniger wert sind, als sie kosten.

**d)** Nachfrage, Angebot alt von $(0 \mid 20)$, Angebot neu parallel darunter von $(0 \mid 10)$. Neues Gleichgewicht $(45 \mid 55)$ auf der Nachfrage; senkrecht darüber auf der alten Angebotskurve $(45 \mid 65)$ = $P_s$. Kostenrechteck: $Q$ von 0 bis 45, Preis von 55 bis 65. Wohlfahrtsverlust: Dreieck mit Ecken $(40 \mid 60)$, $(45 \mid 65)$, $(45 \mid 55)$ – rechts vom alten Gleichgewicht, zwischen Angebot (oben) und Nachfrage (unten).

*Klausurpunkte:* 3 für a), 4 für b), 3 für c), 2 für d). Typischer Verlust: Verkäuferpreis unter dem Käuferpreis (Vorzeichen der Subvention); Wohlfahrtsverlust-Dreieck links von $Q_1$ gezeichnet.`
},
{
  id: 'h6', thema: 't8', titel: 'Steuerarten und Wertsteuer', schwierigkeit: 1, punkte: 6, zeit: 8,
  aufgabe: String.raw`a) Unterscheiden Sie direkte und indirekte Steuern anhand von Steuerzahler und Steuerträger. Ordnen Sie zu: Lohnsteuer, Mehrwertsteuer, Kapitalertragsteuer, Energiesteuer auf Benzin.
b) Unterscheiden Sie Mengensteuer und Wertsteuer. Wie unterscheidet sich die Verschiebung der Angebotskurve grafisch?
c) Eine Wertsteuer von 25 % auf Energydrinks wird eingeführt. Erklären Sie qualitativ die Wirkung auf Menge, Käuferpreis und Verkäuferpreis. Wird das Ziel (weniger Konsum) erreicht?`,
  hinweis: 'Mengensteuer: fester Betrag je Einheit. Wertsteuer: Prozentsatz, $P_b = (1+\\tau)P_s$.',
  ansatz: String.raw`b) Parallelverschiebung vs. Drehung, weil der Keil $\tau P_s$ mit dem Preis wächst.`,
  loesung: String.raw`**a)** **Direkte Steuern** werden auf Einkommen und Erträge erhoben; Steuerzahler und Steuerträger (Destinatar) sind dieselbe Person: Lohnsteuer, Kapitalertragsteuer. **Indirekte Steuern** werden auf Ausgaben bzw. Verkäufe erhoben; der Zahler (Unternehmen führt ab) ist nicht der Träger (die Last verteilt sich nach Elastizitäten): Mehrwertsteuer, Energiesteuer auf Benzin.

**b)** **Mengensteuer**: fester Betrag $t$ je Einheit (Energiesteuer je Liter). Die Angebotskurve verschiebt sich **parallel** um $t$ nach oben – der Keil ist überall gleich. **Wertsteuer**: Prozentsatz $\tau$ des Preises (Mehrwertsteuer), $P_b = (1 + \tau)P_s$. Die Angebotskurve wird **gedreht** bzw. gestreckt – der Keil $\tau \cdot P_s$ wächst mit dem Preis, bei $P_s = 0$ ist er null.

**c)** Die Angebotskurve (in Käuferpreisen) liegt nun um 25 % höher. Neues Gleichgewicht bei **kleinerer Menge**, der **Käuferpreis steigt**, der **Verkäuferpreis sinkt**; zwischen beiden liegt der Keil $0{,}25 \cdot P_s$. Die Last verteilt sich nach den Elastizitäten. Da die Menge sinkt, wird das Ziel (weniger Konsum koffeinhaltiger Getränke) erreicht. Nebenwirkungen: Steueraufkommen für den Staat, Wohlfahrtsverlust durch die nicht mehr gehandelten Einheiten.

*Klausurpunkte:* 2 für a), 2 für b), 2 für c). Typischer Verlust: Mehrwertsteuer als direkte Steuer, weil „der Kunde sie zahlt“.`
}
);
