---
title: Parabeln verstehen
toc: true
---

# Parabeln – Schritt für Schritt

Eine Parabel ist **gebogen**. Wie ein **U**.
Wie ein Ball, der fliegt und wieder runter kommt.

Eine Gerade war gerade. Eine Parabel ist krumm.
Aber: **Wertetabelle und Koordinatensystem bleiben gleich.**
Das kannst du schon – wir **rufen es nur ab**, wir lernen es nicht neu.

<div class="card" style="border-left: 6px solid #7c3aed;">

**So arbeitest du hier – wie bei Geraden:**

1. 🔁 **Abrufen** – Geraden-Wissen + Minus-Rechnen.
2. 👀 **Ich zeige** – 1 fertiges Beispiel.
3. 🔮 **Denke – Rate – Prüfe** – erst Vermutung, dann Regler.
4. 🩺 **Mini-Check** – typische Fehler-Frage. Jede falsche Antwort erklärt einen Denkfehler.

**Deine Ziele:** Danach kannst du Tabelle, **a/c**, **Scheitel S(d|e)**, **D** und **abc-Formel** erklären und anwenden.

</div>

```js
import * as Inputs from "npm:@observablehq/inputs";
```

---

## 0. 🔁 Abrufen – ohne Parabel geht das nicht

```js
const p0_q1 = view(Inputs.radio(["m = Steigung, b = Start auf y-Achse", "m = Start, b = Steigung", "weiß nicht mehr"], {label: "1) Gerade y = m·x + b. Was war m und b?"}));
```

${p0_q1 === "m = Steigung, b = Start auf y-Achse" ? "✅ **Richtig.** Das brauchst du gleich wieder für c." : p0_q1 ? "❌ Gehe kurz zurück zu [Geraden](./geraden). m = hoch/runter + steil/flach, b = (0|b)." : "⬜ Wähle eine Antwort."}

```js
const p0_q2 = view(Inputs.radio(["1", "-1", "-2"], {label: "2) Was ist (-1)²?"}));
```

${p0_q2 === "1" ? "✅ **Richtig.** (-1)·(-1) = 1. **Minus mal minus = plus.** Das ist die wichtigste Rechenregel für Parabeln." : p0_q2 ? "❌ **Klassiker:** (-1)² = (-1)·(-1) = **1**, nicht -1. Minus mal minus gibt plus." : "⬜ Wähle eine Antwort."}

Wenn beide ✅ sind, weiter. Sonst erst wiederholen – das spart dir später Frust (Cognitive Load).

---

## 1. Was ist anders als bei Geraden?

- Gerade: **y = m · x + b**. Nur x, kein x².
- Parabel: **y = a · x² + b · x + c**. Da ist ein **x²**.

Das x² macht die Biegung.

Schau. Links gerade, rechts gebogen. Bewege nichts. Nur schauen:

