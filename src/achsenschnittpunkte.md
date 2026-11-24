---
title: Achsenschnittpunkte von Geraden
toc: true
---

# Achsenschnittpunkte von Geraden

Wir suchen die Punkte, an denen eine Gerade die x-Achse und die y-Achse trifft. Verändere die Gerade mit den Reglern. Die Tabelle, die Rechnung und die Zeichnung ändern sich mit.

```js
import * as Inputs from "npm:@observablehq/inputs";
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
const aX = am === 0 ? null : -ab / am;
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

## 1. Schnittpunkt mit der y-Achse

Auf der y-Achse ist x = 0. Wir setzen x = 0 in die aktuelle Gleichung ein:

**y = ${aFmt(am)} · 0 ${aVorzeichen} ${aFmt(Math.abs(ab))} = ${aFmt(ab)}**

Der Schnittpunkt ist **Sᵧ(0 | ${aFmt(ab)})**. Du kannst den y-Wert auch direkt als b aus der Gleichung ablesen.

## 2. Schnittpunkt mit der x-Achse

Auf der x-Achse ist y = 0. Setze y = 0 und löse die Gleichung nach x auf.

${am !== 0 ? `0 = ${aFmt(am)} · x ${aVorzeichen} ${aFmt(Math.abs(ab))}  →  ${aFmt(am)} · x = ${aFmt(-ab)}  →  x = ${aFmt(-ab)} : ${aFmt(am)}${Number.isInteger(aX * 1000) ? " = " : " ≈ "}${aFmt(aX)}. Der Schnittpunkt ist Sₓ(${Number.isInteger(aX * 1000) ? "" : "≈ "}${aFmt(aX)} | 0).` : ab === 0 ? "Hier ist y = 0 für alle x. Die Gerade liegt auf der x-Achse; alle ihre Punkte sind Schnittpunkte." : "Hier ist die Gerade waagerecht und liegt nicht auf der x-Achse. Es gibt keinen Schnittpunkt mit der x-Achse."}

## 3. Die Schnittpunkte in der Zeichnung

Der orange Punkt liegt auf der y-Achse. Gibt es einen Schnittpunkt mit der x-Achse, ist er grün markiert.

```js
{
  const linie = [{x: -8, y: am * -8 + ab}, {x: 8, y: am * 8 + ab}];
  display(Plot.plot({
    width, aspectRatio: 1, margin: 40,
    x: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "x →"},
    y: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "↑ y"},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}), Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.dot([{x: 0, y: ab}], {x: "x", y: "y", r: 7, fill: "#f59e0b"}),
      Plot.dot(aX === null ? [] : [{x: aX, y: 0}], {x: "x", y: "y", r: 6, fill: "#16a34a"})
    ]
  }));
}
```