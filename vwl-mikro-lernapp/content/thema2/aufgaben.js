window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'm1', thema: 't2', titel: 'Nachfragetreppe und Gleichgewicht bei fixem Angebot', schwierigkeit: 1, punkte: 8, zeit: 10,
  aufgabe: String.raw`In einer Kleinstadt gibt es acht Interessenten für Wohnungen nahe der Hochschule. Ihre Vorbehaltspreise (in € je Monat): 500, 480, 455, 430, 400, 380, 350, 300. Kurzfristig stehen 5 Wohnungen zur Verfügung.

a) Zeichnen Sie die Nachfragekurve (Treppe) und die Angebotskurve in ein Preis-Mengen-Diagramm.
b) In welchem Bereich liegt der Gleichgewichtspreis? Begründen Sie mit Überschussnachfrage und -angebot.
c) Wer bekommt eine Wohnung, und wer zahlt weniger als seinen Vorbehaltspreis?
d) Ein Neubau erhöht das Angebot auf 7 Wohnungen. Wie ändert sich der Gleichgewichtspreis?`,
  hinweis: 'Bei Preis $p$ fragen alle nach, deren Vorbehaltspreis $\\ge p$ ist. Zähle für verschiedene Preise.',
  ansatz: String.raw`Bei $p = 400$: 5 Nachfrager (500 bis 400). Bei $p = 380$: 6. Gleichgewicht, wo genau 5 nachfragen.`,
  loesung: String.raw`**a)** Horizontal Menge, vertikal Preis. Treppe: bei $p \in (480, 500]$ ein Nachfrager, $(455, 480]$ zwei, $(430, 455]$ drei, $(400, 430]$ vier, $(380, 400]$ fünf, $(350, 380]$ sechs, $(300, 350]$ sieben, $\le 300$ acht. Angebot: senkrechte Linie bei Menge 5.

**b)** Genau 5 Nachfrager gibt es für $380 < p \le 400$. Bei $p = 410$: nur 4 wollen mieten, eine Wohnung bleibt leer – Überschussangebot, der Vermieter senkt. Bei $p = 370$: 6 Interessenten für 5 Wohnungen – Überschussnachfrage, Vermieter erhöhen. Gleichgewichtspreis: $p^* \in (380, 400]$; mit vielen Nachfragern wäre das ein eindeutiger Punkt.

**c)** Die fünf mit Vorbehaltspreis 500, 480, 455, 430, 400. Bei $p^* = 400$ zahlen die ersten vier weniger als ihre Zahlungsbereitschaft (Vorteil 100, 80, 55, 30), der fünfte zahlt genau seinen Vorbehaltspreis. Die drei mit 380, 350, 300 ziehen in den äußeren Ring.

**d)** Angebot bei 7: Genau 7 Nachfrager für $300 < p \le 350$. Der Preis fällt in den Bereich $(300, 350]$, die Menge steigt auf 7. Angebotskurve nach rechts, Bewegung entlang der Nachfragetreppe nach unten.

*Klausurpunkte:* 2 für die Grafik, 3 für b) mit Begründung, 2 für c), 1 für d). Typischer Verlust: Preisbereich nicht als Intervall, sondern ein Wert ohne Begründung; Achsen vertauscht.`
},
{
  id: 'm2', thema: 't2', titel: 'Gleichgewicht mit linearen Kurven berechnen', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Auf dem Markt für Studentenwohnungen gelten langfristig $Q_D = 120 - 2p$ und $Q_S = 3p - 30$ (Preis in 10 €, Menge in Wohnungen).

a) Berechnen Sie Gleichgewichtspreis und -menge und zeichnen Sie beide Kurven mit Achsenabschnitten.
b) Der Preis liegt bei $p = 40$. Berechnen Sie Überschussangebot oder -nachfrage und erklären Sie die Anpassung.
c) Durch höhere Einkommen steigt die Nachfrage auf $Q_D = 150 - 2p$. Neues Gleichgewicht? Vergleichen Sie mit a).
d) Was wäre kurzfristig bei fixem Angebot $Q_S = 100$ der Gleichgewichtspreis (ursprüngliche Nachfrage)?`,
  hinweis: 'Gleichsetzen, nach $p$ auflösen, in eine Gleichung einsetzen. Achsenabschnitte: $Q_D = 0$ bei $p = 60$; $Q_S = 0$ bei $p = 10$.',
  ansatz: String.raw`$120 - 2p = 3p - 30$.`,
  loesung: String.raw`**a)** $120 - 2p = 3p - 30 \Rightarrow 150 = 5p \Rightarrow p^* = 30$. $Q^* = 120 - 60 = 60$ (Probe: $3 \cdot 30 - 30 = 60$ ✓).