```js
{
  const gerade = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: x + 1}));
  const parabel = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: x*x - 2}));
  display(Plot.plot({
    width,
    aspectRatio: 2.2,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-4, 6], label: "↑ y", grid: true},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
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
Gerade = gerade Linie. Parabel = U-Form.
Schuld ist das **x²**.

</div>

🩺 **Mini-Check:**

```js
const p1_q1 = view(Inputs.radio(["das x²", "das b", "die Farben"], {label: "Was macht aus einer Geraden eine Parabel?"}));
```

${p1_q1 === "das x²" ? "✅ **Richtig.** Ohne x² bleibt es gerade." : p1_q1 ? "❌ Nur **x²** biegt. b und c gibt es bei beiden." : "⬜ Wähle eine Antwort."}

---

## 2. Wiederholung: Wertetabelle bei Parabeln

Du kennst das schon von Geraden:
**Oben x wählen. Unten y ausrechnen.**

👀 **Ich zeige – y = x², ganz langsam:**

- x = 0 → y = 0² = 0 · 0 = 0 → Punkt (0 | 0)
- x = 1 → y = 1² = 1 → Punkt (1 | 1)
- x = -1 → y = (-1)² = (-1) · (-1) = 1 → Punkt (-1 | 1). Minus mal minus gibt plus!
- x = 2 → y = 2² = 4 → Punkt (2 | 4)
- x = -2 → y = (-2)² = 4 → Punkt (-2 | 4)

Siehst du? Links und rechts kommt **das Gleiche** raus. Darum ist es **symmetrisch**. Darum wird es ein U.

✏️ **Du bist dran (1 Lücke):** x = 3 → y = 3² = ? Denke zuerst (9?), dann prüfe mit der Tabelle unten (stelle gedanklich x=3 vor – oder rechne 3·3).

🩺 **Mini-Check – der teuerste Fehler:**

```js
const p2_q1 = view(Inputs.radio(["4", "-4", "0"], {label: "Was ist (-2)²?"}));
```

${p2_q1 === "4" ? "✅ **Richtig.** (-2)·(-2) = 4." : p2_q1 === "-4" ? "❌ Du hast **-2·2** gerechnet (ohne Klammer). Mit Klammer: (-2)·(-2) = **+4**. Das entscheidet über U oder falsches Bild." : p2_q1 ? "❌ Rechne: (-2)·(-2). Minus mal minus = plus." : "⬜ Wähle eine Antwort."}

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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-2, 8], label: "↑ y", grid: true},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
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

- **a** sagt: Nach oben oder unten offen? Eng oder weit? (heute)
- **c** sagt: Nach oben oder unten verschoben? Start auf der y-Achse. (heute)
- **b** sagt: Auch seitlich verschoben (schwieriger, darum später die Scheitelform).

</div>

Wir schauen uns **a** und **c** einzeln an. Wie bei Geraden mit m und b.

### 3a. Das a: wohin zeigt das U? Eng oder weit?

🔮 **Denke – Rate – Prüfe.** Rate zuerst, dann bewege **nur a**:

```js
const p3a_pred = view(Inputs.radio(["U nach oben", "U nach unten", "kein U mehr"], {label: "Rate: a = -1. Was erwartest du?"}));
```

${p3a_pred ? "Gut. Stelle unten a = -1 ein und **prüfe**. Erkläre dann: Warum war es so?" : "⬜ Rate zuerst – auch falsches Raten hilft (Hypercorrection-Effekt)."}

```js
const pa_a = view(Inputs.range([-3, 3], {value: 1, step: 0.5, label: "a"}));
```

```js
{
  const linie = d3.range(-5, 5.05, 0.05).map((x) => ({x, y: pa_a*x*x}));
  let deutung = pa_a > 0 ? "U nach OBEN (lachender Mund)" : pa_a < 0 ? "U nach UNTEN (trauriger Mund)" : "kein U mehr, flache Linie";
  let weite = Math.abs(pa_a) > 1 ? "eng / schmal" : Math.abs(pa_a) === 1 ? "normal" : Math.abs(pa_a) > 0 ? "weit / breit" : "-";
  display(Plot.plot({
    width,
    aspectRatio: 1,
    title: `a = ${pa_a} → ${deutung}, ${weite}`,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
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

So erkennst du **a** am Bild, ganz ohne Rechnung:

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

**Kluge Reihe – nur a ändert sich (Reflektieren):**
Stelle nacheinander ein: a = 0,5 → 1 → 2 → -1.
Frage jedes Mal vorher: **Wird es enger oder weiter? Oben oder unten?**
Regel: Betrag groß = eng. Vorzeichen = Richtung. Erkläre es jemandem in 1 Satz.

</div>

<div class="card" style="border-left: 6px solid #dc2626;">

**Merke dir für a:**

- **a ist plus** → U nach **oben**. Wie eine Schüssel. Beispiel a = 1.
- **a ist minus** → U nach **unten**. Wie ein Berg. Beispiel a = -1.
- **a ist groß** (z.B. 2 oder 3) → U ist **eng**.
- **a ist klein** (z.B. 0,5) → U ist **weit**.
- a = 1 heißt **Normalparabel**. Das ist die normale.

</div>

Bei a = ${pa_a} siehst du es oben im Bild.

🩺 **Mini-Check:**

```js
const p3a_q1 = view(Inputs.radio(["nach unten, eng", "nach oben, eng", "nach unten, weit"], {label: "a = -2. Wohin und wie?"}));
```

${p3a_q1 === "nach unten, eng" ? "✅ **Richtig.** Minus = unten, 2 = eng." : p3a_q1 === "nach oben, eng" ? "❌ Vorzeichen-Fehler: **minus = unten**. Betrag 2 = eng stimmt." : p3a_q1 ? "❌ Betrag 2 ist **groß** = eng, nicht weit. Minus = unten." : "⬜ Wähle eine Antwort."}

### 3b. Das c: der y-Achsenabschnitt – hoch oder runter schieben

**c** heißt **y-Achsenabschnitt**. Das ist das Gleiche wie das **b bei Geraden**.
Es sagt: Wo schneidet die Parabel die y-Achse?

Warum? Setze x = 0 in y = a · x² + b · x + c ein:
y = a · 0 + b · 0 + c = c. Alles mit x fällt weg. Übrig bleibt nur c.

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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-5, 5], label: "↑ y", grid: true, ticks: 11},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
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

🩺 **Mini-Check (c vs. b verwechselt):**

```js
const p3b_q1 = view(Inputs.radio(["c = 5, Punkt (0 | 5)", "c = 3, Punkt (0 | 3)", "c = 1"], {label: "y = x² + 3·x + 5. Was ist c?"}));
```

${p3b_q1 === "c = 5, Punkt (0 | 5)" ? "✅ **Richtig.** c ist die Zahl ohne x." : p3b_q1 === "c = 3, Punkt (0 | 3)" ? "❌ Das ist **b** (vor dem x). c steht allein." : p3b_q1 ? "❌ a=1 ist vor x². c=5 steht allein → (0|5)." : "⬜ Wähle eine Antwort."}

---

## 4. Der Scheitelpunkt und die Scheitelpunktform

Der **Scheitelpunkt** ist der wichtigste Punkt der Parabel:

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

Probiere es aus. Bewege d und e. Der grüne Punkt ist immer der Scheitel:

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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-5, 5], label: "↑ y", grid: true, ticks: 11},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
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

