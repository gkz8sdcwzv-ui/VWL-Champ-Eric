window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t1 = [
  "Ich kann das Grundproblem der VWL (Knappheit) und das Allokationsproblem mit den drei Grundfragen erklären.",
  "Ich kann Bedürfnis, Bedarf und Nachfrage unterscheiden.",
  "Ich kann die Annahmen des Homo Oeconomicus nennen und zwei Befunde der Verhaltensökonomik dagegenhalten.",
  "Ich kann Opportunitätskosten definieren und in einem Beispiel korrekt berechnen (nur zusätzliche Kosten, versunkene Kosten raus).",
  "Ich kann das Marginalprinzip (Grenznutzen = Grenzkosten) anwenden.",
  "Ich kann den Wirtschaftskreislauf mit Haushalten, Unternehmen, Staat und Banken sowie Güter- und Faktormarkt skizzieren.",
  "Ich kann Mikro- und Makroökonomie, Markt- und Planwirtschaft unterscheiden und die „unsichtbare Hand“ erklären.",
  "Ich kann die vier Marktformen mit Merkmalen und Beispielen nennen und die drei Gründe für Marktversagen.",
  "Ich kann positive von normativen Aussagen unterscheiden und die Ceteris-paribus-Annahme erklären."
];

VWL.skripte.t1 = String.raw`
## 1. Worum es geht

Thema 1 liefert das Vokabular für alles Weitere. In der Klausur kommt es als kurze Verständnisfragen oder als Einordnung am Anfang einer größeren Aufgabe vor („Welche Marktform liegt vor?“, „Nennen Sie die Opportunitätskosten“). Rechnen muss man hier fast nichts – aber die Begriffe müssen präzise sitzen. Die Begriffsliste der Dozentin steht in Abschnitt 6.

---

## 2. Knappheit und Entscheidungen

### 2.1 Das Grundproblem

Begrenzte Ressourcen (Boden, Arbeit, Kapital) treffen auf unbegrenzte Bedürfnisse (Folie 3). VWL ist die Wissenschaft von der Verwendung **knapper** Ressourcen. Daraus folgt das **Allokationsproblem** mit drei Grundfragen: *Was* wird produziert, *wie viel*, und *wer* bekommt es? Ziel: die Wohlfahrt der Gesellschaft maximieren.

Drei Stufen, die oft verwechselt werden (Folie 4):

| Stufe | Bedeutung | Beispiel |
|---|---|---|
| **Bedürfnis** | Wunsch | Marie hätte gern ein neues Auto |
| **Bedarf** | Bedürfnis plus Kaufkraft | Marie hat das Geld dafür |
| **Nachfrage** | Bedarf wird am Markt wirksam | Marie geht zum Händler |

### 2.2 Homo Oeconomicus

Das Standardmodell des Menschen in der Mikroökonomik (Folie 7): **rational**, **vollständig informiert**, **Nutzenmaximierer**, **egoistisch** (nur der eigene Nutzen zählt), mit **festen Präferenzen** (vollständig, reflexiv, transitiv – siehe Thema 3 – und zeitlich stabil). Kritik: unrealistisch. Die **Verhaltensökonomik** zeigt systematische Abweichungen (Folie 8): Overconfidence (die meisten halten sich für überdurchschnittliche Autofahrer), hyperbolische Diskontierung (Gegenwart wird überbewertet), Framing (die Formulierung beeinflusst die Entscheidung), Verlustaversion (ein Verlust von 50 Euro schmerzt mehr, als ein Gewinn von 50 Euro freut), Sunk-Cost-Fallacy (versunkene Kosten werden fälschlich berücksichtigt – die schon bezahlte Kinokarte).

<div class="box merke"><strong>Klausurformulierung</strong>
Rationalität ist eine <em>analytisch nützliche Annahme</em>, die Vorhersagen ermöglicht; die Verhaltensökonomik ergänzt das Standardmodell, ersetzt es aber nicht. Mit diesem einen Satz ist die typische Verständnisfrage beantwortet.</div>

### 2.3 Drei Prinzipien individueller Entscheidung

Knappheit zwingt zu **Trade-offs**: Wer eine Option wählt, verzichtet auf die Vorteile der anderen (Folie 9).

**1. Menschen betrachten Opportunitätskosten** (Folie 10). Die Opportunitätskosten einer Entscheidung sind der Wert der **nächstbesten aufgegebenen Alternative**. Zu den ökonomischen Kosten eines Studiums zählen Studiengebühren und das entgangene Gehalt – aber nicht die Lebenshaltungskosten, die auch ohne Studium anfielen. Regel: Nur Kosten, die durch die Entscheidung *zusätzlich* entstehen.

**2. Menschen reagieren auf Anreize** (Folie 11). Ändern sich Kosten oder Nutzen, ändert sich das Verhalten. Vorsicht vor unbeabsichtigten Folgen: In der Kita-Studie in Israel führte eine Strafgebühr für zu spätes Abholen dazu, dass *mehr* Eltern zu spät kamen – die Gebühr wurde als Preis für eine Dienstleistung verstanden, das schlechte Gewissen fiel weg.

**3. Menschen denken in Grenzbegriffen** (Folie 12). Entscheidungen sind selten „alles oder nichts“, sondern „eine Einheit mehr oder nicht?“. Verglichen werden **Grenznutzen** (was bringt die nächste Einheit?) und **Grenzkosten** (was kostet sie?):

$$\text{Grenznutzen} > \text{Grenzkosten} \Rightarrow \text{noch eine Einheit}; \qquad \text{Grenznutzen} = \text{Grenzkosten} \Rightarrow \text{Optimum}$$

Dieses **Marginalprinzip** taucht in jedem späteren Thema wieder auf: $MU_1/p_1 = MU_2/p_2$ (Thema 3), $p \cdot MP_1 = w_1$ und $p = MC$ (Thema 4), $MR = MC$ (Thema 7).

<div class="box beispiel"><strong>Beispiel</strong>
Noch eine Stunde VWL lernen? Grenznutzen: bessere Klausur, weniger Stress. Grenzkosten: verlorene Freizeit, Müdigkeit. Solange der Grenznutzen überwiegt, weiterlernen. Die ersten Stunden bringen viel (hoher Grenznutzen), die zehnte am Stück wenig – abnehmender Grenznutzen, der Grenzkostenvergleich kippt irgendwann.</div>

---

## 3. Interaktion auf Märkten

### 3.1 Wirtschaftskreislauf

Individuen interagieren auf Märkten; jedem Euro, den einer ausgibt, steht ein Euro gegenüber, den ein anderer erhält (Folie 13). Akteure: **Haushalte, Unternehmen, Staat, Banken** (Folie 14). Zwei gegenläufige Ströme: der **Güterstrom** (Konsumgüter von Unternehmen zu Haushalten; Arbeit und Kapital von Haushalten zu Unternehmen) und der **Geldstrom** (Kaufpreise; Löhne, Zinsen, Dividenden). Der Staat zahlt Löhne, Sozialleistungen und Subventionen und vergibt Aufträge; Banken vergeben Kredite gegen Zins und nehmen Geldanlagen an.

Zwei Markttypen (Folie 15):

- **Gütermarkt**: Haushalte fragen nach, Unternehmen bieten an. Haushaltstheorie (Thema 3) erklärt die Nachfrage, Unternehmenstheorie (Thema 4) das Angebot.
- **Faktormarkt**: Produktionsfaktoren Arbeit, Kapital, Boden. Hier sind **Unternehmen die Nachfrager**, Haushalte (Arbeit) und Banken (Kapital) die Anbieter. Preise: Lohn, Zins. Thema 5 (Arbeitsmarkt) ist ein Faktormarkt.

Die Mikroökonomik betrachtet jeden Markt **separat** (Partialanalyse).

### 3.2 Mikro vs. Makro, Markt vs. Plan

**Mikroökonomie** untersucht Haushalte, Unternehmen und einzelne Märkte: Wie entscheiden Individuen, wie interagieren sie? **Makroökonomie** untersucht gesamtwirtschaftliche Größen: Wachstum, Inflation, Arbeitslosigkeit (Folie 16).

**Marktwirtschaft**: dezentrale Entscheidungen vieler Haushalte und Unternehmen, koordiniert über Märkte und Preise. **Planwirtschaft**: ein staatlicher Zentralplaner entscheidet über die Allokation, mit dem Ziel gleichmäßigerer Ergebnisse (Folie 17).

Die **unsichtbare Hand** (Adam Smith, 1776, Folie 18): Menschen handeln aus Eigeninteresse, nicht aus Wohlwollen („nicht vom Wohlwollen des Metzgers erwarten wir unsere Mahlzeit“). Der Markt lenkt dieses Eigeninteresse über Preise zu einem gesellschaftlich wünschenswerten Ergebnis – ohne zentrale Steuerung. Thema 6 zeigt formal, warum (Pareto-Effizienz des Wettbewerbsgleichgewichts).

### 3.3 Marktformen

Marktformen beschreiben die Struktur eines einzelnen Marktes (Folie 19):

| Marktform | Anbieter | Nachfrager | Gut | Marktzutritt | Beispiel |
|---|---|---|---|---|---|
| **Polypol** (vollkommene Konkurrenz) | viele | viele | homogen | frei | Benzin |
| **Oligopol** | wenige | viele | homogen oder heterogen | frei | Schokolade |
| **Monopol** | einer | viele | homogen | nicht frei | Deutsche Bahn |
| **Monopolistische Konkurrenz** | viele | viele | differenziert | frei | Clubs in einer Stadt |

Im Polypol sind alle Akteure **Preisnehmer** – die Grundannahme in Thema 2 bis 6. Marktmacht (Monopol) ist Thema 7.1.

### 3.4 Marktversagen

**Marktversagen**: Ein sich selbst überlassener Markt teilt die Ressourcen nicht effizient zu (Folie 20). Drei Gründe:

1. **Marktmacht** – ein oder wenige Unternehmen können den Preis beeinflussen (Monopol).
2. **Externe Effekte** – Transaktionen betreffen unbeteiligte Dritte (Lärm, Abgase).
3. **Öffentliche Güter** – nicht ausschließbar und keine Rivalität im Konsum (Deich, Straßenbeleuchtung).

Antwort: staatliche Eingriffe – Wettbewerbssicherung, Steuern zur Korrektur, Bereitstellung öffentlicher Güter (Thema 7 und 8).

---

## 4. Methodik

### 4.1 Positiv vs. normativ

**Positive Aussagen** beschreiben, wie es ist; sie sind empirisch überprüfbar („Eine Erhöhung des Mindestlohns führt zu mehr Arbeitslosigkeit“). **Normative Aussagen** bewerten, wie es sein sollte; sie sind Werturteile und nicht überprüfbar („Der Mindestlohn sollte erhöht werden“) (Folie 21). Erkennungsmerkmal: „sollte“, „muss“, „gerecht“ deutet auf normativ hin. Die Trennung sichert wissenschaftliche Objektivität.

### 4.2 Modelle und ceteris paribus

Modelle sind vereinfachte Darstellungen der Wirklichkeit; die Kunst ist, Irrelevantes wegzulassen (Folie 22). Die häufigste Vereinfachung ist die **Ceteris-paribus-Annahme**: Eine Variable ändert sich, alle anderen bleiben gleich. Nur so lässt sich Ursache und Wirkung trennen (Folie 23): Um den Effekt des Eispreises auf Antons Nachfrage zu sehen, müssen Einkommen, Temperatur und andere Preise konstant bleiben – und Eis muss Eis bleiben. Je länger der Modellzeitraum, desto ungenauer (unvorhergesehene Schocks).

Werkzeuge (Folien 22–25): Theorien und Modelle, grafische und mathematische Darstellungen (Variablen, Funktionen – z. B. die Budgetgerade $p_1x_1 + p_2x_2 = m$), empirische Experimente. Beispiel **Ultimatumspiel**: Spieler 1 teilt eine Geldsumme auf, Spieler 2 kann annehmen oder ablehnen (dann gehen beide leer aus). Der Homo Oeconomicus würde minimal anbieten und alles annehmen. Tatsächlich werden 40–50 % angeboten, Angebote unter 30 % meist abgelehnt – Fairness zählt.

### 4.3 Deduktion und Induktion

**Deduktiv** (theoretisch): von bekannten Fakten oder Annahmen zur Hypothese. **Induktiv** (empirisch): von Daten und Beobachtungen zu Mustern, daraus eine Hypothese, dann Verallgemeinerung (Folie 26).

---

## 5. Zeitliche Betrachtung und Analyseebene

Die Folien ordnen jedes Thema in ein Raster ein (Folie 6): **Analyseebene** Individuum (Haushalt, Unternehmung) → Markt → Staat; **zeitliche Betrachtung** kurze Frist → lange Frist. Thema 3 und 4 sitzen auf der Ebene des Individuums, Thema 2 und 6 auf der Marktebene, Thema 7 und 8 beim Staat. „Kurze Frist“ heißt in der Unternehmenstheorie: mindestens ein Faktor ist fix.

---

## 6. Klausur-Check Thema 1

**Typische Fragen** (je 1–3 Punkte): Grundproblem der VWL in einem Satz; Bedürfnis/Bedarf/Nachfrage unterscheiden; Opportunitätskosten eines Beispiels berechnen (Falle: versunkene oder ohnehin anfallende Kosten); Marginalprinzip anwenden (Tabelle mit Grenznutzen und Grenzkosten); Marktform eines Beispiels bestimmen und begründen; drei Gründe für Marktversagen; Aussagen als positiv oder normativ einordnen; ceteris paribus erklären.

**Begriffsliste der Dozentin** (Folie 30): Grundproblem der VWL (knappe Ressourcen vs. unendliche Bedürfnisse), Allokationsproblem, Homo Oeconomicus, Opportunitätskosten, Grenznutzen und Grenzkosten, Wirtschaftskreislauf, Wirtschaftssysteme (Markt-, Planwirtschaft), Marktformen (Polypol, Oligopol, Monopol, monopolistische Konkurrenz), Marktversagen (externe Effekte, öffentliche Güter, Marktmacht), Ceteris-paribus-Annahme, positive vs. normative Analyse.

<p class="folie">Quellen: Vorlesungsfolien Thema 1 (Schehl, WS 2025/26); Mankiw/Taylor, Grundzüge der VWL, Kap. 1–2. Text eigenständig formuliert.</p>
`;
