---
title: Steigungsdreieck und y-Achsenabschnitt
toc: true
---

# Steigungsdreieck und y-Achsenabschnitt

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const smInput = Inputs.range([-3, 3], {value: 2, step: 0.5, label: "m – Steigung"});
const sm = view(smInput);
```

```js
const sbInput = Inputs.range([-3, 3], {value: 1, step: 1, label: "b – y-Achsenabschnitt"});
const sb = view(sbInput);
```

```js
const sFmt = (zahl) => String(zahl).replace(".", ",");
const sSign = sb < 0 ? "−" : "+";
```

Unsere Gerade: **y = ${sFmt(sm)} · x ${sSign} ${sFmt(Math.abs(sb))}**

## 1. Das Steigungsdreieck

```js
{
  const xs = [-2, -1, 0, 1, 2];
  display(html`<table aria-label="Wertetabelle der Geraden"><tbody>
    <tr><th scope="row">x</th>${xs.map((x) => html`<td>${sFmt(x)}</td>`)}</tr>
    <tr><th scope="row">y</th>${xs.map((x) => html`<td>${sFmt(sm * x + sb)}</td>`)}</tr>
  </tbody></table>`);
}
```

In der Tabelle geht x von **0 auf 1**. Dabei ändert sich y von **${sFmt(sb)} auf ${sFmt(sm + sb)}**. Das ist eine Änderung um **${sFmt(sm)}**. Das ist die Zahl, mit der x multipliziert wird.

Auch im Schaubild kannst du das sehen: Gehe von einem Punkt der Geraden **1 nach rechts**. Gehe dann ${sm === 0 ? "nicht nach oben oder unten" : `${sFmt(Math.abs(sm))} nach ${sm > 0 ? "oben" : "unten"}`}, um wieder auf der Geraden zu sein.

Die Zahl, mit der x multipliziert wird, heißt **Steigung**.

```js
{
  const linie = [{x: -6, y: -6 * sm + sb}, {x: 6, y: 6 * sm + sb}];
  const dreiecke = [-2, 1].map((x) => {
    const y = sm * x + sb;
    return [{x, y}, {x: x + 1, y}, {x: x + 1, y: y + sm}];
  });
  display(koordinatensystem(Plot, {
    width,
    x: {domain: [-6, 6]},
    y: {domain: [-10, 10]},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      ...dreiecke.flatMap(([start, ecke, ende]) => [
        Plot.line([start, ecke], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
        Plot.line([ecke, ende], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
        Plot.dot([start, ende], {x: "x", y: "y", r: 5, fill: "black"}),
        Plot.text([{x: start.x + 0.5, y: start.y, text: "1 nach rechts"}], {x: "x", y: "y", text: "text", dy: -12, fontSize: 11}),
        Plot.text([{x: ende.x, y: (ecke.y + ende.y) / 2, text: sm === 0 ? "0" : `${sFmt(Math.abs(sm))} nach ${sm > 0 ? "oben" : "unten"}`}], {x: "x", y: "y", text: "text", dx: 12, textAnchor: "start", fontSize: 11})
      ])
    ]
  }));
}
```

Ein solches Dreieck heißt **Steigungsdreieck**. Beide Dreiecke zeigen dieselbe Steigung: **${sFmt(sm)}**.

## 2. Der y-Achsenabschnitt

```js
display(Inputs.bind(Inputs.range([-3, 3], {step: 0.5, label: "m – Steigung"}), smInput));
```

```js
display(Inputs.bind(Inputs.range([-3, 3], {step: 1, label: "b – y-Achsenabschnitt"}), sbInput));
```

Unsere Gerade: **y = ${sFmt(sm)} · x ${sSign} ${sFmt(Math.abs(sb))}**

```js
{
  const xs = [-2, -1, 0, 1, 2];
  display(html`<table aria-label="Wertetabelle mit x gleich null"><tbody>
    <tr><th scope="row">x</th>${xs.map((x) => html`<td>${sFmt(x)}</td>`)}</tr>
    <tr><th scope="row">y</th>${xs.map((x) => html`<td>${sFmt(sm * x + sb)}</td>`)}</tr>
  </tbody></table>`);
}
```

In der Tabelle steht unter **x = 0** der Wert **${sFmt(sb)}**. Diesen Wert erhältst du, wenn du **0 für x** einsetzt:

**y = ${sFmt(sm)} · 0 ${sSign} ${sFmt(Math.abs(sb))} = ${sFmt(sb)}**

Die Gerade schneidet die y-Achse bei **(0 | ${sFmt(sb)})**. Die Zahl ohne x heißt **y-Achsenabschnitt**.

```js
{
  const linie = [{x: -6, y: -6 * sm + sb}, {x: 6, y: 6 * sm + sb}];
  display(koordinatensystem(Plot, {
    width,
    x: {domain: [-6, 6]},
    y: {domain: [-10, 10]},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.dot([{x: 0, y: sb}], {x: "x", y: "y", r: 8, fill: "#f59e0b", stroke: "black"}),
      Plot.text([{x: 0, y: sb, text: `(0 | ${sFmt(sb)})`}], {x: "x", y: "y", text: "text", dx: 12, dy: -14, textAnchor: "start"})
    ]
  }));
}
```

## Allgemein

Bei **y = m · x + b** ist **m** die Steigung und **b** der y-Achsenabschnitt. Der Schnittpunkt mit der y-Achse ist **(0 | b)**.