🩺 **Hinge-Frage – die Falle (nur weiter wenn richtig):**

```js
const p4a_q1 = view(Inputs.radio(["S(-3 | 1)", "S(3 | 1)", "S(3 | -1)"], {label: "y = 1·(x + 3)² + 1. Wo ist der Scheitel?"}));
```

${p4a_q1 === "S(-3 | 1)" ? "✅ **Richtig.** x+3 = x–(-3), also d=-3 = 3 nach links." : p4a_q1 ? "❌ **Vorzeichen-Falle!** In der Form steht minus: (x–d). Bei (x+3) ist d=-3, also links." : "⬜ Wähle eine Antwort."}

### 4b. Scheitel aus der Normalform ausrechnen

Manchmal hast du **y = a · x² + b · x + c** (Normalform).
Du willst den Scheitel wissen, ohne zu zeichnen.

Dafür gibt es eine **Formel**. Nur 2 kleine Schritte nacheinander:

<div class="card" style="border-left: 6px solid #2563eb;">

**Scheitel-Formel aus Normalform y = a·x² + b·x + c:**

**Schritt 1:** x vom Scheitel: **xs = –b : (2·a)**
**Schritt 2:** y vom Scheitel: setze xs ein: **ys = a·xs² + b·xs + c**

Scheitel ist **S(xs | ys)**.

Es gibt auch kurz: ys = c – b² : (4·a). Das ist das Gleiche, nur schneller.

</div>

👀 **Ich zeige – Beispiel ganz langsam:** y = 1 · x² – 4 · x + 3. Also a = 1, b = -4, c = 3.

