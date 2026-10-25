window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'd1', thema: 't6', titel: 'Konsumentenrente aus Zahlungsbereitschaften', schwierigkeit: 1, punkte: 7, zeit: 8,
  aufgabe: String.raw`Eine Bank versteigert vier identische Goldmünzen aus einem Nachlass. Zahlungsbereitschaften: Anna 1000 €, Ben 800 €, Clara 700 €, David 500 €.

a) Erstellen Sie die Nachfragetabelle (Preisintervalle, Käufer, Menge) und zeichnen Sie die Nachfragekurve als Treppe.
b) Es wird nur eine Münze zu 801 € verkauft. Wer kauft, und wie hoch ist die Konsumentenrente?
c) Es werden zwei Münzen zu 701 € verkauft. Konsumentenrente jedes Käufers und insgesamt? Markieren Sie sie in der Grafik.
d) Was gibt die Höhe der Nachfragekurve bei Menge 3 an?`,
  hinweis: 'Bei Preis $p$ kaufen alle mit Zahlungsbereitschaft $\\ge p$. KR = Zahlungsbereitschaft − Preis.',
  ansatz: String.raw`b) Nur Anna hat ZB $\ge 801$.`,
  loesung: String.raw`**a)** Preis über 1000: niemand, Menge 0. 801–1000: Anna, 1. 701–800: Anna, Ben, 2. 501–700: Anna, Ben, Clara, 3. Bis 500: alle, 4. Treppe: horizontal Menge, vertikal Preis; Stufen bei 1000, 800, 700, 500.

**b)** Anna kauft. $KR = 1000 - 801 = 199$ €.

**c)** Anna und Ben kaufen. $KR_{Anna} = 1000 - 701 = 299$, $KR_{Ben} = 800 - 701 = 99$, gesamt 398 €. Grafisch: zwei Rechtecke über der Preislinie 701 bis zur jeweiligen Stufe (Breite 1, Höhen 299 und 99).

**d)** Die Zahlungsbereitschaft des **Grenznachfragers** bei drei Einheiten – Clara mit 700 €. Sie würde bei einem Preis über 700 als Erste aussteigen.

*Klausurpunkte:* 3 für a), 1 für b), 2 für c), 1 für d). Typischer Verlust: Preisintervalle falsch (bei genau 800 kauft Ben noch).`
},
{
  id: 'd2', thema: 't6', titel: 'Produzentenrente aus Kosten', schwierigkeit: 1, punkte: 7, zeit: 8,
  aufgabe: String.raw`Eine Filiale schreibt die Reinigung ihrer Räume aus. Vier Anbieter mit Kosten: Firma M 900 €, L 800 €, T 600 €, P 500 €. Der Auftrag geht an den günstigsten Bieter; jeder kann nur einen Auftrag übernehmen.

a) Erstellen Sie die Angebotstabelle und zeichnen Sie die Angebotskurve als Treppe.
b) Ein Auftrag wird zu 599 € vergeben. Wer erhält ihn, wie hoch ist die Produzentenrente?
c) Zwei Filialen vergeben je einen Auftrag zu 799 €. Produzentenrente je Anbieter und gesamt?
d) Warum sind die Kosten ein Maß für die Verkaufsbereitschaft, und wie hängt die Angebotskurve mit Thema 4 zusammen?`,
  hinweis: 'Bei Preis $p$ bieten alle an, deren Kosten $\\le p$ sind. PR = Preis − Kosten.',
  ansatz: String.raw`c) P und T haben Kosten unter 799.`,
  loesung: String.raw`**a)** Preis unter 500: niemand, 0. 500–599: P, 1. 600–799: P, T, 2. 800–899: P, T, L, 3. Ab 900: alle, 4. Treppe steigend mit Stufen bei 500, 600, 800, 900.

**b)** P erhält den Auftrag. $PR = 599 - 500 = 99$ €.

**c)** P und T. $PR_P = 799 - 500 = 299$, $PR_T = 799 - 600 = 199$, gesamt 498 €. Grafisch: Rechtecke unter der Preislinie 799 bis zur jeweiligen Kostenstufe.

**d)** Ein Anbieter nimmt den Auftrag nur an, wenn der Preis mindestens seine Kosten deckt – die Kosten sind sein Mindestpreis (Verkaufsbereitschaft). Die Höhe der Angebotskurve bei jeder Menge ist die Verkaufsbereitschaft des Grenzanbieters. Bei einem Unternehmen mit steigenden Grenzkosten ist die Angebotskurve genau die $MC$-Kurve aus Thema 4: Jede weitere Einheit wird angeboten, wenn $p \ge MC$.

*Klausurpunkte:* 3 für a), 1 für b), 2 für c), 1 für d). Typischer Verlust: PR als Preis minus Durchschnittskosten aller Anbieter.`
},
{
  id: 'd3', thema: 't6', titel: 'Renten im Marktgleichgewicht berechnen', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Auf dem Markt für Girokonten einer Region gelten $Q_D = 100 - p$ und $Q_S = p - 20$ (Preis = Jahresgebühr in €, Menge in Tausend Konten).

a) Berechnen Sie Gleichgewichtspreis und -menge.
b) Berechnen Sie Konsumentenrente, Produzentenrente und Gesamtrente. Zeichnen Sie beide Flächen.
c) Begründen Sie, warum keine andere Menge eine höhere Gesamtrente erzeugt.`,
  hinweis: 'Prohibitivpreis: $Q_D = 0$ bei $p = 100$. Mindestpreis: $Q_S = 0$ bei $p = 20$. Dreiecke.',
  ansatz: String.raw`$KR = \tfrac12 \cdot Q^* \cdot (100 - p^*)$, $PR = \tfrac12 \cdot Q^* \cdot (p^* - 20)$.`,
  loesung: String.raw`**a)** $100 - p = p - 20 \Rightarrow p^* = 60$, $Q^* = 40$.

