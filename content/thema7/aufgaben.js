window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'g1', thema: 't7', titel: 'Erlös des Monopolisten: TR, AR, MR', schwierigkeit: 1, punkte: 7, zeit: 8,
  aufgabe: String.raw`Das einzige Wasserwerk einer Stadt sieht sich der Nachfrage $P = 10 - 2Q$ gegenüber ($Q$ in Tausend Liter, $P$ in €).

a) Füllen Sie die Tabelle für $Q = 0, 1, 2, 3, 4$: Preis, Gesamterlös, Durchschnittserlös, Grenzerlös.
b) Leiten Sie die Grenzerlösfunktion kontinuierlich her und zeichnen Sie Nachfrage und $MR$.
c) Erklären Sie mit Mengen- und Preiseffekt, warum der Grenzerlös beim Schritt von 3 auf 4 negativ ist.`,
  hinweis: '$TR = P \\cdot Q$. $MR$ in der Tabelle als Differenz aufeinanderfolgender $TR$. Kontinuierlich: $TR$ ableiten.',
  ansatz: String.raw`$TR = 10Q - 2Q^2 \Rightarrow MR = 10 - 4Q$.`,
  loesung: String.raw`**a)**

| $Q$ | $P$ | $TR$ | $AR$ | $MR$ |
|---|---|---|---|---|
| 0 | 10 | 0 | – | – |
| 1 | 8 | 8 | 8 | 8 |
| 2 | 6 | 12 | 6 | 4 |
| 3 | 4 | 12 | 4 | 0 |
| 4 | 2 | 8 | 2 | −4 |

$AR = TR/Q = P$: Der Durchschnittserlös ist die Nachfragekurve.

**b)** $TR = (10 - 2Q)\,Q = 10Q - 2Q^2$, $MR = dTR/dQ = 10 - 4Q$. Gleicher Achsenabschnitt (10), doppelte Steigung. $MR = 0$ bei $Q = 2{,}5$ (Erlösmaximum). Grafik: Nachfrage von $(0 \mid 10)$ nach $(5 \mid 0)$, $MR$ von $(0 \mid 10)$ nach $(2{,}5 \mid 0)$, darunter negativ.

**c)** Von 3 auf 4: **Mengeneffekt** $+2$ (eine Einheit mehr zum neuen Preis 2). **Preiseffekt** $-6$ (die drei bisherigen Einheiten bringen je 2 € weniger). Summe $-4$. Der Preiseffekt überwiegt, weil der Monopolist den Preis für alle Einheiten senken muss. Im Wettbewerb gäbe es keinen Preiseffekt.

*Klausurpunkte:* 3 für die Tabelle, 2 für b), 2 für c). Typischer Verlust: $MR$ mit $AR$ verwechselt.`
},
{
  id: 'g2', thema: 't7', titel: 'Monopoloptimum, Wettbewerbsvergleich, Wohlfahrtsverlust', schwierigkeit: 2, punkte: 12, zeit: 15,
  aufgabe: String.raw`Ein Anbieter von Kreditauskünften ist Monopolist mit Nachfrage $P = 100 - 2Q$ und Kosten $C(Q) = 20Q + 10$.

a) Stellen Sie das Gewinnmaximierungsproblem auf, leiten Sie $MR = MC$ her und berechnen Sie $Q_M$, $P_M$ und den Gewinn.
b) Welche Menge und welcher Preis ergäben sich bei vollständiger Konkurrenz (gleiche Kostenstruktur)?
c) Zeichnen Sie Nachfrage, $MR$, $MC$ und markieren Sie Monopolpreis, Konsumentenrente, Produzentenrente (ohne Fixkosten) und Wohlfahrtsverlust. Berechnen Sie alle drei Flächen.`,
  hinweis: '$MR = 100 - 4Q$, $MC = 20$. Preis in die Nachfrage einsetzen. Wettbewerb: $P = MC$.',
  ansatz: String.raw`$100 - 4Q = 20 \Rightarrow Q_M = 20$.`,
  loesung: String.raw`**a)** $\max_Q \pi = (100 - 2Q)Q - 20Q - 10 = 100Q - 2Q^2 - 20Q - 10$.
$\dfrac{d\pi}{dQ} = 100 - 4Q - 20 = 0$, also $MR = 100 - 4Q = 20 = MC \Rightarrow Q_M = 20$.
$P_M = 100 - 2 \cdot 20 = 60$. Gewinn $\pi = 60 \cdot 20 - (400 + 10) = 790$.

**b)** Wettbewerb: $P = MC$: $100 - 2Q = 20 \Rightarrow Q_W = 40$, $P_W = 20$.

**c)** Grafik: horizontal $Q$ (0 bis 50), vertikal $P$ (0 bis 100). Nachfrage von $(0 \mid 100)$ nach $(50 \mid 0)$. $MR$ von $(0 \mid 100)$ nach $(25 \mid 0)$. $MC$ horizontal bei 20. Schnittpunkt $MR = MC$ bei $Q = 20$; senkrecht hoch zur Nachfrage: $P_M = 60$.
Konsumentenrente: Dreieck über 60 unter der Nachfrage bis $Q = 20$: $\tfrac12 \cdot 20 \cdot (100 - 60) = 400$.
Produzentenrente: Rechteck zwischen 60 und 20 über $Q = 20$: $(60 - 20) \cdot 20 = 800$ (Gewinn 790 nach Abzug der Fixkosten 10).
Wohlfahrtsverlust: Dreieck zwischen Nachfrage und $MC$ von $Q = 20$ bis 40: $\tfrac12 \cdot 20 \cdot (60 - 20) = 400$.
Probe: Im Wettbewerb wäre $KR = \tfrac12 \cdot 40 \cdot 80 = 1600$, $PR = 0$; Gesamtrente 1600. Im Monopol $400 + 800 = 1200$; Differenz 400 ✓.

*Klausurpunkte:* 4 für a), 2 für b), 6 für c) (Grafik 3, Flächen 3). Typischer Verlust: Preis 20 im Schnittpunkt abgelesen; Wohlfahrtsverlust als Rechteck.`
},
{
  id: 'g3', thema: 't7', titel: 'Preisdifferenzierung', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Der Monopolist aus G2 ($P = 100 - 2Q$, $MC = 20$, $FC = 10$) kann die Zahlungsbereitschaft jedes Kunden erkennen und individuelle Preise verlangen (Weiterverkauf ist ausgeschlossen).

a) Nennen Sie die drei Voraussetzungen für Preisdifferenzierung und prüfen Sie sie hier.
b) Welche Menge verkauft der perfekt differenzierende Monopolist? Berechnen Sie Erlös, Gewinn, Konsumentenrente und Wohlfahrtsverlust.
c) Vergleichen Sie mit dem Einheitspreis-Monopol aus G2. Ist das Ergebnis effizient? Ist es „gerecht“?`,
  hinweis: 'Er verkauft jede Einheit, deren Zahlungsbereitschaft über $MC$ liegt. Erlös = Fläche unter der Nachfragekurve bis zu dieser Menge.',
  ansatz: String.raw`Verkauf bis $P = MC$: $Q = 40$. Erlös $= \int_0^{40} (100 - 2Q)\,dQ$ oder Trapez.`,
  loesung: String.raw`**a)** Marktmacht (ja, Monopolist), erkennbare unterschiedliche Zahlungsbereitschaften (laut Aufgabe ja), begrenzte Arbitrage (Weiterverkauf ausgeschlossen). Alle drei erfüllt.