1. xs = –(-4) : (2·1) = 4 : 2 = 2.
2. ys = 1·2² + (-4)·2 + 3 = 4 – 8 + 3 = -1.
3. Scheitel S(2 | -1).

✏️ **Du bist dran:** Mache Schritt 1 allein im Kopf für deine Regler unten, dann prüfe mit Zeile 1.

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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    title: pn_a === 0 ? "a = 0 → keine Parabel (Gerade!)" : `Scheitel S(${xs.toFixed(2)} | ${ys.toFixed(2)})`,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      pn_a === 0 ? Plot.dot([], {x: "x", y: "y"}) : Plot.dot([{x: xs, y: ys}], {x: "x", y: "y", r: 9, fill: "#16a34a", stroke: "black"})
    ]
  }));
}
```

Für **y = ${String(pn_a).replace(".", ",")}·x² ${pn_b >= 0 ? "+" : "−"} ${String(Math.abs(pn_b)).replace(".", ",")}·x ${pn_c >= 0 ? "+" : "−"} ${String(Math.abs(pn_c)).replace(".", ",")}**:

Das Beispiel oben zeigt die Start-Einstellung der Regler. **Verstelle die Regler – diese Rechnung rechnet mit:**

1. xs = –b : (2·a) = –(${pn_b}) : (2·${pn_a}) = ${pn_a === 0 ? "geht nicht, a=0" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")}
2. ys = a·xs² + b·xs + c = ${pn_a}·(${pn_a === 0 ? "–" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")})² ${pn_b >= 0 ? "+" : "−"} ${String(Math.abs(pn_b)).replace(".", ",")}·(${pn_a === 0 ? "–" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")}) ${pn_c >= 0 ? "+" : "−"} ${String(Math.abs(pn_c)).replace(".", ",")} = ${pn_a === 0 ? "geht nicht" : String((pn_a*(-pn_b/(2*pn_a))*(-pn_b/(2*pn_a)) + pn_b*(-pn_b/(2*pn_a)) + pn_c).toFixed(2)).replace(".", ",")}
3. Scheitel **S(${pn_a === 0 ? "–" : String((-pn_b/(2*pn_a)).toFixed(2)).replace(".", ",")} | ${pn_a === 0 ? "–" : String((pn_a*(-pn_b/(2*pn_a))*(-pn_b/(2*pn_a)) + pn_b*(-pn_b/(2*pn_a)) + pn_c).toFixed(2)).replace(".", ",")})**.

Wenn a = 0 ist, hast du **keine Parabel** mehr, sondern eine Gerade. Dann gibt es keinen Scheitel.

---

## 5. Nullstellen – wo trifft die Parabel die x-Achse?

**Nullstelle** heißt: **y = 0**.
Also: Wo ist die Parabel genau auf der x-Achse?

Es gibt nur 3 Möglichkeiten. Schau dir alle 3 an:

- **2 Nullstellen:** Parabel schneidet 2-mal. Wie ein U, das durch die Achse geht.
- **1 Nullstelle:** Parabel berührt nur. Der Scheitel liegt genau auf der Achse.
- **0 Nullstellen:** Parabel schwebt ganz darüber oder darunter.

🔮 **Rate zuerst:** Was passiert, wenn c nach oben geht – mehr oder weniger Treffer? Rate, dann bewege c und zähle, wie oft die rote Linie die schwarze waagerechte Achse trifft:

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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    title: `y = x² ${pn0_c >= 0 ? "+" : "−"} ${Math.abs(pn0_c)} → ${text}`,
    x: {domain: [-5, 5], label: "x →", grid: true, ticks: 11},
    y: {domain: [-5, 5], label: "↑ y", grid: true, ticks: 11},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.dot(pts, {x: "x", y: "y", r: 8, fill: "#2563eb", stroke: "black"})
    ]
  }));
}
```

### 5a. Die Diskriminante D – sie sagt dir, wie viele Nullstellen es gibt

