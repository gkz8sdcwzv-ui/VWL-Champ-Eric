window.VWL = window.VWL || {};
/* Wochenplan: Ziele pro Woche, die Eric in beliebiger Reihenfolge abhakt.
   Nur Probeklausuren und Klausur haben feste Termine. Nichts ist nach Datum gesperrt. */
VWL.plan = [
 {
  woche: 1, von: '2026-10-26', bis: '2026-11-01',
  thema: 'Thema 3 Haushaltstheorie – das Fundament',
  meilenstein: 'Optimum mit Lagrange und Substitution sicher rechnen; Übungsblatt 1 fehlerfrei.',
  ziele: [
   'Skript Thema 3 gelesen, alle Lernziele oben im Skript ehrlich abgehakt',
   'Budgetgerade (mit Steuer, Subvention, Rationierung) und die sechs Indifferenzkurven-Typen aus dem Gedächtnis gezeichnet',
   'Aufgaben **A1–A8** (Budget, Präferenzen, Nutzen, MRS) gerechnet und bewertet',
   'Aufgaben **A9–A15** (Optimum, Nachfrage, Sonderfälle) gerechnet und bewertet',
   'Übungsblatt 1 (**UB1-1 bis UB1-4**) erst ohne Lösung gerechnet, dann verglichen',
   'Interaktive Grafiken im Skript ausprobiert: Was passiert mit dem Optimum, wenn $p_1$ oder $m$ steigt?',
   'Formel-Drill an mindestens fünf Tagen; alle Formeln Thema 3 mindestens in Fach 2',
   'Quiz Thema 3 mit über 90 %',
   'Tutor-Chat: „Erklär mir die Steigung der Budgetgeraden“ – und zurückerklären',
   'Tutor-Chat: „Prüf meine Lösung“ mit Foto von Übungsblatt 1',
   'Tutor-Chat zum Wochenabschluss: „Prüfungssimulation Thema 3“ (20 Minuten)'
  ],
  vorschlag: 'Reihenfolge im Skript einhalten (Budget → Präferenzen → Nutzen → Optimum → Nachfrage), weil jeder Abschnitt auf dem vorigen aufbaut. Pro Werktag etwa ein Skriptkapitel plus zwei Aufgaben; am Wochenende Übungsblatt 1 und die Simulation. Formel-Drill immer zuerst, 5 Minuten.',
  termine: []
 },
 {
  woche: 2, von: '2026-11-02', bis: '2026-11-08',
  thema: 'Thema 4 Unternehmenstheorie – die Spiegelseite',
  meilenstein: 'Kostenkurven blind zeichnen; Kostenminimum und Angebotsfunktion herleiten.',
  ziele: [
   'Skript Thema 4 gelesen, Lernziele abgehakt',
   'Parallele erkannt und in eigenen Worten erklärt: Isoquante ↔ Indifferenzkurve, Isokostengerade ↔ Budgetgerade, $MP_1/MP_2 = w_1/w_2$ ↔ $MU_1/MU_2 = p_1/p_2$',
   'Kostenkurven-Diagramm (MC, AC, AVC) dreimal aus dem Gedächtnis gezeichnet: MC schneidet AC und AVC im Minimum',
   'Aufgaben **B1–B8** (Technologie, Isogewinnlinie, Gewinnmaximierung, Isokostengerade) gerechnet und bewertet',
   'Aufgaben **B9–B15** (Kostenminimierung, Lagrange, Kostenkurven, Angebot) gerechnet und bewertet',
   'Übungsblatt 2 (**UB2-1 bis UB2-3**) erst ohne Lösung gerechnet, dann verglichen',
   'Thema 1 und 2 kompakt: Skripte gelesen, Aufgaben **E1–E3** und **M1–M5** gerechnet, Quiz Thema 1 und 2 gespielt',
   'Wiederholung Thema 3: zwei Optimum-Aufgaben ohne Skript, Formeln Thema 3 auf ein leeres Blatt geschrieben',
   'Quiz Thema 4 mit über 80 %',
   'Tutor-Chat: „Prüf meine Lösung“ mit Foto von Übungsblatt 2',
   'Tutor-Chat zum Wochenabschluss: „Prüfungssimulation Thema 3 und 4“, danach Fortschritt exportieren und einfügen'
  ],
  vorschlag: 'Thema 4 zuerst, Thema 1 und 2 am Wochenende in einer Stunde – sie sind leichter und brauchen kaum Rechnung. Wenn die Zeit knapp wird: Thema 4 vollständig, bei Thema 1 kürzen.',
  termine: []
 },
 {
  woche: 3, von: '2026-11-09', bis: '2026-11-15',
  thema: 'Arbeitsmarkt, Markteffizienz, Staat – und die erste Probeklausur',
  meilenstein: 'Probeklausur 1 mit mindestens 60 % der Punkte.',
  ziele: [
   'Skript Thema 5 gelesen: Arbeitsangebot ist Haushaltstheorie, Arbeitsnachfrage ist Unternehmenstheorie',
   'Einkommens- und Substitutionseffekt einer Lohnerhöhung erklärt und gezeichnet (A → B → C)',
   'Aufgaben **C1–C7** gerechnet; Übungsblatt 3 (**UB3-1, UB3-2**) erst ohne Lösung, dann verglichen',
   'Skript Thema 6 gelesen; Aufgaben **D1–D5**: Konsumenten- und Produzentenrente grafisch und rechnerisch bestimmt',
   'Skript Thema 8 gelesen; Aufgaben **H1–H6**: Preiskontrollen, Steuerkeil, Inzidenz, Subvention gezeichnet und berechnet',
   'Interaktive Grafiken zu Renten und Steuer ausprobiert: Was passiert mit dem roten Dreieck?',
   'Quiz Thema 5, 6, 8 gespielt',
   'Formeln aller bisherigen Themen einmal komplett durchgegangen (vor der Probeklausur)',
   'Probeklausur 1 unter Realbedingungen geschrieben',
   'Nachbereitung: jede Aufgabe mit Punktverlust noch einmal gerechnet, Fehlertypen notiert',
   'Tutor-Chat: Fotos der Probeklausur schicken, Fehler besprechen'
  ],
  vorschlag: 'Montag/Dienstag Thema 5, Mittwoch Thema 6, Donnerstag/Freitag Thema 8, Samstag Probeklausur, Sonntag Nachbereitung. Die Probeklausur nicht verschieben – sie zeigt, wo du wirklich stehst.',
  termine: [
   { datum: '2026-11-14', titel: 'PROBEKLAUSUR 1', hinweis: 'Schwerpunkt Thema 1–6 und 8. Ruhiger Raum, Papier, Taschenrechner, keine Formelsammlung, 120 Minuten am Stück, Handy aus. Danach 15 Minuten Pause, erst dann Lösung ansehen.' }
  ]
 },
 {
  woche: 4, von: '2026-11-16', bis: '2026-11-22',
  thema: 'Marktversagen, Spieltheorie – und die zweite Probeklausur',
  meilenstein: 'Probeklausur 2 mit mindestens 75 %; komplette Formelsammlung aus dem Gedächtnis.',
  ziele: [
   'Skript Thema 7.1 Monopol gelesen; Aufgaben **G1–G4**: Cournot-Punkt, Monopolpreis, Wohlfahrtsverlust gerechnet und gezeichnet',
   'Monopol-Grafik dreimal aus dem Gedächtnis gezeichnet (Preis auf der Nachfrage, nicht im Schnittpunkt!)',
   'Übungsblatt 4 (**UB4-1, UB4-2**) erst ohne Lösung gerechnet, dann verglichen',
   'Skript Thema 7.2 externe Effekte gelesen; Aufgaben **G5–G7**: Pigou-Steuer berechnet, Coase angewendet',
   'Skript Thema 7.3 öffentliche Güter und Thema 9 Spieltheorie gelesen; Aufgaben **G8** und **S1–S4**: Nash-Gleichgewicht und Rückwärtsinduktion',
   'Quiz Thema 7 und 9 gespielt',
   'Komplette Formelsammlung aller Themen auf leere Blätter geschrieben (30 Minuten), mit der App verglichen, Lücken in Fach 1 zurückgestuft',
   'Alle zwölf Standardgrafiken blind gezeichnet und beschriftet',
   'Probeklausur 2 unter Realbedingungen geschrieben',
   'Nachbereitung: Schwachstellenliste für die letzte Woche geschrieben (maximal fünf Punkte)',
   'Tutor-Chat: Fehler besprechen, Schwachstellenliste abstimmen, Fortschritt exportieren'
  ],
  vorschlag: 'Montag/Dienstag Monopol und Übungsblatt 4, Mittwoch externe Effekte, Donnerstag öffentliche Güter und Spieltheorie, Freitag Formelsammlung und Grafiken, Samstag Probeklausur, Sonntag Nachbereitung.',
  termine: [
   { datum: '2026-11-21', titel: 'PROBEKLAUSUR 2', hinweis: 'Gesamter Stoff. Realbedingungen wie bei Probeklausur 1. Ziel: mindestens 75 % der Punkte.' }
  ]
 },
 {
  woche: 5, von: '2026-11-23', bis: '2026-11-27',
  thema: 'Letzte Woche: Schwachstellen, Probeklausur 3, Ruhe',
  meilenstein: 'Klausurreife. Nichts Neues mehr.',
  ziele: [
   'Schwachstellenliste abgearbeitet: je Punkt den Skriptabschnitt gelesen und zwei Aufgaben gerechnet',
   'Formel-Drill: alles, was nicht in Fach 3 ist, bis es sitzt',
   'Alle Standardgrafiken noch einmal blind gezeichnet',
   'Tutor-Chat: „Prüfungssimulation gesamter Stoff“ (20 Minuten)',
   'Probeklausur 3 geschrieben und nur noch kleine Lücken geschlossen',
   'Tag vor der Klausur: maximal 45 Minuten Formel-Drill und Grafiken, Taschenrechner, Stifte, Studierendenausweis bereitgelegt, früh geschlafen'
  ],
  vorschlag: 'Montag/Dienstag Schwachstellen, Mittwoch Probeklausur 3, Donnerstag nur Wiederholung. In der Klausur: zuerst alle Aufgaben überfliegen, mit der sichersten beginnen, bei jeder Rechenaufgabe den Ansatz hinschreiben – Ansätze geben Punkte, auch ohne Endergebnis.',
  termine: [
   { datum: '2026-11-25', titel: 'PROBEKLAUSUR 3', hinweis: 'Gesamter Stoff, die schwerste der drei. Danach nur noch kleine Lücken schließen, nichts Neues anfangen.' },
   { datum: '2026-11-27', titel: 'KLAUSUR', hinweis: '120 Minuten. Pro Punkt etwa eine Minute, Rest zum Prüfen. Ansatz immer hinschreiben.' }
  ]
 }
];
