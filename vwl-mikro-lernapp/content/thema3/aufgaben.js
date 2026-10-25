window.VWL = window.VWL || {};
VWL.aufgaben = VWL.aufgaben || [];
VWL.aufgaben.push(
{
  id: 'a1', thema: 't3', titel: 'Budgetgerade aufstellen und zeichnen', schwierigkeit: 1, punkte: 6, zeit: 8,
  aufgabe: String.raw`Jonas hat im Monat 300 € für Kaffee ($x_1$, 3 € je Becher) und Mensaessen ($x_2$, 6 € je Essen) zur Verfügung und gibt alles aus.

a) Stellen Sie Budgetbeschränkung und Budgetgerade auf.
b) Wie viele Becher Kaffee bzw. Mensaessen kann Jonas höchstens kaufen?
c) Lösen Sie die Budgetgerade nach $x_2$ auf und zeichnen Sie sie.
d) Interpretieren Sie die Steigung ökonomisch.
e) Sind die Bündel (40, 30) und (60, 25) leistbar?`,
  hinweis: 'Achsenabschnitt = Einkommen geteilt durch den Preis des Gutes auf dieser Achse. Steigung = minus Preis des horizontalen Gutes durch Preis des vertikalen Gutes.',
  ansatz: String.raw`Budgetgerade $3x_1 + 6x_2 = 300$ nach $x_2$ umstellen. Für e) die Bündel einsetzen und mit 300 vergleichen.`,
  loesung: String.raw`**a)** Budgetbeschränkung: $3x_1 + 6x_2 \le 300$. Budgetgerade: $3x_1 + 6x_2 = 300$.

**b)** Nur Kaffee: $m/p_1 = 300/3 = 100$ Becher. Nur Mensa: $m/p_2 = 300/6 = 50$ Essen.

**c)** $6x_2 = 300 - 3x_1 \Rightarrow x_2 = 50 - 0{,}5\,x_1$. Gerade von $(0 \mid 50)$ nach $(100 \mid 0)$, $x_1$ horizontal, $x_2$ vertikal.

**d)** Steigung $-p_1/p_2 = -0{,}5$: Ein Becher Kaffee mehr kostet ein halbes Mensaessen. Das sind die Opportunitätskosten eines Kaffees in Einheiten von Mensaessen – das Tauschverhältnis, das der Markt vorgibt.

**e)** (40, 30): $3\cdot 40 + 6 \cdot 30 = 120 + 180 = 300$ – genau leistbar, liegt auf der Budgetgeraden. (60, 25): $180 + 150 = 330 > 300$ – nicht leistbar.`
},
{
  id: 'a2', thema: 't3', titel: 'Verschiebung oder Drehung?', schwierigkeit: 1, punkte: 6, zeit: 8,
  aufgabe: String.raw`Ausgangslage: $m = 120$, $p_1 = 4$, $p_2 = 2$. Geben Sie jeweils die neue Budgetgerade (nach $x_2$ aufgelöst) und die Achsenabschnitte an und beschreiben Sie die grafische Veränderung:

a) Das Einkommen steigt auf 150.
b) Stattdessen steigt $p_1$ auf 6.
c) Stattdessen verdoppeln sich beide Preise und das Einkommen.
d) Stattdessen verdoppeln sich beide Preise, das Einkommen bleibt.`,
  hinweis: 'Fragen Sie bei jeder Änderung: Ändert sich das Preisverhältnis $p_1/p_2$? Wenn nein, ist es eine Parallelverschiebung.',
  loesung: String.raw`Ausgangsgerade: $x_2 = 60 - 2x_1$, Abschnitte 30 ($x_1$) und 60 ($x_2$).

**a)** $4x_1 + 2x_2 = 150 \Rightarrow x_2 = 75 - 2x_1$. Abschnitte 37,5 und 75. Steigung unverändert: Parallelverschiebung nach außen.

**b)** $6x_1 + 2x_2 = 120 \Rightarrow x_2 = 60 - 3x_1$. Abschnitte 20 und 60. Der $x_2$-Abschnitt bleibt, die Gerade dreht sich um $(0 \mid 60)$ nach innen und wird steiler.

**c)** $8x_1 + 4x_2 = 240 \Leftrightarrow 4x_1 + 2x_2 = 120$. Unverändert – nur relative Preise und das reale Einkommen zählen.

**d)** $8x_1 + 4x_2 = 120 \Rightarrow x_2 = 30 - 2x_1$. Abschnitte 15 und 30. Steigung gleich: Parallelverschiebung nach innen, wie eine Halbierung des Einkommens.`
},
{
  id: 'a3', thema: 't3', titel: 'Mengensteuer mit Knick', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Ein Haushalt hat $m = 120$, $p_1 = 4$, $p_2 = 2$. Der Staat erhebt auf Gut 1 eine Mengensteuer von $t = 2$ je Einheit – aber erst ab der elften Einheit (also für alle $x_1 \ge 10$ auf jede Einheit über 10 hinaus).

a) Geben Sie die Budgetgerade für $x_1 \le 10$ und für $x_1 > 10$ an.
b) Bestimmen Sie den Knickpunkt.
c) Wie viel von Gut 1 kann der Haushalt maximal kaufen?
d) Geben Sie die Steigungen beider Abschnitte an und zeichnen Sie.
e) Vergleichen Sie mit einer Mengensteuer ab der ersten Einheit.`,
  hinweis: 'Für $x_1 > 10$ kosten die ersten 10 Einheiten weiterhin je 4 €, jede weitere 6 €.',
  ansatz: String.raw`Ausgaben für Gut 1 bei $x_1 > 10$: $4\cdot 10 + 6(x_1 - 10) = 6x_1 - 20$. Diesen Ausdruck in die Budgetgleichung einsetzen.`,
  loesung: String.raw`**a)** Für $x_1 \le 10$: $4x_1 + 2x_2 = 120 \Rightarrow x_2 = 60 - 2x_1$.
