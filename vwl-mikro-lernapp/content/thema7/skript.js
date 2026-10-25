window.VWL = window.VWL || {};
VWL.skripte = VWL.skripte || {};
VWL.lernziele = VWL.lernziele || {};

VWL.lernziele.t7 = [
  "Ich kann die vier Formen des Marktversagens nennen und vollständige von unvollständiger Konkurrenz abgrenzen.",
  "Ich kann die vier Ursachen von Marktzutrittsbarrieren nennen und das natürliche Monopol über steigende Skalenerträge erklären.",
  "Ich kann Gesamterlös, Durchschnittserlös und Grenzerlös des Monopolisten berechnen und erklären, warum $MR < P$ (Mengen- und Preiseffekt).",
  "Ich kann das Monopoloptimum $MR = MC$ rechnerisch und grafisch bestimmen, den Preis auf der Nachfragekurve ablesen und den Gewinn berechnen.",
  "Ich kann den Wohlfahrtsverlust des Monopols zeichnen und berechnen und Monopol mit vollständiger Konkurrenz vergleichen (Tabelle Folie 24).",
  "Ich kann Preisdifferenzierung, ihre Voraussetzungen und ihre Wohlfahrtswirkung (KR → PR, kein Wohlfahrtsverlust bei perfekter Differenzierung) erklären.",
  "Ich kann positive und negative externe Effekte definieren, grafisch darstellen (private vs. volkswirtschaftliche Kosten/Nutzen) und den Wohlfahrtsverlust zeigen.",
  "Ich kann das Coase-Theorem mit Bedingungen und Grenzen erklären und die Pigou-Steuer in Höhe der externen Kosten herleiten.",
  "Ich kann Güter nach Ausschließbarkeit und Rivalität in die Vier-Felder-Matrix einordnen und das Trittbrettfahrerproblem erklären.",
  "Ich kann das Public-Goods-Game analysieren ($\\partial U_i/\\partial b_i = -(1-\\alpha) < 0$) und die optimale Bereitstellung über vertikale Addition der Nachfragen bestimmen."
];