Du musst **nicht zeichnen**, um es zu wissen.
Du rechnest **D** aus. D heißt **Diskriminante**. Schweres Wort, leichte Sache.

<div class="card" style="border-left: 6px solid #2563eb;">

**Formel für D aus y = a·x² + b·x + c:**

**D = b² – 4·a·c**

- **D > 0** (plus) → **2 Nullstellen**.
- **D = 0** → **1 Nullstelle**.
- **D < 0** (minus) → **keine Nullstelle**.

</div>

👀 **Ich zeige – Beispiel ganz langsam:** y = 1·x² – 4·x + 3. Also a=1, b=-4, c=3.

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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    title: `D = ${D} → ${anzahl}`,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      Plot.dot(pts, {x: "x", y: "y", r: 8, fill: "#2563eb", stroke: "black"})
    ]
  }));
}
```

Für **a=${pd_a}, b=${pd_b}, c=${pd_c}**:

Das Beispiel oben zeigt die Start-Einstellung der Regler. **Verstelle die Regler – diese Rechnung rechnet mit:**

1. b² = (${pd_b})² = ${pd_b*pd_b}
2. 4·a·c = 4·${pd_a}·${pd_c} = ${4*pd_a*pd_c}
3. D = b² – 4·a·c = ${pd_b*pd_b} – ${(4*pd_a*pd_c) >= 0 ? (4*pd_a*pd_c) : `(${4*pd_a*pd_c})`} = **${pd_b*pd_b - 4*pd_a*pd_c}**
4. Also: **${pd_a === 0 ? "keine Parabel" : (pd_b*pd_b - 4*pd_a*pd_c) > 0 ? "2 Nullstellen" : (pd_b*pd_b - 4*pd_a*pd_c) === 0 ? "1 Nullstelle" : "keine Nullstelle"}**

🩺 **Mini-Check (D = 0 Falle):**

```js
const p5_q1 = view(Inputs.radio(["1 Nullstelle (berührt)", "2 Nullstellen", "keine Nullstelle"], {label: "D = 0. Wie viele Nullstellen?"}));
```

${p5_q1 === "1 Nullstelle (berührt)" ? "✅ **Richtig.** D=0 heißt genau 1 Berührpunkt – der Scheitel liegt auf der Achse." : p5_q1 === "keine Nullstelle" ? "❌ Verwechslung: **D minus** = keine. **D null** = eine." : p5_q1 ? "❌ D=0 ist der Grenzfall: nicht 2, nicht 0, sondern genau **1**." : "⬜ Wähle eine Antwort."}

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

👀 **Ich zeige – Beispiel ganz langsam:** y = 1·x² – 4·x + 3. Wir wissen schon D = 4.

1. –b = –(-4) = 4.
2. √D = √4 = 2.
3. 2·a = 2·1 = 2.
4. x1 = (4 – 2) : 2 = 2 : 2 = 1.
5. x2 = (4 + 2) : 2 = 6 : 2 = 3.
6. Nullstellen: **(1 | 0)** und **(3 | 0)**.

Probe: Setze x=1 ein: 1 – 4 + 3 = 0. Stimmt! **Probe gehört immer dazu.**

**Schau dir dein Beispiel von oben an.** Das Beispiel oben zeigt die Start-Einstellung der Regler. **Verstelle die Regler – diese Rechnung rechnet mit.** Die blauen Punkte sind genau x<sub>1</sub> und x<sub>2</sub>:

1. –b = –(${pd_b}) = ${-pd_b}
2. √D = ${(pd_b*pd_b - 4*pd_a*pd_c) < 0 ? `√(${pd_b*pd_b - 4*pd_a*pd_c}) geht nicht (D ist minus, keine Wurzel aus minus)` : `√${String((pd_b*pd_b - 4*pd_a*pd_c).toFixed(2)).replace(".", ",")} = ${String(Math.sqrt(pd_b*pd_b - 4*pd_a*pd_c).toFixed(2)).replace(".", ",")}`}
3. 2·a = 2·${pd_a} = ${2*pd_a}
4. x<sub>1</sub> = (–(${pd_b}) – √D) : (2·${pd_a}) = **${pd_a === 0 ? "– (keine Parabel, a=0)" : (pd_b*pd_b - 4*pd_a*pd_c) < 0 ? "– (keine Nullstelle, D ist minus)" : String(((-pd_b - Math.sqrt(pd_b*pd_b - 4*pd_a*pd_c))/(2*pd_a)).toFixed(2)).replace(".", ",")}**
5. x<sub>2</sub> = (–(${pd_b}) + √D) : (2·${pd_a}) = **${pd_a === 0 ? "– (keine Parabel, a=0)" : (pd_b*pd_b - 4*pd_a*pd_c) < 0 ? "– (keine Nullstelle, D ist minus)" : String(((-pd_b + Math.sqrt(pd_b*pd_b - 4*pd_a*pd_c))/(2*pd_a)).toFixed(2)).replace(".", ",")}**

Wenn D minus ist, gibt es **keine** Nullstellen. Dann bleiben x<sub>1</sub> und x<sub>2</sub> leer. Das ist richtig so.

<div class="card" style="border-left: 6px solid #f59e0b;">

**Dein Kochrezept für jede Parabel-Aufgabe (immer gleiche Reihenfolge):**

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

## 6. Normalform und Scheitelpunktform – wann nehme ich was?

- **Normalform y = a·x² + b·x + c** → gut für **D und abc-Formel**. Du liest a, b, c sofort ab.
- **Scheitelpunktform y = a·(x–d)² + e** → gut für **Scheitel S(d|e)**. Du siehst sofort, wo das Tal / der Gipfel ist.

Du kannst umwandeln:

- **Scheitel → normal:** Klammer ausmultiplizieren. Beispiel y = 1·(x–2)² + (-1) = x² –4x +4 –1 = x² –4x +3.
- **Normal → Scheitel:** Nimm die **Scheitel-Formel** von oben (xs, ys). Dann schreibe y = a·(x–xs)² + ys.

Du musst nicht alles auf einmal können. Merke dir nur: **Beide Formen beschreiben die gleiche Parabel.**

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
  display(Plot.plot({
    width,
    aspectRatio: 1,
    title: titel,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#dc2626", strokeWidth: 3}),
      pf_a === 0 ? Plot.dot([], {x: "x", y: "y"}) : Plot.dot([{x: pf_d, y: pf_e}], {x: "x", y: "y", r: 8, fill: "#16a34a", stroke: "black"})
    ]
  }));
}
```

