---
title: Punktprobe bei Geraden
toc: true
---

# Punktprobe bei Geraden

Mit der Punktprobe prüfst du, ob ein Punkt auf einer Geraden liegt. Du kannst auch prüfen, ob er über oder unter der Geraden liegt.

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const pm = view(Inputs.range([-2, 2], {value: 2, step: 0.5, label: "m – Steigung"}));
```

```js
const pb = view(Inputs.range([-3, 3], {value: -1, step: 1, label: "b – y-Achsenabschnitt"}));
```

```js
const px = view(Inputs.range([-3, 3], {value: 1, step: 1, label: "x-Koordinate von P"}));
```

```js
const py = view(Inputs.range([-6, 6], {value: 2, step: 0.5, label: "y-Koordinate von P"}));
```

```js
const pFmt = (zahl) => String(zahl).replace(".", ",");
const pZeichen = pb < 0 ? "−" : "+";
const pGerade = pm * px + pb;
```

Unsere Gerade: **y = ${pFmt(pm)} · x ${pZeichen} ${pFmt(Math.abs(pb))}**. Der Punkt ist **P(${pFmt(px)} | ${pFmt(py)})**.

## 1. Die x-Koordinate einsetzen

Setze den x-Wert von P in die Geradengleichung ein. So berechnest du den y-Wert der Geraden an dieser Stelle:

**y = ${pFmt(pm)} · (${pFmt(px)}) ${pZeichen} ${pFmt(Math.abs(pb))} = ${pFmt(pm * px)} ${pZeichen} ${pFmt(Math.abs(pb))} = ${pFmt(pGerade)}**

## 2. Die y-Werte vergleichen

Die Gerade hat bei x = ${pFmt(px)} den y-Wert **${pFmt(pGerade)}**. Die y-Koordinate von P ist **${pFmt(py)}**.

${py === pGerade ? `Die Werte sind gleich. P liegt auf der Geraden.` : py > pGerade ? `Die y-Koordinate von P ist größer. P liegt oberhalb der Geraden.` : `Die y-Koordinate von P ist kleiner. P liegt unterhalb der Geraden.`}

## 3. Die Zeichnung

Der orange Punkt ist P. Der grüne Punkt liegt bei demselben x-Wert auf der blauen Geraden.

```js
{
  const linie = [{x: -10, y: pm * -10 + pb}, {x: 10, y: pm * 10 + pb}];
  display(koordinatensystem(Plot, {
    width, aspectRatio: 1, margin: 40,
    x: {domain: [-10, 10], grid: true, ticks: d3.range(-10, 11), label: "x →"},
    y: {domain: [-10, 10], grid: true, ticks: d3.range(-10, 11), label: "↑ y"},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.dot([{x: px, y: pGerade}], {x: "x", y: "y", r: 9, fill: "#16a34a"}),
      Plot.dot([{x: px, y: py}], {x: "x", y: "y", r: 5, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```