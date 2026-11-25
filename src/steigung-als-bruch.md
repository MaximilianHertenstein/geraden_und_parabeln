---
title: Steigung als Bruch
toc: true
---

# Steigung als Bruch bestimmen

Manchmal liegt der nächste gut ablesbare Punkt mehrere Kästchen rechts. Gehe dann zuerst mehrere Kästchen nach rechts. Gehe danach nach oben oder unten, bis du wieder auf der Geraden bist.

Teile die Änderung in y-Richtung durch die Änderung in x-Richtung. So erhältst du die Steigung.

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const dx = view(Inputs.range([1, 4], {value: 2, step: 1, label: "Schritte nach rechts"}));
```
```js
const dy = view(Inputs.range([-3, 3], {value: -1, step: 1, label: "Änderung in y-Richtung"}));
```
```js
const bb = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "b – y-Achsenabschnitt"}));
```

## 1. Das Steigungsdreieck

Starte beim Punkt **P(0 | ${bb})**. Gehe **${dx} nach rechts**. Gehe dann ${dy === 0 ? "weder nach oben noch nach unten" : `${Math.abs(dy)} nach ${dy > 0 ? "oben" : "unten"}`}, bis du wieder auf der Geraden bist. Dort liegt **Q(${dx} | ${bb + dy})**.

```js
{
  const p = {x: 0, y: bb};
  const ecke = {x: dx, y: bb};
  const q = {x: dx, y: bb + dy};
  const m = dy / dx;
  const linie = [{x: -8, y: -8 * m + bb}, {x: 8, y: 8 * m + bb}];
  display(koordinatensystem(Plot, {
    width, aspectRatio: 1, margin: 40,
    x: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "x →"},
    y: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "↑ y"},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.line([p, ecke], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([ecke, q], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([p, q], {x: "x", y: "y", r: 6, fill: "black"}),
      Plot.text([{x: 0, y: bb, text: "P"}, {x: dx, y: bb + dy, text: "Q"}], {x: "x", y: "y", text: "text", dy: -14})
    ]
  }));
}
```

Orange zeigt die Änderung in x-Richtung, Grün die Änderung in y-Richtung. Nach unten ist die y-Änderung negativ.

## 2. Die Steigung berechnen

Für zwei Punkte **P(x<sub>P</sub> | y<sub>P</sub>)** und **Q(x<sub>Q</sub> | y<sub>Q</sub>)** gilt:

**m = (y<sub>Q</sub> − y<sub>P</sub>) : (x<sub>Q</sub> − x<sub>P</sub>)**

Für die Punkte oben ergibt sich:

**m = (${bb + dy} − (${bb})) : (${dx} − 0) = ${dy} : ${dx} = ${dy}/${dx}**

Die beiden x-Werte müssen verschieden sein. Sonst wäre ihr Unterschied null und du müsstest durch null teilen. Das geht nicht.

## 3. Gleichung und Wertetabelle

Der y-Achsenabschnitt ist **b = ${bb}**. Damit lautet die Gleichung:

**y = (${dy}/${dx}) · x ${bb < 0 ? "−" : "+"} ${Math.abs(bb)}**

Wähle x-Werte aus der ${dx}er-Reihe. Dann erhältst du hier y-Werte ohne Komma:

```js
{
  const xs = [-dx, 0, dx];
  const ys = [bb - dy, bb, bb + dy];
  display(html`<table aria-label="Wertetabelle der Geraden"><tbody>
    <tr><th scope="row">x</th>${xs.map((x) => html`<td>${x}</td>`)}</tr>
    <tr><th scope="row">y</th>${ys.map((y) => html`<td>${y}</td>`)}</tr>
  </tbody></table>`);
}
```