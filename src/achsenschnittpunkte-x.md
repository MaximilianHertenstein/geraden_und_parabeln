---
title: Schnittpunkt mit der x-Achse
toc: true
---

# Schnittpunkt mit der x-Achse

Auf der x-Achse ist **y = 0**. Setze y = 0 in die Gleichung ein und löse sie nach x auf.

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const xm = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "m – Steigung"}));
```

```js
const xb = view(Inputs.range([-6, 6], {value: -6, step: 1, label: "b – y-Achsenabschnitt"}));
```

```js
const xFmt = (zahl) => new Intl.NumberFormat("de-DE", {maximumFractionDigits: 3}).format(zahl);
const xSign = xb < 0 ? "−" : "+";
const xTerm = `${xFmt(xm)} · x ${xSign} ${xFmt(Math.abs(xb))}`;
const xWert = xm === 0 ? null : xb === 0 ? 0 : -xb / xm;
const xGerundet = xWert === null ? null : Math.round(xWert * 1000) / 1000;
```

## Die Gleichung lösen

```js
{
  const zeilen = [html`<div>y = ${xTerm}</div>`];
  if (xm === 0) {
    zeilen.push(html`<div>0 = ${xTerm}</div>`);
  } else if (xb === 0) {
    zeilen.push(html`<div>0 = ${xFmt(xm)} · x ${xm === 1 ? "" : `| : ${xFmt(xm)}`}</div>`);
    zeilen.push(html`<div>0 = x</div>`);
  } else {
    zeilen.push(html`<div>0 = ${xTerm} &nbsp; | ${xb < 0 ? "+" : "−"} ${xFmt(Math.abs(xb))}</div>`);
    zeilen.push(html`<div>${xFmt(-xb)} = ${xm === 1 ? "x" : `${xFmt(xm)} · x`} ${xm === 1 ? "" : `| : ${xFmt(xm)}`}</div>`);
    if (xm !== 1) zeilen.push(html`<div>${Math.abs(xWert - xGerundet) > 1e-10 ? "≈ " : ""}${xFmt(xWert)} = x</div>`);
  }
  display(html`<div class="card" style="border-left: 6px solid #2563eb; line-height: 2;">${zeilen}</div>`);
}
```

${xm === 0 ? (xb === 0 ? "Die Gerade liegt auf der x-Achse. Alle Punkte der Geraden liegen auf der x-Achse." : "Die Gerade ist waagerecht und trifft die x-Achse nicht.") : `Nimm den berechneten x-Wert ${Math.abs(xWert - xGerundet) > 1e-10 ? "ungefähr " : ""}${xFmt(xWert)} und y = 0. Der Schnittpunkt ist Sₓ(${Math.abs(xWert - xGerundet) > 1e-10 ? "≈ " : ""}${xFmt(xWert)} | 0).`}

```js
{
  const linie = [{x: -8, y: xm * -8 + xb}, {x: 8, y: xm * 8 + xb}];
  display(koordinatensystem(Plot, {
    width,
    x: {domain: [-8, 8]},
    y: {domain: [-8, 8]},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.dot(xWert === null ? [] : [{x: xWert, y: 0}], {x: "x", y: "y", r: 7, fill: "#f59e0b"})
    ]
  }));
}
```