**b)** Er verkauft jede Einheit, solange die Zahlungsbereitschaft über den Grenzkosten liegt: bis $100 - 2Q = 20$, also $Q = 40$ – die Wettbewerbsmenge. Erlös = Fläche unter der Nachfrage bis 40 = Trapez $\tfrac12 (100 + 20) \cdot 40 = 2400$. Kosten $20 \cdot 40 + 10 = 810$. Gewinn $1590$. Konsumentenrente $0$ – jeder zahlt genau seine Zahlungsbereitschaft. Wohlfahrtsverlust $0$, weil die effiziente Menge produziert wird.

**c)** Einheitspreis-Monopol: $Q = 20$, $KR = 400$, $PR = 800$, $WV = 400$, Gesamtrente 1200. Preisdifferenzierung: $Q = 40$, $KR = 0$, $PR = 1600$ (vor Fixkosten), $WV = 0$, Gesamtrente 1600. Das Ergebnis ist **effizient** (maximale Gesamtrente, wie im Wettbewerb), aber die gesamte Rente liegt beim Monopolisten. Ob das gerecht ist, ist eine normative Frage – Pareto-Effizienz sagt dazu nichts. Dasselbe Muster wie beim diskriminierenden Monopolisten am Wohnungsmarkt in Thema 2.

