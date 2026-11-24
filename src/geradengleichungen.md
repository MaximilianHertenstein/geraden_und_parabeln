---
title: Geradengleichungen verstehen
toc: true
---

# Geradengleichungen verstehen

Hier lernst du **drei Dinge**:

1. Wie du zu **y = m · x + b** eine Wertetabelle erstellst und die Punkte einzeichnest.
2. Wie du die Steigung m mit einem Steigungsdreieck abliest.
3. Wie du aus einer Zeichnung m, b und die Geradengleichung herausfindest.

```js
import * as Inputs from "npm:@observablehq/inputs";
```

Wir benutzen auf der ganzen Seite dieselbe Gerade. Stelle **m** und **b** mit den Reglern ein. Die Rechnungen, die Tabelle und die Zeichnungen ändern sich mit.

```js
const wmInput = Inputs.range([-3, 3], {value: 2, step: 0.5, label: "m – Steigung"});
const wm = view(wmInput);
```

```js
const wbInput = Inputs.range([-3, 3], {value: 1, step: 1, label: "b – y-Achsenabschnitt"});
const wb = view(wbInput);
```

<div class="card" style="border-left: 6px solid #2563eb;">

**m** ist die Zahl, die mit x malgenommen wird. Hier ist **m = ${String(wm).replace(".", ",")}**.
**b** ist die Zahl ohne x. Hier ist **b = ${String(wb).replace(".", ",")}**.

</div>

Unsere Gerade lautet gerade: **y = ${String(wm).replace(".", ",")} · x ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")}**

---

## 1. Die Wertetabelle ausrechnen

Eine Wertetabelle ist eine **Rechen-Hilfe**. So gehst du dabei vor:

Schreibe zuerst die x-Werte -2, -1, 0, 1 und 2 auf. Rechne für jeden x-Wert das passende y aus. Trage es in die Zeile darunter ein. Fülle die ganze Tabelle, bevor du zeichnest.

Rechne zuerst **mal**, dann **plus** (bzw. minus): **y = m · x + b**.

### Zwei Beispiele, ausgerechnet

Hier siehst du zwei Beispiele für unsere aktuelle Gerade, Schritt für Schritt gerechnet. Genauso rechnest du auch die restlichen x-Werte aus.

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

Diese zwei Ergebnisse tragen wir jetzt in die Tabelle ein. Die restlichen Spalten füllst du genauso.

### Die fertige Wertetabelle

Oben stehen die x-Werte, darunter die y-Werte.

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

Eine Spalte enthält die beiden Zahlen für **einen Punkt (x | y)**. Trage alle Punkte in das Koordinatensystem ein.

**Konkretes Beispiel:** Die erste Spalte hat oben x = -2 und darunter y = ${String(wm * -2 + wb).replace(".", ",")}. Das ist zusammen der Punkt **(-2 | ${String(wm * -2 + wb).replace(".", ",")})**.

<div class="card" style="border-left: 6px solid #f59e0b;">

**Merke:**
Jede **Spalte** der Tabelle ist ein Punkt: oben steht x, darunter das passende y. Alle Punkte liegen auf einer geraden Linie.

</div>

```js
{
  const punkte = [-2, -1, 0, 1, 2].map((x) => ({x: x, y: wm * x + wb}));
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.dot(punkte, {x: "x", y: "y", r: 7, fill: "#f59e0b", stroke: "black"}),
      Plot.text(punkte, {x: "x", y: "y", text: (d) => `(${d.x} | ${d.y})`, dy: -14, fontSize: 12})
    ]
  }));
}
```

---

## 2. Aus den Punkten wird die Gerade

Legst du ein Lineal an die Punkte, siehst du: Sie liegen genau auf einer Linie. Das ist die Gerade zu y = ${String(wm).replace(".", ",")} · x ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")}.

```js
{
  const punkte = [-2, -1, 0, 1, 2].map((x) => ({x: x, y: wm * x + wb}));
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x: x, y: wm * x + wb}));
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.dot(punkte, {x: "x", y: "y", r: 7, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```

---

## 3. Das Steigungsdreieck: warum du m in der Zeichnung siehst

Bewege hier noch einmal **m** und **b**. Diese Regler sind mit den Reglern ganz oben verbunden:

```js
display(Inputs.bind(Inputs.range([-3, 3], {step: 0.5, label: "m – Steigung"}), wmInput));
```

```js
display(Inputs.bind(Inputs.range([-3, 3], {step: 1, label: "b – y-Achsenabschnitt"}), wbInput));
```

Unsere Gerade lautet gerade: **y = ${String(wm).replace(".", ",")} · x ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")}**

Hier noch einmal unsere Wertetabelle:

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

Schau dir die Tabelle noch einmal an: Jedes Mal, wenn x um **1** größer wird, ändert sich y immer um denselben Wert, nämlich um **m**.