Grafik: horizontal $Q$, vertikal $p$. Nachfrage von $(0 \mid 60)$ nach $(120 \mid 0)$ fallend. Angebot startet bei $(0 \mid 10)$ und steigt mit Steigung $1/3$ (in $p$ je $Q$). Schnittpunkt $(60 \mid 30)$.

**b)** $Q_D = 120 - 80 = 40$, $Q_S = 120 - 30 = 90$. Überschussangebot $90 - 40 = 50$: Vermieter finden keine Mieter, senken den Preis; dabei steigt $Q_D$ und sinkt $Q_S$, bis bei $p = 30$ beide gleich sind.

**c)** $150 - 2p = 3p - 30 \Rightarrow 180 = 5p \Rightarrow p^* = 36$, $Q^* = 150 - 72 = 78$. Nachfragekurve parallel nach rechts (um 30 Einheiten); Preis steigt von 30 auf 36, Menge von 60 auf 78. Beides steigt, weil das Angebot langfristig auf den Preis reagiert.

**d)** $120 - 2p = 100 \Rightarrow p^* = 10$. Vertikales Angebot bei 100: Die Nachfrage allein bestimmt den Preis. (Mit der höheren Nachfrage aus c): $150 - 2p = 100 \Rightarrow p^* = 25$ – bei fixem Angebot schlägt eine Nachfrageerhöhung voll auf den Preis durch.)

*Klausurpunkte:* 3 für a) mit Grafik, 2 für b), 2 für c), 1 für d). Typischer Verlust: Überschuss mit falschem Vorzeichen (bei $p > p^*$ ist es Überschuss*angebot*).`
},
{
  id: 'm3', thema: 't2', titel: 'Komparative Statik: Verschiebung oder Bewegung?', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Der Wohnungsmarkt nahe der Uni ist kurzfristig im Gleichgewicht (100 Wohnungen, Preis $p^*$). Analysieren Sie für jedes Ereignis: Welche Kurve verschiebt sich (oder keine)? Was passiert mit Gleichgewichtspreis und -menge? Skizzieren Sie jeweils.

a) Die Uni eröffnet einen zweiten Campus am Stadtrand; viele Studierende wollen nun lieber dort wohnen.
b) Die Stadt erhebt von den Vermietern eine Zweitwohnungssteuer von 60 € je Wohnung.
c) Ein Investor stellt 50 neue Wohnungen in Uninähe fertig.
d) Der Mietpreis im äußeren Ring ($p_{weit}$) steigt deutlich.`,
  hinweis: 'Exogene Änderung → Verschiebung. Angebot ist kurzfristig vertikal. Was ändert sich an Zahlungsbereitschaft oder Wohnungszahl?',
  ansatz: String.raw`a) Präferenzen → Nachfrage. b) Steuer bei fixem Angebot → nichts verschiebt sich. c) Angebot. d) Preis eines Substituts → Nachfrage.`,
  loesung: String.raw`**a)** Präferenzen ändern sich (exogen): **Nachfragekurve nach links**. Angebot vertikal bei 100. Neuer Schnittpunkt tiefer: Preis sinkt, Menge bleibt 100. Zeichnung: alte und neue Nachfragekurve, Angebotsgerade, $p_{alt}^* > p_{neu}^*$.

**b)** Die Steuer ändert weder die Zahlungsbereitschaft der Mieter noch die Zahl der Wohnungen: **keine Kurve verschiebt sich**. Marktpreis und Menge unverändert. Die Vermieter erhalten netto $p^* - 60$ und tragen die Steuer vollständig – weil das Angebot kurzfristig vollkommen unelastisch ist. Zeichnung: unverändertes Diagramm, Nettoerlös der Vermieter als Linie 60 unter $p^*$.

**c)** Zahl der Wohnungen (exogen) steigt: **Angebotskurve nach rechts** auf 150. Preis sinkt, Menge steigt auf 150. Bewegung entlang der Nachfragekurve nach unten rechts.

**d)** $p_{weit}$ ist der Preis eines **Substituts** (exogen). Steigt er, werden nahe Wohnungen relativ attraktiver: **Nachfragekurve nach rechts**. Preis für nahe Wohnungen steigt, Menge bleibt 100.

*Klausurpunkte:* je 2 pro Teil (Kurve, Richtung, Preis/Menge, Skizze). Typischer Verlust: bei b) „Preis steigt um 60“ (Überwälzung) – bei fixem Angebot falsch; bei d) Verwechslung von Substitut (Nachfrage rechts) und Komplement.`
},
{
  id: 'm4', thema: 't2', titel: 'Vier Allokationsmechanismen vergleichen', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Nehmen Sie die Daten aus M1 (Vorbehaltspreise 500, 480, 455, 430, 400, 380, 350, 300; fünf Wohnungen) und $p^* = 400$.

a) Welchen Gesamterlös erzielen die Vermieter im Wettbewerb?
b) Ein einziger Eigentümer versteigert jede Wohnung einzeln (diskriminierender Monopolist). Wer bekommt eine Wohnung, was zahlt jeder, wie hoch ist der Erlös?
c) Der Eigentümer verlangt stattdessen einen einheitlichen Preis und darf Wohnungen leer lassen (gewöhnlicher Monopolist). Berechnen Sie den Erlös für die Preise 400, 430, 455, 480 und bestimmen Sie den erlösmaximalen Preis. Wie viele Wohnungen stehen leer?
d) Fassen Sie Menge, Preis und Verteilung der vier Mechanismen (inkl. Mietenkontrolle mit $p_{max} = 350$ und Losverfahren) in einer Tabelle zusammen.`,
  hinweis: 'Beim gewöhnlichen Monopolisten: Erlös = Preis × Anzahl der Mieter mit Vorbehaltspreis ≥ Preis.',
  ansatz: String.raw`c) Bei $p = 430$: 4 Mieter, Erlös $4 \cdot 430 = 1720$. Vergleichen.`,
  loesung: String.raw`**a)** $5 \cdot 400 = 2000$.

