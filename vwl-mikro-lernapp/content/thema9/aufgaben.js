window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 's1', thema: 't9', titel: 'Gefangenendilemma lösen', schwierigkeit: 1, punkte: 7, zeit: 8,
  aufgabe: String.raw`Zwei Verdächtige A und B werden getrennt verhört.

| A \ B | schweigen | gestehen |
|---|---|---|
| **schweigen** | (−1, −1) | (−5, 0) |
| **gestehen** | (0, −5) | (−3, −3) |

a) Nennen Sie Spieler, Strategien und Auszahlungen. Wem gehört die erste Zahl?
b) Bestimmen Sie für jeden Spieler die beste Antwort auf jede Strategie des anderen. Gibt es dominante Strategien?
c) Bestimmen Sie das Nash-Gleichgewicht und begründen Sie, warum keiner abweichen will.
d) Ist das Gleichgewicht Pareto-effizient? Erklären Sie das Dilemma.`,
  hinweis: 'Vier Fragen stellen: Wenn A schweigt, was tut B? Wenn A gesteht? Wenn B schweigt, was tut A? Wenn B gesteht?',
  ansatz: String.raw`Für B bei A = schweigen: $-1$ vs. $0$. Für B bei A = gestehen: $-5$ vs. $-3$.`,
  loesung: String.raw`**a)** Spieler: A (Zeilen) und B (Spalten). Strategien: schweigen, gestehen. Auszahlungen: die Zahlenpaare, erste Zahl für den Zeilenspieler A, zweite für B (negative Zahlen = Haftjahre).

**b)** Wenn A schweigt: B erhält $-1$ (schweigen) oder $0$ (gestehen) → gestehen. Wenn A gesteht: B erhält $-5$ oder $-3$ → gestehen. Wenn B schweigt: A erhält $-1$ oder $0$ → gestehen. Wenn B gesteht: A erhält $-5$ oder $-3$ → gestehen. **Gestehen ist für beide dominant**, schweigen ist dominiert.

**c)** Nash-Gleichgewicht: **(gestehen, gestehen)** mit $(-3, -3)$. Gegeben, dass B gesteht, würde A durch Schweigen von $-3$ auf $-5$ fallen; dasselbe gilt für B. Niemand kann sich durch einseitiges Abweichen verbessern.

**d)** Nein. (schweigen, schweigen) mit $(-1, -1)$ stellt beide besser – eine Pareto-Verbesserung existiert, also ist das Gleichgewicht nicht Pareto-effizient. Das Dilemma: Jeder handelt individuell rational (dominante Strategie), und gerade deshalb landen beide in einem schlechten Ergebnis. Kooperation scheitert, weil jeder den Anreiz hat, abzuweichen, und das weiß. Gleiche Struktur im Public-Goods-Game und bei Preiskämpfen.

*Klausurpunkte:* 1 für a), 2 für b), 2 für c), 2 für d). Typischer Verlust: Gleichgewicht bei der besten Summe gesucht.`
},
{
  id: 's2', thema: 't9', titel: 'Preiskampf zwischen zwei Banken', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Zwei Banken entscheiden gleichzeitig, ob sie ihre Kontoführungsgebühr beibehalten oder senken. Gewinne in Mio. €:

| Bank 1 \ Bank 2 | beibehalten | senken |
|---|---|---|
| **beibehalten** | (10, 10) | (4, 14) |
| **senken** | (14, 4) | (6, 6) |

a) Um welche Spielkategorie handelt es sich? Bestimmen Sie dominante Strategien und das Nash-Gleichgewicht.
b) Vergleichen Sie das Gleichgewicht mit (beibehalten, beibehalten). Was hindert die Banken an einer Absprache?
c) Die Banken spielen dieses Spiel jedes Quartal erneut. Was ändert sich qualitativ?
d) Zwei Banken wählen gleichzeitig einen technischen Standard: (X, X) = (4, 4), (Y, Y) = (2, 2), ungleiche Wahl (0, 0). Bestimmen Sie alle Nash-Gleichgewichte. Worin unterscheidet sich dieses Spiel vom Preiskampf?`,
  hinweis: 'Beste Antworten markieren. In d) gibt es keine dominante Strategie.',
  ansatz: String.raw`a) Für Bank 1 bei „beibehalten“ von Bank 2: 10 vs. 14.`,
  loesung: String.raw`**a)** Simultanes Spiel (gleichzeitige Entscheidung ohne Kenntnis des anderen). Bank 1: Wenn Bank 2 beibehält, bringt senken 14 > 10; wenn Bank 2 senkt, bringt senken 6 > 4. **Senken ist dominant**, symmetrisch für Bank 2. Nash-Gleichgewicht **(senken, senken)** mit $(6, 6)$.

