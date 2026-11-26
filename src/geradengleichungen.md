---
title: Geradengleichungen verstehen
toc: true
---

# Geradengleichungen verstehen


```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "./koordinatensystem.js";
```

Eine Geradengleichung zeigt, wie du zu einem x-Wert den y-Wert ausrechnest.


**y = ${String(wm).replace(".", ",")} · x ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")}**



### Zwei Beispiele, ausgerechnet

Hier siehst du zwei Beispiele für unsere aktuelle Gerade:

```js
{
  const fmt = (n) => String(n).replace(".", ",");
  const beispiele = [-2, 1];
  const bAbs = Math.abs(wb);
  const bZeichen = wb >= 0 ? "+" : "−";
  const zeilen = beispiele.map((x) => {
    const xText = x < 0 ? `(${fmt(x)})` : fmt(x);
    const produkt = wm * x;
    const y = produkt + wb;
    return html`<div class="card" style="border-left: 6px solid #2563eb; font-family: ui-monospace, monospace; font-size: 15px; padding: 10px 16px; margin-bottom: 10px;">
      x = ${fmt(x)} &nbsp;⇒&nbsp; y = ${fmt(wm)} · x ${bZeichen} ${fmt(bAbs)} &nbsp;=&nbsp; ${fmt(wm)} · ${xText} ${bZeichen} ${fmt(bAbs)} &nbsp;=&nbsp; ${fmt(produkt)} ${bZeichen} ${fmt(bAbs)} &nbsp;=&nbsp; <b>${fmt(y)}</b>
    </div>`;
  });
  display(html`<div>${zeilen}</div>`);
}
```

Die berechneten Werte tragen wir in eine **Wertetabelle** ein. Oben steht der x-Wert, darunter der berechnete y-Wert. Die x-Werte sind entweder vorgegeben oder wir können sie uns selbst aussuchen.


### Die fertige Wertetabelle

```js
{
  const fmt = (n) => String(n).replace(".", ",");
  const xs = [-2, -1, 0, 1, 2];
  const keys = xs.map((_, i) => `p${i}`);
  const zeileX = {"": "x"};
  const zeileY = {"": "y"};
  xs.forEach((x, i) => {
    zeileX[keys[i]] = fmt(x);
    zeileY[keys[i]] = fmt(wm * x + wb);
  });
  const header = {"": ""};
  keys.forEach((k) => (header[k] = ""));
  display(Inputs.table([zeileX, zeileY], {header}));
}
```


Wir haben bis jetzt die Gerade mit der Gleichung 

**y = ${String(wm).replace(".", ",")} · x ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")}** 

verwendet.




Die Zahl, mit der x malgenommen wird, heißt m. Hier ist **m = ${String(wm).replace(".", ",")}**.
Die Zahl ohne x heißt b. Hier ist **b = ${String(wb).replace(".", ",")}**.


Mit den Schiebereglern kannst du m und b verändern. Die Gleichung, die Rechnungen und die Tabelle ändern sich mit.

```js
const wmInput = Inputs.range([-3, 3], {value: 2, step: 0.5, label: "m – Steigung"});
const wm = view(wmInput);
```

```js
const wbInput = Inputs.range([-3, 3], {value: 1, step: 1, label: "b – y-Achsenabschnitt"});
const wb = view(wbInput);
```


Aufgabe: Ändere m und b und lies die Rechnungen noch einmal.

---

## 1. Die Punkte einzeichnen

```js
{
  const xs = [-2, -1, 0, 1, 2];
  const fmt = (zahl) => String(zahl).replace(".", ",");
  display(html`<table aria-label="Wertetabelle der Geraden"><tbody>
    <tr><th scope="row">x</th>${xs.map((x) => html`<td>${fmt(x)}</td>`)}</tr>
    <tr><th scope="row">y</th>${xs.map((x) => html`<td>${fmt(wm * x + wb)}</td>`)}</tr>
  </tbody></table>`);
}
```

Eine Spalte enthält die beiden Zahlen für **einen Punkt (x | y)**. Trage alle Punkte in das Koordinatensystem ein.

**Konkretes Beispiel:** Die erste Spalte hat oben x = -2 und darunter y = ${String(wm * -2 + wb).replace(".", ",")}. Das ist zusammen der Punkt **(-2 | ${String(wm * -2 + wb).replace(".", ",")})**.

