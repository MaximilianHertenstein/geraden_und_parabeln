---
title: Start – Geraden und Parabeln Schritt für Schritt
toc: true
---

# Punkte im Koordinatensystem

Ein Punkt hat zwei Zahlen: **(x | y)**. Der Strich trennt die beiden Zahlen.

- **x** zeigt nach rechts oder links. Bei positiven Zahlen gehst du nach rechts, bei negativen nach links.
- **y** zeigt nach oben oder unten. Bei positiven Zahlen gehst du nach oben, bei negativen nach unten.

## Die Zahlen eines Punktes

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const start_q1 = view(Inputs.radio(["2 nach rechts", "2 nach oben", "1 nach rechts"], {label: html`Was bedeutet die <strong>erste</strong> Zahl beim Punkt (2 | 1)?`}));
```

${start_q1 === "2 nach rechts" ? "Richtig. Die erste Zahl ist x. Bei x = 2 gehst du vom Ursprung aus 2 nach rechts." : start_q1 ? "Noch nicht. Die erste Zahl ist x. Bei x = 2 gehst du vom Ursprung aus 2 nach rechts." : "Wähle eine Antwort."}

```js
const start_zweite_zahl = view(Inputs.radio(["1 nach oben", "1 nach rechts", "2 nach oben"], {label: html`Was bedeutet die <strong>zweite</strong> Zahl beim Punkt (2 | 1)?`}));
```

${start_zweite_zahl === "1 nach oben" ? "Richtig. Die zweite Zahl ist y. Bei y = 1 gehst du 1 nach oben." : start_zweite_zahl ? "Noch nicht. Die zweite Zahl ist y. Bei y = 1 gehst du 1 nach oben." : "Wähle eine Antwort."}

```js
const start_ganzer_punkt = view(Inputs.radio(["2 nach rechts und 1 nach oben", "1 nach rechts und 2 nach oben", "2 nach oben und 1 nach links"], {label: html`Was bedeuten <strong>beide</strong> Zahlen beim Punkt (2 | 1)?`}));
```

${start_ganzer_punkt === "2 nach rechts und 1 nach oben" ? "Richtig. Gehe vom Ursprung aus zuerst 2 nach rechts und dann 1 nach oben." : start_ganzer_punkt ? "Noch nicht. Die erste Zahl ist x, die zweite ist y. Gehe zuerst 2 nach rechts und dann 1 nach oben." : "Wähle eine Antwort."}

## Den Punkt im Bild ansehen

Die erste Zahl ist **x**, die zweite Zahl ist **y**. Bei (2 | 1) gehst du vom Ursprung (0 | 0) aus 2 nach rechts und 1 nach oben.

Stelle mit den Reglern x = 2 und y = 1 ein. Verändere danach die Werte und beobachte den Punkt. Bei negativen x-Werten gehst du nach links, bei negativen y-Werten nach unten.

```js
const px_start = view(Inputs.range([-5, 5], {value: 2, step: 0.5, label: "x – nach rechts"}));
```

```js
const py_start = view(Inputs.range([-5, 5], {value: 1, step: 0.5, label: "y – nach oben"}));
```

```js
display(koordinatensystem(Plot, {
  width,
  aspectRatio: 1,
  x: {domain: [-6, 6], label: null, grid: true, ticks: 13},
  y: {domain: [-6, 6], label: null, grid: true, ticks: 13},
  marks: [
    Plot.dot([{x: px_start, y: py_start}], {x: "x", y: "y", r: 8, fill: "#2563eb"}),
    Plot.text([{x: px_start, y: py_start, t: `(${String(px_start).replace(".", ",")} | ${String(py_start).replace(".", ",")})`}], {x: "x", y: "y", text: "t", dy: -18, fontSize: 16, fontWeight: "bold"})
  ]
}))
```

Der eingestellte Punkt heißt **(${String(px_start).replace(".", ",")} | ${String(py_start).replace(".", ",")})**.

Auch Kommazahlen sind möglich. Stelle zum Beispiel x = 2,5 und y = 1,5 ein. Der Punkt liegt dann zwischen den Linien. Das Komma gehört zur Zahl; der Strich | trennt x und y.

---

## Eine Frage zum Start

```js
const start_q2 = view(Inputs.radio(["genau auf einer Kreuzung", "mitten im Kästchen, zwischen den Linien", "das geht gar nicht"], {label: "Wo liegt (2,5 | 1,5)?"}));
```

${start_q2 === "mitten im Kästchen, zwischen den Linien" ? "✅ **Richtig.** Kommazahlen liegen zwischen den Linien. Darum gibt es hier halbe Schritte." : start_q2 ? "❌ Schau noch einmal: Stelle oben x=2,5 und y=1,5 ein. Liegt der Punkt auf einer Kreuzung oder dazwischen?" : "⬜ Wähle eine Antwort."}

---

<div class="card" style="border-left: 6px solid #16a34a;">

**Fürs Heft:** Kleines Koordinatensystem von -3 bis 3. Trage (2 | 1) und (2,5 | 1,5) ein. Darunter: „x nach rechts, y nach oben. (x | y)."

</div>

Bereit? Dann weiter zu [Geraden](./alternative/geraden).
