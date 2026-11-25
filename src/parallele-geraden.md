---
title: Parallele Geraden
toc: true
---

# Parallele Geraden

Wir vergleichen zwei Geraden. Stelle ihre Steigungen und y-Achsenabschnitte ein. Die Gleichungen, die Tabelle und die Zeichnung ändern sich mit.

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const fm = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "Steigung von f"}));
```
```js
const fb = view(Inputs.range([-4, 4], {value: -3, step: 1, label: "y-Achsenabschnitt von f"}));
```
```js
const gm = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "Steigung von g"}));
```
```js
const gb = view(Inputs.range([-4, 4], {value: -1, step: 1, label: "y-Achsenabschnitt von g"}));
```

```js
const gTerm = (m, b) => `${m} · x ${b < 0 ? "−" : "+"} ${Math.abs(b)}`;
```

**f: y = ${gTerm(fm, fb)}**  
**g: y = ${gTerm(gm, gb)}**

## 1. Werte vergleichen

Die Tabelle zeigt die y-Werte beider Geraden. Die letzte Zeile zeigt ihren **senkrechten Abstand**. Dazu rechnest du den kleineren y-Wert vom größeren ab.

```js
{
  const xs = [-2, -1, 0, 1, 2];
  display(html`<table aria-label="Werte und senkrechter Abstand"><tbody>
    <tr><th scope="row">x</th>${xs.map((x) => html`<td>${x}</td>`)}</tr>
    <tr><th scope="row">y von f</th>${xs.map((x) => html`<td>${fm * x + fb}</td>`)}</tr>
    <tr><th scope="row">y von g</th>${xs.map((x) => html`<td>${gm * x + gb}</td>`)}</tr>
    <tr><th scope="row">Abstand</th>${xs.map((x) => html`<td>${Math.abs((fm * x + fb) - (gm * x + gb))}</td>`)}</tr>
  </tbody></table>`);
}
```

## 2. Die Steigungen vergleichen

${fm === gm ? (fb === gb ? "Beide Geraden haben dieselbe Steigung und denselben y-Achsenabschnitt. Sie liegen genau aufeinander und haben unendlich viele gemeinsame Punkte." : "Beide Geraden haben dieselbe Steigung, aber verschiedene y-Achsenabschnitte. Sie sind parallel und haben keinen Schnittpunkt. Ihr senkrechter Abstand bleibt gleich.") : "Die Steigungen sind verschieden. Die Geraden schneiden sich in genau einem Punkt. Ihr senkrechter Abstand ändert sich; am Schnittpunkt ist er null."}

## 3. Die Zeichnung

**Blau** ist f, **rot** ist g. Wenn die Geraden gleich sind, liegen beide Linien übereinander.

```js
{
  const f = [{x: -8, y: fm * -8 + fb}, {x: 8, y: fm * 8 + fb}];
  const g = [{x: -8, y: gm * -8 + gb}, {x: 8, y: gm * 8 + gb}];
  display(koordinatensystem(Plot, {
    width, aspectRatio: 1, margin: 40,
    x: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "x →"},
    y: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "↑ y"},
    marks: [
      Plot.line(f, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 4, clip: true}),
      Plot.line(g, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 2, strokeDasharray: "6,3", clip: true})
    ]
  }));
}
```