*Klausurpunkte:* 2 für a), 4 für b), 2 für c). Typischer Verlust: Erlös als $P \cdot Q$ mit einem Preis statt als Fläche.`
},
{
  id: 'g4', thema: 't7', titel: 'Monopol: Begriffe und Vergleich', schwierigkeit: 1, punkte: 8, zeit: 10,
  aufgabe: String.raw`a) Nennen Sie die vier Ursachen von Marktzutrittsbarrieren und ordnen Sie zu: (1) Patent auf ein Medikament, (2) Stromnetz einer Stadt, (3) einzige Diamantmine einer Region, (4) Übernahme aller Wettbewerber.
b) Erklären Sie, warum ein natürliches Monopol entsteht, und skizzieren Sie die Durchschnittskostenkurve.
c) Vergleichen Sie Monopol und vollständige Konkurrenz in einer Tabelle (mindestens fünf Kriterien) und nennen Sie zwei Gemeinsamkeiten.
d) Nennen Sie die vier wirtschaftspolitischen Optionen gegen Monopole und den Trade-off.`,
  hinweis: 'Tabelle auf Folie 24. Natürliches Monopol: steigende Skalenerträge, Fixkosten.',
  ansatz: String.raw`b) Hohe Fixkosten, $AC = FC/Q + c$ fällt über den gesamten relevanten Bereich.`,
  loesung: String.raw`**a)** Staatliche Lizenz (1), natürliches Monopol (2), zentrale Ressource (3), externes Wachstum (4).

**b)** Ein natürliches Monopol entsteht, wenn ein Unternehmen den gesamten Markt billiger bedienen kann als mehrere – wegen **steigender Skalenerträge**: Hohe Fixkosten (Leitungsnetz) und niedrige Grenzkosten je Einheit. Die Durchschnittskostenkurve fällt über den gesamten relevanten Mengenbereich (Skizze: $AC$ hyperbelförmig fallend, Nachfragekurve schneidet sie im fallenden Teil). Zwei Anbieter müssten die Fixkosten doppelt tragen. Wächst der Markt stark, kann die Nachfrage den steigenden Teil der $AC$ erreichen und mehrere Anbieter werden tragfähig.

**c)**

| Kriterium | vollständige Konkurrenz | Monopol |
|---|---|---|
| Anzahl Unternehmen | viele | eins |
| Preisdifferenzierung | nein (Preisnehmer) | ja (Preisfixierer) |
| Grenzerlös | $= P$ | $< P$ |
| Preis vs. Grenzkosten | $P = MC$ | $P > MC$ |
| effiziente Menge | ja | nein |
| Markteintritt | möglich | nicht möglich |
| langfristige Gewinne | nein | ja |

Gemeinsamkeiten: Ziel Gewinnmaximierung; Optimum bei $MR = MC$; kurzfristige Gewinne möglich.

**d)** Wettbewerb intensivieren (Kartellrecht, Entflechtung), Regulierung (Preisaufsicht, Netzzugang), Verstaatlichung, Nichtstun. Trade-off: Eingriffe begrenzen die Marktmacht und den Wohlfahrtsverlust, verursachen aber Informationsprobleme (Regulierer kennt Kosten nicht), Fehlanreize (keine Kostensenkung bei Kostenerstattung) und Verwaltungskosten.

*Klausurpunkte:* 2 für a), 2 für b), 3 für c), 1 für d). Typischer Verlust: in c) „Grenzerlös = Preis“ beim Monopol.`
},
{
  id: 'g5', thema: 't7', titel: 'Negative Externalität und Pigou-Steuer', schwierigkeit: 2, punkte: 12, zeit: 15,
  aufgabe: String.raw`Eine Papierfabrik: Nachfrage $P = 100 - Q$, private Grenzkosten $MC_p = 20 + Q$. Jede produzierte Einheit verursacht externe Kosten von 20 € (Flussverschmutzung).

