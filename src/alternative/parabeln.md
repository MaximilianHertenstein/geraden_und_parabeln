---
title: Parabeln verstehen
toc: true
---

# Parabeln Schritt für Schritt

Eine Parabel sieht aus wie ein **U**.
So fliegt ein Ball: hoch und wieder runter. So spritzt Wasser aus dem Schlauch. So sieht ein Brückenbogen aus.

Koordinatensystem und Wertetabelle bleiben gleich.
Das kannst du schon von den Geraden.

<div class="card" style="border-left: 6px solid #7c3aed;">

**So kannst du hier lernen:**

1. Wiederhole, was du über Geraden und das Rechnen mit Minus weißt.
2. Schau dir ein Beispiel an.
3. Überlege zuerst. Prüfe dann mit den Reglern.
4. Beantworte die Fragen und lies die Rückmeldung.

**Deine Ziele:** Danach rechnest du eine Tabelle, findest den **Scheitel** und prüfst die **Nullstellen** mit **D** und **abc-Formel**.

</div>

```js
import * as Inputs from "npm:@observablehq/inputs";
import {koordinatensystem} from "../koordinatensystem.js";
```

---

## 0. Wiederholung

```js
const p0_q1 = view(Inputs.radio(["m = Steigung, b = Start auf y-Achse", "m = Start, b = Steigung", "weiß nicht mehr"], {label: "1) Gerade y = m·x + b. Was war m und b?"}));
```

${p0_q1 === "m = Steigung, b = Start auf y-Achse" ? "✅ **Richtig.** Das brauchst du gleich wieder für c." : p0_q1 ? "❌ Gehe kurz zurück zu [Geraden](./geraden). m = hoch/runter + steil/flach, b = (0|b)." : "⬜ Wähle eine Antwort."}

```js
const p0_q2 = view(Inputs.radio(["1", "-1", "-2"], {label: "2) Was ist (-1)²?"}));
```

${p0_q2 === "1" ? "✅ **Richtig.** (-1)·(-1) = 1. **Minus mal minus = plus.** Das brauchst du bei jeder Parabel-Rechnung." : p0_q2 ? "❌ **Klassiker:** (-1)² = (-1)·(-1) = **1**, nicht -1. Minus mal minus gibt plus." : "⬜ Wähle eine Antwort."}

Wenn du beide Fragen richtig beantwortet hast, gehe weiter. Sonst wiederhole zuerst Geraden und das Rechnen mit Minus.

---

## 1. Was ist anders als bei Geraden?

- Gerade: **y = m · x + b**. Nur x, kein x².
- Parabel: **y = a · x² + b · x + c**. Da ist ein **x²**.

Das x² macht die Biegung.

Die blaue Linie ist eine Gerade. Die rote Linie ist eine Parabel:

```js
{
  const gerade = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: x + 1}));
  const parabel = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: x*x - 2}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 2.2,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-4, 6], label: "↑ y", grid: true},
    marks: [
      Plot.line(gerade, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.line(parabel, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.text([{x: -4, y: -1, t: "Gerade"}], {x: "x", y: "y", text: "t", fill: "#2563eb", fontSize: 15, fontWeight: "bold"}),
      Plot.text([{x: 3.5, y: 4, t: "Parabel (U)"}], {x: "x", y: "y", text: "t", fill: "#dc2626", fontSize: 15, fontWeight: "bold"})
    ]
  }));
}
```

<div class="card" style="border-left: 6px solid #dc2626;">

**Merke:**
Gerade Linie ohne x². U-Form mit x².
Das x² macht die Biegung.

</div>

🩺 **Mini-Check:**

```js
const p1_q1 = view(Inputs.radio(["das x²", "das b", "die Farben"], {label: "Was macht aus einer Geraden eine Parabel?"}));
```

${p1_q1 === "das x²" ? "✅ **Richtig.** Ohne x² bleibt es gerade." : p1_q1 ? "❌ Nur **x²** biegt. b und c gibt es bei beiden." : "⬜ Wähle eine Antwort."}

```js
const p_mix = view(Inputs.radio(["y = 2·x + 1", "y = x² + 1", "y = 2·x² + 3·x + 1"], {label: "Was ist eine Gerade?"}));
```

${p_mix === "y = 2·x + 1" ? "✅ **Genau.** Nur x, kein x²." : p_mix ? "❌ Check x²: Sobald x² drin ist, ist es eine Parabel – egal was sonst noch da steht." : "⬜ Rate zuerst."}

---

## 2. Wiederholung: Wertetabelle bei Parabeln

Wie bei Geraden:
**Oben x wählen. Unten y ausrechnen.**

👀 **Ich zeige – y = x²:**

- x = 0 → y = 0² = 0 · 0 = 0 → Punkt (0 | 0)
- x = 1 → y = 1² = 1 → Punkt (1 | 1)
- x = -1 → y = (-1)² = (-1) · (-1) = 1 → Punkt (-1 | 1). Minus mal minus gibt plus!
- x = 2 → y = 2² = 4 → Punkt (2 | 4)
- x = -2 → y = (-2)² = 4 → Punkt (-2 | 4)

Links und rechts kommt **das Gleiche** heraus. Das heißt **symmetrisch** oder **spiegelgleich**: Beide Seiten passen wie bei einem Spiegel zusammen. Darum entsteht ein U.

