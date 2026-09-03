---
title: Start – Geraden und Parabeln ganz einfach
toc: true
---

# Geraden und Parabeln – ganz einfach verstehen

Hallo! Hier lernst du **zuerst Geraden**, **dann Parabeln**.

Ganz langsam. Schritt für Schritt.
Mit Bildern, die du selbst bewegen kannst.

<div class="card" style="border-left: 6px solid #7c3aed;">

**So lernst du hier – immer gleich. Das hilft deinem Gehirn:**

1. 🔁 **Abrufen:** Ganz kurz wiederholen, was du schon kannst.
2. 👀 **Ich zeige:** Du schaust ein fertiges Beispiel an. Nur schauen.
3. 🔮 **Denke – Rate – Prüfe:** Du rätst zuerst. Dann bewegst du den Regler und prüfst.
4. 🩺 **Mini-Check:** 1 Frage zum Ankreuzen. So merkst du sofort, ob es sitzt.

Du musst nichts auswendig können.
Du sollst **verstehen, was du siehst**.

</div>

<div class="card" style="border-left: 6px solid #2563eb;">

**Merke dir diese 3 Wörter:**

- **x** geht nach **rechts**.
- **y** geht nach **oben**.
- Ein **Punkt** heißt immer **(x | y)**.

Das brauchst du überall.

</div>

## Deine Ziele – das kannst du danach

Wenn du hier fertig bist, kannst du:

- [ ] einen Punkt wie (3 | 2) im Heft finden
- [ ] eine Gerade mit **y = m · x + b** erklären und zeichnen
- [ ] eine Parabel mit **Scheitel** und **Nullstellen** erklären

Hake im Kopf ab. Wenn etwas noch nicht geht, gehe zurück.

## Dein Lern-Weg

### Schritt 1: Geraden

Eine Gerade ist **gerade**. Wie ein Lineal-Strich.

Du lernst in Mini-Schritten (immer nur 1 Neues):

- Was ein Koordinatensystem ist
- Was eine Wertetabelle ist
- Was die **Steigung m** ist (ganz ausführlich)
- Was der **Startwert b** ist
- Was **y = m · x + b** bedeutet

<a href="./geraden">👉 Jetzt mit Geraden starten</a>

### Schritt 2: Parabeln

Eine Parabel ist **gebogen**. Wie ein U. Wie ein Ball, der fliegt.

Du lernst:

- Wieder: Was eine Wertetabelle ist
- Was **Normalform** und **Scheitelpunktform** sind
- Was der **Scheitelpunkt** ist und wie man ihn ausrechnet
- Was die **Diskriminante** ist
- Was die **abc-Formel** ist

<a href="./parabeln">👉 Danach mit Parabeln weiter machen</a>

## Wichtig für alle Bilder

Alle Bilder hier sind gleich:

- Kästchen wie in deinem Heft
- Mitte ist **0**
- nach rechts wird **x größer**
- nach oben wird **y größer**

---

## 🔮 Erst denken, dann schieben

Wir üben gleich die wichtigste Bewegung: **Denke – Rate – Prüfe.**

**Denke:** Die erste Zahl ist x (rechts). Die zweite Zahl ist y (oben).

Was bedeutet die **erste** Zahl bei (2 | 1)? Rate zuerst, dann prüfe unten im Bild:

```js
import * as Inputs from "npm:@observablehq/inputs";
```

```js
const start_q1 = view(Inputs.radio(["2 nach rechts, 1 nach oben", "2 nach oben, 1 nach rechts", "egal, beides geht"], {label: "Was heißt (2 | 1)?"}));
```

${start_q1 === "2 nach rechts, 1 nach oben" ? "✅ **Richtig.** Erste Zahl = x = rechts. Zweite Zahl = y = oben." : start_q1 ? "❌ **Noch nicht.** Typischer Fehler: x und y vertauscht. Merke: **(x | y)** – x kommt zuerst, x geht nach rechts. Stelle unten x=2 und y=1 ein und schaue." : "⬜ Wähle eine Antwort."}

Jetzt **prüfe** mit dem Bild. Stelle genau das ein, was du oben angekreuzt hast. Es gehen auch **Kommazahlen**, zum Beispiel (2,5 | 1,5). Dann liegt der Punkt zwischen zwei Linien:

```js
const px_start = view(Inputs.range([-5, 5], {value: 2, step: 0.5, label: "x – nach rechts"}));
```

```js
const py_start = view(Inputs.range([-5, 5], {value: 1, step: 0.5, label: "y – nach oben"}));
```

```js
display(Plot.plot({
  width,
  aspectRatio: 1,
  x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
  y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
  marks: [
    Plot.ruleX([0], {strokeWidth: 2}),
    Plot.ruleY([0], {strokeWidth: 2}),
    Plot.dot([{x: px_start, y: py_start}], {x: "x", y: "y", r: 8, fill: "#2563eb"}),
    Plot.text([{x: px_start, y: py_start, t: `(${String(px_start).replace(".", ",")} | ${String(py_start).replace(".", ",")})`}], {x: "x", y: "y", text: "t", dy: -18, fontSize: 16, fontWeight: "bold"})
  ]
}))
```

Du siehst: Der Punkt heißt **(${String(px_start).replace(".", ",")} | ${String(py_start).replace(".", ",")})**.

Erste Zahl = x. Zweite Zahl = y.

**Erkläre in eigenen Worten:** Sage laut (oder im Heft): „x geht nach …, y geht nach …". Erst dann weiter.

---

## 🩺 Mini-Check zum Start

```js
const start_q2 = view(Inputs.radio(["genau auf einer Kreuzung", "mitten im Kästchen, zwischen den Linien", "das geht gar nicht"], {label: "Wo liegt (2,5 | 1,5)?"}));
```

${start_q2 === "mitten im Kästchen, zwischen den Linien" ? "✅ **Richtig.** Kommazahlen liegen zwischen den Linien. Darum gibt es hier halbe Schritte." : start_q2 ? "❌ Schau noch einmal: Stelle oben x=2,5 und y=1,5 ein. Liegt der Punkt auf einer Kreuzung oder dazwischen?" : "⬜ Wähle eine Antwort."}

---

Bereit? Dann gehe zu [Geraden](./geraden). Dort beginnt jeder Abschnitt mit 🔁 Abrufen.