a) Berechnen Sie das Marktgleichgewicht ohne Eingriff.
b) Bestimmen Sie die volkswirtschaftlichen Grenzkosten und das gesellschaftliche Optimum. Berechnen Sie den Wohlfahrtsverlust des Marktergebnisses.
c) Zeichnen Sie beide Kostenkurven, die Nachfrage, $Q_{Markt}$, $Q^*$ und das Wohlfahrtsverlust-Dreieck.
d) Welche Pigou-Steuer führt zum Optimum? Berechnen Sie das Steueraufkommen und erklären Sie den Mechanismus.`,
  hinweis: 'Volkswirtschaftliche Kosten = private + externe. Das Dreieck liegt zwischen den beiden Kostenkurven und der Nachfrage, rechts vom Optimum.',
  ansatz: String.raw`a) $100 - Q = 20 + Q$. b) $100 - Q = 40 + Q$.`,
  loesung: String.raw`**a)** $100 - Q = 20 + Q \Rightarrow Q_{Markt} = 40$, $P_{Markt} = 60$.

**b)** $MC_{volksw.} = 20 + Q + 20 = 40 + Q$. Optimum: $100 - Q = 40 + Q \Rightarrow Q^* = 30$, $P^* = 70$. Der Markt produziert 10 Einheiten zu viel. Für jede davon liegen die wahren Kosten über der Zahlungsbereitschaft: bei $Q = 40$ sind es $80$ gegen $60$. Wohlfahrtsverlust $= \tfrac12 \cdot (40 - 30) \cdot 20 = 100$.

**c)** Horizontal $Q$, vertikal $P$. Nachfrage von $(0 \mid 100)$ fallend. Private Grenzkosten von $(0 \mid 20)$ steigend (Angebot). Volkswirtschaftliche Grenzkosten parallel darüber von $(0 \mid 40)$. Marktgleichgewicht $(40 \mid 60)$ am Schnitt Nachfrage/private Kosten. Optimum $(30 \mid 70)$ am Schnitt Nachfrage/volkswirtschaftliche Kosten. Wohlfahrtsverlust: Dreieck mit Ecken $(30 \mid 70)$, $(40 \mid 60)$, $(40 \mid 80)$ – zwischen den Kostenkurven und der Nachfrage von 30 bis 40.

**d)** Pigou-Steuer $t = 20$ je Einheit – genau die externen Kosten. Die Fabrik kalkuliert nun mit $MC_p + t = 40 + Q$, also mit den volkswirtschaftlichen Kosten; das neue Marktgleichgewicht ist $Q = 30$, Käuferpreis 70, Erlös des Verkäufers 50. Steueraufkommen $20 \cdot 30 = 600$. Mechanismus: Die Steuer **internalisiert** die externen Kosten – der Verursacher bezieht sie in seine Entscheidung ein, ohne dass der Staat die Menge vorschreiben muss. Der Wohlfahrtsverlust verschwindet; das Steueraufkommen ist Umverteilung an den Staat, kein Verlust.