✏️ **Du bist dran (1 Lücke):** x = 3 → y = 3² = ? Denke zuerst, dann prüfe mit der Tabelle unten.

🩺 **Mini-Check – hier passieren die meisten Fehler:**

```js
const p2_q1 = view(Inputs.radio(["4", "-4", "0"], {label: "Was ist (-2)²?"}));
```

${p2_q1 === "4" ? "✅ **Richtig.** (-2)·(-2) = 4." : p2_q1 === "-4" ? "❌ Du hast **-2·2** gerechnet (ohne Klammer). Mit Klammer: (-2)·(-2) = **+4**. Das entscheidet, ob dein U stimmt." : p2_q1 ? "❌ Rechne: (-2)·(-2). Minus mal minus = plus." : "⬜ Wähle eine Antwort."}

<div class="card" style="border-left: 6px solid #dc2626;">

**Aufgepasst – Klammer oder keine Klammer:**

- **(-2)² = 4**, weil (-2)·(-2) = 4.
- **-2² = -4**, weil nur 2·2 gerechnet wird und das Minus stehen bleibt.

In der Tabelle steht immer (-2)² mit Klammer. Rechne darum zuerst die Klammer.

</div>

Hier kannst du es sehen. Die Tabelle macht sich von allein:

```js
const pa_tab = view(Inputs.range([-2, 2], {value: 1, step: 0.5, label: "a – vor dem x² (lasse erst 1)"}));
```

```js
{
  const tabelle = [-2, -1, 0, 1, 2].map((x) => ({x: x, y: pa_tab*x*x}));
  display(Inputs.table(tabelle, {header: {x: "x", y: "y = a·x²"}}));
}
```

```js
{
  const punkte = [-2, -1, 0, 1, 2].map((x) => ({x, y: pa_tab*x*x}));
  const linie = d3.range(-4, 4.05, 0.05).map((x) => ({x, y: pa_tab*x*x}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-2, 8], label: "↑ y", grid: true, ticks: 11},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.dot(punkte, {x: "x", y: "y", r: 6, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```

<div class="card" style="border-left: 6px solid #f59e0b;">

**So machst du selbst eine Parabel-Tabelle:**

1. Nimm x = -2, -1, 0, 1, 2.
2. Rechne x² aus. Pass auf bei minus: (-2)² = 4.
3. Male die 5 Punkte ein.
4. Verbinde sie **weich und rund**. Nicht mit dem Lineal! Mit der Hand rund.

</div>

---

## 3. Die Normalform – was machen a, b, c?

<div class="card" style="border-left: 6px solid #16a34a;">

**Normalform:**
**y = a · x² + b · x + c**

- **a** sagt: Nach oben oder unten offen? Eng oder weit?
- **c** sagt: Hoch oder runter geschoben? Start auf der y-Achse.
- **b** verschiebt auch seitlich. Am Bild siehst du das kaum. Darum rechnest du den Scheitel mit der Formel unten.

</div>

Wir schauen uns **a** und **c** einzeln an. So wie bei Geraden mit m und b.

### 3a. Das a: wohin zeigt das U? Eng oder weit?

🔮 **Denke – Rate – Prüfe.** Rate zuerst, dann bewege **nur a**:

```js
const p3a_pred = view(Inputs.radio(["U nach oben", "U nach unten", "kein U mehr"], {label: "Rate: a = -1. Was erwartest du?"}));
```

${p3a_pred ? "Gut. Stelle unten a = -1 ein und **prüfe**. Erkläre dann: Warum war es so?" : "⬜ Rate zuerst. Falsch raten ist erlaubt."}

```js
const pa_a = view(Inputs.range([-3, 3], {value: 1, step: 0.5, label: "a"}));
```

```js
{
  const linie = d3.range(-5, 5.05, 0.05).map((x) => ({x, y: pa_a*x*x}));
  let deutung = pa_a > 0 ? "U nach OBEN (lachender Mund)" : pa_a < 0 ? "U nach UNTEN (trauriger Mund)" : "kein U mehr, flache Linie";
  let weite = Math.abs(pa_a) > 1 ? "eng / schmal" : Math.abs(pa_a) === 1 ? "normal" : Math.abs(pa_a) > 0 ? "weit / breit" : "-";
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    title: `a = ${pa_a} → ${deutung}, ${weite}`,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.line([{x: 0, y: 0}, {x: 1, y: 0}], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([{x: 1, y: 0}, {x: 1, y: pa_a}], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([{x: 0, y: 0}, {x: 1, y: pa_a}], {x: "x", y: "y", r: 6, fill: "black"}),
      Plot.text([{x: 0.5, y: -0.5, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 13}),
      Plot.text([{x: 1.8, y: pa_a/2, t: `${pa_a} nach ${pa_a >= 0 ? "oben" : "unten"}`}], {x: "x", y: "y", text: "t", fontSize: 13})
    ]
  }));
}
```

So liest du **a** am Bild ab:

> **Gehe vom Scheitel 1 nach rechts. Dann gehe a nach oben.**
> Bei minus-a gehst du nach unten.

