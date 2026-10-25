window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'e1', thema: 't1', titel: 'Opportunitätskosten eines Studiums', schwierigkeit: 1, punkte: 6, zeit: 8,
  aufgabe: String.raw`Melanie (19) überlegt, ein dreijähriges Bachelorstudium zu beginnen. Alternativ könnte sie sofort als Bankkauffrau arbeiten und 28.000 € brutto im Jahr verdienen. Das Studium kostet 1.500 € Semesterbeitrag pro Jahr und 800 € für Bücher pro Jahr. Ihre Miete (7.200 €/Jahr) und ihr Essen (3.600 €/Jahr) müsste sie in beiden Fällen bezahlen. Vor einem Jahr hat sie bereits 2.000 € für einen Vorbereitungskurs ausgegeben.

a) Berechnen Sie die ökonomischen Kosten des Studiums über drei Jahre.
b) Begründen Sie für jede Position, warum sie zählt oder nicht zählt.
c) Melanie sagt: „Ich muss jetzt studieren, sonst waren die 2.000 € umsonst.“ Welcher Denkfehler steckt dahinter?`,
  hinweis: 'Nur Kosten, die durch die Entscheidung *zusätzlich* entstehen. Was fällt auch ohne Studium an? Was ist schon ausgegeben?',
  ansatz: String.raw`Opportunitätskosten = entgangenes Gehalt. Direkte Kosten = Semesterbeitrag + Bücher. Miete, Essen und Vorbereitungskurs prüfen.`,
  loesung: String.raw`**a)** Pro Jahr: entgangenes Gehalt 28.000 € + Semesterbeitrag 1.500 € + Bücher 800 € = 30.300 €. Über drei Jahre: $3 \cdot 30\,300 = 90\,900$ €.

**b)**
- Entgangenes Gehalt: zählt – das ist die **nächstbeste aufgegebene Alternative** (Opportunitätskosten im engeren Sinn), der größte Posten.
- Semesterbeitrag und Bücher: zählen – entstehen nur durch das Studium.
- Miete und Essen: zählen **nicht** – fallen in beiden Alternativen an, sind also keine Kosten *der Entscheidung*.
- Vorbereitungskurs 2.000 €: zählt **nicht** – bereits ausgegeben, in beiden Alternativen weg (versunkene Kosten).

**c)** **Sunk-Cost-Fallacy**: Die 2.000 € sind unabhängig von der Entscheidung verloren. Ein rationaler Entscheider vergleicht nur zukünftigen Nutzen und zukünftige Kosten. Die Verhaltensökonomik beschreibt dieses Verhalten als systematische Abweichung vom Homo Oeconomicus.

*Klausurpunkte:* 2 für die Rechnung, 3 für die Begründungen, 1 für den Begriff. Typischer Verlust: Miete mitgezählt oder entgangenes Gehalt vergessen.`
},
{
  id: 'e2', thema: 't1', titel: 'Marginalprinzip anwenden', schwierigkeit: 1, punkte: 6, zeit: 8,
  aufgabe: String.raw`Eric überlegt, wie viele Stunden er heute Abend VWL lernt. Jede Stunde kostet ihn Freizeit, die er mit 5 Punkten bewertet (konstante Grenzkosten). Der zusätzliche Nutzen je Stunde (bessere Klausurleistung) sinkt:

| Stunde | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Grenznutzen | 10 | 8 | 6 | 4 | 2 |

a) Wie viele Stunden sollte Eric lernen? Begründen Sie mit dem Marginalprinzip.
b) Wie hoch ist der Gesamtnutzen abzüglich Gesamtkosten im Optimum? Zeigen Sie, dass eine Stunde mehr oder weniger schlechter wäre.
c) Warum entscheidet ein rationaler Mensch nicht „alles oder nichts“?`,
  hinweis: 'Stunde für Stunde fragen: Grenznutzen größer als Grenzkosten 5?',
  ansatz: String.raw`Stunden 1–3: Grenznutzen 10, 8, 6 > 5. Stunde 4: 4 < 5.`,
  loesung: String.raw`**a)** Stunde 1: $10 > 5$ ✓. Stunde 2: $8 > 5$ ✓. Stunde 3: $6 > 5$ ✓. Stunde 4: $4 < 5$ ✗. Eric lernt **3 Stunden**. Jede Stunde wird einzeln geprüft; die vierte bringt weniger, als sie kostet.

**b)** Nettonutzen bei 3 Stunden: $(10 + 8 + 6) - 3 \cdot 5 = 24 - 15 = 9$. Bei 2 Stunden: $18 - 10 = 8$ (die dritte Stunde brachte netto $+1$). Bei 4 Stunden: $28 - 20 = 8$ (die vierte kostet netto $-1$). 3 Stunden sind optimal.

**c)** Weil der Grenznutzen abnimmt: Die ersten Einheiten sind viel wert, spätere wenig. Eine Alles-oder-nichts-Entscheidung übersähe, dass sich die ersten Stunden lohnen und die letzten nicht. Entscheidungen fallen deshalb schrittweise „am Rand“ (marginal). Dasselbe Prinzip steckt in $p = MC$ (Thema 4) und in der Tangentialbedingung (Thema 3).

*Klausurpunkte:* 3 für a) mit Begründung, 2 für b), 1 für c). Typischer Verlust: Gesamtnutzen mit Gesamtkosten vergleichen statt Grenzgrößen.`
},
{
  id: 'e3', thema: 't1', titel: 'Einordnen: Marktformen, Marktversagen, positiv/normativ', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`a) Ordnen Sie den Beispielen die Marktform zu und begründen Sie mit den Merkmalen (Anbieterzahl, Gut, Marktzutritt): (1) Tankstellen in Deutschland, (2) Friseursalons in Mannheim, (3) Schienenpersonenfernverkehr, (4) Mobilfunkanbieter.
b) Nennen Sie für jede Situation den Grund des Marktversagens: (1) Ein Chemiewerk leitet Abwasser in einen Fluss, Fischer flussabwärts verlieren Einkommen. (2) Niemand baut freiwillig einen Hochwasserdeich, obwohl alle Anwohner profitieren würden. (3) Der einzige Wasserversorger einer Region erhöht die Preise deutlich.
c) Positiv oder normativ? (1) „Höhere Zinsen senken die Kreditnachfrage.“ (2) „Banken sollten keine Kontoführungsgebühren verlangen.“ (3) „Die Inflationsrate lag 2024 unter 3 %.“ (4) „Es ist ungerecht, dass Sparer bei niedrigen Zinsen verlieren.“`,
  hinweis: 'Marktformen-Tabelle aus dem Skript. Marktversagen: Marktmacht, externe Effekte, öffentliche Güter. Positiv = prüfbar, normativ = Werturteil.',
  ansatz: String.raw`a) viele/homogen/frei → Polypol; viele/differenziert → monopolistische Konkurrenz; einer → Monopol; wenige → Oligopol.`,
  loesung: String.raw`**a)** (1) Tankstellen: **Polypol** – viele Anbieter, homogenes Gut (Benzin ist Benzin), freier Zutritt. Das Beispiel der Folien. (2) Friseursalons: **monopolistische Konkurrenz** – viele Anbieter, freier Zutritt, aber differenzierte Leistung (Qualität, Stil, Lage). (3) Fernverkehr auf der Schiene: **Monopol** – praktisch ein Anbieter (Deutsche Bahn), kein freier Zutritt wegen Infrastruktur und Regulierung. (4) Mobilfunk: **Oligopol** – wenige Anbieter (drei Netzbetreiber), viele Nachfrager, hohe Zutrittshürden durch Lizenzen und Netze.

**b)** (1) **Externer Effekt** (negativ): Die Fischer sind Dritte, die an der Transaktion des Werks nicht beteiligt sind, aber Kosten tragen. (2) **Öffentliches Gut**: Niemand kann vom Schutz ausgeschlossen werden (Nicht-Ausschließbarkeit), und der Schutz des einen mindert den des anderen nicht (Nicht-Rivalität) – jeder wartet, dass andere zahlen (Trittbrettfahrer). (3) **Marktmacht**: Ein einzelner Anbieter kann den Preis bestimmen.

**c)** (1) **positiv** – empirisch prüfbare Behauptung über einen Zusammenhang. (2) **normativ** – „sollten“, Werturteil. (3) **positiv** – Tatsachenbehauptung, prüfbar (richtig oder falsch, bleibt positiv). (4) **normativ** – „ungerecht“ ist eine Bewertung.

*Klausurpunkte:* 4 für a) mit Begründung, 3 für b), 3 für c). Typischer Verlust: Marktform nur benannt, nicht mit Merkmalen begründet; „positiv“ mit „richtig“ verwechselt.`
}
);