**b)** $KR = \tfrac12 \cdot 40 \cdot (100 - 60) = 800$. $PR = \tfrac12 \cdot 40 \cdot (60 - 20) = 800$. Gesamtrente $1600$.
Grafik: horizontal $Q$ (0 bis 100), vertikal $p$ (0 bis 100). Nachfrage von $(0 \mid 100)$ nach $(100 \mid 0)$, Angebot von $(0 \mid 20)$ steigend durch $(40 \mid 60)$ und $(80 \mid 100)$. KR: Dreieck zwischen Nachfragekurve und Preislinie 60, von $Q = 0$ bis 40. PR: Dreieck zwischen Preislinie 60 und Angebotskurve.

**c)** Für jede Einheit links von 40 liegt die Zahlungsbereitschaft $P_D(Q) = 100 - Q$ über den Kosten $P_S(Q) = 20 + Q$; eine zusätzliche Einheit erhöht die Gesamtrente um die Differenz. Für Einheiten rechts von 40 liegen die Kosten über der Zahlungsbereitschaft; sie würden die Gesamtrente senken. Bei $Q = 40$ ist $P_D = P_S = 60$. Also ist die Gesamtrente bei $Q^* = 40$ maximal – der Markt ist effizient.

*Klausurpunkte:* 2 für a), 4 für b) mit Grafik, 2 für c). Typischer Verlust: Dreiecksfläche ohne den Faktor $\tfrac12$.`
},
{
  id: 'd4', thema: 't6', titel: 'Wohlfahrtsverlust bei fixiertem Preis', schwierigkeit: 3, punkte: 12, zeit: 15,
  aufgabe: String.raw`Weiter mit $Q_D = 100 - p$, $Q_S = p - 20$ (Gleichgewicht $p^* = 60$, $Q^* = 40$, $KR = PR = 800$).

a) Ein Branchenverband setzt die Gebühr auf $P' = 70$ fest. Berechnen Sie gehandelte Menge, KR, PR, Gesamtrente und Wohlfahrtsverlust. Wer gewinnt, wer verliert?
b) Stattdessen schreibt der Staat $P'' = 50$ vor. Dieselben Größen.
c) Zeichnen Sie beide Situationen und markieren Sie das Wohlfahrtsverlust-Dreieck. Erklären Sie, warum ein Teil der verlorenen KR in a) kein Wohlfahrtsverlust ist.`,
  hinweis: 'Gehandelte Menge = kleinere Seite. Dann Höhe der Kurven bei dieser Menge ablesen. Renten als Dreieck plus Rechteck oder als Trapez.',
  ansatz: String.raw`a) $Q' = Q_D(70) = 30$. $P_S(30) = 50$. $PR' = $ Fläche unter 70 und über der Angebotskurve bis 30.`,
  loesung: String.raw`**a)** $Q_D(70) = 30$, $Q_S(70) = 50$; gehandelt wird $Q' = 30$. Bei $Q = 30$: $P_D = 70$, $P_S = 50$.
$KR' = \tfrac12 \cdot 30 \cdot (100 - 70) = 450$ (vorher 800, Verlust 350).
$PR' = $ Trapez zwischen Preislinie 70 und Angebotskurve von 0 bis 30 $= \tfrac12 \cdot (70 - 20 + 70 - 50) \cdot 30 = \tfrac12 \cdot 70 \cdot 30 = 1050$ (vorher 800, Gewinn 250).
Gesamtrente $1500$, Wohlfahrtsverlust $1600 - 1500 = 100$. Direkt: $WV = \tfrac12 \cdot (40 - 30) \cdot (70 - 50) = 100$ ✓.
Konsumenten verlieren 350: davon 300 Umverteilung an die Produzenten (Rechteck $30 \cdot 10$) und 50 echter Verlust. Produzenten gewinnen 300 durch den höheren Preis, verlieren aber 50 an nicht mehr verkauften Einheiten: netto $+250$.