Für $x_1 > 10$: $4\cdot 10 + 6(x_1 - 10) + 2x_2 = 120 \Rightarrow 6x_1 - 20 + 2x_2 = 120 \Rightarrow x_2 = 70 - 3x_1$.

**b)** Knick bei $x_1 = 10$: $x_2 = 60 - 20 = 40$ (Probe mit der zweiten Gleichung: $70 - 30 = 40$ ✓). Knickpunkt $(10 \mid 40)$.

**c)** $x_2 = 0$ in der zweiten Gleichung: $3x_1 = 70 \Rightarrow x_1^{\max} = 23{,}33$. Plausibilität: Nach 10 Einheiten (40 €) bleiben 80 €, geteilt durch 6 € ergibt 13,33 weitere Einheiten.

**d)** Steigung $-2$ bis zum Knick, danach $-3$. Die Gerade verläuft von $(0 \mid 60)$ zum Knick $(10 \mid 40)$ und dann steiler bis $(23{,}33 \mid 0)$. Der $x_2$-Abschnitt bleibt unverändert.

**e)** Steuer ab der ersten Einheit: $6x_1 + 2x_2 = 120 \Rightarrow x_2 = 60 - 3x_1$, durchgehend Steigung $-3$, $x_1^{\max} = 20$. Die Freimenge von 10 Einheiten lässt dem Haushalt mehr Spielraum ($23{,}33 > 20$); beide Varianten lassen $m/p_2 = 60$ unverändert.`
},
{
  id: 'a4', thema: 't3', titel: 'Wertsteuer und Einkommensteuer', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Ein Haushalt hat $m = 500$, $p_1 = 10$, $p_2 = 5$. Der Staat führt eine Wertsteuer von $\tau = 25\,\%$ auf beide Güter ein.

a) Stellen Sie die neue Budgetgerade auf.
b) Vergleichen Sie Achsenabschnitte und Steigung vor und nach der Steuer.
c) Welcher Einkommensteuer entspricht die Maßnahme? Wie hoch ist der Einkommensverlust in Euro?
d) Begründen Sie, warum eine Wertsteuer auf alle Güter wie eine Einkommensteuer wirkt.
e) Wie ändert sich das Ergebnis, wenn die Steuer nur auf Gut 1 erhoben wird?`,
  hinweis: 'Beide Preise mit $(1+\tau)$ multiplizieren, dann durch $(1+\tau)$ teilen.',
  loesung: String.raw`**a)** $(1{,}25)(10)x_1 + (1{,}25)(5)x_2 = 500 \Leftrightarrow 12{,}5x_1 + 6{,}25x_2 = 500 \Leftrightarrow 10x_1 + 5x_2 = 400$.

**b)** Vorher: Abschnitte $500/10 = 50$ und $500/5 = 100$, Steigung $-2$. Nachher: $400/10 = 40$ und $400/5 = 80$, Steigung weiterhin $-2$. Parallelverschiebung nach innen.

**c)** Effektives Einkommen $m/(1+\tau) = 500/1{,}25 = 400$. Entspricht einer Einkommensteuer mit Satz $\tau/(1+\tau) = 0{,}25/1{,}25 = 20\,\%$. Verlust: $500 - 400 = 100$ €.

**d)** Beide Preise steigen um denselben Faktor, also bleibt das Preisverhältnis $p_1/p_2$ und damit die Steigung unverändert. Die Budgetmenge schrumpft nur proportional – genau das bewirkt auch ein geringeres Einkommen. Für den Haushalt sind beide Maßnahmen ununterscheidbar.

**e)** Nur Gut 1 besteuert: $12{,}5x_1 + 5x_2 = 500 \Rightarrow x_2 = 100 - 2{,}5x_1$. Der $x_2$-Abschnitt bleibt 100, der $x_1$-Abschnitt sinkt auf 40, Steigung $-2{,}5$: Drehung nach innen um $(0 \mid 100)$. Jetzt ändert sich das Preisverhältnis – keine Äquivalenz zur Einkommensteuer mehr.`
},
{
  id: 'a5', thema: 't3', titel: 'Axiome der Präferenzen prüfen', schwierigkeit: 1, punkte: 5, zeit: 7,
  aufgabe: String.raw`Eine Bankkundin soll zwischen drei Kontomodellen A, B und C wählen und äußert sich wie folgt:

1. „A gefällt mir besser als B.“
2. „B gefällt mir besser als C.“
3. „C gefällt mir besser als A.“
4. „Zwischen A und einem vierten Modell D kann ich mich nicht entscheiden – ich kann die beiden nicht vergleichen.“

a) Welche Axiome werden durch die Aussagen 1–3 bzw. durch Aussage 4 verletzt? Begründen Sie.
b) Warum braucht die Mikroökonomik diese Axiome?`,
  hinweis: 'Drei Axiome: Vollständigkeit, Reflexivität, Transitivität. Aussage 4 ist nicht dasselbe wie Indifferenz.',
  loesung: String.raw`**a)** Aussagen 1–3: $A \succ B$, $B \succ C$ müsste nach **Transitivität** $A \succ C$ ergeben. Aussage 3 behauptet das Gegenteil – Transitivität verletzt. Aussage 4 verletzt die **Vollständigkeit**: Je zwei Bündel müssen vergleichbar sein ($A \succeq D$ oder $D \succeq A$ oder beides). „Kann ich nicht vergleichen“ ist etwas anderes als Indifferenz ($A \sim D$ wäre erlaubt).

**b)** Ohne Vollständigkeit gäbe es Entscheidungen, die das Modell nicht abbilden kann. Ohne Transitivität gäbe es Kreisschlüsse ($A \succ B \succ C \succ A$) und damit kein bestes Bündel – die Frage „Was wählt der Konsument?“ hätte keine Antwort. Erst mit vollständigen, reflexiven und transitiven Präferenzen lässt sich eine Nutzenfunktion konstruieren (Folie 51).`
},
{
  id: 'a6', thema: 't3', titel: 'Gütertypen erkennen und zeichnen', schwierigkeit: 1, punkte: 6, zeit: 8,
  aufgabe: String.raw`Ordnen Sie jedem Fall den Gütertyp zu, skizzieren Sie die Indifferenzkurven ($x_1$ horizontal) und geben Sie, wo möglich, eine passende Nutzenfunktion an:

a) Tagesgeld bei Bank A ($x_1$) und bei Bank B ($x_2$), identischer Zins und identische Sicherheit.
b) Linke ($x_1$) und rechte ($x_2$) Handschuhe.
c) Pizza ($x_1$) und Hausmüll in der Wohnung ($x_2$).
d) Pizza ($x_1$) und Werbebeilagen in der Zeitung ($x_2$), die sofort ins Altpapier wandern.
e) Pizza ($x_1$) und Cola ($x_2$) für jemanden, der gern beides, aber lieber gemischt konsumiert.`,
  loesung: String.raw`**a) Perfekte Substitute.** Nur die Gesamtsumme zählt. Indifferenzkurven: parallele Geraden mit Steigung $-1$. $u = x_1 + x_2$.

**b) Perfekte Komplemente** im Verhältnis 1:1. L-förmige Kurven mit Knick auf der 45-Grad-Linie. $u = \min\{x_1, x_2\}$.

**c) Gut und Ungut.** Mehr Müll muss durch mehr Pizza ausgeglichen werden: Indifferenzkurven steigen. Höherer Nutzen liegt rechts unten (mehr Pizza, weniger Müll). Beispiel: $u = x_1 - x_2$.

**d) Gut und neutrales Gut.** Nur $x_1$ zählt: senkrechte Geraden, Nutzen steigt nach rechts. $u = x_1$ (oder $u = u(x_1)$).

**e) Normale Präferenzen (Cobb-Douglas).** Fallende, konvexe Kurven, die die Achsen nie berühren. $u = x_1^c x_2^d$, z. B. $u = x_1 x_2$.`
},
{
  id: 'a7', thema: 't3', titel: 'Monotone Transformationen prüfen', schwierigkeit: 2, punkte: 6, zeit: 8,
  aufgabe: String.raw`Gegeben ist $u(x_1,x_2) = x_1 x_2$. Prüfen Sie für jede Funktion, ob sie eine positiv monotone Transformation von $u$ ist und damit dieselben Präferenzen beschreibt. Verwenden Sie die Bündel $(2,3)$, $(4,1)$ und $(1,1)$.

a) $v_1 = \ln u$ &nbsp; b) $v_2 = -u$ &nbsp; c) $v_3 = u + 5$ &nbsp; d) $v_4 = (u - 10)^2$`,
  hinweis: 'Berechnen Sie $u$ für die drei Bündel, dann jede Transformation. Bleibt die Reihenfolge erhalten? Alternativ: Ableitung $f\'(u)$ auf Vorzeichen prüfen.',
  loesung: String.raw`Nutzenwerte: $u(2,3) = 6$, $u(4,1) = 4$, $u(1,1) = 1$. Reihenfolge: $(2,3) \succ (4,1) \succ (1,1)$.

**a)** $v_1 = \ln 6 \approx 1{,}79$; $\ln 4 \approx 1{,}39$; $\ln 1 = 0$. Reihenfolge erhalten. $f'(u) = 1/u > 0$ für $u > 0$. **Ja.**

**b)** $v_2 = -6, -4, -1$. Jetzt ist $(1,1)$ am besten – Reihenfolge umgekehrt. $f'(u) = -1 < 0$. **Nein.**

**c)** $v_3 = 11, 9, 6$. Erhalten; $f'(u) = 1 > 0$. **Ja.**

**d)** $v_4 = (6-10)^2 = 16$; $(4-10)^2 = 36$; $(1-10)^2 = 81$. Reihenfolge komplett umgekehrt. $f'(u) = 2(u-10)$ ist für $u < 10$ negativ – die Funktion fällt im relevanten Bereich. **Nein.**

Merksatz: Eine Transformation ist genau dann zulässig, wenn $f$ im gesamten relevanten Wertebereich streng steigend ist.`
},
{
  id: 'a8', thema: 't3', titel: 'Grenznutzen und MRS berechnen', schwierigkeit: 2, punkte: 7, zeit: 8,
  aufgabe: String.raw`Gegeben ist $u(x_1,x_2) = x_1^{1/2}\, x_2^{1/2}$.

a) Berechnen Sie $MU_1$ und $MU_2$ allgemein.
b) Leiten Sie die MRS allgemein her.
c) Berechnen und interpretieren Sie die MRS im Punkt $(4, 9)$.
d) Berechnen Sie die MRS im Punkt $(9, 4)$. Was zeigt der Vergleich mit c)?
e) Zeigen Sie, dass $v = x_1 x_2$ dieselbe MRS hat. Warum?`,
  hinweis: String.raw`Potenzregel: $\frac{\partial}{\partial x_1} x_1^{1/2} = \frac12 x_1^{-1/2}$. Die MRS ist $-MU_1/MU_2$.`,
  loesung: String.raw`**a)** $MU_1 = \frac12 x_1^{-1/2} x_2^{1/2}$, $MU_2 = \frac12 x_1^{1/2} x_2^{-1/2}$.

**b)** $MRS = -\dfrac{MU_1}{MU_2} = -\dfrac{\frac12 x_1^{-1/2}x_2^{1/2}}{\frac12 x_1^{1/2}x_2^{-1/2}} = -\dfrac{x_2^{1/2}\cdot x_2^{1/2}}{x_1^{1/2}\cdot x_1^{1/2}} = -\dfrac{x_2}{x_1}$.

**c)** $MRS(4,9) = -9/4 = -2{,}25$. Im Punkt (4, 9) ist der Konsument bereit, für eine zusätzliche Einheit Gut 1 bis zu 2,25 Einheiten Gut 2 herzugeben, ohne schlechter gestellt zu sein. Zur Kontrolle über die Grenznutzen: $MU_1 = \frac12\cdot\frac12\cdot 3 = 0{,}75$, $MU_2 = \frac12\cdot 2\cdot\frac13 = \frac13$, $-0{,}75/(1/3) = -2{,}25$ ✓.

**d)** $MRS(9,4) = -4/9 \approx -0{,}44$. Mit mehr Gut 1 und weniger Gut 2 ist er nur noch bereit, 0,44 Einheiten Gut 2 für eine Einheit Gut 1 herzugeben: **abnehmende Grenzrate der Substitution**, die Indifferenzkurve wird nach rechts flacher – Ausdruck konvexer Präferenzen.

**e)** $v = x_1x_2 = u^2$, eine positiv monotone Transformation ($f'(u) = 2u > 0$). $MV_1 = x_2$, $MV_2 = x_1$, $MRS = -x_2/x_1$ – identisch. Grund: $MV_i = f'(u)\cdot MU_i$, der Faktor $f'(u) = 2u$ kürzt sich im Quotienten. Die MRS beschreibt beobachtbares Tauschverhalten und darf daher nicht von der (willkürlichen) Skalierung des Nutzens abhängen.`
},
{
  id: 'a9', thema: 't3', titel: 'Optimum über die Tangentialbedingung', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Ein Konsument hat $u(x_1,x_2) = x_1^2\, x_2$, Preise $p_1 = 4$, $p_2 = 2$ und Einkommen $m = 120$.

a) Bestimmen Sie die MRS.
b) Stellen Sie die Tangentialbedingung auf und bestimmen Sie das optimale Bündel.
c) Berechnen Sie den Nutzen im Optimum und machen Sie die Probe mit der Budgetgeraden.
d) Welche Einkommensanteile fließen in die beiden Güter? Prüfen Sie mit der Cobb-Douglas-Formel.`,
  hinweis: String.raw`Cobb-Douglas mit $c = 2$, $d = 1$: $MRS = -\frac{c}{d}\cdot\frac{x_2}{x_1}$.`,
  ansatz: String.raw`$MRS = -p_1/p_2$ liefert eine Beziehung zwischen $x_1$ und $x_2$; diese in $4x_1 + 2x_2 = 120$ einsetzen.`,
  loesung: String.raw`**a)** $MU_1 = 2x_1x_2$, $MU_2 = x_1^2$. $MRS = -\dfrac{2x_1x_2}{x_1^2} = -\dfrac{2x_2}{x_1}$.

