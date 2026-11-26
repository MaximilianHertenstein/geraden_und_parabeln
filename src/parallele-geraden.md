---
title: Parallele Geraden
toc: true
---

# Parallele Geraden

Wir vergleichen diese beiden Geraden:

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
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

Bei **x = 0** ist der y-Wert von f **${fb}** und der y-Wert von g **${gb}**. Der senkrechte Abstand ist **${Math.max(fb, gb)} − (${Math.min(fb, gb)}) = ${Math.abs(fb - gb)}**.

## 2. Die Steigungen vergleichen

Die Steigung von f ist **${fm}**, die Steigung von g ist **${gm}**.

${fm === gm ? (fb === gb ? "Die Steigungen und y-Achsenabschnitte sind gleich. Die Geraden liegen aufeinander." : "Die Steigungen sind gleich, die y-Achsenabschnitte verschieden. Die Geraden sind parallel und schneiden sich nicht. Ihr senkrechter Abstand bleibt gleich.") : "Die Steigungen sind verschieden. Die Geraden schneiden sich in einem Punkt. Dort ist ihr senkrechter Abstand null."}

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

## Das Beispiel verändern

Ändere die Werte mit den Reglern. Die Tabelle und die Zeichnung ändern sich mit.

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

## Allgemein

- Gleiche Steigung, verschiedene y-Achsenabschnitte: Die Geraden sind parallel und haben keinen Schnittpunkt.
- Gleiche Steigung, gleicher y-Achsenabschnitt: Die Geraden liegen aufeinander und haben unendlich viele gemeinsame Punkte.
- Verschiedene Steigungen: Die Geraden schneiden sich in genau einem Punkt.