**b)** Dieselben fünf wie im Wettbewerb (Vorbehaltspreise 500, 480, 455, 430, 400), jeder zahlt genau seinen Vorbehaltspreis. Erlös $500 + 480 + 455 + 430 + 400 = 2265$. Gleiche Verteilung, aber $265$ mehr Erlös – der Monopolist schöpft die gesamte Zahlungsbereitschaft ab.

**c)** $p = 400$: 5 Mieter, Erlös 2000. $p = 430$: 4 Mieter, $1720$. $p = 455$: 3 Mieter, $1365$. $p = 480$: 2 Mieter, $960$. Erlösmaximal ist hier $p = 400$ mit 5 Wohnungen – bei diesen Zahlen lohnt sich Verknappung nicht, weil die Vorbehaltspreise nah beieinander liegen. (Variante: Wären die Vorbehaltspreise 500, 480, 455, 200, 100, würde der Monopolist nur 3 Wohnungen zu 455 vermieten, Erlös 1365 statt $5 \cdot 100 = 500$, und 2 Wohnungen stünden leer.) Der Mechanismus ist: Preis erhöhen, solange der Erlösgewinn an den verbleibenden Mietern den Verlust der abspringenden übersteigt.

**d)**

| Mechanismus | Menge | Preis | Wer bekommt die Wohnungen? |
|---|---|---|---|
| Wettbewerb | 5 | 400 einheitlich | die fünf mit höchster Zahlungsbereitschaft |
| Diskriminierender Monopolist | 5 | individuell 500 … 400 | dieselben fünf |
| Gewöhnlicher Monopolist | hier 5 (sonst weniger) | ≥ 400 | bei Verknappung: weniger Personen, Leerstand |
| Mietenkontrolle $p_{max} = 350$ | 5 | 350 | 5 von 7 Interessenten per Los – nicht nach Zahlungsbereitschaft |