**b)** Tangentialbedingung: $-\dfrac{2x_2}{x_1} = -\dfrac{4}{2} = -2 \Rightarrow 2x_2 = 2x_1 \Rightarrow x_2 = x_1$.
Budget: $4x_1 + 2x_1 = 6x_1 = 120 \Rightarrow x_1^* = 20$, $x_2^* = 20$.

**c)** $u^* = 20^2 \cdot 20 = 8000$. Probe: $4\cdot 20 + 2\cdot 20 = 80 + 40 = 120$ ✓.

**d)** Gut 1: $p_1x_1/m = 80/120 = 2/3$. Gut 2: $40/120 = 1/3$. Cobb-Douglas-Formel: $\frac{c}{c+d} = \frac{2}{3}$ und $\frac{d}{c+d} = \frac13$ ✓. Direkt: $x_1^* = \frac23\cdot\frac{120}{4} = 20$, $x_2^* = \frac13\cdot\frac{120}{2} = 20$.`
},
{
  id: 'a10', thema: 't3', titel: 'Lagrange-Verfahren vollständig', schwierigkeit: 2, punkte: 10, zeit: 12,
  aufgabe: String.raw`Ein Haushalt hat $u(x_1,x_2) = x_1^{1/3}\, x_2^{2/3}$, $p_1 = 5$, $p_2 = 10$ und $m = 300$.