```js
const fmtW = (n) => String(n).replace(".", ",");
const wYVon0 = fmtW(wm * -2 + wb);
const wYAuf0 = fmtW(wm * -1 + wb);
const wAenderung0 = fmtW((wm * -1 + wb) - (wm * -2 + wb));
```

```js
{
  display(Inputs.table(
    [-2, -1, 0, 1].map((x) => {
      const yVon = wm * x + wb;
      const yAuf = wm * (x + 1) + wb;
      return {
        "x geht von": fmtW(x),
        "auf": fmtW(x + 1),
        "y geht von": fmtW(yVon),
        "auf ": fmtW(yAuf),
        "also Änderung um": fmtW(yAuf - yVon)
      };
    })
  ));
}
```

In der ersten Zeile geht **y von ${wYVon0} auf ${wYAuf0}**. Das ist eine Änderung um **${wAenderung0}**. In der letzten Spalte steht jedes Mal derselbe Wert: **m = ${String(wm).replace(".", ",")}**. Wenn du 1 nach rechts gehst, ändert sich y immer um m.

Genau das ist das **Steigungsdreieck**:

> **Gehe 1 nach rechts. Gehe dann nach oben oder unten, bis du wieder auf der Geraden bist. Schau nach, wie weit du gegangen bist. Die Änderung ist m.**

In der Zeichnung siehst du **zwei Steigungsdreiecke** an verschiedenen Stellen der Geraden. Beide zeigen: 1 nach rechts und dann um m nach oben oder unten.

```js
{
  const fmt = (n) => String(n).replace(".", ",");
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: wm * x + wb}));

  // Dreieck 1: zwischen x = -2 und x = -1
  const a1 = {x: -2, y: wm * -2 + wb};
  const a2 = {x: -1, y: wm * -2 + wb};
  const a3 = {x: -1, y: wm * -1 + wb};

  // Dreieck 2: zwischen x = 1 und x = 2 (andere Stelle der Geraden)
  const b1 = {x: 1, y: wm * 1 + wb};
  const b2 = {x: 2, y: wm * 1 + wb};
  const b3 = {x: 2, y: wm * 2 + wb};

  const richtung = wm >= 0 ? "oben" : "unten";

  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),

      // Dreieck 1
      Plot.line([a1, a2], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([a2, a3], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([a1, a3], {x: "x", y: "y", r: 5, fill: "black"}),

      // Dreieck 2 (andere Stelle)
      Plot.line([b1, b2], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([b2, b3], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([b1, b3], {x: "x", y: "y", r: 5, fill: "black"}),

      Plot.text([{x: a1.x + 0.5, y: a1.y - 0.6, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 11}),
      Plot.text([{x: b1.x + 0.5, y: b1.y - 0.6, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 11}),
      Plot.text([{x: a3.x + 0.4, y: (a2.y + a3.y) / 2, t: `${fmt(wm)} nach ${richtung}`}], {x: "x", y: "y", text: "t", fontSize: 11, fontWeight: "bold"}),
      Plot.text([{x: b3.x + 0.4, y: (b2.y + b3.y) / 2, t: `${fmt(wm)} nach ${richtung}`}], {x: "x", y: "y", text: "t", fontSize: 11, fontWeight: "bold"})
    ]
  }));
}
```

- **Orange**: 1 nach rechts.
- **Grün**: m = ${wm} nach ${wm >= 0 ? "oben" : "unten"}.
- Ein Dreieck liegt links, das andere rechts auf der Geraden, **beide sind aber genau gleich groß**.

<div class="card" style="border-left: 6px solid #16a34a;">

**Merke:**
Egal, an welcher Stelle der Geraden du das Steigungsdreieck zeichnest, es sieht immer gleich aus: **1 nach rechts, m nach oben/unten.**
Das liegt genau daran, dass in y = m · x + b die Zahl **m** mit x multipliziert wird. Erhöhst du x um 1, kommt automatisch noch einmal m dazu.

</div>

Stelle **m** und **b** anders ein. Rechne die Tabelle neu und zeichne die Punkte. Die Steigungsdreiecke können dann anders aussehen. Auf derselben Geraden sind sie aber immer gleich groß.

---

## 4. Warum die Gerade immer durch (0 | b) geht

Bewege auch hier **m** und **b**, wieder verbunden mit den Reglern ganz oben:

```js
display(Inputs.bind(Inputs.range([-3, 3], {step: 0.5, label: "m – Steigung"}), wmInput));
```

```js
display(Inputs.bind(Inputs.range([-3, 3], {step: 1, label: "b – y-Achsenabschnitt"}), wbInput));
```

Unsere Gerade lautet gerade: **y = ${String(wm).replace(".", ",")} · x ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")}**