*Klausurpunkte:* 2 für a), 4 für b), 3 für c), 3 für d). Typischer Verlust: Steuer auf die Nachfrage statt auf das Angebot gelegt; Dreieck auf der falschen Seite von $Q^*$.`
},
{
  id: 'g6', thema: 't7', titel: 'Positive Externalität und Subvention', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Markt für Weiterbildungskurse in einer Bank: private Nachfrage $P = 100 - Q$, Angebot $P = 20 + Q$. Jeder Kurs stiftet zusätzlich einen externen Nutzen von 20 € (Kollegen profitieren vom Wissen).

a) Berechnen Sie Marktgleichgewicht und gesellschaftliches Optimum.
b) Zeichnen Sie private und volkswirtschaftliche Nutzenkurve, Angebot und das Wohlfahrtsverlust-Dreieck. Berechnen Sie den Wohlfahrtsverlust.
c) Welche Subvention je Kurs führt zum Optimum? Was kostet sie die Bank bzw. den Staat?
d) Warum ist bei positiver Externalität die Marktmenge zu niedrig, bei negativer zu hoch?`,
  hinweis: 'Volkswirtschaftlicher Nutzen = privater Nutzen + 20, also Nachfragekurve nach oben verschoben.',
  ansatz: String.raw`Optimum: $120 - Q = 20 + Q$.`,
  loesung: String.raw`**a)** Markt: $100 - Q = 20 + Q \Rightarrow Q_{Markt} = 40$, $P = 60$. Volkswirtschaftlicher Nutzen $P = 120 - Q$. Optimum: $120 - Q = 20 + Q \Rightarrow Q^* = 50$, $P^* = 70$. Zehn Kurse zu wenig.

**b)** Nachfrage (privater Nutzen) von $(0 \mid 100)$, volkswirtschaftlicher Nutzen parallel darüber von $(0 \mid 120)$, Angebot von $(0 \mid 20)$ steigend. Markt $(40 \mid 60)$, Optimum $(50 \mid 70)$. Wohlfahrtsverlust: Dreieck zwischen volkswirtschaftlichem Nutzen und Angebot von $Q = 40$ bis 50, Ecken $(40 \mid 60)$, $(40 \mid 80)$, $(50 \mid 70)$. Fläche $\tfrac12 \cdot 10 \cdot 20 = 100$. Für diese zehn Kurse übersteigt der gesamte Nutzen die Kosten, sie finden aber nicht statt.

**c)** Subvention $s = 20$ je Kurs (= externer Nutzen). An die Teilnehmer gezahlt, verschiebt sie die private Nachfrage auf den volkswirtschaftlichen Nutzen; an die Anbieter gezahlt, verschiebt sie das Angebot auf $P = Q$ – beides ergibt $Q^* = 50$. Kosten der Subvention: $20 \cdot 50 = 1000$. Der Wohlfahrtsgewinn (100) ist kleiner als die Subventionskosten, aber die Subvention ist eine Umverteilung, kein Ressourcenverbrauch; netto steigt die Gesamtrente um 100 (vgl. Thema 8 zur Berechnung).

**d)** Entscheider vergleichen nur private Kosten und privaten Nutzen. Bei positiver Externalität unterschätzen sie den Nutzen → sie tun zu wenig davon. Bei negativer unterschätzen sie die Kosten → sie tun zu viel. Internalisierung heißt, den externen Teil in die private Rechnung zu holen: Subvention bzw. Steuer in Höhe des externen Effekts.

*Klausurpunkte:* 3 für a), 3 für b), 2 für c), 2 für d). Typischer Verlust: Angebotskurve statt Nachfragekurve verschoben.`
},
{
  id: 'g7', thema: 't7', titel: 'Coase-Theorem anwenden', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Zoë und Emil teilen sich ein Büro. Zoë möchte die Klimaanlage laufen lassen (Nutzen für sie: 50 € pro Woche). Emil sitzt im Luftzug (Kosten für ihn: 30 € pro Woche).

a) Was ist die effiziente Lösung?
b) Fall 1: Emil hat das Recht auf ein Büro ohne Klimaanlage. Was passiert bei kostenloser Verhandlung, und in welchem Bereich liegt die Zahlung?
c) Fall 2: Zoë hat das Recht, die Anlage zu nutzen. Was passiert?
d) Formulieren Sie das Coase-Theorem und nennen Sie drei Gründe, warum es im Fall eines Kraftwerks mit 10.000 betroffenen Anwohnern scheitert.`,
  hinweis: 'Effizient ist, was den gesamten Nutzen maximiert. Eine Zahlung ist für beide vorteilhaft, wenn sie zwischen Kosten des einen und Nutzen des anderen liegt.',
  ansatz: String.raw`Nutzen 50 > Kosten 30 → Anlage an. Die Rechteverteilung ändert nur, wer zahlt.`,
  loesung: String.raw`**a)** Zoës Nutzen (50) übersteigt Emils Kosten (30): Die Anlage sollte laufen. Alternativen wie mittlere Temperatur, Platztausch oder Luftabweiser wären zu prüfen, falls sie billiger sind als 30.

**b)** Emil kann die Anlage verbieten. Zoë bietet ihm eine Ausgleichszahlung $z$ mit $30 < z < 50$ (z. B. 40): Emil ist besser gestellt (40 > 30 Kosten), Zoë auch (50 Nutzen − 40 = 10 übrig). Anlage läuft. Pareto-Verbesserung gegenüber „aus“.