**b)** (beibehalten, beibehalten) brächte beiden 10 statt 6 – Pareto-besser. Aber es ist kein Gleichgewicht: Gegeben, dass die andere beibehält, lohnt sich einseitiges Senken (14). Jede Bank weiß, dass die andere diesen Anreiz hat. Eine Absprache ist instabil (und zudem kartellrechtlich verboten). Klassisches Gefangenendilemma.

**c)** Im wiederholten Spiel kann Kooperation entstehen: Wer die Gebühr senkt, muss in den Folgequartalen mit Vergeltung (dauerhaft niedrige Gebühren der anderen) rechnen. Ist der künftige Verlust größer als der einmalige Gewinn von $14 - 10 = 4$, bleibt Beibehalten stabil – stillschweigende Kooperation ohne Absprache. Voraussetzung: unbestimmter Zeithorizont; bei bekanntem letztem Quartal bricht die Kooperation von hinten her zusammen.

**d)** Beste Antwort auf X ist X (4 > 0), auf Y ist Y (2 > 0). Zwei Nash-Gleichgewichte: **(X, X)** und **(Y, Y)**. Keine dominante Strategie. Unterschied zum Preiskampf: Hier gibt es keinen Interessenkonflikt – beide wollen koordinieren, unklar ist nur worauf. (Y, Y) ist ein Gleichgewicht, obwohl (X, X) für beide besser wäre; welches entsteht, hängt von Erwartungen, Kommunikation oder einem Erstzieher ab. Koordinationsspiel statt Dilemma.

*Klausurpunkte:* 3 für a), 2 für b), 2 für c), 3 für d). Typischer Verlust: in d) nur (X, X) genannt.`
},
{
  id: 's3', thema: 't9', titel: 'Sequenzielles Spiel: Rückwärtsinduktion', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`DreamWorks wählt zuerst den Starttermin eines Films (Mai oder Dezember), Disney beobachtet das und wählt dann seinen Termin. Auszahlungen (DreamWorks, Disney):
DreamWorks Mai → Disney Mai: (50, 50); Disney Dezember: (300, 200).
DreamWorks Dezember → Disney Mai: (200, 300); Disney Dezember: (0, 0).

a) Zeichnen Sie den Spielbaum.
b) Lösen Sie das Spiel per Rückwärtsinduktion. Geben Sie die Strategien beider Spieler und das Ergebnis an.
c) Hat der Erstziehende einen Vorteil? Begründen Sie.
d) Disney kündigt vorab an: „Wir starten auf jeden Fall im Mai.“ Ist diese Drohung glaubwürdig?`,
  hinweis: 'Von hinten lösen: Was tut Disney nach Mai, was nach Dezember? Dann wählt DreamWorks.',
  ansatz: String.raw`Disney nach DW-Mai: 50 vs. 200. Disney nach DW-Dez: 300 vs. 0.`,
  loesung: String.raw`**a)** Wurzelknoten DreamWorks mit zwei Ästen „Mai“ und „Dezember“. An jedem Ende ein Disney-Knoten mit Ästen „Mai“ und „Dezember“. Endpunkte: (50, 50), (300, 200) unter DW-Mai; (200, 300), (0, 0) unter DW-Dezember. Erste Zahl DreamWorks.

**b)** Letzter Zug zuerst. Nach DW-Mai vergleicht Disney 50 (Mai) mit 200 (Dezember) → **Dezember**. Nach DW-Dezember vergleicht Disney 300 (Mai) mit 0 (Dezember) → **Mai**. DreamWorks antizipiert: Mai führt zu (300, 200), Dezember zu (200, 300). DreamWorks wählt **Mai**. Strategien: DreamWorks „Mai“; Disney „nach Mai Dezember, nach Dezember Mai“ (Disney weicht immer aus). Ergebnis **(300, 200)**.

**c)** Ja. Beide bevorzugen den Termin, den der andere nicht wählt, und der Mai ist für beide wertvoller (300 gegen 200). Wer zuerst zieht, besetzt den Mai; der Zweite muss ausweichen, weil ein Zusammenstoß (50, 50) oder (0, 0) für ihn noch schlechter wäre. First-mover advantage: 300 statt 200.

**d)** Nein. Wenn DreamWorks dennoch Mai wählt, steht Disney am Knoten vor der Wahl 50 (Mai, Drohung wahr machen) oder 200 (Dezember). Es würde Dezember wählen. DreamWorks weiß das und lässt sich nicht abschrecken. Die Drohung ist **unglaubwürdig**, weil sie am Entscheidungsknoten nicht Disneys beste Antwort ist. Glaubwürdig wäre sie nur mit einer bindenden Selbstverpflichtung (z. B. unkündbare Kinoverträge für Mai).

