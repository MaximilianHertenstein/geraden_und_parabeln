---
title: Parabeln zeichnen
toc: true
---

# Parabeln zeichnen

Du erstellst eine Wertetabelle und zeichnest damit eine Parabel. Dann berechnest du, wo die Parabel die y-Achse schneidet.

```js
import * as Inputs from "npm:@observablehq/inputs";
```

Wir verwenden die Gleichung **y = a · x · x + b · x + c**. Im ersten Teil rechnen wir x mal x. Dafür schreiben wir auch **x²**. Für eine Parabel darf a nicht null sein.

Ändere a, b und c. Die Rechnungen, die Wertetabelle und die Zeichnungen passen sich an.

```js
const pa = view(Inputs.select([-1, -0.5, 0.5, 1], {value: 1, label: "a – vor x · x"}));
```

```js
const pb = view(Inputs.range([-1, 1], {value: 1, step: 1, label: "b – vor x"}));
```

```js
const pc = view(Inputs.range([-1, 1], {value: 1, step: 1, label: "c – Zahl ohne x"}));
```

```js
const pFmt = (zahl) => String(zahl).replace(".", ",");
const pVorzeichen = (zahl) => zahl < 0 ? "−" : "+";
const pWert = (x) => pa * x * x + pb * x + pc;
const pXWerte = [-2, -1, 0, 1, 2];
```

Unsere Parabelgleichung: **y = ${pFmt(pa)} · x · x ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · x ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}**

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
      y = ${pFmt(pa)} · x · x ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · x ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}<br>
      = ${pFmt(pa)} · ${eingesetzt} · ${eingesetzt} ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · ${eingesetzt} ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))}<br>
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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    margin: 40,
    x: {domain: [-8, 8], label: "x →", grid: true, ticks: d3.range(-8, 9)},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: d3.range(-8, 9)},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.dot(punkte, {x: "x", y: "y", r: 6, fill: "#f59e0b", stroke: "black"}),
      Plot.text(punkte, {x: "x", y: "y", text: (punkt) => `(${pFmt(punkt.x)} | ${pFmt(punkt.y)})`, dy: -14, fontSize: 12})
    ]
  }));
}
```

## 3. Die Punkte verbinden

Verbinde die Punkte zu einer **glatten Kurve**. Zeichne keine geraden Strecken zwischen den Punkten. Wenn du nicht sicher bist, wie die Kurve verläuft, berechne weitere Punkte.

```js
{
  const punkte = pXWerte.map((x) => ({x, y: pWert(x)}));
  const kurve = d3.range(-3, 3.01, 0.02).map((x) => ({x, y: pWert(x)}));
  display(Plot.plot({
    width,
    aspectRatio: 1,
    margin: 40,
    x: {domain: [-8, 8], label: "x →", grid: true, ticks: d3.range(-8, 9)},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: d3.range(-8, 9)},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(kurve, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3, clip: true}),
      Plot.dot(punkte, {x: "x", y: "y", r: 6, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```

## 4. Den y-Achsenabschnitt berechnen

Auf der y-Achse ist **x = 0**. Setze deshalb an jeder Stelle für x die Zahl 0 ein:

**y = ${pFmt(pa)} · 0 · 0 ${pVorzeichen(pb)} ${pFmt(Math.abs(pb))} · 0 ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))} = 0 ${pVorzeichen(pc)} ${pFmt(Math.abs(pc))} = ${pFmt(pc)}**

Der Schnittpunkt mit der y-Achse ist **(0 | ${pFmt(pc)})**. In der Wertetabelle steht dieser y-Wert unter x = 0. Allgemein ist bei **y = a · x · x + b · x + c** der y-Achsenabschnitt **c**.