**c)** Zoë darf die Anlage nutzen. Emil müsste ihr mindestens 50 bieten, damit sie verzichtet – ihm ist der Verzicht aber nur 30 wert. Keine Einigung, Anlage läuft. **Gleiches Ergebnis** wie in b), nur ohne Zahlung. Die Rechteverteilung bestimmt die Verteilung (wer zahlt), nicht die Effizienz.

**d)** Coase-Theorem: Können die Betroffenen kostenlos verhandeln und sind die Eigentumsrechte klar definiert, führt der Markt trotz Externalität zu einem effizienten Ergebnis – unabhängig davon, wer die Rechte hat. Beim Kraftwerk scheitert es an: (1) hohen Transaktionskosten der Verhandlung mit 10.000 Parteien, (2) Koordinationsproblem und Trittbrettfahrern (jeder Anwohner hofft, dass die anderen zahlen oder verhandeln), (3) asymmetrischer Information (Anwohner übertreiben ihre Schäden, das Kraftwerk seine Vermeidungskosten). Dann ist ein staatlicher Eingriff (Pigou-Steuer, Grenzwerte) nötig.

*Klausurpunkte:* 1 für a), 3 für b), 2 für c), 2 für d). Typischer Verlust: in c) behauptet, Emil zahle 30 und die Anlage gehe aus.`
},
{
  id: 'g8', thema: 't7', titel: 'Öffentliche Güter: Typologie, Trittbrettfahrer, optimale Menge', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`a) Ordnen Sie in die Vier-Felder-Matrix ein: Brötchen, Netflix-Abo, Fischbestand in der Nordsee, Deich, Stadtpark am sonnigen Sonntag, verschlüsselter Radiosender, Landesverteidigung, Stau auf einer mautfreien Autobahn.
b) 500 Einwohner bewerten ein Feuerwerk mit je 10 €, die Kosten betragen 1000 €. Warum bietet es kein privater Anbieter an, und wie kann der Staat die Wohlfahrt erhöhen?
c) Public-Goods-Game mit $n = 4$, $A = 20$, $\alpha = 0{,}4$. Leiten Sie die beste Strategie des Homo Oeconomicus her und vergleichen Sie mit vollständiger Kooperation.
d) Zwei Bürger haben für einen Park die Nachfragen $D_1: p = 10 - M$ und $D_2: p = 20 - 2M$ ($M$ Hektar). Grenzkosten 6 je Hektar. Bestimmen Sie die optimale Parkgröße und erklären Sie die Additionsregel.`,
  hinweis: 'Ausschließbar? Rival? Public-Goods-Game: $U_i$ nach $b_i$ ableiten. Öffentliches Gut: Nachfragen vertikal addieren.',
  ansatz: String.raw`c) $U_i = 20 - b_i + 0{,}4\sum b_j$, $\partial U_i/\partial b_i = -1 + 0{,}4$. d) $MSB = 30 - 3M$.`,
  loesung: String.raw`**a)** Private Güter (ausschließbar, rival): Brötchen. Clubgüter (ausschließbar, nicht rival): Netflix-Abo, verschlüsselter Radiosender. Allmendegüter (nicht ausschließbar, rival): Fischbestand, Stadtpark am vollen Sonntag, Stau auf der mautfreien Autobahn. Öffentliche Güter (nicht ausschließbar, nicht rival): Deich, Landesverteidigung.

**b)** Gesamtnutzen $500 \cdot 10 = 5000 > 1000$ Kosten – das Feuerwerk ist gesellschaftlich lohnend. Aber niemand kann vom Zuschauen ausgeschlossen werden (Nicht-Ausschließbarkeit). Jeder Einzelne hat den Anreiz, nichts zu zahlen und trotzdem zuzuschauen – **Trittbrettfahrer**. Ein privater Anbieter kann die Kosten nicht decken; das Gut wird nicht bereitgestellt (Marktversagen). Der Staat kann es über eine Abgabe von 2 € pro Person finanzieren: Jeder zahlt 2 und erhält Nutzen 10 – alle besser gestellt.