${pf_a === 0 ? "Bei **a = 0** hast du **keine Parabel** mehr, sondern eine waagerechte Gerade. Dann gibt es keinen Scheitel und kein D. Stelle a wieder auf 1." : `Deine Gleichung: **${String(pf_a).replace(".", ",")}·(x – ${pf_d})² + ${pf_e}**. Scheitel **S(${pf_d} | ${pf_e})**.`}

---

## 🎫 Exit-Ticket – darfst du fertig sagen?

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

Wenn 3 von 4 stimmen: fertig. Sonst oben bei 🩺 noch einmal schauen.

---

<div class="card">

**Geschafft! Das kannst du jetzt:**

- Du machst eine Wertetabelle für Parabeln.
- Du weißt: **Normalform y = a·x² + b·x + c**.
- Du weißt: **Scheitelpunktform y = a·(x–d)² + e, Scheitel S(d|e)**.
- Du rechnest den Scheitel mit **xs = –b : (2·a)**.
- Du rechnest **D = b² – 4·a·c** und weißt: plus = 2, null = 1, minus = 0 Nullstellen.
- Du rechnest Nullstellen mit **x = (–b ± √D) : (2·a)**.

Gehe zurück zu [Start](./) oder übe noch einmal [Geraden](./geraden). **Spacing-Tipp:** Mache das Exit-Ticket morgen noch einmal – dann bleibt es im Kopf.

</div>
