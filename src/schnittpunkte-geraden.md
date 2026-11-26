---
title: Schnittpunkte von Geraden
toc: true
---

# Schnittpunkte von Geraden

Wir suchen den Schnittpunkt dieser Geraden:

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

```js
const sFmt = (zahl) => new Intl.NumberFormat("de-DE", {maximumFractionDigits: 3}).format(zahl === 0 ? 0 : zahl);
const sTerm = (m, b) => `${sFmt(m)} · x ${b < 0 ? "−" : "+"} ${sFmt(Math.abs(b))}`;
const sX = sm1 === sm2 ? null : sb2 === sb1 ? 0 : (sb2 - sb1) / (sm1 - sm2);
const sY = sX === null ? null : sm1 * sX + sb1;
const sGleich = (zahl) => Math.abs(zahl - Math.round(zahl * 1000) / 1000) < 1e-10 ? "=" : "≈";
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
  display(koordinatensystem(Plot, {
    width, aspectRatio: 1, margin: 40,
    x: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "x →"},
    y: {domain: [-8, 8], grid: true, ticks: d3.range(-8, 9), label: "↑ y"},
    marks: [
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

${sX === null ? (sb1 === sb2 ? "Für jeden x-Wert sind die y-Werte gleich. Die Geraden liegen aufeinander." : "Die y-Werte sind für jeden x-Wert verschieden. Die Geraden sind parallel.") : Number.isInteger(sX) && sX >= -2 && sX <= 2 ? `Bei x = ${sFmt(sX)} steht bei beiden Geraden y = ${sFmt(sY)}. Der Schnittpunkt ist S(${sFmt(sX)} | ${sFmt(sY)}).` : "Der Schnittpunkt liegt nicht bei den x-Werten in dieser Tabelle."}

## 3. Den Schnittpunkt berechnen

Setze die beiden rechten Seiten der Gleichungen gleich. Löse die Gleichung nach x auf. Setze den x-Wert in eine der Geradengleichungen ein. So berechnest du y.

```js
{
  const faktor = sm1 - sm2;
  const zahl = sb2 - sb1;
  const zeilen = [html`<div>${sTerm(sm1, sb1)} = ${sTerm(sm2, sb2)} ${sm2 === 0 ? "" : `| ${sm2 > 0 ? "−" : "+"} ${sFmt(Math.abs(sm2))} · x`}</div>`];
  if (sm2 !== 0 || sb1 !== 0) {
    zeilen.push(html`<div>${sTerm(faktor, sb1)} = ${sFmt(sb2)} ${sb1 === 0 ? "" : `| ${sb1 > 0 ? "−" : "+"} ${sFmt(Math.abs(sb1))}`}</div>`);
  }
  if (faktor !== 0) {
    zeilen.push(html`<div>${faktor === 1 ? "x" : `${sFmt(faktor)} · x`} = ${sFmt(zahl)} ${faktor === 1 ? "" : `| : ${sFmt(faktor)}`}</div>`);
    if (faktor !== 1) zeilen.push(html`<div>x ${sGleich(sX)} ${sFmt(sX)}</div>`);
  }
  display(html`<div class="card" style="border-left: 6px solid #2563eb; line-height: 2;">${zeilen}</div>`);
}
```

${sX === null ? (sb1 === sb2 ? "Die Gleichung gilt für alle x-Werte. Die Geraden liegen aufeinander und haben unendlich viele gemeinsame Punkte." : "Die Gleichung hat keine Lösung. Die Geraden sind parallel und haben keinen Schnittpunkt.") : `Setze x in f ein: y = ${sFmt(sm1)} · (${Number.isInteger(sX) ? sFmt(sX) : `${sFmt(sb2 - sb1)} : ${sFmt(sm1 - sm2)}`}) ${sb1 < 0 ? "−" : "+"} ${sFmt(Math.abs(sb1))} ${sGleich(sY)} ${sFmt(sY)}. Zusammen ergeben x und y den Schnittpunkt S(${sGleich(sX) === "≈" ? "≈ " : ""}${sFmt(sX)} | ${sGleich(sY) === "≈" ? "≈ " : ""}${sFmt(sY)}).`}

${sX !== null && (Math.abs(sX) > 8 || Math.abs(sY) > 8) ? "Der Schnittpunkt liegt außerhalb des dargestellten Bildausschnitts." : ""}

## Das Beispiel verändern

Ändere die Werte mit den Reglern. Die Gleichungen, die Tabelle und die Zeichnung ändern sich mit.

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

## Allgemein

Am Schnittpunkt haben beide Geraden denselben x-Wert und denselben y-Wert. Bei gleichen Steigungen sind die Geraden parallel oder sie liegen aufeinander.