- Bei a = 1: 1 nach rechts, 1 nach oben.
- Bei a = 2: 1 nach rechts, 2 nach oben (darum eng).
- Bei a = 0,5: 1 nach rechts, nur ein halbes Kästchen nach oben (darum weit).
- Bei a = -1: 1 nach rechts, 1 nach unten.

- **Orange**: 1 nach rechts.
- **Grün**: ${pa_a} nach ${pa_a >= 0 ? "oben" : "unten"}.
- Zähle die Kästchen vom Scheitel aus. So liest du a direkt ab.

<div class="card" style="border-left: 6px solid #f59e0b;">

**Übungsreihe – nur a ändert sich:**
Stelle nacheinander ein: a = 0,5 → 1 → 2 → -1.
Frage jedes Mal vorher: **Wird es enger oder weiter? Oben oder unten?**
Was bleibt gleich? Der Scheitel bei (0 | 0).
Regel: Betrag groß = eng. Vorzeichen = Richtung. In 1 Satz: „a = …, also …".

</div>

<div class="card" style="border-left: 6px solid #dc2626;">

**Merke dir für a:**

- **a ist plus** → U nach **oben**. Wie eine Schüssel. Beispiel a = 1.
- **a ist minus** → U nach **unten**. Wie ein Berg. Beispiel a = -1.
- **a ist groß** (z.B. 2 oder 3) → U ist **eng**.
- **a ist klein** (z.B. 0,5) → U ist **weit**.
- a = 1 heißt **Normalparabel**. So sieht das normale U aus.

</div>

Bei a = ${pa_a} siehst du es oben im Bild.

🩺 **Mini-Check:**

```js
const p3a_q1 = view(Inputs.radio(["nach unten, eng", "nach oben, eng", "nach unten, weit"], {label: "a = -2. Wohin und wie?"}));
```

${p3a_q1 === "nach unten, eng" ? "✅ **Richtig.** Minus = unten, 2 = eng." : p3a_q1 === "nach oben, eng" ? "❌ Vorzeichen-Fehler: **minus = unten**. Betrag 2 = eng stimmt." : p3a_q1 ? "❌ Betrag 2 ist **groß** = eng, nicht weit. Minus = unten." : "⬜ Wähle eine Antwort."}

### 3b. Das c: Start auf der y-Achse – hoch oder runter schieben

**c** heißt **y-Achsenabschnitt**. Das ist der Start auf der y-Achse. So wie das **b bei Geraden**.
Es sagt: Wo schneidet die Parabel die y-Achse?

Warum? Setze x = 0 in y = a · x² + b · x + c ein:
y = a · 0² + b · 0 + c = c. Alles mit x fällt weg. Übrig bleibt nur c.

```js
const pc_pred = view(Inputs.radio(["rutscht nur hoch/runter", "wird enger/weiter"], {label: "Rate: c geht von 0 auf 3. Was passiert?"}));
```

${pc_pred ? "Festgelegt. Jetzt bewege unten nur c und prüfe." : "⬜ Rate zuerst."}

Bewege **nur c**. a bleibt bei 1:

```js
const pa_c_a = view(Inputs.range([-1, 2], {value: 1, step: 0.5, label: "a – lasse erst 1"}));
```

```js
const pa_c = view(Inputs.range([-4, 4], {value: 0, step: 1, label: "c – hoch / runter"}));
```

```js
{
  const linie = d3.range(-5, 5.05, 0.05).map((x) => ({x, y: pa_c_a*x*x + pa_c}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-5, 5], label: "↑ y", grid: true, ticks: 11},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.dot([{x: 0, y: pa_c}], {x: "x", y: "y", r: 8, fill: "#16a34a", stroke: "black"}),
      Plot.text([{x: 0, y: pa_c, t: `c = ${pa_c} → (0|${pa_c})`}], {x: "x", y: "y", text: "t", dx: 55, fontSize: 14, fontWeight: "bold"})
    ]
  }));
}
```

Die Parabel geht immer durch **(0 | ${pa_c})**. Das ist genau c.

<div class="card" style="border-left: 6px solid #16a34a;">

**Merke: y-Achsenabschnitt ablesen**

- Schaue, wo die Parabel die **senkrechte y-Achse** schneidet.
- Dort ist **x = 0**. Der Punkt heißt **(0 | c)**.
- In **y = a · x² + b · x + c** liest du c einfach ab: es ist die Zahl ohne x.
- Beispiel: y = x² + 3 · x **+ 5** → y-Achsenabschnitt bei **(0 | 5)**.

</div>

🩺 **Mini-Check – c oder b?**

```js
const p3b_q1 = view(Inputs.radio(["c = 5, Punkt (0 | 5)", "c = 3, Punkt (0 | 3)", "c = 1"], {label: "y = x² + 3·x + 5. Was ist c?"}));
```

${p3b_q1 === "c = 5, Punkt (0 | 5)" ? "✅ **Richtig.** c ist die Zahl ohne x." : p3b_q1 === "c = 3, Punkt (0 | 3)" ? "❌ Das ist **b** (vor dem x). c steht allein." : p3b_q1 ? "❌ a=1 ist vor x². c=5 steht allein → (0|5)." : "⬜ Wähle eine Antwort."}

---

## 4. Der Scheitelpunkt und die Scheitelpunktform