Schau dir noch einmal die Spalte mit **x = 0** in der Tabelle an: dort steht unten genau **b**.

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
  const header = {"": "", p0: "", p1: "", p2: "x = 0 → hier steht b", p3: "", p4: ""};
  display(Inputs.table([zeileX, zeileY], {header}));
}
```

Setze bei der aktuellen Geraden **x = 0** ein:

**y = ${String(wm).replace(".", ",")} · 0 ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")} = 0 ${wb >= 0 ? "+" : "−"} ${String(Math.abs(wb)).replace(".", ",")} = ${String(wb).replace(".", ",")}**

Der Schnittpunkt mit der y-Achse ist **(0 | ${String(wb).replace(".", ",")})**. Allgemein gilt y = m · 0 + b = b. Der Punkt **(0 | b)** liegt also auf der Geraden. Das gilt für jedes m.

Bewege nur den **m**-Regler. Die Gerade dreht sich. Der orange Punkt bleibt an derselben Stelle.

Bewege jetzt nur den **b**-Regler. Die Gerade verschiebt sich nach oben oder unten. Der orange Punkt wandert mit. Die Gerade dreht sich dabei nicht.

```js
{
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: wm * x + wb}));
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.dot([{x: 0, y: wb}], {x: "x", y: "y", r: 9, fill: "#f59e0b", stroke: "black"}),
      Plot.text([{x: 0, y: wb, t: `(0 | ${String(wb).replace(".", ",")})`}], {x: "x", y: "y", text: "t", dx: 30, dy: -10, fontSize: 13, fontWeight: "bold"})
    ]
  }));
}
```

- **Blaue Linie**: unsere Gerade (m = ${String(wm).replace(".", ",")}, b = ${String(wb).replace(".", ",")}).
- **Oranger Punkt**: (0 | b), hier trifft die Gerade immer die y-Achse.

<div class="card" style="border-left: 6px solid #f59e0b;">

**Merke:**
**b** ist der **y-Achsenabschnitt**: die Stelle, an der die Gerade die y-Achse trifft. Nur **m** dreht die Gerade um diesen festen Punkt. b legt fest, wo dieser Punkt liegt.

</div>

---

## 5. Die Geradengleichung an der Zeichnung erkennen

Du siehst eine Gerade ohne Gleichung. Mit dem Steigungsdreieck findest du m. Danach liest du b ab.

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

Nimm einen Punkt auf der Geraden. Gehe von dort 1 nach rechts. Gehe dann nach oben oder unten, bis du wieder auf der Geraden bist. Die Änderung in y-Richtung ist m.

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

  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true, ticks: 17},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),

      Plot.line([a1, a2], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([a2, a3], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([a1, a3], {x: "x", y: "y", r: 5, fill: "black"}),

      Plot.line([c1, c2], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([c2, c3], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([c1, c3], {x: "x", y: "y", r: 5, fill: "black"}),

      Plot.text([{x: a1.x + 0.5, y: a1.y - 0.6, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 11}),
      Plot.text([{x: c1.x + 0.5, y: c1.y - 0.6, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 11}),
      Plot.text([{x: a3.x + 0.4, y: (a2.y + a3.y) / 2, t: `${fmtW(gm)} nach ${richtung}`}], {x: "x", y: "y", text: "t", fontSize: 11, fontWeight: "bold"}),
      Plot.text([{x: c3.x + 0.4, y: (c2.y + c3.y) / 2, t: `${fmtW(gm)} nach ${richtung}`}], {x: "x", y: "y", text: "t", fontSize: 11, fontWeight: "bold"}),

      Plot.dot([{x: 0, y: gb}], {x: "x", y: "y", r: 9, fill: "#a855f7", stroke: "black"}),
      Plot.text([{x: 0, y: gb, t: `(0 | ${fmtW(gb)})`}], {x: "x", y: "y", text: "t", dx: 30, dy: -10, fontSize: 13, fontWeight: "bold"})
    ]
  }));
}
```

- Am **linken** Steigungsdreieck kommst du auf m = ${fmtW(geheim.m)}.
- Am **rechten** Steigungsdreieck, an einer ganz anderen Stelle der Geraden, kommst du auf genau denselben Wert: m = ${fmtW(geheim.m)}.

Es ist also egal, wo auf der Geraden du ansetzt. Das Steigungsdreieck liefert immer dasselbe m.

### Schritt 2: b ablesen

b ist der y-Wert an der Stelle, an der die Gerade die y-Achse trifft (x = 0). In der Zeichnung ist das der lila Punkt: (0 | ${fmtW(geheim.b)}). Also b = ${fmtW(geheim.b)}.

### Schritt 3: Die Geradengleichung aufstellen

Jetzt setzt du m und b einfach in y = m · x + b ein:

**y = ${fmtW(geheim.m)} · x ${geheim.b >= 0 ? "+" : "−"} ${fmtW(Math.abs(geheim.b))}**

Klicke oben auf „Neue zufällige Gerade zeigen" und probiere die drei Schritte an einer neuen Geraden noch einmal.