*Klausurpunkte:* 1 für a), 3 für b), 3 für c), 3 für die Tabelle. Typischer Verlust: beim diskriminierenden Monopolisten Verknappung unterstellt (er vermietet alle, weil jeder seinen eigenen Preis zahlt).`
},
{
  id: 'm5', thema: 't2', titel: 'Pareto-Effizienz prüfen', schwierigkeit: 3, punkte: 10, zeit: 12,
  aufgabe: String.raw`a) Definieren Sie Pareto-Verbesserung und Pareto-Effizienz.
b) Bei einer Mietenkontrolle ($p_{max} = 350$) werden die fünf Wohnungen aus M1 verlost. Lea (Vorbehaltspreis 300) gewinnt eine Wohnung, Jonas (Vorbehaltspreis 480) geht leer aus. Zeigen Sie, dass die Allokation nicht Pareto-effizient ist, und geben Sie einen Preisbereich für eine Untervermietung an, bei dem beide gewinnen.
c) Begründen Sie in je zwei Sätzen, warum das Wettbewerbsgleichgewicht und das diskriminierende Monopol Pareto-effizient sind, das gewöhnliche Monopol mit Leerstand aber nicht.
d) Ein Kommilitone sagt: „Das diskriminierende Monopol kann nicht effizient sein, der Vermieter kassiert ja alles.“ Nehmen Sie Stellung.`,
  hinweis: 'Effizienzprüfung: Gibt es einen Tausch, der jemanden besser stellt, ohne jemanden schlechter zu stellen? Verteilung ist kein Effizienzkriterium.',
  ansatz: String.raw`b) Untervermietung zu einem Preis zwischen Leas Wert (300) und Jonas’ Wert (480).`,
  loesung: String.raw`**a)** **Pareto-Verbesserung**: eine Änderung, die mindestens eine Person besser stellt und niemanden schlechter. **Pareto-Effizienz**: eine Allokation, in der keine Pareto-Verbesserung mehr möglich ist – alle Tauschgeschäfte zu beiderseitigem Vorteil sind ausgeschöpft.

**b)** Lea bewertet die Wohnung mit 300, Jonas mit 480. Lea vermietet an Jonas zu einem Preis $q$ mit $300 < q < 480$, z. B. 400: Lea erhält 400 für etwas, das ihr 300 wert ist ($+100$); Jonas zahlt 400 für etwas, das ihm 480 wert ist ($+80$). Niemand sonst ist betroffen. Da eine Pareto-Verbesserung existiert, war die Los-Allokation **nicht Pareto-effizient**. Zulässiger Preisbereich: jedes $q$ zwischen 300 und 480 (bei 300 oder 480 ist einer indifferent).

**c)** *Wettbewerb*: Alle, die eine Wohnung haben, bewerten sie mit mindestens $p^*$; alle ohne Wohnung mit weniger. Niemand ohne Wohnung würde einem Mieter mehr bieten, als diesem die Wohnung wert ist – kein Tausch möglich, effizient. *Diskriminierendes Monopol*: Die Wohnungen gehen an genau dieselben Personen wie im Wettbewerb, nur die Preise sind individuell. Gleiche Verteilung der Wohnungen, kein Leerstand – effizient. *Gewöhnliches Monopol mit Leerstand*: Eine leere Wohnung könnte zu irgendeinem positiven Preis an einen Interessenten vermietet werden; der Monopolist gewinnt, der neue Mieter gewinnt, kein bisheriger Mieter verliert. Pareto-Verbesserung möglich – ineffizient.

**d)** Der Einwand verwechselt **Effizienz mit Gerechtigkeit**. Pareto-Effizienz fragt nur, ob Wohlfahrt verschwendet wird, nicht, wer sie bekommt. Im diskriminierenden Monopol wird keine Wohnung verschwendet und kein Tausch ist mehr möglich – es ist effizient, obwohl die gesamte Rente beim Vermieter liegt. Ob diese Verteilung wünschenswert ist, ist eine normative Frage, die ein zusätzliches Kriterium braucht.

*Klausurpunkte:* 2 für a), 3 für b), 3 für c), 2 für d). Typischer Verlust: Effizienz mit „niedrigem Preis“ oder „Gerechtigkeit“ begründet; bei b) keinen konkreten Preis angegeben.`
}
);