Der **Scheitelpunkt** ist der tiefste oder höchste Punkt der Parabel:

- Bei U nach oben: der **tiefste Punkt**. Das Tal.
- Bei U nach unten: der **höchste Punkt**. Der Berggipfel.

Dort dreht die Parabel um.

### 4a. Scheitelpunkt ablesen

Die **Scheitelpunktform** zeigt dir den Scheitel sofort:

<div class="card" style="border-left: 6px solid #16a34a;">

**Scheitelpunktform:**
**y = a · (x – d)² + e**

**Scheitel ist S(d | e).**

- **d** = nach **rechts / links** verschoben.
- **e** = nach **oben / unten** verschoben.
- **a** = wie oben: oben/unten, eng/weit.

**Achtung Falle:** In der Klammer steht **minus**. Bei (x – 2) ist d = +2 (nach rechts). Bei (x + 3) ist d = -3 (nach links), weil x + 3 = x – (-3).

</div>

Bewege d und e. Der grüne Punkt ist immer der Scheitel:

```js
const ps_d = view(Inputs.range([-4, 4], {value: 2, step: 1, label: "d – rechts / links"}));
```

```js
const ps_e = view(Inputs.range([-3, 3], {value: 1, step: 1, label: "e – oben / unten"}));
```

```js
const ps_a = view(Inputs.range([-2, 2], {value: 1, step: 0.5, label: "a – oben/unten, eng/weit"}));
```

```js
{
  const linie = d3.range(-7, 7.05, 0.05).map((x) => ({x, y: ps_a*(x - ps_d)*(x - ps_d) + ps_e}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-5, 5], label: "↑ y", grid: true, ticks: 11},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.line([{x: ps_d, y: ps_e}, {x: ps_d + 1, y: ps_e}], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([{x: ps_d + 1, y: ps_e}, {x: ps_d + 1, y: ps_e + ps_a}], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([{x: ps_d, y: ps_e}], {x: "x", y: "y", r: 9, fill: "#16a34a", stroke: "black"}),
      Plot.dot([{x: ps_d + 1, y: ps_e + ps_a}], {x: "x", y: "y", r: 6, fill: "black"}),
      Plot.text([{x: ps_d, y: ps_e, t: `S(${ps_d}|${ps_e})`}], {x: "x", y: "y", text: "t", dy: -20, fontSize: 16, fontWeight: "bold"}),
      Plot.text([{x: ps_d + 0.5, y: ps_e - 0.45, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 12}),
      Plot.text([{x: ps_d + 1.7, y: ps_e + ps_a/2, t: `${ps_a} nach ${ps_a >= 0 ? "oben" : "unten"}`}], {x: "x", y: "y", text: "t", fontSize: 12})
    ]
  }));
}
```

Deine Parabel heißt **y = ${ps_a} · (x – ${ps_d})² + ${ps_e}**.
Der Scheitel ist **S(${ps_d} | ${ps_e})**.

Beispiele zum Nachmachen:
- d = 2 heißt 2 nach rechts. d = -2 heißt 2 nach links.
- e = 1 heißt 1 nach oben. e = -1 heißt 1 nach unten.
- **a liest du so ab:** Gehe vom grünen Scheitel **1 nach rechts**, dann **${ps_a} nach ${ps_a >= 0 ? "oben" : "unten"}** (grüne Strecke). Dort triffst du wieder die Parabel (schwarzer Punkt). Genau wie bei Geraden mit dem Steigungsdreieck, nur dass die Parabel danach gebogen weitergeht.

🩺 **Stopp-Frage – die Vorzeichen-Falle:**

```js
const p4a_q1 = view(Inputs.radio(["S(-3 | 1)", "S(3 | 1)", "S(3 | -1)"], {label: "y = 1·(x + 3)² + 1. Wo ist der Scheitel?"}));
```

${p4a_q1 === "S(-3 | 1)" ? "✅ **Richtig.** x+3 = x–(-3), also d=-3 = 3 nach links." : p4a_q1 ? "❌ **Vorzeichen-Falle!** In der Form steht minus: (x–d). Bei (x+3) ist d=-3, also links." : "⬜ Wähle eine Antwort."}

### 4b. Scheitel aus der Normalform ausrechnen

Manchmal hast du **y = a · x² + b · x + c** (Normalform).
Du willst den Scheitel wissen, ohne zu zeichnen.

Dafür gibt es eine **Formel**. Du rechnest in zwei Schritten:

<div class="card" style="border-left: 6px solid #2563eb;">

**Scheitel-Formel aus Normalform y = a·x² + b·x + c:**

**Schritt 1:** x vom Scheitel: **xs = –b : (2·a)**
**Schritt 2:** y vom Scheitel: setze xs ein: **ys = a·xs² + b·xs + c**

Scheitel ist **S(xs | ys)**.

</div>

Beispiel: y = 1 · x² – 4 · x + 3. Also a = 1, b = -4, c = 3.

1. xs = –(-4) : (2·1) = 4 : 2 = 2.
2. ys = 1·2² + (-4)·2 + 3 = 4 – 8 + 3 = -1.
3. Scheitel S(2 | -1).

✏️ **Du bist dran:** Erst Schritt 1 im Kopf, dann unten checken.

🩺 **Mini-Check:**

