---
title: Schnittpunkt mit der y-Achse
toc: true
---

# Schnittpunkt mit der y-Achse

Wir suchen den Punkt, an dem die Gerade die y-Achse trifft. Verändere die Gerade mit den Reglern.

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const am = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "m – Steigung"}));
```

```js
const ab = view(Inputs.range([-4, 4], {value: -4, step: 1, label: "b – y-Achsenabschnitt"}));
```

```js
const aFmt = (zahl) => new Intl.NumberFormat("de-DE", {maximumFractionDigits: 3}).format(zahl);
const aVorzeichen = ab < 0 ? "−" : "+";
```

Unsere Gerade: **y = ${aFmt(am)} · x ${aVorzeichen} ${aFmt(Math.abs(ab))}**

```js
{
  const xs = [0, 1, 2, 3];
  display(html`<table aria-label="Wertetabelle der Geraden"><tbody>
    <tr><th scope="row">x</th>${xs.map((x) => html`<td>${aFmt(x)}</td>`)}</tr>
    <tr><th scope="row">y</th>${xs.map((x) => html`<td>${aFmt(am * x + ab)}</td>`)}</tr>
  </tbody></table>`);
}
```

Auf der y-Achse ist **x = 0**. In der Wertetabelle steht darunter **y = ${aFmt(ab)}**.

Diesen y-Wert kannst du auch berechnen. Setze **x = 0** ein:

**y = ${aFmt(am)} · 0 ${aVorzeichen} ${aFmt(Math.abs(ab))} = ${aFmt(ab)}**

Nimm **x = 0** und den berechneten Wert **y = ${aFmt(ab)}**. Zusammen ergeben sie den Schnittpunkt **Sᵧ(0 | ${aFmt(ab)})**.

Der orange Punkt zeigt den Schnittpunkt mit der y-Achse.

```js
{
  const linie = [{x: -8, y: am * -8 + ab}, {x: 8, y: am * 8 + ab}];
  display(koordinatensystem(Plot, {
    width, aspectRatio: 1, margin: 40,
    x: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "x →"},
    y: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "↑ y"},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.dot([{x: 0, y: ab}], {x: "x", y: "y", r: 7, fill: "#f59e0b"})
    ]
  }));
}
```

Bei y = m · x + b kannst du den y-Achsenabschnitt b auch direkt ablesen. Weiter zum [Schnittpunkt mit der x-Achse](./achsenschnittpunkte-x).