a) Stellen Sie die Lagrange-Funktion auf.
b) Leiten Sie die drei Bedingungen erster Ordnung her.
c) Bestimmen Sie das optimale Bündel.
d) Berechnen Sie $\lambda$ und interpretieren Sie den Wert.
e) Kontrollieren Sie mit der Cobb-Douglas-Nachfrageformel.`,
  hinweis: 'Gleichung (1) durch (2) teilen, damit $\\lambda$ wegfällt. Der Rest ist die Tangentialbedingung.',
  loesung: String.raw`**a)** $\mathcal{L} = x_1^{1/3}x_2^{2/3} - \lambda(5x_1 + 10x_2 - 300)$.

**b)**
(1) $\dfrac{\partial\mathcal{L}}{\partial x_1} = \tfrac13 x_1^{-2/3}x_2^{2/3} - 5\lambda = 0$
(2) $\dfrac{\partial\mathcal{L}}{\partial x_2} = \tfrac23 x_1^{1/3}x_2^{-1/3} - 10\lambda = 0$
(3) $\dfrac{\partial\mathcal{L}}{\partial \lambda} = -(5x_1 + 10x_2 - 300) = 0$

**c)** (1) geteilt durch (2): $\dfrac{\tfrac13 x_1^{-2/3}x_2^{2/3}}{\tfrac23 x_1^{1/3}x_2^{-1/3}} = \dfrac{5\lambda}{10\lambda} \Rightarrow \dfrac{1}{2}\cdot\dfrac{x_2}{x_1} = \dfrac12 \Rightarrow x_2 = x_1$.
In (3): $5x_1 + 10x_1 = 15x_1 = 300 \Rightarrow x_1^* = 20$, $x_2^* = 20$. Probe: $100 + 200 = 300$ ✓.

**d)** Aus (1): $\lambda = \dfrac{\tfrac13 x_1^{-2/3}x_2^{2/3}}{5} = \dfrac{\tfrac13\cdot(20/20)^{2/3}}{5} = \dfrac{1/3}{5} = \dfrac{1}{15} \approx 0{,}067$. Interpretation: Grenznutzen des Einkommens – ein Euro mehr Budget erhöht den maximal erreichbaren Nutzen um etwa 0,067 Einheiten. Kontrolle über (2): $\frac23\cdot 1/10 = 1/15$ ✓.

