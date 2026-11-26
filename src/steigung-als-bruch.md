---
title: Steigung als Bruch
toc: true
---

# Steigung als Bruch bestimmen

Wir bestimmen die Steigung dieser Geraden:

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

**y = (${dy}/${dx}) · x ${bb < 0 ? "−" : "+"} ${Math.abs(bb)}**

## 1. Das Steigungsdreieck

Starte bei **P(0 | ${bb})**. Gehe **${dx} nach rechts**. ${dy === 0 ? "Dort bist du schon wieder auf der Geraden." : `Gehe dann ${Math.abs(dy)} nach ${dy > 0 ? "oben" : "unten"}, bis du wieder auf der Geraden bist.`} Dort liegt **Q(${dx} | ${bb + dy})**.

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
      Plot.text([{x: 0, y: bb, text: "P"}, {x: dx, y: bb + dy, text: "Q"}], {x: "x", y: "y", text: "text", dy: -14}),
      Plot.text([{x: dx / 2, y: bb, text: `${dx} nach rechts`}], {x: "x", y: "y", text: "text", dy: 16, fontSize: 12}),
      Plot.text([{x: dx, y: bb + dy / 2, text: dy === 0 ? "0" : `${Math.abs(dy)} nach ${dy > 0 ? "oben" : "unten"}`}], {x: "x", y: "y", text: "text", dx: 12, textAnchor: "start", fontSize: 12})
    ]
  }));
}
```

Orange zeigt ${dx} nach rechts. Grün zeigt ${dy === 0 ? "keine Änderung" : `${Math.abs(dy)} nach ${dy > 0 ? "oben" : "unten"}`}.

## 2. Die Steigung berechnen

Teile die Änderung in y-Richtung durch die Schritte nach rechts. Nach unten zählt die Änderung als Minus:

```js
display(html`<math display="block" aria-label="Steigung der Geraden">
  <mi>m</mi><mo>=</mo>
  <mfrac><mrow><mn>${bb + dy}</mn><mo>−</mo><mo>(</mo><mn>${bb}</mn><mo>)</mo></mrow><mrow><mn>${dx}</mn><mo>−</mo><mn>0</mn></mrow></mfrac>
  <mo>=</mo><mfrac><mn>${dy}</mn><mn>${dx}</mn></mfrac>
</math>`);
```

## 3. Die Wertetabelle

Der y-Achsenabschnitt ist **b = ${bb}**.

Für die x-Werte **-${dx}, 0 und ${dx}** erhältst du hier y-Werte ohne Komma:

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

## Das Beispiel verändern

Ändere die Werte mit den Reglern. Die Rechnung, die Tabelle und die Zeichnung ändern sich mit.

```js
const dx = view(Inputs.range([1, 4], {value: 2, step: 1, label: "Schritte nach rechts"}));
```
```js
const dy = view(Inputs.range([-3, 3], {value: -1, step: 1, label: "Änderung in y-Richtung"}));
```
```js
const bb = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "b – y-Achsenabschnitt"}));
```

## Allgemein

Für **P(x<sub>P</sub> | y<sub>P</sub>)** und **Q(x<sub>Q</sub> | y<sub>Q</sub>)** gilt:

<math display="block" aria-label="m gleich y Q minus y P geteilt durch x Q minus x P"><mi>m</mi><mo>=</mo><mfrac><mrow><msub><mi>y</mi><mi>Q</mi></msub><mo>−</mo><msub><mi>y</mi><mi>P</mi></msub></mrow><mrow><msub><mi>x</mi><mi>Q</mi></msub><mo>−</mo><msub><mi>x</mi><mi>P</mi></msub></mrow></mfrac></math>

Die x-Werte müssen verschieden sein. Durch null kannst du nicht teilen.