*Klausurpunkte:* 2 für den Baum, 3 für b), 1 für c), 2 für d). Typischer Verlust: von vorne statt von hinten gelöst („DreamWorks nimmt Dezember, weil 300 das Maximum ist“ – falsche Zuordnung).`
},
{
  id: 's4', thema: 't9', titel: 'Markteintritt: Drohung und Glaubwürdigkeit', schwierigkeit: 3, punkte: 10, zeit: 12,
  aufgabe: String.raw`Eine Neobank überlegt, in den Markt einer etablierten Bank einzutreten. Tritt sie ein, kann die etablierte Bank einen Preiskrieg beginnen oder den Eintritt akzeptieren. Auszahlungen (Neobank, etablierte Bank) in Mio. €:
Nicht eintreten: (0, 100). Eintreten → Preiskrieg: (−10, 20). Eintreten → akzeptieren: (30, 50).

a) Zeichnen Sie den Spielbaum und lösen Sie per Rückwärtsinduktion.
b) Stellen Sie das Spiel als Auszahlungsmatrix dar (Neobank: eintreten/nicht; etablierte Bank: Preiskrieg/akzeptieren) und bestimmen Sie alle Nash-Gleichgewichte der Matrix.
c) Eines der Matrix-Gleichgewichte beruht auf einer unglaubwürdigen Drohung. Welches, und warum verwirft die Rückwärtsinduktion es?
d) Wie könnte die etablierte Bank ihre Drohung glaubwürdig machen?`,
  hinweis: 'In der Matrix steht „Preiskrieg“ für den Plan, bei Eintritt zu kämpfen; wenn die Neobank nicht eintritt, ist die Auszahlung in beiden Spalten (0, 100).',
  ansatz: String.raw`a) Nach Eintritt: etablierte Bank 20 vs. 50.`,
  loesung: String.raw`**a)** Wurzel Neobank: „nicht eintreten“ → (0, 100); „eintreten“ → Knoten etablierte Bank: „Preiskrieg“ → (−10, 20), „akzeptieren“ → (30, 50). Rückwärts: Nach dem Eintritt vergleicht die etablierte Bank 20 mit 50 → **akzeptieren**. Die Neobank antizipiert: eintreten bringt 30 > 0 → **eintreten**. Ergebnis (30, 50).

**b)**

| Neobank \ etablierte Bank | Preiskrieg (bei Eintritt) | akzeptieren (bei Eintritt) |
|---|---|---|
| **eintreten** | (−10, 20) | (30, 50) |
| **nicht eintreten** | (0, 100) | (0, 100) |

Beste Antworten: Auf „Preiskrieg“ ist für die Neobank „nicht eintreten“ besser (0 > −10); auf „akzeptieren“ ist „eintreten“ besser (30 > 0). Für die etablierte Bank: Auf „eintreten“ ist „akzeptieren“ besser (50 > 20); auf „nicht eintreten“ sind beide gleich gut (100 = 100), also beide beste Antworten. Zwei Nash-Gleichgewichte: **(eintreten, akzeptieren)** und **(nicht eintreten, Preiskrieg)**.

**c)** (nicht eintreten, Preiskrieg) beruht auf der Drohung, bei Eintritt zu kämpfen. In der Matrix ist sie „kostenlos“, weil der Knoten nie erreicht wird. Im Spielbaum wird aber geprüft, was die etablierte Bank täte, **wenn** die Neobank eintritt – und da ist Preiskrieg (20) schlechter als Akzeptieren (50). Die Drohung ist **unglaubwürdig**; die Rückwärtsinduktion verwirft dieses Gleichgewicht (es ist nicht teilspielperfekt). Es bleibt (eintreten, akzeptieren).

**d)** Durch **Selbstbindung**, die die Auszahlung bei Akzeptieren senkt oder die bei Preiskrieg erhöht: vorab Überkapazitäten aufbauen, langfristige Niedrigpreisgarantien an Kunden geben, einen Ruf als kompromissloser Kämpfer in anderen Märkten erwerben. Wenn dadurch Preiskrieg am Knoten besser wird als Akzeptieren (z. B. 20 gegen 15), bleibt die Neobank draußen und die Bank behält 100.

*Klausurpunkte:* 3 für a), 3 für b), 2 für c), 2 für d). Typischer Verlust: in b) nur ein Gleichgewicht gefunden, weil die Gleichheit 100 = 100 übersehen wurde.`
}
);
