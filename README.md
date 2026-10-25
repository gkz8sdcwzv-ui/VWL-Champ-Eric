# VWL Mikro – Lern-App zur Klausurvorbereitung

Lern-App für das Modul „Grundlagen der VWL und Mikroökonomik" (DHBW, Studienbereich Bank). Klausur am 27.11.2026, 120 Minuten, Taschenrechner erlaubt, keine Formelsammlung.

## Starten

**Ohne Installation:** `index.html` doppelklicken. Läuft komplett offline im Browser (Chrome, Safari, Firefox, auch am Handy).

**Über GitHub Pages:** Im Repository unter *Settings → Pages* den Branch `main` und den Ordner `/ (root)` auswählen. Nach ein bis zwei Minuten ist die App unter `https://<benutzername>.github.io/<repo-name>/` erreichbar.

## Was drin ist

| Bereich | Inhalt |
|---|---|
| **Heute** | Countdown, Lerneinheit des Tages, fällige Karten, Fortschritt je Thema |
| **Skripte** | Eigenständig formulierte Lernskripte mit Herleitungen, Beispielen, Fehlerkästen, interaktiven Grafiken und Lernziel-Checkliste |
| **Formel-Drill** | Alle klausurrelevanten Formeln als Karten mit Leitner-Wiederholung (Fach 1 täglich, Fach 2 alle 3 Tage, Fach 3 wöchentlich) |
| **Karten** | Begriffs- und Verständniskarten, gleiche Mechanik |
| **Aufgaben** | Übungsaufgaben im Klausurstil mit Hinweis → Ansatz → vollständiger Lösung und Selbstbewertung; die Original-Übungsblätter vollständig gelöst |
| **Quiz** | Verständnisfragen mit Sofortfeedback und Erklärung |
| **Plan** | Wochenziele vom 26.10. bis zur Klausur, in freier Reihenfolge abhakbar; feste Termine nur für Probeklausuren und Klausur |
| **Fortschritt** | Auswertung, Schwachstellenliste, Export/Import des Lernstands (für den Tutor-Chat) |

Der Lernfortschritt wird im Browser gespeichert (localStorage). Beim Wechsel von Gerät oder Browser: unter *Fortschritt* exportieren und importieren.

## Drucken

In *Skripte* und *Aufgaben* gibt es einen Druck-Button (oder Strg/Cmd + P). Lösungen werden nur gedruckt, wenn sie aufgeklappt sind – so lassen sich Aufgabenblätter ohne Lösungen ausdrucken.

## Struktur

```
index.html          Einstieg
css/style.css       Gestaltung inkl. Druckansicht
js/app.js           Routing, Zustand, Ansichten, Leitner-Logik
js/graphs.js        Interaktive SVG-Grafiken (13 Stück: Budget, Optimum, Substitute, Komplemente, Markt, Gewinnmaximierung, Kostenminimum, Kostenkurven, Arbeitsangebot, Renten, Monopol, Steuer, Externalität)
content/themen.js   Themenliste mit Priorität und Status
content/plan.js     Wochenplan (Ziele je Woche, Termine)
content/thema1/ … thema9/   Je Thema: skript.js (Skript + Lernziele), formeln.js, karten.js, aufgaben.js, quiz.js; Übungsblätter 1–4 gelöst (IDs ub1-* bis ub4-*)
vendor/             marked (Markdown) und KaTeX (Formeln), lokal eingebunden
```

Inhalte sind Markdown mit LaTeX-Formeln (`$...$` und `$$...$$`) in JavaScript-Dateien, damit die App auch per Doppelklick ohne Server funktioniert.

## Urheberrecht

Die Vorlesungsfolien und das Lehrbuch sind **nicht** Teil dieses Repositories. Alle Texte hier sind eigenständige Formulierungen; Folienverweise dienen nur der Orientierung.