**b)** $Q_S(50) = 30$, $Q_D(50) = 50$; gehandelt $Q'' = 30$. $P_D(30) = 70$, $P_S(30) = 50$.
$KR'' = \tfrac12 \cdot (100 - 50 + 70 - 50) \cdot 30 = \tfrac12 \cdot 70 \cdot 30 = 1050$ (Gewinn 250).
$PR'' = \tfrac12 \cdot 30 \cdot (50 - 20) = 450$ (Verlust 350).
Gesamtrente $1500$, Wohlfahrtsverlust wieder $100$ – dasselbe Dreieck, nur die Verteilung ist gespiegelt.

**c)** Beide Grafiken: Nachfrage und Angebot wie in D3, Preislinie bei 70 bzw. 50, gehandelte Menge 30 markiert. Das Wohlfahrtsverlust-Dreieck liegt zwischen den beiden Kurven von $Q = 30$ bis $Q = 40$ mit Spitze im Gleichgewicht $(40 \mid 60)$. In a) ist das Rechteck zwischen 60 und 70 bis $Q = 30$ (Wert 300) keine verlorene Wohlfahrt, sondern wandert von den Konsumenten zu den Produzenten – die Gesamtrente zählt beide. Verloren ist nur die Rente der zehn Einheiten, die nicht mehr gehandelt werden, obwohl ihre Zahlungsbereitschaft (zwischen 70 und 60) über ihren Kosten (zwischen 50 und 60) liegt.

*Klausurpunkte:* 5 für a), 4 für b), 3 für c). Typischer Verlust: PR' als Dreieck $\tfrac12 \cdot 30 \cdot 50 = 750$ gerechnet (vergisst, dass der Preis 70 über den Kosten des Grenzanbieters 50 liegt).`
},
{
  id: 'd5', thema: 't6', titel: 'Änderung der Konsumentenrente und Wohlfahrtsbegriffe', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`a) Nachfrage $Q_D = 100 - p$. Der Preis sinkt von 60 auf 50. Berechnen Sie die Konsumentenrente vorher und nachher und zerlegen Sie den Anstieg in die zwei Bestandteile der Folien.
b) Analog für die Produzentenrente bei $Q_S = p - 20$ und einem Preisanstieg von 60 auf 70.
c) Erklären Sie den Unterschied zwischen objektiver und subjektiver Wohlfahrt mit je einem Indikator. Nennen Sie eine Schwäche des BIP.`,
  hinweis: 'Rechteck für die Bestandskäufer, Dreieck für die neuen Käufer.',
  ansatz: String.raw`a) $Q_1 = 40$, $Q_2 = 50$. Rechteck $40 \cdot 10$, Dreieck $\tfrac12 \cdot 10 \cdot 10$.`,
  loesung: String.raw`**a)** Vorher: $Q_1 = 40$, $KR_1 = \tfrac12 \cdot 40 \cdot 40 = 800$. Nachher: $Q_2 = 50$, $KR_2 = \tfrac12 \cdot 50 \cdot 50 = 1250$. Anstieg 450. Zerlegung: Die 40 bisherigen Käufer zahlen je 10 weniger – Rechteck $40 \cdot 10 = 400$. Zehn neue Käufer mit Zahlungsbereitschaft zwischen 50 und 60 treten ein – Dreieck $\tfrac12 \cdot 10 \cdot 10 = 50$. Summe $450$ ✓.

**b)** Vorher: $Q_1 = 40$, $PR_1 = \tfrac12 \cdot 40 \cdot 40 = 800$. Nachher: $Q_2 = 50$, $PR_2 = \tfrac12 \cdot 50 \cdot 50 = 1250$. Anstieg 450: Die 40 bisherigen Anbieter erhalten je 10 mehr – Rechteck 400. Zehn neue Anbieter mit Kosten zwischen 60 und 70 treten ein – Dreieck 50.

**c)** **Objektive Wohlfahrt** misst Lebensqualität anhand beobachtbarer Größen: BIP (Wirtschaftsleistung), Bildungsstand, Lebenserwartung, Human Development Index. **Subjektive Wohlfahrt** misst, wie zufrieden Menschen selbst sind: Glücksatlas (Lebenszufriedenheit auf einer Skala 0 bis 10). Schwäche des BIP: Es erfasst nur über Marktpreise messbare Güter und Dienstleistungen – unbezahlte Hausarbeit, Umweltschäden oder die Verteilung des Einkommens bleiben unsichtbar.

*Klausurpunkte:* 3 für a), 2 für b), 3 für c). Typischer Verlust: Zerlegung vergessen und nur die Differenz der Dreiecke angegeben.`
}
);
