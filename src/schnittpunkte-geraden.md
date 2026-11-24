---
title: Schnittpunkte von Geraden
toc: true
---

# Schnittpunkte von Geraden

Am Schnittpunkt haben beide Geraden denselben x-Wert und denselben y-Wert. Du kannst den Punkt in der Zeichnung ablesen oder ausrechnen.

```js
import * as Inputs from "npm:@observablehq/inputs";
```

```js
const sm1 = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "Steigung von f"}));
```
```js
const sb1 = view(Inputs.range([-4, 4], {value: -1, step: 1, label: "y-Achsenabschnitt von f"}));
```
```js
const sm2 = view(Inputs.range([-3, 3], {value: -1, step: 1, label: "Steigung von g"}));
```
```js
const sb2 = view(Inputs.range([-4, 4], {value: 2, step: 1, label: "y-Achsenabschnitt von g"}));
```

```js
const sFmt = (zahl) => new Intl.NumberFormat("de-DE", {maximumFractionDigits: 3}).format(zahl);
const sTerm = (m, b) => `${sFmt(m)} · x ${b < 0 ? "−" : "+"} ${sFmt(Math.abs(b))}`;
const sX = sm1 === sm2 ? null : (sb2 - sb1) / (sm1 - sm2);
const sY = sX === null ? null : sm1 * sX + sb1;
const sGleich = (zahl) => Number.isInteger(zahl * 1000) ? "=" : "≈";
```

**f: y = ${sTerm(sm1, sb1)}**  
**g: y = ${sTerm(sm2, sb2)}**

## 1. In der Zeichnung

Die blaue Gerade ist f, die rote Gerade ist g. Der orange Punkt zeigt den Schnittpunkt, wenn er im Bild liegt.

```js
{
  const f = [{x: -8, y: sm1 * -8 + sb1}, {x: 8, y: sm1 * 8 + sb1}];
  const g = [{x: -8, y: sm2 * -8 + sb2}, {x: 8, y: sm2 * 8 + sb2}];
  const schnitt = sX !== null && Math.abs(sX) <= 8 && Math.abs(sY) <= 8 ? [{x: sX, y: sY}] : [];
  display(Plot.plot({
    width, aspectRatio: 1, margin: 40,
    x: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "x →"},
    y: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "↑ y"},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}), Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(f, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 4, clip: true}),
      Plot.line(g, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 2, strokeDasharray: "6,3", clip: true}),
      Plot.dot(schnitt, {x: "x", y: "y", r: 7, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```

## 2. In der Wertetabelle

Suche einen x-Wert, bei dem beide Geraden denselben y-Wert haben. Das ist ein Schnittpunkt. Die Tabelle zeigt nur einige x-Werte. Der Schnittpunkt kann auch zwischen diesen Werten liegen.

```js
{
  const xs = [-2, -1, 0, 1, 2];
  display(html`<table aria-label="Wertetabelle beider Geraden"><tbody>
    <tr><th scope="row">x</th>${xs.map((x) => html`<td>${x}</td>`)}</tr>
    <tr><th scope="row">y von f</th>${xs.map((x) => html`<td>${sm1 * x + sb1}</td>`)}</tr>
    <tr><th scope="row">y von g</th>${xs.map((x) => html`<td>${sm2 * x + sb2}</td>`)}</tr>
  </tbody></table>`);
}
```

## 3. Den Schnittpunkt berechnen

Setze die beiden rechten Seiten der Gleichungen gleich. Löse die Gleichung nach x auf. Setze den x-Wert in eine der Geradengleichungen ein. So berechnest du y.

${sX === null ? (sb1 === sb2 ? "Die Steigungen und y-Achsenabschnitte sind gleich. Die Geraden liegen aufeinander und haben unendlich viele gemeinsame Punkte." : "Die Steigungen sind gleich, die y-Achsenabschnitte verschieden. Die Geraden sind parallel und haben keinen Schnittpunkt.") : `${sTerm(sm1, sb1)} = ${sTerm(sm2, sb2)}  →  ${sFmt(sm1 - sm2)} · x = ${sFmt(sb2 - sb1)}  →  x = ${sFmt(sb2 - sb1)} : ${sFmt(sm1 - sm2)} ${sGleich(sX)} ${sFmt(sX)}.`}

${sX === null ? "" : `Eingesetzt in f: y = ${sFmt(sm1)} · (${sFmt(sb2 - sb1)} : ${sFmt(sm1 - sm2)}) ${sb1 < 0 ? "−" : "+"} ${sFmt(Math.abs(sb1))} ${sGleich(sY)} ${sFmt(sY)}. Der Schnittpunkt ist S(${sGleich(sX) === "≈" ? "≈ " : ""}${sFmt(sX)} | ${sGleich(sY) === "≈" ? "≈ " : ""}${sFmt(sY)}).`}

${sX !== null && (Math.abs(sX) > 8 || Math.abs(sY) > 8) ? "Der Schnittpunkt liegt außerhalb des dargestellten Bildausschnitts." : ""}