**c)** $U_i = 20 - b_i + 0{,}4\,(b_i + \sum_{j \ne i} b_j) = 20 - 0{,}6\,b_i + 0{,}4\sum_{j\ne i} b_j$. $\partial U_i/\partial b_i = -0{,}6 < 0$: Jeder beigetragene Euro senkt den eigenen Nutzen um 0,60, unabhängig vom Verhalten der anderen. Beste Strategie $b_i^* = 0$ (dominant). Tragen alle nichts bei: $U_i = 20$. Tragen alle 20 bei: Topf 80, mal 0,4 gleich 32 für jeden – alle besser gestellt ($n\alpha = 1{,}6 > 1$). Das Gefangenendilemma mit vier Spielern; Experimente zeigen positive, aber nicht volle Beiträge (warm glow, Fairness, Lernen).

**d)** Alle nutzen denselben Park, also werden die Zahlungsbereitschaften je Hektar **vertikal addiert**: $MSB = (10 - M) + (20 - 2M) = 30 - 3M$ (gültig, solange beide positiv sind, $M \le 10$). Optimum $MSB = MC$: $30 - 3M = 6 \Rightarrow M^* = 8$ Hektar. Probe: Bei 8 Hektar ist Bürger 1 bereit, 2 zu zahlen, Bürger 2 bereit, 4 zu zahlen; zusammen 6 = Grenzkosten ✓. Bei privaten Gütern würde man horizontal (Mengen) addieren, weil jeder seine eigene Menge konsumiert.

*Klausurpunkte:* 3 für a), 2 für b), 4 für c), 3 für d). Typischer Verlust: horizontale statt vertikale Addition; Stadtpark als öffentliches Gut (bei Überfüllung rival).`
},
{
  id: 'ub4-1', thema: 't7', titel: 'Übungsblatt 4, Aufgabe 1: Softwarepatent als Monopol', schwierigkeit: 3, punkte: 14, zeit: 18, quelle: 'Übungsblatt 4 (Schehl)',
  aufgabe: String.raw`Ein Unternehmen verkauft eine Software für regulatorische Risikoberichte und besitzt dafür ein Patent – es ist Alleinanbieter. Nachfrage $P(Q) = 104 - Q$, Kostenfunktion $C(Q) = 20Q + 0{,}5Q^2$.

a) Stellen Sie das Gewinnmaximierungsproblem auf und ermitteln Sie die optimale Menge $Q^*_{Monopol}$. Zu welchem Preis verkauft das Unternehmen?
b) Stellen Sie die Gewinnmaximierung grafisch dar: Grenzerlös, Grenzkosten und Nachfrage in einem Preis-Mengen-Diagramm; tragen Sie das Ergebnis aus a) ein.
c) Berechnen Sie den Gewinn und ergänzen Sie ihn im Diagramm.`,
  hinweis: '$TR = 104Q - Q^2$, $MR = 104 - 2Q$, $MC = 20 + Q$. Preis aus der Nachfrage. Für c) die Durchschnittskosten $AC = 20 + 0{,}5Q$ einzeichnen.',
  ansatz: String.raw`$104 - 2Q = 20 + Q \Rightarrow Q = 28$.`,
  loesung: String.raw`**a)** $\max_Q \pi(Q) = P(Q)\cdot Q - C(Q) = (104 - Q)Q - 20Q - 0{,}5Q^2 = 104Q - Q^2 - 20Q - 0{,}5Q^2$.
$\dfrac{d\pi}{dQ} = 104 - 2Q - 20 - Q = 0$. In Grenzgrößen: $MR = 104 - 2Q$, $MC = 20 + Q$, $MR = MC \Rightarrow 84 = 3Q \Rightarrow Q^*_{Monopol} = 28$.
Zweite Ordnung: $\pi'' = -3 < 0$ ✓. Preis: $P = 104 - 28 = 76$ Lizenzen zu je 76.

**b)** Horizontal $Q$ (0 bis 104), vertikal Preis (0 bis 104). Nachfrage von $(0 \mid 104)$ nach $(104 \mid 0)$. $MR$ von $(0 \mid 104)$ nach $(52 \mid 0)$ – doppelte Steigung. $MC$ von $(0 \mid 20)$ steigend mit Steigung 1. Schnittpunkt $MR = MC$ bei $(28 \mid 48)$. Von dort senkrecht nach oben zur Nachfrage: $P^* = 76$. Gestrichelte Linien zu beiden Achsen.