```js
{
  const punkte = [-2, -1, 0, 1, 2].map((x) => ({x: x, y: wm * x + wb}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.dot(punkte, {x: "x", y: "y", r: 7, fill: "#f59e0b", stroke: "black"}),
      Plot.text(punkte, {x: "x", y: "y", text: (d) => `(${d.x} | ${d.y})`, dy: -14, fontSize: 12})
    ]
  }));
}
```

---

## 2. Aus den Punkten wird die Gerade

Verbinde die Punkte mit dem Lineal. So entsteht die Gerade.

```js
{
  const punkte = [-2, -1, 0, 1, 2].map((x) => ({x: x, y: wm * x + wb}));
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x: x, y: wm * x + wb}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.dot(punkte, {x: "x", y: "y", r: 7, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```

---

## 3. Die Geradengleichung an der Zeichnung erkennen

Das Steigungsdreieck und den y-Achsenabschnitt findest du auf der Seite [Steigungsdreieck](./steigungsdreieck).

```js
const fmtW = (n) => String(n).replace(".", ",");
```


Bestimme m und b aus der Zeichnung. Mit dem Button erhältst du eine neue Gerade.

```js
const geheimClick = view(Inputs.button("Neue zufällige Gerade zeigen"));
```

```js
const geheim = (() => {
  geheimClick;
  const mWerte = [-3, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 3];
  const bWerte = [-3, -2, -1, 0, 1, 2, 3];
  return {
    m: mWerte[Math.floor(Math.random() * mWerte.length)],
    b: bWerte[Math.floor(Math.random() * bWerte.length)]
  };
})();
```

### Schritt 1: m mit dem Steigungsdreieck finden

Gehe von einem Punkt der Geraden 1 nach rechts. Gehe dann bis zur Geraden nach oben oder unten. Die Änderung in y-Richtung ist m.

```js
{
  const gm = geheim.m;
  const gb = geheim.b;
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: gm * x + gb}));

  const a1 = {x: -2, y: gm * -2 + gb};
  const a2 = {x: -1, y: gm * -2 + gb};
  const a3 = {x: -1, y: gm * -1 + gb};

  const c1 = {x: 1, y: gm * 1 + gb};
  const c2 = {x: 2, y: gm * 1 + gb};
  const c3 = {x: 2, y: gm * 2 + gb};

  const richtung = gm >= 0 ? "oben" : "unten";

  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),

      Plot.line([a1, a2], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([a2, a3], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([a1, a3], {x: "x", y: "y", r: 5, fill: "black"}),

      Plot.line([c1, c2], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([c2, c3], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([c1, c3], {x: "x", y: "y", r: 5, fill: "black"}),

      Plot.text([{x: a1.x + 0.5, y: a1.y - 0.6, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 11}),
      Plot.text([{x: c1.x + 0.5, y: c1.y - 0.6, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 11}),
      Plot.text([{x: a3.x + 0.4, y: (a2.y + a3.y) / 2, t: `${fmtW(Math.abs(gm))} nach ${richtung}`}], {x: "x", y: "y", text: "t", fontSize: 11, fontWeight: "bold"}),
      Plot.text([{x: c3.x + 0.4, y: (c2.y + c3.y) / 2, t: `${fmtW(Math.abs(gm))} nach ${richtung}`}], {x: "x", y: "y", text: "t", fontSize: 11, fontWeight: "bold"}),

      Plot.dot([{x: 0, y: gb}], {x: "x", y: "y", r: 9, fill: "#a855f7", stroke: "black"}),
      Plot.text([{x: 0, y: gb, t: `(0 | ${fmtW(gb)})`}], {x: "x", y: "y", text: "t", dx: 30, dy: -10, fontSize: 13, fontWeight: "bold"})
    ]
  }));
}
```

Beide Steigungsdreiecke zeigen **m = ${fmtW(geheim.m)}**.

### Schritt 2: b ablesen

Die Gerade trifft die y-Achse im lila Punkt (0 | ${fmtW(geheim.b)}). Also ist **b = ${fmtW(geheim.b)}**.

### Schritt 3: Die Geradengleichung aufstellen

Setze m und b in y = m · x + b ein:

**y = ${fmtW(geheim.m)} · x ${geheim.b >= 0 ? "+" : "−"} ${fmtW(Math.abs(geheim.b))}**

Probiere die drei Schritte mit einer neuen Geraden.
