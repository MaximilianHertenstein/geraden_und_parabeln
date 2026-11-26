---
title: Parabeln zeichnen
toc: true
---

# Parabeln zeichnen

Du erstellst eine Wertetabelle und zeichnest damit eine Parabel. Dann berechnest du, wo die Parabel die y-Achse schneidet.

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

Wir rechnen mit der Gleichung unten. Dabei bedeutet x²: x · x. Für eine Parabel darf a nicht null sein.

Ändere a, b und c. Die Rechnungen, die Wertetabelle und die Zeichnungen passen sich an.

```js
const paInput = Inputs.range([-2, 2], {value: 1, step: 0.5, label: "a – vor x²"});
const pa = view(paInput);
```

```js
const pbInput = Inputs.range([-2, 2], {value: 1, step: 0.5, label: "b – vor x"});
const pb = view(pbInput);
```

```js
const pcInput = Inputs.range([-2, 2], {value: 1, step: 0.5, label: "c – Zahl ohne x"});
const pc = view(pcInput);
```

```js
const pFmt = (zahl) => String(zahl).replace(".", ",");
const pVorzeichen = (zahl) => zahl < 0 ? "−" : "+";
const pWert = (x) => pa * x * x + pb * x + pc;
const pXWerte = [-2, -1, 0, 1, 2];
const pBereich = Math.max(6, Math.ceil(Math.max(...pXWerte.map((x) => Math.abs(pWert(x)))) + 1));
const pTickSchritt = Math.max(1, Math.ceil(28 * 2 * pBereich / Math.max(1, width - 80)));
const pTickText = (wert) => wert % pTickSchritt === 0 ? wert : "";
```

Unsere Gleichung: **y = ${pFmt(pa)} · x² ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · x ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}**

${pa === 0 ? "Bei a = 0 entsteht keine Parabel, sondern eine Gerade." : ""}

## 1. Die Wertetabelle ausrechnen

Wähle die x-Werte **-2, -1, 0, 1 und 2**. Setze sie in die Gleichung ein. Ersetze dabei **jedes x** durch die Zahl. Schreibe das Ergebnis in die Zeile darunter. Setze negative Zahlen in Klammern.

### Zwei Beispielrechnungen

```js
{
  const beispiele = [-2, 1];
  display(html`<div>${beispiele.map((x) => {
    const eingesetzt = x < 0 ? `(${pFmt(x)})` : pFmt(x);
    const quadrat = x * x;
    const quadratischerTeil = pa * quadrat;
    const linearerTeil = pb * x;
    return html`<div class="card" style="border-left: 6px solid #2563eb; line-height: 1.8; margin-bottom: 10px;">
      <strong>x = ${pFmt(x)}</strong><br>
      y = ${pFmt(pa)} · x² ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · x ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}<br>
      = ${pFmt(pa)} · ${eingesetzt}² ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · ${eingesetzt} ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}<br>
      = ${pFmt(quadratischerTeil)} ${pVorzeichen(linearerTeil)} ${pFmt(Math.abs(linearerTeil))} ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}
      = <strong>${pFmt(pWert(x))}</strong>
    </div>`;
  })}</div>`);
}
```

Für die übrigen x-Werte rechnest du genauso. So sieht die vollständige Tabelle aus:

```js
{
  display(html`<table aria-label="Wertetabelle der Parabel">
    <tbody>
      <tr><th scope="row">x</th>${pXWerte.map((x) => html`<td>${pFmt(x)}</td>`)}</tr>
      <tr><th scope="row">y</th>${pXWerte.map((x) => html`<td>${pFmt(pWert(x))}</td>`)}</tr>
    </tbody>
  </table>`);
}
```

## 2. Die Punkte eintragen

In jeder Spalte stehen die beiden Zahlen für einen Punkt. Die erste Spalte ergibt **(-2 | ${pFmt(pWert(-2))})**. Trage alle Punkte aus der Tabelle in das Koordinatensystem ein.

```js
{
  const punkte = pXWerte.map((x) => ({x, y: pWert(x)}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    margin: 40,
    x: {domain: [-pBereich, pBereich], tickFormat: pTickText},
    y: {domain: [-pBereich, pBereich], tickFormat: pTickText},
    marks: [
      Plot.dot(punkte, {x: "x", y: "y", r: 6, fill: "#f59e0b", stroke: "black"}),
      Plot.text(punkte, {x: "x", y: "y", text: (punkt) => `(${pFmt(punkt.x)} | ${pFmt(punkt.y)})`, dy: -14, fontSize: 12})
    ]
  }));
}
```

## 3. Die Punkte verbinden

Bei einer Parabel verbindest du die Punkte zu einer **glatten Kurve**. Zeichne keine geraden Strecken zwischen den Punkten. Wenn du nicht sicher bist, wie die Kurve verläuft, berechne weitere Punkte. Bei a = 0 verbindest du die Punkte mit dem Lineal.

```js
{
  const punkte = pXWerte.map((x) => ({x, y: pWert(x)}));
  const kurve = d3.range(-3, 3.01, 0.02).map((x) => ({x, y: pWert(x)}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    margin: 40,
    x: {domain: [-pBereich, pBereich], tickFormat: pTickText},
    y: {domain: [-pBereich, pBereich], tickFormat: pTickText},
    marks: [
      Plot.line(kurve, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.dot(punkte, {x: "x", y: "y", r: 6, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```

## 4. Den y-Achsenabschnitt berechnen

```js
display(Inputs.bind(Inputs.range([-2, 2], {step: 0.5, label: "a – vor x²"}), paInput));
```

```js
display(Inputs.bind(Inputs.range([-2, 2], {step: 0.5, label: "b – vor x"}), pbInput));
```

```js
display(Inputs.bind(Inputs.range([-2, 2], {step: 0.5, label: "c – Zahl ohne x"}), pcInput));
```

Unsere Gleichung: **y = ${pFmt(pa)} · x² ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · x ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}**

```js
{
  display(html`<table aria-label="Wertetabelle der Parabel"><tbody>
    <tr><th scope="row">x</th>${pXWerte.map((x) => html`<td>${pFmt(x)}</td>`)}</tr>
    <tr><th scope="row">y</th>${pXWerte.map((x) => html`<td>${pFmt(pWert(x))}</td>`)}</tr>
  </tbody></table>`);
}
```

In der Tabelle steht unter **x = 0** der Wert **${pFmt(pc)}**. Das ist der y-Wert des Punktes auf der y-Achse.

Setze **0 für x** in die Gleichung ein. Weil 0² = 0 und jede Zahl mal 0 gleich 0 ist, bleibt die Zahl ohne x übrig:

**y = ${pFmt(pa)} · 0² ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · 0 ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))} = 0 ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))} = ${pFmt(pc)}**

Aus x = 0 und y = ${pFmt(pc)} erhältst du den Schnittpunkt **(0 | ${pFmt(pc)})**.

## Allgemein

Bei **y = a · x² + b · x + c** ist der y-Achsenabschnitt **c**. Der Schnittpunkt ist **(0 | c)**.