**c)** Gewinn $\pi = 76 \cdot 28 - (20 \cdot 28 + 0{,}5 \cdot 784) = 2128 - (560 + 392) = 2128 - 952 = 1176$.
Grafisch: Durchschnittskosten $AC = C/Q = 20 + 0{,}5Q$, bei $Q = 28$: $AC = 34$. Gewinn = Rechteck zwischen $P = 76$ und $AC = 34$ über der Breite 28: $(76 - 34) \cdot 28 = 42 \cdot 28 = 1176$ ✓. Im Diagramm $AC$ als Gerade von $(0 \mid 20)$ mit Steigung 0,5 einzeichnen und das Rechteck schraffieren.

*Klausurpunkte:* 5 für a) (Ansatz 2, Lösung 2, Preis 1), 4 für b), 5 für c) (Rechnung 2, $AC$ und Rechteck 3). Typischer Verlust: Preis 48 statt 76; Gewinn ohne $AC$ grafisch nicht darstellbar.`
},
{
  id: 'ub4-2', thema: 't7', titel: 'Übungsblatt 4, Aufgabe 2: Patent läuft aus – Wettbewerb', schwierigkeit: 2, punkte: 10, zeit: 12, quelle: 'Übungsblatt 4 (Schehl)',
  aufgabe: String.raw`Das Patent aus Aufgabe 1 läuft aus; andere Unternehmen bieten gleichwertige Software an, der Markt ist nun durch vollständige Konkurrenz beschrieben. Nachfrage unverändert $P = 104 - Q$, aggregierte Kostenfunktion der Branche $C(Q) = 20Q + 0{,}5Q^2$.

a) Stellen Sie das Gewinnmaximierungsproblem auf und ermitteln Sie die optimale Menge $Q^*_{Markt}$. Zu welchem Preis wird jetzt verkauft?
b) Vergleichen Sie mit Aufgabe 1a) und stellen Sie beide Ergebnisse in einem Preis-Mengen-Diagramm dar.`,
  hinweis: 'Im Wettbewerb sind Unternehmen Preisnehmer: $P = MC$. Die Branchen-$MC$-Kurve ist die Angebotskurve.',
  ansatz: String.raw`$104 - Q = 20 + Q$.`,
  loesung: String.raw`**a)** Bei vollständiger Konkurrenz nimmt jedes Unternehmen den Preis als gegeben: $\max_q \pi = p\,q - C(q)$, $\pi' = p - MC = 0$, also $P = MC$. Die Branchengrenzkosten $MC = 20 + Q$ bilden die Angebotskurve. Gleichgewicht: $104 - Q = 20 + Q \Rightarrow Q^*_{Markt} = 42$, $P^*_{Markt} = 104 - 42 = 62$.

**b)** Vergleich:

| | Monopol (Patent) | Wettbewerb |
|---|---|---|
| Menge | 28 | 42 |
| Preis | 76 | 62 |
| Bedingung | $MR = MC$ | $P = MC$ |
| Preis vs. $MC$ | $76 > 48$ | $62 = 62$ |

Der Monopolist verknappt die Menge um 14 Lizenzen und verlangt 14 mehr. Die Konsumentenrente steigt im Wettbewerb von $\tfrac12 \cdot 28 \cdot 28 = 392$ auf $\tfrac12 \cdot 42 \cdot 42 = 882$. Wohlfahrtsverlust des Monopols: Dreieck zwischen Nachfrage und $MC$ von 28 bis 42 mit Höhe $76 - 48 = 28$: $\tfrac12 \cdot 14 \cdot 28 = 196$.
Diagramm: Nachfrage, $MR$, $MC$ wie in Aufgabe 1; Monopolpunkt $(28 \mid 76)$ auf der Nachfrage über dem Schnitt $MR = MC$; Wettbewerbspunkt $(42 \mid 62)$ im Schnitt Nachfrage/$MC$. Wohlfahrtsverlust-Dreieck mit Ecken $(28 \mid 76)$, $(28 \mid 48)$, $(42 \mid 62)$ schraffieren.

*Klausurpunkte:* 5 für a) (Begründung $P = MC$ 2, Rechnung 3), 5 für b) (Tabelle/Vergleich 2, Diagramm 3). Typischer Verlust: im Wettbewerb weiterhin $MR = MC$ gerechnet.`
}
);