**e)** $x_1^* = \dfrac{1/3}{1}\cdot\dfrac{300}{5} = 20$, $x_2^* = \dfrac{2/3}{1}\cdot\dfrac{300}{10} = 20$ ✓. Der Haushalt gibt ein Drittel (100 €) für Gut 1 und zwei Drittel (200 €) für Gut 2 aus – genau die Exponenten.`
},
{
  id: 'a11', thema: 't3', titel: 'Nachfragefunktion allgemein herleiten', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Ein Konsument hat $u(x_1,x_2) = x_1\, x_2^3$.

a) Leiten Sie die Nachfragefunktionen $x_1(p_1,p_2,m)$ und $x_2(p_1,p_2,m)$ allgemein her.
b) Welche Einkommensanteile entfallen auf die Güter?
c) Berechnen Sie das Optimum für $m = 800$, $p_1 = 10$, $p_2 = 30$.
d) $p_1$ verdoppelt sich. Wie reagieren $x_1^*$ und $x_2^*$?
e) Ein Kommilitone behauptet, mit $v = x_1^{1/4}x_2^{3/4}$ käme etwas anderes heraus. Stimmt das?`,
  hinweis: String.raw`Allgemein rechnen heißt: $p_1$, $p_2$, $m$ als Symbole stehen lassen. Tangentialbedingung $\frac{x_2}{3x_1} = \frac{p_1}{p_2}$.`,
  loesung: String.raw`**a)** $MU_1 = x_2^3$, $MU_2 = 3x_1x_2^2$. Tangentialbedingung: $\dfrac{x_2^3}{3x_1x_2^2} = \dfrac{x_2}{3x_1} = \dfrac{p_1}{p_2} \Rightarrow p_2x_2 = 3p_1x_1$.
Budget: $p_1x_1 + 3p_1x_1 = 4p_1x_1 = m \Rightarrow x_1(p_1,p_2,m) = \dfrac{m}{4p_1}$, und $x_2 = \dfrac{3p_1x_1}{p_2} = \dfrac{3m}{4p_2}$.

**b)** $p_1x_1/m = 1/4$, $p_2x_2/m = 3/4$. Entspricht $\frac{c}{c+d} = \frac14$ und $\frac{d}{c+d} = \frac34$.

**c)** $x_1^* = 800/40 = 20$, $x_2^* = 2400/120 = 20$. Probe: $200 + 600 = 800$ ✓.

**d)** $p_1 = 20$: $x_1^* = 800/80 = 10$ – halbiert sich. $x_2^* = 20$ bleibt, denn $x_2$ hängt nicht von $p_1$ ab. Die Ausgaben für Gut 1 bleiben bei 200 € (fester Anteil), nur die Menge sinkt.

**e)** Nein. $v = u^{1/4}$ ist eine positiv monotone Transformation (Exponentensumme $1 + 3 = 4$), beschreibt also dieselben Präferenzen und liefert dieselbe Nachfrage: $x_1^* = \frac14\cdot\frac{m}{p_1}$. Der Vorteil von $v$: Die Anteile 1/4 und 3/4 stehen direkt als Exponenten da.`
},
{
  id: 'a12', thema: 't3', titel: 'Perfekte Substitute: Randoptimum', schwierigkeit: 2, punkte: 8, zeit: 10,
  aufgabe: String.raw`Lea trinkt Kaffee aus Markenkapseln ($x_1$) oder Hausmarkenkapseln ($x_2$). Eine Markenkapsel ist ihr genau doppelt so viel wert wie eine Hausmarkenkapsel: $u = 2x_1 + x_2$. Preise: $p_1 = 3$, $p_2 = 1$, Budget $m = 60$.

a) Bestimmen Sie die MRS und die Steigung der Budgetgeraden.
b) Bestimmen Sie das Optimum und den Nutzen. Begründen Sie grafisch.
c) Der Markenpreis sinkt auf $p_1 = 1{,}5$. Neues Optimum?
d) Bei welchem Preis $p_1$ wäre Lea indifferent zwischen allen Bündeln auf der Budgetgeraden?`,
  hinweis: 'Vergleichen Sie den Nutzen pro Euro: $a/p_1$ gegen $b/p_2$. Kein Tangentialpunkt möglich, weil die MRS konstant ist.',
  loesung: String.raw`**a)** $MRS = -a/b = -2$ (konstant). Steigung der Budgetgeraden: $-p_1/p_2 = -3$.

**b)** Nutzen pro Euro: Gut 1: $2/3 \approx 0{,}67$; Gut 2: $1/1 = 1$. Gut 2 ist besser. Optimum: $x_1^* = 0$, $x_2^* = 60/1 = 60$, $u^* = 60$.
Grafisch: Die Budgetgerade ($-3$) ist steiler als die Indifferenzkurven ($-2$). Die höchste erreichbare Indifferenzkurve berührt die Budgetmenge im Eckpunkt $(0 \mid 60)$ auf der $x_2$-Achse. Randoptimum, keine Tangente.

**c)** Nutzen pro Euro: Gut 1 jetzt $2/1{,}5 \approx 1{,}33 > 1$. Optimum: $x_1^* = 60/1{,}5 = 40$, $x_2^* = 0$, $u^* = 80$. Die Budgetgerade ($-1{,}5$) ist nun flacher als die Indifferenzkurven ($-2$), Eckpunkt auf der $x_1$-Achse.

**d)** Indifferenz, wenn $a/p_1 = b/p_2$, also $2/p_1 = 1 \Rightarrow p_1 = 2$. Dann fällt die Budgetgerade mit einer Indifferenzkurve zusammen (beide Steigung $-2$), jedes Bündel darauf ist optimal.`
},
{
  id: 'a13', thema: 't3', titel: 'Perfekte Komplemente: Optimum im Knick', schwierigkeit: 2, punkte: 7, zeit: 8,
  aufgabe: String.raw`Ein kleines Büro verbraucht pro Paket Papier ($x_2$) genau zwei Druckerpatronen ($x_1$); überzählige Patronen oder Pakete sind nutzlos: $u = \min\{x_1, 2x_2\}$. Preise $p_1 = 2$, $p_2 = 4$, Budget $m = 160$.

a) Wo liegt der Knick der Indifferenzkurven?
b) Bestimmen Sie das optimale Bündel und den Nutzen.
c) Skizzieren Sie Budgetgerade, Indifferenzkurve und Optimum.
d) $p_1$ steigt auf 4. Neues Optimum?
e) Warum funktioniert die Tangentialbedingung hier nicht?`,
  hinweis: 'Im Knick sind beide Argumente des Minimums gleich: $x_1 = 2x_2$.',
  loesung: String.raw`**a)** Knick bei $x_1 = 2x_2$ (zwei Patronen je Paket). Bündel wie (4, 2) oder (10, 5) liegen auf der Knicklinie.

**b)** $x_1 = 2x_2$ in das Budget: $2(2x_2) + 4x_2 = 8x_2 = 160 \Rightarrow x_2^* = 20$, $x_1^* = 40$. Nutzen $u^* = \min\{40, 40\} = 40$. Probe: $80 + 80 = 160$ ✓.

**c)** Budgetgerade von $(0 \mid 40)$ nach $(80 \mid 0)$. L-förmige Indifferenzkurve mit Ecke in $(40 \mid 20)$ auf der Linie $x_2 = x_1/2$. Das Optimum ist diese Ecke.

**d)** $4(2x_2) + 4x_2 = 12x_2 = 160 \Rightarrow x_2^* = 13{,}33$, $x_1^* = 26{,}67$, $u^* = 26{,}67$. Beide Mengen sinken im festen Verhältnis – bei Komplementen gibt es keine Substitution.

**e)** Die Indifferenzkurve hat im Knick keine Steigung (links vom Knick senkrecht, rechts waagerecht). Eine MRS existiert dort nicht, also kann man sie nicht gleich $-p_1/p_2$ setzen. Stattdessen ersetzt die Knickbedingung $x_1 = 2x_2$ die Tangentialbedingung.`
},
{
  id: 'a14', thema: 't3', titel: 'Quasilinear: inneres Optimum und Randoptimum', schwierigkeit: 3, punkte: 10, zeit: 12,
  aufgabe: String.raw`Ein Konsument hat $u(x_1,x_2) = \ln x_1 + x_2$ mit $p_1 = 1$ und $p_2 = 2$.

a) Bestimmen Sie die MRS.
b) Bestimmen Sie das Optimum für $m = 10$.
c) Zeigen Sie, dass $x_1^*$ nicht vom Einkommen abhängt. Wohin fließt zusätzliches Einkommen?
d) Bestimmen Sie das Optimum für $m = 1$.
e) Für welche Einkommen gibt es ein inneres Optimum?`,
  hinweis: String.raw`$\frac{d}{dx_1}\ln x_1 = \frac{1}{x_1}$. Prüfen Sie bei d), ob die Lösung aus b) überhaupt bezahlbar ist.`,
  loesung: String.raw`**a)** $MU_1 = 1/x_1$, $MU_2 = 1$. $MRS = -\dfrac{1/x_1}{1} = -\dfrac{1}{x_1}$.

**b)** Tangentialbedingung: $-\dfrac{1}{x_1} = -\dfrac{p_1}{p_2} = -\dfrac12 \Rightarrow x_1^* = 2$. Budget: $1\cdot 2 + 2x_2 = 10 \Rightarrow x_2^* = 4$. Nutzen $u^* = \ln 2 + 4 \approx 4{,}69$.

**c)** Die Tangentialbedingung $1/x_1 = p_1/p_2$ enthält $m$ nicht, also $x_1^* = p_2/p_1 = 2$ für jedes ausreichende Einkommen. Zusätzliches Einkommen fließt vollständig in Gut 2: $x_2^* = (m - 2)/2$. Die Indifferenzkurven sind vertikal verschobene Kopien, die Einkommens-Konsum-Kurve verläuft senkrecht bei $x_1 = 2$.

**d)** Die innere Lösung $x_1 = 2$ kostet $2 > m = 1$ – nicht bezahlbar. Es bleibt ein **Randoptimum**: Solange $|MRS| = 1/x_1 > 1/2$, also $x_1 < 2$, lohnt es sich, Gut 2 gegen Gut 1 zu tauschen. Der Konsument gibt alles für Gut 1 aus: $x_1^* = 1$, $x_2^* = 0$, $u^* = \ln 1 = 0$. Probe: Das Bündel $(0{,}5 \mid 0{,}25)$ hätte $u = \ln 0{,}5 + 0{,}25 \approx -0{,}44 < 0$ ✓.

**e)** Ein inneres Optimum braucht $m \ge p_1x_1^* = 2$. Für $m < 2$ liegt das Optimum am Rand mit $x_1 = m/p_1$ und $x_2 = 0$.`
},
{
  id: 'a15', thema: 't3', titel: 'Transfer: Mengensubvention oder Pauschalzahlung?', schwierigkeit: 3, punkte: 10, zeit: 12,
  aufgabe: String.raw`Ein Haushalt hat $u = x_1 x_2$ ($x_1$ = Fahrten im Nahverkehr, $x_2$ = sonstiger Konsum), $p_1 = p_2 = 1$, $m = 100$. Die Stadt will den Haushalt unterstützen und erwägt zwei Varianten:

**A:** Mengensubvention $s = 0{,}5$ je Fahrt (der Haushalt zahlt nur noch 0,50).
**B:** Eine Pauschalzahlung in Höhe der Kosten, die Variante A die Stadt kostet.

a) Bestimmen Sie Optimum und Nutzen ohne Eingriff.
b) Bestimmen Sie Optimum, Nutzen und die Kosten für die Stadt bei Variante A.
c) Bestimmen Sie Optimum und Nutzen bei Variante B.
d) Welche Variante stellt den Haushalt besser? Erklären Sie das Ergebnis mit Hilfe der Budgetgeraden und der Tangentialbedingung.
e) Wann könnte die Stadt Variante A dennoch vorziehen?`,
  hinweis: String.raw`Bei $u = x_1x_2$ fließt immer die Hälfte des Einkommens in jedes Gut. Kosten der Stadt bei A: $s \cdot x_1^*$.`,
  loesung: String.raw`**a)** Cobb-Douglas mit Anteilen 1/2: $x_1^* = 50$, $x_2^* = 50$, $u = 2500$.

**b)** Neuer Preis $p_1 = 0{,}5$: $x_1^* = \frac12\cdot\frac{100}{0{,}5} = 100$, $x_2^* = \frac12\cdot\frac{100}{1} = 50$. Nutzen $u_A = 100\cdot 50 = 5000$. Kosten der Stadt: $s\cdot x_1^* = 0{,}5\cdot 100 = 50$ €.

**c)** Pauschalzahlung 50 €: $m = 150$, Preise unverändert. $x_1^* = x_2^* = 75$, $u_B = 75\cdot 75 = 5625$.

**d)** $u_B = 5625 > u_A = 5000$: Die Pauschalzahlung stellt den Haushalt bei gleichen Kosten besser. Grund: Variante A dreht die Budgetgerade (Steigung von $-1$ auf $-0{,}5$) und verzerrt das Preisverhältnis – der Haushalt wird in Richtung Fahrten gelenkt, obwohl er bei wahren Preisen anders wählen würde. Variante B verschiebt die Gerade parallel; der Haushalt entscheidet beim unverzerrten Preisverhältnis. Grafisch: Das Bündel A (100, 50) kostet zu Marktpreisen genau 150 € und liegt damit **auf** der Budgetgeraden von B. Der Haushalt könnte es unter B wählen, zieht aber (75, 75) vor – also ist B mindestens so gut, und wegen der strengen Konvexität streng besser. Im Punkt A gilt zudem $MRS = -x_2/x_1 = -0{,}5 \neq -1$: keine Tangente an die wahren Preise.

**e)** Wenn das Ziel nicht die Nutzenmaximierung des Haushalts, sondern eine Lenkung ist – etwa mehr Nahverkehr aus Umweltgründen (positive externe Effekte, Thema 7.2). Unter A fährt der Haushalt 100-mal, unter B nur 75-mal.`
},
{
  id: 'ub1-1', thema: 't3', titel: 'Luisa: Kartoffeln und Cola', schwierigkeit: 1, punkte: 8, zeit: 10, quelle: 'Übungsblatt 1, Aufgabe 1',
  aufgabe: String.raw`Luisa konsumiert Kartoffeln ($x_1$, 2 € je Päckchen) und Cola ($x_2$, 1 € je Flasche) und gibt ihr Einkommen von 200 € vollständig aus.

a) Stellen Sie die Budgetbeschränkung auf.
b) Maximale Menge Kartoffeln bzw. Cola?
c) Budgetgerade nach $x_2$ auflösen und zeichnen.
d) Entspricht der Absolutbetrag der Steigung dem (umgekehrten) Preisverhältnis?
e) Luisa möchte eine Flasche Cola mehr. Auf wie viele Päckchen Kartoffeln muss sie verzichten? Zeigen Sie es mathematisch.`,
  loesung: String.raw`**a)** $2x_1 + 1x_2 \le 200$; Budgetgerade $2x_1 + x_2 = 200$.

**b)** Nur Kartoffeln: $200/2 = 100$ Päckchen. Nur Cola: $200/1 = 200$ Flaschen.

**c)** $x_2 = 200 - 2x_1$. Gerade von $(0 \mid 200)$ nach $(100 \mid 0)$.

**d)** $|{-2}| = 2 = p_1/p_2 = 2/1$ ✓. Die Steigung ist das Preisverhältnis des horizontalen zum vertikalen Gut; „umgekehrt“ bezogen auf die Achsenabschnitte ($m/p_1 : m/p_2 = 1 : 2$).

**e)** Aus $p_1\Delta x_1 + p_2\Delta x_2 = 0$ mit $\Delta x_2 = +1$: $2\Delta x_1 + 1 = 0 \Rightarrow \Delta x_1 = -\frac{p_2}{p_1} = -0{,}5$. Sie muss auf ein halbes Päckchen Kartoffeln verzichten. Alternativ: Eine Flasche kostet 1 €, ein Päckchen 2 € – also ein halbes Päckchen.`
},
{
  id: 'ub1-2', thema: 't3', titel: 'Tim: Brot, Milch und Mehrwertsteuer', schwierigkeit: 2, punkte: 8, zeit: 10, quelle: 'Übungsblatt 1, Aufgabe 2',
  aufgabe: String.raw`Tim gibt 240 € für Brot ($x_1$, 1 €) und Milch ($x_2$, 3 €) aus.

a) Bestimmen Sie die Budgetgerade und zeichnen Sie sie.
b) Die Regierung plant eine Mehrwertsteuer von $33\tfrac13\,\%$ auf alle Lebensmittel. Zeigen Sie grafisch und analytisch die Wirkung auf das Budget.
c) Die Steuer kommt nicht; stattdessen verdoppelt sich der Brotpreis und der Milchpreis verdreifacht sich. Wird die Budgetgerade flacher, steiler oder bleibt die Steigung gleich?`,
  hinweis: String.raw`$33\tfrac13\,\% = 1/3$, also $1 + \tau = 4/3$.`,
  loesung: String.raw`**a)** $x_1 + 3x_2 = 240 \Rightarrow x_2 = 80 - \frac13 x_1$. Abschnitte 240 ($x_1$) und 80 ($x_2$), Steigung $-1/3$.

**b)** Analytisch: $(1+\tfrac13)(x_1 + 3x_2) = 240 \Leftrightarrow x_1 + 3x_2 = 240\cdot\tfrac34 = 180$. Neue Gerade $x_2 = 60 - \frac13x_1$, Abschnitte 180 und 60, Steigung unverändert. Einkommensverlust $\frac{\tau}{1+\tau}m = \frac{1/3}{4/3}\cdot 240 = 60$ € – wie eine Einkommensteuer von 25 %. Grafisch: Parallelverschiebung nach innen; das Dreieck zwischen alter und neuer Gerade sind die nicht mehr leistbaren Bündel.

**c)** Neue Preise $p_1 = 2$, $p_2 = 9$: $x_2 = \frac{240}{9} - \frac29 x_1 \approx 26{,}7 - 0{,}22x_1$. Alte Steigung $-1/3 \approx -0{,}33$, neue Steigung $-2/9 \approx -0{,}22$. Betragsmäßig kleiner: Die Gerade wird **flacher**. Brot ist relativ zu Milch billiger geworden, obwohl beide Preise gestiegen sind. Zusätzlich verschiebt sie sich nach innen (beide Abschnitte sinken: 120 und 26,7).`
},
{
  id: 'ub1-3', thema: 't3', titel: 'Anna: Twix und Snickers', schwierigkeit: 2, punkte: 6, zeit: 8, quelle: 'Übungsblatt 1, Aufgabe 3',
  aufgabe: String.raw`Anna trifft über Kombinationen (Twix, Snickers) folgende Aussagen:

1. $(5, 1) \prec (5, 2)$
2. $(2, 4) \succ (2, 5)$
3. $(5, 1) \sim (2, 5)$
4. $(5, 2) \sim (2, 4)$

a) Welche Bündel liegen jeweils auf einer Indifferenzkurve? Zeichnen Sie Annas Indifferenzkurven (normale Präferenzen unterstellt).
b) Erklären Sie kurz, weshalb diese Präferenzordnung in der mikroökonomischen Modellbildung ausgeschlossen wird.`,
  hinweis: 'Aussage 2 widerspricht einer Grundannahme. Und: Was passiert, wenn man die beiden Indifferenzkurven aus 3 und 4 einzeichnet?',
  loesung: String.raw`**a)** Nach Aussage 3 liegen $(5,1)$ und $(2,5)$ auf einer Indifferenzkurve $I_1$; nach Aussage 4 liegen $(5,2)$ und $(2,4)$ auf einer Kurve $I_2$. Zeichnet man beide als fallende, konvexe Kurven, dann liegt $I_2$ bei $x_1 = 5$ **oberhalb** von $I_1$ (2 > 1), bei $x_1 = 2$ aber **unterhalb** (4 < 5). Die Kurven müssen sich also schneiden.

**b)** Zwei Verstöße:
– **Monotonie**: Aussage 2 sagt, dass $(2,4)$ besser ist als $(2,5)$ – weniger Snickers bei gleich viel Twix wird vorgezogen. Bei Gütern gilt „mehr ist besser“; Aussage 1 bestätigt das für Twix 5, Aussage 2 widerspricht ihm.
– **Transitivität**: Aus 1 und 4 folgt $(5,1) \prec (5,2) \sim (2,4)$; aus 3 folgt $(5,1) \sim (2,5)$. Mit Monotonie wäre $(2,5) \succ (2,4)$, also $(5,1) \sim (2,5) \succ (2,4) \sim (5,2) \succ (5,1)$ – ein Kreisschluss. Sich schneidende Indifferenzkurven sind genau die grafische Form dieses Widerspruchs (Folie 33). Solche Präferenzen lassen sich nicht durch eine Nutzenfunktion darstellen und haben kein bestes Bündel.`
},
{
  id: 'ub1-4', thema: 't3', titel: 'Marie: Nudeln und Limonade', schwierigkeit: 2, punkte: 10, zeit: 12, quelle: 'Übungsblatt 1, Aufgabe 4',
  aufgabe: String.raw`Marie hat $u(x_1,x_2) = x_1x_2$ und die Budgetbeschränkung $4x_1 + 2x_2 = 80$. Ermitteln Sie das nutzenmaximale Bündel

a) mit dem Substitutionsverfahren,
b) mit dem Lagrange-Verfahren.

Welche Einkommensanteile gibt Marie für die Güter aus? Stimmen sie mit Folie 77 überein?`,
  loesung: String.raw`**a) Substitutionsverfahren.** Budget nach $x_2$: $x_2 = 40 - 2x_1$. Einsetzen: $u(x_1) = x_1(40 - 2x_1) = 40x_1 - 2x_1^2$. Ableiten und null setzen: $u'(x_1) = 40 - 4x_1 = 0 \Rightarrow x_1^* = 10$. Dann $x_2^* = 40 - 20 = 20$. (Zweite Ableitung $-4 < 0$: Maximum.) Nutzen $u^* = 200$.

**b) Lagrange.** $\mathcal{L} = x_1x_2 - \lambda(4x_1 + 2x_2 - 80)$.
(1) $x_2 - 4\lambda = 0$ &nbsp; (2) $x_1 - 2\lambda = 0$ &nbsp; (3) $4x_1 + 2x_2 = 80$.
(1)/(2): $\dfrac{x_2}{x_1} = \dfrac{4}{2} = 2 \Rightarrow x_2 = 2x_1$. In (3): $4x_1 + 4x_1 = 80 \Rightarrow x_1^* = 10$, $x_2^* = 20$, $\lambda = x_1/2 = 5$. Probe: $40 + 40 = 80$ ✓.

**Einkommensanteile.** Gut 1: $p_1x_1/m = 40/80 = 1/2$. Gut 2: $40/80 = 1/2$. Folie 77: Bei $u = x_1^c x_2^d$ mit $c = d = 1$ sind die Anteile $\frac{c}{c+d} = \frac{d}{c+d} = \frac12$ – stimmt überein.`
}
);
