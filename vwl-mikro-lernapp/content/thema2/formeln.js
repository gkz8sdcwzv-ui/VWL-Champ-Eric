window.VWL = window.VWL || {};
VWL.formeln = VWL.formeln || [];
VWL.formeln.push(
  { id: 'f2-01', thema: 't2', name: 'Marktgleichgewicht (Bedingung)', formel: String.raw`Q_D(p^*) = Q_S(p^*)`, erklaerung: 'Nachgefragte Menge gleich angebotener Menge. Bei linearen Kurven: Gleichsetzen, nach $p^*$ auflösen, in eine der beiden einsetzen für $Q^*$.' },
  { id: 'f2-02', thema: 't2', name: 'Kurzfristige Angebotskurve (Wohnungsmarkt)', formel: String.raw`Q_S = \bar Q \quad (\text{z. B. } 100), \text{ unabhängig von } p`, erklaerung: 'Vertikale Gerade: Kein Neubau möglich, Menge fix. Dann bestimmt allein die Nachfrage den Preis: $Q_D(p^*) = \\bar Q$.' },
  { id: 'f2-03', thema: 't2', name: 'Überschussnachfrage und Überschussangebot', formel: String.raw`p < p^*: \; Q_D > Q_S \;(\text{Preis steigt}) \qquad p > p^*: \; Q_S > Q_D \;(\text{Preis sinkt})`, erklaerung: 'Begründung, warum der Markt zum Gleichgewicht tendiert. Bei Überschussnachfrage können Anbieter den Preis erhöhen, bei Überschussangebot müssen sie ihn senken.' },
  { id: 'f2-04', thema: 't2', name: 'Lineare Nachfrage- und Angebotsfunktion (Rechenform)', formel: String.raw`Q_D = a - b\,p, \qquad Q_S = c + d\,p \quad\Rightarrow\quad p^* = \frac{a - c}{b + d}`, erklaerung: 'Aus $a - bp = c + dp$. Beispiel $Q_D = 120 - 2p$, $Q_S = 3p - 30$: $p^* = 150/5 = 30$, $Q^* = 60$.' },
  { id: 'f2-05', thema: 't2', name: 'Pareto-Verbesserung und Pareto-Effizienz', formel: String.raw`\text{Pareto-effizient} \iff \nexists\ \text{Tausch, der jemanden besser stellt, ohne jemanden schlechter zu stellen}`, erklaerung: 'Prüfkriterium für jede Allokation: Gibt es noch einen freiwilligen Tausch zu beiderseitigem Vorteil? Wenn ja: ineffizient. Sagt nichts über Gerechtigkeit.' }
);