VWL.skripte.t7 = String.raw`
## 1. Worum es geht

Thema 6 hat gezeigt: Der Wettbewerbsmarkt maximiert die Gesamtrente. Das gilt aber nur unter Bedingungen – vollständiger Wettbewerb, keine Wirkungen auf Dritte, zahlungsbereite Käufer, vollständige Information (Folie 4). Ist eine verletzt, droht **Marktversagen**: Der sich selbst überlassene Markt teilt Ressourcen nicht effizient zu (Folie 5). Vier zentrale Formen:

| Was fehlt | Form des Marktversagens | Abschnitt |
|---|---|---|
| Wettbewerb | **Marktmacht** (Monopol) | 7.1 |
| Unbeteiligte bleiben unberührt | **Externe Effekte** | 7.2 |
| Zahlungsbereitschaft der Käufer | **Öffentliche Güter** | 7.3 |
| Gleiche Information | Informationsasymmetrie | (Teil 2 des Moduls) |

Das Werkzeug ist in allen drei Teilen dasselbe: Nachfrage, Grenzkosten, Renten, Wohlfahrtsverlust-Dreieck aus Thema 6.

---

## 2. Teil 7.1: Unvollständige Konkurrenz und Marktmacht

### 2.1 Begriffe

**Unvollständige Konkurrenz**: Unternehmen heben ihr Produkt von anderen ab (Produktdifferenzierung) und können dadurch den Preis beeinflussen (Folie 9). **Marktmacht**: Ein Unternehmen kann den Preis erhöhen, ohne seinen gesamten Absatz zu verlieren – je größer der Marktanteil, desto größer die Marktmacht.

| vollständige Konkurrenz | unvollständige Konkurrenz |
|---|---|
| viele Anbieter | ein oder wenige Anbieter |
| homogenes Gut | heterogene Güter |
| freier Markteintritt | Markteintritt erschwert |
| Unternehmen sind **Preisnehmer** | Unternehmen sind **Preisfixierer** |

Ein **Monopolist** ist Alleinanbieter eines Gutes ohne nahe Substitute – die extremste Form (Folie 10). Er sieht die **gesamte, fallende Marktnachfrage**; ein Polypolist sieht nur eine horizontale Nachfrage zum Marktpreis.

### 2.2 Entstehung von Monopolen

Ursache sind **Marktzutrittsbarrieren** (Folie 11), vier Arten: Kontrolle einer **zentralen Ressource**, **staatliche Lizenz** (Patent, Konzession), **externes Wachstum** (Übernahmen), **natürliches Monopol**.

Ein **natürliches Monopol** liegt vor, wenn ein einziges Unternehmen den Markt zu niedrigeren Kosten bedienen kann als mehrere (Folie 12). Ursache: **steigende Skalenerträge** ($f(kx_1,kx_2) > k\,f(x_1,x_2)$), typischerweise hohe Fixkosten und deshalb über den gesamten relevanten Bereich **sinkende Durchschnittskosten** (Netze, Wasserleitungen). Wächst der Markt stark, kann das natürliche Monopol verschwinden, weil mehrere Anbieter tragfähig werden.

### 2.3 Erlös des Monopolisten

Beispiel Wasserwerk (Folie 13), Nachfrage $P = 10 - 2Q$:

| $Q$ | $P$ | $TR = P \cdot Q$ | $AR = TR/Q$ | $MR = \Delta TR/\Delta Q$ |
|---|---|---|---|---|
| 0 | 10 | 0 | – | – |
| 1 | 8 | 8 | 8 | 8 |
| 2 | 6 | 12 | 6 | 4 |
| 3 | 4 | 12 | 4 | 0 |
| 4 | 2 | 8 | 2 | −4 |

- **Gesamterlös** $TR = P(Q)\cdot Q$
- **Durchschnittserlös** $AR = TR/Q = P$ – bei einheitlichem Preis gleich dem Preis, also gleich der Nachfragekurve (Folie 14)
- **Grenzerlös** $MR = \Delta TR/\Delta Q$, kontinuierlich $MR = dTR/dQ$

**Warum $MR < P$** (Folien 15–16): Um eine Einheit mehr zu verkaufen, muss der Monopolist den Preis für **alle** Einheiten senken. Zwei Effekte auf den Erlös: **Mengeneffekt** (eine Einheit mehr zum Preis $P$, Erlös steigt) und **Preiseffekt** (alle bisherigen Einheiten bringen weniger, Erlös sinkt). Ist der Preiseffekt stärker, wird $MR$ negativ. Im Wettbewerb gibt es keinen Preiseffekt, dort ist $MR = P$.

Bei linearer Nachfrage $P = a - bQ$: $TR = aQ - bQ^2$, also $MR = a - 2bQ$ – **gleicher Achsenabschnitt, doppelte Steigung**. Im Beispiel $MR = 10 - 4Q$.

### 2.4 Gewinnmaximierung

**Mathematisch** (Folie 17): $\max_q \pi = p(q)\cdot q - c(q)$. Produktregel:

$$\frac{\partial\pi}{\partial q} = p(q) + p'(q)\cdot q - c'(q) = 0 \quad\Longrightarrow\quad \underbrace{p(q) + p'(q)\,q}_{MR} = \underbrace{c'(q)}_{MC}$$

Weil $p'(q) < 0$, ist $MR < P$ und damit im Optimum **$P > MC$** (Folie 18). Im Wettbewerb dagegen $MR = P = MC$.

**Grafisch** (Folie 19): Schnittpunkt von $MR$ und $MC$ bestimmt die Menge $Q_M$; der Preis wird **senkrecht darüber auf der Nachfragekurve** abgelesen, nicht im Schnittpunkt. Gewinn $= (P_M - ATC(Q_M))\cdot Q_M$, als Rechteck zwischen Preis und Durchschnittskosten. Langfristige Gewinne sind möglich, solange die Zutrittsbarrieren bestehen.

<div class="box fehler"><strong>Typischer Fehler Nummer eins in Monopolaufgaben</strong>
Den Preis im Schnittpunkt $MR = MC$ ablesen. Dort steht der Grenzerlös, nicht der Preis. Der Preis ist $P(Q_M)$ aus der Nachfragefunktion – immer eine Zeile extra: „Einsetzen in die Nachfrage“.</div>

<div class="box beispiel"><strong>Rechenschema</strong>
$P = 100 - 2Q$, $C = 20Q + 10$. $TR = 100Q - 2Q^2$, $MR = 100 - 4Q$, $MC = 20$. $MR = MC$: $100 - 4Q = 20 \Rightarrow Q_M = 20$. Preis: $P_M = 100 - 40 = 60$. Gewinn: $60 \cdot 20 - (400 + 10) = 790$. Wettbewerb zum Vergleich: $P = MC = 20 \Rightarrow Q_W = 40$.</div>

<div data-graph="monopol"></div>

### 2.5 Wohlfahrtsverlust und Vergleich

Der Monopolist produziert **weniger** als die effiziente Menge und verkauft **teurer** (Folie 20). Konsumenten mit Zahlungsbereitschaft über den Grenzkosten, aber unter $P_M$, kaufen nicht – unterbliebene vorteilhafte Tauschgeschäfte. Das Wohlfahrtsverlust-Dreieck liegt zwischen Nachfrage und $MC$ von $Q_M$ bis $Q_W$. Im Beispiel: $WV = \tfrac12 (40 - 20)(60 - 20) = 400$. Zusätzlich wandert Konsumentenrente (Rechteck $(P_M - P_W)\cdot Q_M$) zum Monopolisten – Umverteilung, kein Verlust.

| | vollständige Konkurrenz | Monopol |
|---|---|---|
| Anzahl Unternehmen | viele | eins |
| Preisdifferenzierung möglich? | nein (Preisnehmer) | ja (Preisfixierer) |
| Grenzerlös | $= P$ | $< P$ |
| Preis vs. Grenzkosten | $P = MC$ | $P > MC$ |
| effiziente Menge? | ja | nein |
| Markteintritt möglich? | ja | nein |
| langfristige Gewinne? | nein | ja |

Gemeinsam: Gewinnmaximierung bei $MR = MC$, kurzfristige Gewinne möglich (Folie 24).

**Wirtschaftspolitik** (Folie 23): Wettbewerb intensivieren (Kartellrecht), Regulierung (Preisaufsicht), Verstaatlichung, oder Nichtstun. Trade-off: Eingriffe begrenzen Marktmacht, bringen aber Informationsprobleme, Fehlanreize und Verwaltungskosten.

### 2.6 Preisdifferenzierung

**Preisdifferenzierung**: dasselbe Gut zu unterschiedlichen Preisen an unterschiedliche Kunden, um Zahlungsbereitschaften besser abzuschöpfen (Folie 21). Voraussetzungen: **Marktmacht**, **erkennbare unterschiedliche Zahlungsbereitschaften**, **begrenzte Arbitrage** (kein günstiger Weiterverkauf). Beispiele: Onlinehändler, Kinokarten, Flugtickets, Rabattcodes.

**Perfekte Preisdifferenzierung** (Folie 22): Der Monopolist kennt jede individuelle Zahlungsbereitschaft und verlangt sie. Folge: Er verkauft bis $P = MC$ (effiziente Menge, **kein Wohlfahrtsverlust**), aber die **gesamte Konsumentenrente wird zu Produzentenrente**. $KR = 0$. Effizient, aber extreme Umverteilung – wieder: Effizienz ist nicht Gerechtigkeit.

---

## 3. Teil 7.2: Externe Effekte

### 3.1 Definition und Arten

Ein **externer Effekt** liegt vor, wenn das Handeln eines Wirtschaftssubjekts die Wohlfahrt eines **unbeteiligten Dritten** beeinflusst, ohne dass dafür gezahlt oder entschädigt wird (Folie 3). Ursachen: fehlende Eigentumsrechte, unvollständige Märkte, Informationsprobleme.

- **Negative Externalität**: Kosten für Dritte ohne Entschädigung – Luftverschmutzung, Lärm.
- **Positive Externalität**: Nutzen für Dritte ohne Bezahlung – Bildung, Forschung, Impfung.

**Private vs. soziale Perspektive** (Folie 4): Private Kosten und Nutzen betreffen nur den Entscheider; soziale Kosten und Nutzen schließen die Wirkung auf Dritte ein. Volkswirtschaftliche Kosten = private + externe Kosten. Werden die externen Teile ignoriert, verliert der Preis seine Signalfunktion und die Gleichgewichtsmenge ist zu hoch oder zu niedrig.

### 3.2 Grafische Analyse

**Negative Externalität** (Folie 5, Papierfabrik): Die Angebotskurve zeigt nur die **privaten Kosten**. Die Kurve der **volkswirtschaftlichen Kosten** liegt um die externen Kosten je Einheit darüber. Marktgleichgewicht bei $Q_{Markt}$ (Nachfrage = private Kosten), Optimum bei $Q^* < Q_{Markt}$ (Nachfrage = volkswirtschaftliche Kosten). **Menge zu hoch, Preis zu niedrig.** Wohlfahrtsverlust: Dreieck zwischen volkswirtschaftlichen Kosten und Nachfrage von $Q^*$ bis $Q_{Markt}$ – dort übersteigen die wahren Kosten die Zahlungsbereitschaft.

**Positive Externalität** (Folie 6, Bildung): Die Nachfragekurve zeigt nur den **privaten Nutzen**. Der **volkswirtschaftliche Nutzen** liegt um den externen Nutzen darüber. Optimum bei $Q^* > Q_{Markt}$. **Menge zu niedrig.** Wohlfahrtsverlust: Dreieck zwischen volkswirtschaftlichem Nutzen und Angebot von $Q_{Markt}$ bis $Q^*$.

<div class="box beispiel"><strong>Beispiel</strong>
Nachfrage $P = 100 - Q$, private Grenzkosten $P = 20 + Q$, externe Kosten 20 je Einheit. Markt: $100 - Q = 20 + Q \Rightarrow Q_{Markt} = 40$, $P = 60$. Volkswirtschaftliche Kosten $P = 40 + Q$. Optimum: $100 - Q = 40 + Q \Rightarrow Q^* = 30$, $P^* = 70$. Wohlfahrtsverlust $= \tfrac12 \cdot (40 - 30) \cdot 20 = 100$.</div>

<div data-graph="extern"></div>

### 3.3 Private Lösungen und Coase-Theorem

**Internalisierung**: Anreize so verändern, dass Akteure die externen Effekte ihrer Entscheidungen berücksichtigen (Folie 7). Drei Wege: private Lösungen, Regulierung, marktbasierte Instrumente.

**Private Lösungen** (Folie 8): Moralkompass, Wohltätigkeit, Eigeninteresse (Zusammenschluss der Betroffenen), Verträge.

**Coase-Theorem** (Folie 9): Freie Märkte können trotz Externalitäten effizient sein, wenn die Betroffenen **kostenlos verhandeln** können – und zwar **unabhängig davon, wer die Eigentumsrechte besitzt**. Die Rechteverteilung bestimmt nur, wer wen bezahlt, nicht das Ergebnis.

Bedingungen: klar definierte Eigentumsrechte, geringe Transaktionskosten, vollständige Information, rationales Verhalten. Grenzen in der Realität: hohe Transaktionskosten, Verhandlungsschwierigkeiten, Koordinationsprobleme bei vielen Betroffenen, Trittbrettfahrer, asymmetrische Information. Scheitert die private Lösung, greift der Staat ein.

<div class="box beispiel"><strong>Beispiel Klimaanlage (Folie 10)</strong>
Zoë schaltet die Klimaanlage an (Nutzen für sie), Emil sitzt im Luftzug (Kosten für ihn). Effizient ist: an, wenn Zoës Nutzen > Emils Kosten; sonst aus. Verhandlungslösungen: mittlere Temperatur, Plätze tauschen, Luftabweiser, Ausgleichszahlung. Zahlen: Zoës Nutzen 50, Emils Kosten 30. Hat Emil das Recht auf Ruhe, zahlt Zoë ihm zwischen 30 und 50 – Anlage an. Hat Zoë das Recht, müsste Emil ihr mehr als 50 bieten, was ihm nur 30 wert ist – Anlage an. Gleiches Ergebnis, andere Zahlungsrichtung.</div>

### 3.4 Staatliche Eingriffe

Zwei Grundformen (Folie 11): **ordnungsrechtlich** (Verbote, Standards – wirken unmittelbar) und **marktbasiert** (Steuern, Subventionen, Zertifikate – verändern Preise und damit Anreize). Positive Externalität → zu wenig Aktivität → **Subvention**. Negative → zu viel → **Steuer oder Regulierung**.

- **Regulierung** (Folie 12): Grenzwerte, Technologievorgaben, Verbote; Quoten und Mengenbegrenzungen (Fangquoten). Vorteil: direkte Wirkung, sinnvoll bei gefährlichen Grenzwerten. Nachteil: hoher Informationsbedarf, gleiche Vorgaben für alle sind teuer.
- **Pigou-Steuer** (Folie 13): Steuer $t$ in Höhe der **externen Kosten je Einheit**. Sie verschiebt die private Angebotskurve genau auf die volkswirtschaftliche Kostenkurve; der Markt findet $Q^*$ von selbst. Beispiele: Tabak-, Alkohol-, Zuckersteuer, CO₂-Steuer. Im Zahlenbeispiel: $t = 20$.
- **Umweltzertifikate** (Folie 14): Der Staat legt die Gesamtmenge der Emissionen fest, Unternehmen handeln die Rechte. Wer billig vermeiden kann, vermeidet und verkauft; wer teuer vermeidet, kauft. Die Vermeidung geschieht dort, wo sie am wenigsten kostet.

Vorbehalt (Folie 15): Staatliche Eingriffe können selbst ineffizient sein, wenn politische Anreize und Informationsprobleme sie verzerren.

---

## 4. Teil 7.3: Öffentliche Güter

### 4.1 Gütertypologie

Zwei Merkmale (Folie 4): **Ausschließbarkeit** (kann man Nichtzahler ausschließen?) und **Rivalität** (mindert der Konsum des einen die Möglichkeiten des anderen?).

| | **Rivalität: ja** | **Rivalität: nein** |
|---|---|---|
| **Ausschließbar: ja** | **Private Güter** (Brot, Kleidung) | **Clubgüter** (Streaming, Autobahn mit Maut, Kabel-TV) |
| **Ausschließbar: nein** | **Allmendegüter** (Fischbestände, freie Straße im Stau) | **Öffentliche Güter** (Landesverteidigung, Straßenbeleuchtung, Deich) |

### 4.2 Trittbrettfahrerproblem

Beispiel Feuerwerk (Folie 6): 500 Einwohner bewerten es mit je 10 €, Kosten 1000 €. Gesamtnutzen 5000 € > Kosten – es sollte stattfinden. Eine private Firma kann es aber nicht anbieten: Niemand kann vom Zuschauen ausgeschlossen werden, also zahlt niemand freiwillig. Ein **Trittbrettfahrer** erlangt den Nutzen, ohne zu zahlen. Lösung: Der Staat stellt das Gut bereit und finanziert es über Steuern (2 € pro Person) – alle sind besser gestellt.

### 4.3 Public-Goods-Game

Experimentelle Prüfung (Folie 7): $n$ Spieler erhalten je eine Ausstattung $A$ und investieren geheim $b_i \in [0, A]$ in einen gemeinsamen Topf. Der Topf wird mit $\alpha$ multipliziert ($\alpha < 1 < n\alpha$) und gleichmäßig verteilt:

$$U_i = A - b_i + \alpha \sum_{j=1}^{n} b_j = A - (1-\alpha)\,b_i + \alpha\sum_{j \ne i} b_j$$

$$\frac{\partial U_i}{\partial b_i} = -(1 - \alpha) < 0$$

Der Homo Oeconomicus investiert **nichts** ($b_i^* = 0$), unabhängig vom Verhalten der anderen (Folie 8) – obwohl volle Kooperation alle besser stellen würde ($n\alpha > 1$). **Evidenz** (Folie 9): Beiträge sind in der Regel positiv, aber das soziale Optimum wird selten erreicht. Erklärungen: Lernhypothese (rationales Verhalten muss erst gelernt werden), *warm glow* (gutes Gefühl beim Beitragen), Fairness.

<div class="box beispiel"><strong>Zahlenbeispiel</strong>
$n = 4$, $A = 20$, $\alpha = 0{,}4$. Grenzertrag eines eigenen Euros: $-1 + 0{,}4 = -0{,}6$ → nichts beitragen. Tragen alle 20 bei: Topf 80, mal 0,4 = 32 für jeden statt 20. Gefangenendilemma mit vier Spielern (vgl. Thema 9).</div>

### 4.4 Optimale Bereitstellung

Der Staat entscheidet per **Kosten-Nutzen-Analyse** (Folie 10). Schwierigkeiten: Es gibt keinen Marktpreis, und Befragungen liefern verzerrte Antworten (Befürworter übertreiben den Nutzen, Gegner die Kosten). **Kontingente Bewertungsmethoden** (CVM) versuchen, Zahlungsbereitschaften per Umfrage zu ermitteln.

Regel (Folie 11): Bereitstellung, bis **sozialer Grenznutzen = Grenzkosten**. Weil das Gut nicht rivalisiert, konsumieren alle dieselbe Menge; der soziale Grenznutzen ist die **vertikale Addition** der individuellen Nachfragekurven ($MSB = D_1 + D_2$). Bei privaten Gütern addiert man horizontal.

<div class="box beispiel"><strong>Beispiel</strong>
$D_1: p = 10 - M$, $D_2: p = 20 - 2M$, Grenzkosten 6. $MSB = 30 - 3M = 6 \Rightarrow M^* = 8$. Probe: Bei $M = 8$ ist Person 1 bereit 2 zu zahlen, Person 2 bereit 4; zusammen 6 = Grenzkosten ✓.</div>

---

## 5. Klausur-Check Thema 7

**Grafiken blind:** Monopol mit Nachfrage, $MR$ (doppelte Steigung), $MC$, $Q_M$ unter dem Schnittpunkt, $P_M$ auf der Nachfrage, Gewinnrechteck mit $ATC$, Wohlfahrtsverlust-Dreieck; Preisdifferenzierer (KR = 0); negative Externalität mit zwei Kostenkurven; positive mit zwei Nutzenkurven; Pigou-Steuer als Verschiebung; vertikale Addition beim öffentlichen Gut.

**Rechnungen in fünf Minuten:** $MR$ aus $P(Q)$ ableiten; $MR = MC$ lösen, Preis einsetzen, Gewinn; $P = MC$ für den Wettbewerbsvergleich; Wohlfahrtsverlust-Dreieck; Marktmenge und Optimum bei Externalität, Pigou-Steuer = externe Kosten; $\partial U_i/\partial b_i$ im Public-Goods-Game; $M^*$ aus $D_1 + D_2 = MC$.

**Begriffe:** Marktversagen (vier Formen), Marktmacht, Preisnehmer vs. Preisfixierer, Marktzutrittsbarrieren, natürliches Monopol, $TR$, $AR$, $MR$, Mengen- und Preiseffekt, Preisdifferenzierung und Arbitrage, externer Effekt, private vs. soziale Kosten, Internalisierung, Coase-Theorem, Pigou-Steuer, Zertifikate, Ausschließbarkeit, Rivalität, Trittbrettfahrer, Public-Goods-Game, kontingente Bewertung, vertikale Addition.

<p class="folie">Quellen: Vorlesungsfolien Thema 7.1–7.3 (Schehl, SoSe 2026); Mankiw/Taylor, Grundzüge der VWL, Kapitel zu Monopol, Externalitäten und öffentlichen Gütern. Text eigenständig formuliert.</p>
`;