```js
const p4b_q1 = view(Inputs.radio(["xs = 2", "xs = -2", "xs = 4"], {label: "y = x² – 4·x + 3. Was ist xs?"}));
```

${p4b_q1 === "xs = 2" ? "✅ **Richtig.** –(-4):(2·1) = 4:2 = 2." : p4b_q1 === "xs = -2" ? "❌ Minus-Fehler: –b = –(-4) = **+4**, nicht -4." : p4b_q1 ? "❌ Du hast nur –b gerechnet (4), aber noch nicht durch 2·a geteilt." : "⬜ Wähle eine Antwort."}

**Rechne selbst mit deinen Zahlen:**

```js
const pn_a = view(Inputs.range([-3, 3], {value: 1, step: 0.5, label: "a"}));
```

```js
const pn_b = view(Inputs.range([-5, 5], {value: -4, step: 1, label: "b"}));
```

```js
const pn_c = view(Inputs.range([-5, 5], {value: 3, step: 1, label: "c"}));
```

```js
{
  const xs = pn_a === 0 ? NaN : -pn_b / (2*pn_a);
  const ys = pn_a === 0 ? NaN : pn_a*xs*xs + pn_b*xs + pn_c;
  const linie = d3.range(-7, 7.05, 0.05).map((x) => ({x, y: pn_a*x*x + pn_b*x + pn_c}));
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    title: pn_a === 0 ? "a = 0 → keine Parabel (Gerade!)" : `Scheitel S(${xs.toFixed(2)} | ${ys.toFixed(2)})`,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      pn_a === 0 ? Plot.dot([], {x: "x", y: "y"}) : Plot.dot([{x: xs, y: ys}], {x: "x", y: "y", r: 9, fill: "#16a34a", stroke: "black"})
    ]
  }));
}
```

Für **y = ${String(pn_a).replace(".", ",")}·x² ${pn_b >= 0 ? "+" : "−"} ${String(Math.abs(pn_b)).replace(".", ",")}·x ${pn_c >= 0 ? "+" : "−"} ${String(Math.abs(pn_c)).replace(".", ",")}**:

**Mit deinen Regler-Werten:**

1. xs = –b : (2·a) = –(${pn_b}) : (2·${pn_a}) = ${pn_a === 0 ? "geht nicht, a=0" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")}
2. ys = a·xs² + b·xs + c = ${pn_a}·(${pn_a === 0 ? "–" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")})² ${pn_b >= 0 ? "+" : "−"} ${String(Math.abs(pn_b)).replace(".", ",")}·(${pn_a === 0 ? "–" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")}) ${pn_c >= 0 ? "+" : "−"} ${String(Math.abs(pn_c)).replace(".", ",")} = ${pn_a === 0 ? "geht nicht" : String((pn_a*(-pn_b/(2*pn_a))*(-pn_b/(2*pn_a)) + pn_b*(-pn_b/(2*pn_a)) + pn_c).toFixed(2)).replace(".", ",")}
3. Scheitel **S(${pn_a === 0 ? "–" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")} | ${pn_a === 0 ? "–" : String((pn_a*(-pn_b/(2*pn_a))*(-pn_b/(2*pn_a)) + pn_b*(-pn_b/(2*pn_a)) + pn_c).toFixed(2)).replace(".", ",")})**.

Wenn a = 0 ist, hast du **keine Parabel** mehr, sondern eine Gerade. Dann gibt es keinen Scheitel.

<div class="card" style="border-left: 6px solid #7c3aed;">

**Symmetrieachse – die Faltlinie:**

Durch den Scheitel geht eine senkrechte Linie: **x = xs**. Dort kannst du die Parabel wie Papier falten. Links und rechts sind gleich.

Das spart Rechnen: Wenn du einen Punkt links kennst, kennst du auch den Punkt rechts. Beispiel: Scheitel bei xs = 2 und Punkt (0 | 3) links davon. Dann liegt rechts davon bei x = 4 der gleiche y-Wert.

</div>

---

## 5. Nullstellen – wo trifft die Parabel die x-Achse?

**Nullstelle** heißt: **y = 0**.
Also: Wo ist die Parabel genau auf der x-Achse?

Es gibt nur 3 Möglichkeiten. Schau dir alle 3 an:

- **2 Nullstellen:** Parabel schneidet 2-mal. Wie ein U, das durch die Achse geht.
- **1 Nullstelle:** Parabel berührt nur. Der Scheitel liegt genau auf der Achse.
- **0 Nullstellen:** Parabel schwebt ganz darüber oder darunter.

🔮 **Rate zuerst:** Was passiert, wenn c nach oben geht – mehr oder weniger Treffer? Rate, dann bewege c und zähle, wie oft die rote Linie die x-Achse trifft:

```js
const pn0_c = view(Inputs.range([-3, 4], {value: -1, step: 1, label: "c – bewege mich hoch/runter (y = x² + c)"}));
```

```js
{
  const linie = d3.range(-5, 5.05, 0.05).map((x) => ({x, y: x*x + pn0_c}));
  // Nullstellen für y=x²+c: x=±√(-c) wenn c<=0
  let pts = [];
  if (pn0_c < 0) {
    const w = Math.sqrt(-pn0_c);
    pts = [{x: -w, y: 0}, {x: w, y: 0}];
  } else if (pn0_c === 0) {
    pts = [{x: 0, y: 0}];
  }
  let text = pn0_c < 0 ? "2 Nullstellen" : pn0_c === 0 ? "1 Nullstelle (berührt)" : "keine Nullstelle";
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    title: `y = x² ${pn0_c >= 0 ? "+" : "−"} ${Math.abs(pn0_c)} → ${text}`,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-5, 5], label: "↑ y", grid: true, ticks: 11},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.dot(pts, {x: "x", y: "y", r: 8, fill: "#2563eb", stroke: "black"})
    ]
  }));
}
```

### 5a. Wie viele Nullstellen gibt es?

Kein Bild nötig.
Du rechnest **D** aus. D heißt **Diskriminante**.

<div class="card" style="border-left: 6px solid #2563eb;">

**Formel für D aus y = a·x² + b·x + c:**

**D = b² – 4·a·c**

- **D > 0** (plus) → **2 Nullstellen**.
- **D = 0** → **1 Nullstelle**.
- **D < 0** (minus) → **keine Nullstelle**.

</div>

Beispiel: y = 1·x² – 4·x + 3. Also a=1, b=-4, c=3.

1. b² = (-4)² = 16.
2. 4·a·c = 4·1·3 = 12.
3. D = 16 – 12 = 4.
4. D = 4, also **plus** → **2 Nullstellen**.

**Probiere selbst:**

```js
const pd_a = view(Inputs.range([-3, 3], {value: 1, step: 1, label: "a"}));
```

```js
const pd_b = view(Inputs.range([-5, 5], {value: -4, step: 1, label: "b"}));
```

```js
const pd_c = view(Inputs.range([-5, 5], {value: 3, step: 1, label: "c"}));
```

```js
{
  const D = pd_b*pd_b - 4*pd_a*pd_c;
  const anzahl = pd_a === 0 ? "keine Parabel (a=0)" : D > 0 ? "2 Nullstellen" : D === 0 ? "1 Nullstelle" : "keine Nullstelle";
  const linie = d3.range(-6, 6.05, 0.05).map((x) => ({x, y: pd_a*x*x + pd_b*x + pd_c}));
  let pts = [];
  if (pd_a !== 0 && D >= 0) {
    const x1 = (-pd_b - Math.sqrt(Math.max(0,D))) / (2*pd_a);
    const x2 = (-pd_b + Math.sqrt(Math.max(0,D))) / (2*pd_a);
    pts = D === 0 ? [{x: x1, y: 0}] : [{x: x1, y: 0}, {x: x2, y: 0}];
  }
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    title: `D = ${D} → ${anzahl}`,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.dot(pts, {x: "x", y: "y", r: 8, fill: "#2563eb", stroke: "black"})
    ]
  }));
}
```

Für **a=${pd_a}, b=${pd_b}, c=${pd_c}**:

**Mit deinen Regler-Werten:**

1. b² = (${pd_b})² = ${pd_b*pd_b}
2. 4·a·c = 4·${pd_a}·${pd_c} = ${4*pd_a*pd_c}
3. D = b² – 4·a·c = ${pd_b*pd_b} – ${(4*pd_a*pd_c) >= 0 ? (4*pd_a*pd_c) : `(${4*pd_a*pd_c})`} = **${pd_b*pd_b - 4*pd_a*pd_c}**
4. Also: **${pd_a === 0 ? "keine Parabel" : (pd_b*pd_b - 4*pd_a*pd_c) > 0 ? "2 Nullstellen" : (pd_b*pd_b - 4*pd_a*pd_c) === 0 ? "1 Nullstelle" : "keine Nullstelle"}**

```js
const pD_seq = view(Inputs.radio(["D wird kleiner", "D bleibt gleich", "D wird größer"], {label: "Nur c ändert sich. a=1, b=-4 bleiben. y=x²-4x+3 hat D=4. Was vermutest du für y=x²-4x+5?"}));
```

${pD_seq === "D wird kleiner" ? "✅ **Genau.** 4·a·c wird größer (20 statt 12). D = 16-20 = -4. Mehr c frisst D auf." : pD_seq === "D bleibt gleich" ? "❌ c steckt in D drin (4·a·c). Wenn c wächst, ändert sich D. Stell oben c=5 ein und check." : pD_seq ? "❌ Andersrum: D = 16 - 4·1·c. Größeres c heißt mehr Abzug. Stell oben c=5 ein." : "⬜ Rate zuerst, dann oben c=5 einstellen."}

🩺 **Mini-Check – was heißt D = 0?**

```js
const p5_q1 = view(Inputs.radio(["1 Nullstelle (berührt)", "2 Nullstellen", "keine Nullstelle"], {label: "D = 0. Wie viele Nullstellen?"}));
```

${p5_q1 === "1 Nullstelle (berührt)" ? "✅ **Richtig.** D=0 heißt genau 1 Berührpunkt – der Scheitel liegt auf der Achse." : p5_q1 === "keine Nullstelle" ? "❌ Verwechslung: **D minus** = keine. **D null** = eine." : p5_q1 ? "❌ D=0 ist der Sonderfall: nicht 2, nicht 0, sondern genau **1**." : "⬜ Wähle eine Antwort."}

### 5b. Die abc-Formel – so rechnest du die Nullstellen aus

Wenn D **0 oder plus** ist, gibt es Nullstellen.
Die **abc-Formel** (Mitternachtsformel) gibt dir die x-Werte:

<div class="card" style="border-left: 6px solid #16a34a;">

**abc-Formel für y = a·x² + b·x + c = 0:**

**x = (–b ± √D) : (2·a)**

Das ± heißt: einmal **minus** rechnen, einmal **plus** rechnen.
So bekommst du x1 und x2.

Nur wenn D **minus** ist, geht es nicht. Man kann aus minus keine Wurzel ziehen.

</div>

Beispiel: y = 1·x² – 4·x + 3. Wir wissen schon D = 4.

1. –b = –(-4) = 4.
2. √D = √4 = 2.
3. 2·a = 2·1 = 2.
4. x1 = (4 – 2) : 2 = 2 : 2 = 1.
5. x2 = (4 + 2) : 2 = 6 : 2 = 3.
6. Nullstellen: **(1 | 0)** und **(3 | 0)**.

Probe: Setze x=1 ein: 1 – 4 + 3 = 0. So prüfst du dein Ergebnis.

Die blauen Punkte im Bild oben sind x<sub>1</sub> und x<sub>2</sub>. **Mit deinen Regler-Werten:**

1. –b = –(${pd_b}) = ${-pd_b}
2. √D = ${(pd_b*pd_b - 4*pd_a*pd_c) < 0 ? `√(${pd_b*pd_b - 4*pd_a*pd_c}) geht nicht (D ist minus, keine Wurzel aus minus)` : `√${String((pd_b*pd_b - 4*pd_a*pd_c).toFixed(2)).replace(".", ",")} = ${String(Math.sqrt(pd_b*pd_b - 4*pd_a*pd_c).toFixed(2)).replace(".", ",")}`}
3. 2·a = 2·${pd_a} = ${2*pd_a}
4. x<sub>1</sub> = (–(${pd_b}) – √D) : (2·${pd_a}) = **${pd_a === 0 ? "– (keine Parabel, a=0)" : (pd_b*pd_b - 4*pd_a*pd_c) < 0 ? "– (keine Nullstelle, D ist minus)" : String(((-pd_b - Math.sqrt(pd_b*pd_b - 4*pd_a*pd_c))/(2*pd_a)).toFixed(2)).replace(".", ",")}**
5. x<sub>2</sub> = (–(${pd_b}) + √D) : (2·${pd_a}) = **${pd_a === 0 ? "– (keine Parabel, a=0)" : (pd_b*pd_b - 4*pd_a*pd_c) < 0 ? "– (keine Nullstelle, D ist minus)" : String(((-pd_b + Math.sqrt(pd_b*pd_b - 4*pd_a*pd_c))/(2*pd_a)).toFixed(2)).replace(".", ",")}**

Wenn D minus ist, gibt es **keine** Nullstellen. Dann bleiben x<sub>1</sub> und x<sub>2</sub> leer. Das ist richtig so.

<div class="card" style="border-left: 6px solid #f59e0b;">

**So gehst du bei einer Parabel-Aufgabe vor:**

1. Schreibe a, b, c auf.
2. Rechne **D = b² – 4·a·c**.
3. Frage: D plus? D null? D minus?
4. Wenn D plus oder null: rechne mit **abc-Formel** x1 und x2.
5. Schreibe die Punkte (x1 | 0) und (x2 | 0) auf.
6. Für den Scheitel: **xs = –b : (2·a)**, dann ys ausrechnen.
7. Mache eine Wertetabelle um den Scheitel herum. Male alles ein.
8. **Probe:** Setze x1 ein – kommt 0 raus?

</div>

---

## 6. Normalform und Scheitelpunktform

- **Normalform y = a·x² + b·x + c** → gut für **D und abc-Formel**. Du liest a, b, c sofort ab.
- **Scheitelpunktform y = a·(x–d)² + e** → gut für **Scheitel S(d|e)**. Du siehst sofort, wo das Tal / der Gipfel ist.

Du kannst umwandeln:

- **Scheitel → normal:** Klammer ausmultiplizieren. Das ist unser Beispiel von oben: y = 1·(x–2)² + (-1) = x² –4x +4 –1 = x² –4x +3.
- **Normal → Scheitel:** Nimm die **Scheitel-Formel** von oben (xs, ys). Dann schreibe y = a·(x–xs)² + ys. Beispiel: Aus y = x² –4x +3 mit S(2 | -1) wird y = 1·(x–2)² + (-1).

**Beide Formen beschreiben die gleiche Parabel.**

Zum Schluss: Stelle hier alles ein und schaue, wie Scheitel, D und Nullstellen zusammenhängen:

```js
const pf_a = view(Inputs.range([-2, 2], {value: 1, step: 0.5, label: "a"}));
```

```js
const pf_d = view(Inputs.range([-3, 3], {value: 1, step: 1, label: "d (Scheitel x)"}));
```

```js
const pf_e = view(Inputs.range([-3, 3], {value: -2, step: 1, label: "e (Scheitel y)"}));
```

```js
{
  // aus Scheitelform a,b,c bestimmen: y = a(x-d)²+e = a x² -2ad x + (ad²+e)
  const a = pf_a, b = -2*pf_a*pf_d, c = pf_a*pf_d*pf_d + pf_e;
  const D = b*b - 4*a*c;
  const linie = d3.range(-6, 6.05, 0.05).map((x) => ({x, y: a*x*x + b*x + c}));
  const fmt = (n) => String(n.toFixed(1)).replace(".", ",");
  const gleichung = `y = ${String(a).replace(".", ",")}·x² ${b >= 0 ? "+" : "−"} ${fmt(Math.abs(b))}·x ${c >= 0 ? "+" : "−"} ${fmt(Math.abs(c))}`;
  const titel = a === 0 ? `${gleichung} → keine Parabel, sondern Gerade` : `${gleichung}, D=${fmt(D)}, S(${pf_d}|${pf_e})`;
  display(koordinatensystem(Plot, {
    width,
    aspectRatio: 1,
    title: titel,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      pf_a === 0 ? Plot.dot([], {x: "x", y: "y"}) : Plot.dot([{x: pf_d, y: pf_e}], {x: "x", y: "y", r: 8, fill: "#16a34a", stroke: "black"})
    ]
  }));
}
```

${pf_a === 0 ? "Bei **a = 0** hast du **keine Parabel** mehr, sondern eine waagerechte Gerade. Dann gibt es keinen Scheitel und kein D. Stelle a wieder auf 1." : `Deine Gleichung: **${String(pf_a).replace(".", ",")}·(x – ${pf_d})² + ${pf_e}**. Scheitel **S(${pf_d} | ${pf_e})**.`}

<div class="card" style="border-left: 6px solid #f59e0b;">

**Nicht verwechseln – c oder e?**

- **c** ist der Start auf der y-Achse: Punkt (0 | c). Du liest c in der Normalform ab.
- **e** ist die Höhe vom Scheitel: Scheitel S(d | e). Du liest e in der Scheitelform ab.

Nur wenn der Scheitel genau auf der y-Achse liegt (d = 0), sind c und e gleich. Sonst nicht. Beispiel: y = (x–2)² –1 hat e = -1, aber c = 3.

Check: „c ist bei x = 0, e ist beim Scheitel."

```js
const p_odd = view(Inputs.radio(["y = (x–2)² – 1", "y = x² – 4x + 3", "y = (x+2)² – 1"], {label: "Welche passt nicht zu S(2 | -1)?"}));
```

${p_odd === "y = (x+2)² – 1" ? "✅ **Genau.** (x+2) heißt d=-2, also S(-2 | -1). Die anderen beiden sind gleich, nur anders geschrieben." : p_odd ? "❌ Stell oben d=2, e=-1 ein. Welche Gleichung zeigt einen anderen Scheitel?" : "⬜ Rate zuerst."}

</div>

---

## Fragen zum Schluss

```js
const p6_q1 = view(Inputs.radio(["(-2)² = 4", "(-2)² = -4"], {label: "1) Was ist (-2)²?"}));
```

${p6_q1 === "(-2)² = 4" ? "✅" : p6_q1 ? "❌ (-2)·(-2) = +4." : "⬜"}

```js
const p6_q2 = view(Inputs.radio(["S(-3 | 1)", "S(3 | 1)"], {label: "2) y = (x + 3)² + 1. Scheitel?"}));
```

${p6_q2 === "S(-3 | 1)" ? "✅ Vorzeichen-Falle gemeistert." : p6_q2 ? "❌ x+3 = x–(-3) → d=-3." : "⬜"}

```js
const p6_q3 = view(Inputs.radio(["2 Nullstellen", "1 Nullstelle", "keine Nullstelle"], {label: "3) D = 5. Wie viele Nullstellen?"}));
```

${p6_q3 === "2 Nullstellen" ? "✅ D plus = 2." : p6_q3 ? "❌ D=5 ist plus → 2." : "⬜"}

```js
const p6_q4 = view(Inputs.radio(["(0 | 5)", "(0 | 3)"], {label: "4) y = x² + 3·x + 5. y-Achsenabschnitt?"}));
```

${p6_q4 === "(0 | 5)" ? "✅ c=5." : p6_q4 ? "❌ c ist die Zahl ohne x." : "⬜"}

Wenn 3 von 4 stimmen: fertig. Sonst oben beim Mini-Check noch einmal schauen.

---

<div class="card">

**Geschafft! Das kannst du jetzt:**

- Du machst eine Wertetabelle für Parabeln. Minus mal minus gibt plus.
- Du sagst: **Normalform y = a·x² + b·x + c**. Damit rechnest du D und Nullstellen.
- Du sagst: **Scheitelform y = a·(x–d)² + e, Scheitel S(d|e)**. Achtung: (x+3) heißt d = -3.
- Du rechnest den Scheitel mit **xs = –b : (2·a)**, dann ys durch Einsetzen.
- Du rechnest **D = b² – 4·a·c** und sagst: plus = 2, null = 1, minus = 0 Nullstellen.
- Du rechnest Nullstellen mit **x = (–b ± √D) : (2·a)** und machst die Probe.

Gehe zurück zu [Start](../) oder übe noch einmal [Geraden](./geraden). Du kannst die Fragen morgen noch einmal beantworten.

</div>
