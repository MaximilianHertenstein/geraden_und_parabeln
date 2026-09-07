---
title: Geraden verstehen
toc: true
---

# Geraden – Schritt für Schritt

Eine Gerade sieht aus wie ein Strich mit dem Lineal.

Wir machen eine Sache nach der anderen (immer nur 1 Neues pro Schritt):
Zuerst nur das Koordinatensystem.
Dann nur die Tabelle.
Dann nur die Steigung.
Dann nur der Startwert.

<div class="card" style="border-left: 6px solid #7c3aed;">

**So arbeitest du in jedem Abschnitt:**

1. 🔁 **Abrufen** – 1 kurze Frage zu vorher.
2. 👀 **Ich zeige** – fertiges Beispiel, nur lesen.
3. 🔮 **Denke – Rate – Prüfe** – erst raten, dann Regler bewegen.
4. 🩺 **Mini-Check** – ankreuzen, sofort Rückmeldung lesen.

**Deine Ziele:** Danach findest du Punkte, rechnest eine Wertetabelle, erklärst **m** und **b** und zeichnest jede Gerade mit 2 Punkten.

</div>

```js
import * as Inputs from "npm:@observablehq/inputs";
```

---

## 0. Abrufen – was du vom Start kannst

Mache das ohne Bild, nur aus dem Kopf. Dann gehe weiter.

```js
const g0_q1 = view(Inputs.radio(["3 nach rechts, 2 nach oben", "3 nach oben, 2 nach rechts", "3 und 2 sind egal"], {label: "Was heißt (3 | 2)?"}));
```

${g0_q1 === "3 nach rechts, 2 nach oben" ? "✅ **Richtig.** (x | y) – zuerst x." : g0_q1 ? "❌ Typischer Fehler: **x und y vertauscht.** Erste Zahl ist immer x (rechts). Lege dir den Satz zurecht: „x zuerst, x rechts.“" : "⬜ Wähle eine Antwort."}

```js
const g0_q2 = view(Inputs.radio(["(0 | 0), die Mitte", "(1 | 1)", "gibt es nicht"], {label: "Wie heißt der Punkt in der Mitte?"}));
```

${g0_q2 === "(0 | 0), die Mitte" ? "✅ **Richtig.** Das ist der **Ursprung**." : g0_q2 ? "❌ Schau auf Start-Seite nach: Mitte = 0 und 0." : "⬜ Wähle eine Antwort."}

---

## 1. Das Koordinatensystem – wie in deinem Heft

Schau dir das Bild an:

- Waagerecht ist **x**. Nach **rechts** wird es größer.
- Senkrecht ist **y**. Nach **oben** wird es größer.
- In der Mitte ist **(0 | 0)**. Das heißt **Ursprung**.

Ein Punkt hat immer 2 Zahlen: **(x | y)**.

👀 **Ich zeige – Beispiel:** **(3 | 2)** heißt:
Gehe 3 nach rechts. Dann 2 nach oben. Dort ist der Punkt.

Es gehen auch **Kommazahlen**, zum Beispiel **(2,5 | 1,5)**.
Der Punkt liegt dann zwischen zwei Linien, mitten im Kästchen.

🔮 **Denke – Rate – Prüfe.** Wo liegt (3 | 2)? Rechts-oben oder links-unten? Merke dir deine Vermutung. Dann prüfe mit den Reglern:

```js
const gx = view(Inputs.range([-5, 5], {value: 3, step: 0.5, label: "x – nach rechts"}));
```

```js
const gy = view(Inputs.range([-5, 5], {value: 2, step: 0.5, label: "y – nach oben"}));
```

```js
display(Plot.plot({
  width,
  aspectRatio: 1,
  x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
  y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
  marks: [
    Plot.ruleX([0], {strokeWidth: 2}),
    Plot.ruleY([0], {strokeWidth: 2}),
    Plot.dot([{x: gx, y: gy}], {x: "x", y: "y", r: 9, fill: "#2563eb"}),
    Plot.text([{x: gx, y: gy, t: `(${String(gx).replace(".", ",")} | ${String(gy).replace(".", ",")})`}], {x: "x", y: "y", text: "t", dy: -20, fontSize: 17, fontWeight: "bold"})
  ]
}))
```

<div class="card" style="border-left: 6px solid #2563eb;">

**Merke:**
Der Punkt ist jetzt bei **(${String(gx).replace(".", ",")} | ${String(gy).replace(".", ",")})**.
Erste Zahl ist immer x. Zweite Zahl ist immer y.
**Erkläre:** Sage laut: „Ich gehe zuerst x nach rechts, dann y nach oben."

</div>

🩺 **Mini-Check:**

```js
const g1_q1 = view(Inputs.radio(["(2 | 4)", "(4 | 2)", "(2 | 2)"], {label: "Du gehst 4 nach rechts und 2 nach oben. Welcher Punkt ist das?"}));
```

${g1_q1 === "(4 | 2)" ? "✅ **Richtig.** 4 ist x, 2 ist y." : g1_q1 ? "❌ Das ist der **Vertausch-Fehler**. Rechts = x = erste Zahl. Also (4 | 2)." : "⬜ Wähle eine Antwort."}

---

## 2. Was ist eine Gerade?

Eine Gerade hat eine Gleichung. Sie heißt:

<div class="card" style="border-left: 6px solid #16a34a;">

**y = m · x + b**

- **m** = die **Steigung**. Wie steil? Hoch oder runter? (Schritt 1)
- **b** = der **Startwert**. Wo startet die Linie auf der y-Achse? (Schritt 2)
- **x** = du darfst einsetzen. **y** = kommt raus.

</div>

👀 **Beispiel:** **y = 2 · x + 1**

Das heißt: Steigung m = 2. Startwert b = 1.

Wir schauen uns **m** und **b** einzeln an. Immer nur eine neue Sache auf einmal.

<div class="card" style="border-left: 6px solid #7c3aed;">

**Beispiel aus dem Alltag – Taxi:**

Grundgebühr 1 €, jeder Kilometer kostet 2 €. Nach x Kilometern zahlst du y Euro:

y = 2 · x + 1

m = 2 ist der Preis pro Kilometer. b = 1 ist die Grundgebühr beim Einsteigen (x = 0).

</div>

---

## 3. Die Wertetabelle – so rechnest du Punkte aus

Eine Wertetabelle ist eine **Rechen-Hilfe**.
Du setzt oben x ein. Du rechnest y aus.

👀 **Ich zeige – fertig gerechnet für y = 2 · x + 1:**

Schritt 1: Nimm x = 0.
Rechne: y = 2 · 0 + 1 = 0 + 1 = 1. Punkt: (0 | 1).

Schritt 2: Nimm x = 1.
Rechne: y = 2 · 1 + 1 = 2 + 1 = 3. Punkt: (1 | 3).

Schritt 3: Nimm x = -1.
Rechne: y = 2 · (-1) + 1 = -2 + 1 = -1. Punkt: (-1 | -1).

So geht es immer: **einsetzen – mal rechnen – plus rechnen – fertig.**

✏️ **Du bist dran (Lücke):** Decke die Lösung ab. Rechne x = 2 im Kopf: y = 2 · 2 + 1 = ? Dann erst weiterlesen und mit der Tabelle prüfen. Lösung: y = 5, Punkt (2 | 5).

🩺 **Mini-Check:**

```js
const g3_q1 = view(Inputs.radio(["5", "4", "6"], {label: "y = 2·x + 1, x = 2. Was ist y?"}));
```

${g3_q1 === "5" ? "✅ **Richtig.** 2·2+1 = 4+1 = 5." : g3_q1 === "4" ? "❌ Du hast **+1 vergessen** (nur 2·2 gerechnet). Die Tabelle zeigt: immer mal **und** plus." : g3_q1 ? "❌ Rechne in 2 Schritten: erst 2·2=4, dann 4+1=5. Prüfe mit der Tabelle unten." : "⬜ Wähle eine Antwort."}

**Schau hier.** Verstelle m und b. Die Tabelle rechnet von allein:

```js
const gm_tab = view(Inputs.range([-3, 3], {value: 2, step: 1, label: "m – Steigung"}));
```

```js
const gb_tab = view(Inputs.range([-3, 3], {value: 1, step: 1, label: "b – Startwert"}));
```

```js
{
  const tabelle = [-2, -1, 0, 1, 2].map((x) => ({x: x, y: gm_tab * x + gb_tab}));
  display(Inputs.table(tabelle, {header: {x: "x (du wählst)", y: "y (kommt raus)"}}));
}
```

```js
{
  const punkte = [-2, -1, 0, 1, 2].map((x) => ({x: x, y: gm_tab * x + gb_tab}));
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x: x, y: gm_tab * x + gb_tab}));
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-8, 8], label: "↑ y", grid: true},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.dot(punkte, {x: "x", y: "y", r: 6, fill: "#f59e0b", stroke: "black"})
    ]
  }));
}
```

Was siehst du?

- Die **gelben Punkte** sind aus der Tabelle.
- Die **blaue Linie** geht genau durch alle Punkte.
- Bei **y = ${String(gm_tab).replace(".", ",")} · x ${gb_tab >= 0 ? "+" : "−"} ${String(Math.abs(gb_tab)).replace(".", ",")}** liegen z.B. die Punkte (-2 | ${gm_tab * -2 + gb_tab}), (0 | ${gb_tab}) und (2 | ${gm_tab * 2 + gb_tab}) auf der Linie.

<div class="card" style="border-left: 6px solid #f59e0b;">

**Übungsreihe (nur 1 Sache ändert sich):**

1. Stelle **m=1, b=1** ein. Merke dir das Bild.
2. 🔮 **Rate:** Was passiert bei **m=2, b=1**? Steiler oder flacher? Dann stelle ein und **prüfe**.
3. 🔮 **Rate:** Was passiert bei **m=2, b=3**? Hoch oder runter? Dann stelle ein und **prüfe**.
4. **Erkläre:** Was ändert m? Was ändert b? Sage 2 Sätze.

Du vergleichst 2 Bilder. So siehst du den Unterschied.

</div>

<div class="card" style="border-left: 6px solid #f59e0b;">

**So machst du selbst eine Wertetabelle:**

1. Schreibe x-Werte auf: -2, -1, 0, 1, 2.
2. Setze jeden Wert für x ein.
3. Rechne y aus.
4. Schreibe den Punkt (x | y) auf.
5. Male die Punkte ins Heft. Lege das Lineal an.

</div>

---

## 4. Die Steigung m – in Ruhe

Hier geht es nur um m. b bleibt 0. Nimm dir Zeit.

### 4a. Was fühlt sich die Steigung an?

Stell dir einen **Bergweg** vor:

- **m ist plus** → es geht **hoch**. Beispiel m = 2.
- **m ist minus** → es geht **runter**. Beispiel m = -2.
- **m ist 0** → es ist **flach**. Du gehst geradeaus.
- **m ist groß** (z.B. 3) → es ist **steil**.
- **m ist klein** (z.B. 0,5) → es ist **flach**.

🔮 **Denke – Rate – Prüfe.** Bevor du schiebst:

```js
const g4a_pred = view(Inputs.radio(["es geht hoch", "es geht runter", "es ist flach"], {label: "Rate: m = -2. Was erwartest du?"}));
```

${g4a_pred ? "Gut geraten. Jetzt **bewege nur den m-Regler** unten auf -2 und **prüfe**. Stimmt deine Vermutung? Erkläre warum." : "⬜ Rate zuerst. Falsch raten ist erlaubt."}

```js
const gm_gef = view(Inputs.range([-3, 3], {value: 1, step: 0.5, label: "m – Steigung (bewege nur mich)"}));
```

```js
{
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: gm_gef * x}));
  let wort = gm_gef > 0 ? "es geht HOCH ↗" : gm_gef < 0 ? "es geht RUNTER ↘" : "es ist FLACH →";
  let stark = Math.abs(gm_gef) >= 2 ? "steil" : Math.abs(gm_gef) >= 1 ? "mittel" : Math.abs(gm_gef) > 0 ? "flach" : "ganz flach";
  display(Plot.plot({
    width,
    aspectRatio: 1,
    title: `m = ${gm_gef} → ${wort}, ${stark}`,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 4})
    ]
  }));
}
```

Bei **m = ${gm_gef}** siehst du oben im Bild, ob es hoch oder runter geht.

<div class="card" style="border-left: 6px solid #2563eb;">

**Merke:**
Plus = hoch. Minus = runter. Null = flach.
Große Zahl = steil. Kleine Zahl = flach.

</div>

🩺 **Mini-Check:**

```js
const g4a_q1 = view(Inputs.radio(["m = 3", "m = 0,5", "m = -3"], {label: "Welche Steigung ist steil nach oben?"}));
```

${g4a_q1 === "m = 3" ? "✅ **Richtig.** Groß + plus = steil hoch." : g4a_q1 === "m = 0,5" ? "❌ Das ist **flach** hoch. Groß heißt steil (z.B. 3)." : g4a_q1 ? "❌ Minus heißt **runter**. Gesucht ist hoch + steil = m = 3." : "⬜ Wähle eine Antwort."}

### 4b. Das Steigungsdreieck – so liest du m am Bild ab

So merkst du dir m:

> **Gehe 1 nach rechts. Dann gehe m nach oben.**

- Bei m = 2: 1 nach rechts, 2 nach oben.
- Bei m = -1: 1 nach rechts, 1 nach unten (weil minus).
- Bei m = 0,5: 1 nach rechts, nur ein halbes Kästchen nach oben.

Schau dir das Dreieck an. Bewege m:

```js
const gm_drei = view(Inputs.range([-3, 3], {value: 2, step: 0.5, label: "m – Steigung"}));
```

```js
{
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: gm_drei * x}));
  // Dreieck ab Startpunkt (0|0): 1 nach rechts, m nach oben
  const p0 = {x: 0, y: 0};
  const p1 = {x: 1, y: 0};
  const p2 = {x: 1, y: gm_drei};
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.line([p0, p1], {x: "x", y: "y", stroke: "#f59e0b", strokeWidth: 4}),
      Plot.line([p1, p2], {x: "x", y: "y", stroke: "#16a34a", strokeWidth: 4}),
      Plot.dot([p0, p2], {x: "x", y: "y", r: 6, fill: "black"}),
      Plot.text([{x: 0.5, y: -0.4, t: "1 nach rechts"}], {x: "x", y: "y", text: "t", fontSize: 13}),
      Plot.text([{x: 1.7, y: gm_drei/2, t: `${gm_drei} nach ${gm_drei >= 0 ? "oben" : "unten"}`}], {x: "x", y: "y", text: "t", fontSize: 13})
    ]
  }));
}
```

- **Orange**: 1 nach rechts.
- **Grün**: ${gm_drei} nach ${gm_drei >= 0 ? "oben" : "unten"}.
- Zusammen zeigen sie dir die Steigung.

Mach das im Heft auch so: Male ein kleines Dreieck an die Gerade. Dann siehst du m ohne zu rechnen.

🩺 **Mini-Check:**

```js
const g4b_q1 = view(Inputs.radio(["2 nach oben", "1 nach oben", "2 nach rechts"], {label: "m = 2. Du gehst 1 nach rechts. Wie weiter?"}));
```

${g4b_q1 === "2 nach oben" ? "✅ **Richtig.** m sagt: so viel hoch." : g4b_q1 ? "❌ Denke an den Satz: **1 nach rechts, m nach oben.** Bei m=2 also 2 hoch." : "⬜ Wähle eine Antwort."}

### 4c. Plus, minus oder null? Drei Bilder im Kopf

Stell dir nur drei Bilder vor:

1. **m = 2** → steigt stark. ↗
2. **m = -2** → fällt stark. ↘
3. **m = 0** → y = 0 · x + b = b. Waagerechte Linie. →

Probiere alle drei mit dem Regler oben aus.
Frage dich immer: **Hoch oder runter? Steil oder flach?**

🩺 **Stopp-Frage – erst weiter, wenn das sitzt:**

```js
const g4c_q1 = view(Inputs.radio(["flache, waagerechte Linie", "steile Linie nach oben", "senkrechte Linie"], {label: "Was bedeutet m = 0?"}));
```

${g4c_q1 === "flache, waagerechte Linie" ? "✅ **Richtig.** m=0 → kein Hoch, kein Runter. y bleibt immer b." : g4c_q1 === "senkrechte Linie" ? "❌ **Klassischer Fehler.** Senkrecht hat **gar kein m** (x-Unterschied = 0, Teilen geht nicht). m=0 ist waagerecht." : g4c_q1 ? "❌ m=0 heißt 0 nach oben. Also flach." : "⬜ Wähle eine Antwort."}

### 4d. Steigung aus zwei Punkten rechnen

Manchmal hast du zwei Punkte und kein Bild.
Dann rechnest du so:

<div class="card" style="border-left: 6px solid #16a34a;">

**Formel:**
**m = (y<sub>2</sub> – y<sub>1</sub>) : (x<sub>2</sub> – x<sub>1</sub>)**

Sprich: **y-Unterschied geteilt durch x-Unterschied.**
Oben steht, wie viel es hoch/runter geht.
Unten steht, wie weit es nach rechts geht.

</div>

👀 **Ich zeige – Beispiel ganz langsam:**
Punkt A = (1 | 1). Punkt B = (3 | 5).

1. y-Unterschied: 5 – 1 = 4.
2. x-Unterschied: 3 – 1 = 2.
3. Teilen: 4 : 2 = 2.
4. Also: **m = 2**.

🩺 **Mini-Check – aufgepasst beim Teilen:**

```js
const g4d_q1 = view(Inputs.radio(["m = 2", "m = 0,5", "m = 4"], {label: "A(1|1), B(3|5). Was ist m?"}));
```

${g4d_q1 === "m = 2" ? "✅ **Richtig.** (5–1):(3–1) = 4:2 = 2." : g4d_q1 === "m = 0,5" ? "❌ Du hast **vertauscht geteilt** (x durch y). Oben steht immer y-Unterschied." : g4d_q1 ? "❌ Rechne: oben 5–1=4, unten 3–1=2, 4:2=2." : "⬜ Wähle eine Antwort."}

**Jetzt du:** Verschiebe A und B. Die Rechnung läuft mit:

```js
const gax = view(Inputs.range([-5, 5], {value: 1, step: 1, label: "Ax"}));
```

```js
const gay = view(Inputs.range([-5, 5], {value: 1, step: 1, label: "Ay"}));
```

```js
const gbx = view(Inputs.range([-5, 5], {value: 3, step: 1, label: "Bx"}));
```

```js
const gby = view(Inputs.range([-5, 5], {value: 5, step: 1, label: "By"}));
```

```js
{
  const dx = gbx - gax;
  const dy = gby - gay;
  const m = dx === 0 ? "geht nicht (senkrecht)" : (dy/dx).toFixed(2);
  const linie = d3.range(-6, 6.05, 0.1).map((x) => {
    if (dx === 0) return {x: gax, y: x};
    return {x, y: gay + (dy/dx)*(x - gax)};
  });
  display(Plot.plot({
    width,
    aspectRatio: 1,
    title: `y-Unterschied = ${dy}, x-Unterschied = ${dx}, m = ${m}`,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.dot([{x: gax, y: gay}, {x: gbx, y: gby}], {x: "x", y: "y", r: 7, fill: "#f59e0b", stroke: "black"}),
      Plot.text([{x: gax, y: gay, t: `A(${gax}|${gay})`}], {x: "x", y: "y", text: "t", dy: -16, fontSize: 14, fontWeight: "bold"}),
      Plot.text([{x: gbx, y: gby, t: `B(${gbx}|${gby})`}], {x: "x", y: "y", text: "t", dy: -16, fontSize: 14, fontWeight: "bold"})
    ]
  }));
}
```

Rechnung für deine Punkte A(${gax} | ${gay}) und B(${gbx} | ${gby}):

**Verstelle die Regler – diese Rechnung rechnet mit:**

1. y-Unterschied: y<sub>2</sub> – y<sub>1</sub> = ${gby} – ${gay} = ${gby - gay}
2. x-Unterschied: x<sub>2</sub> – x<sub>1</sub> = ${gbx} – ${gax} = ${gbx - gax}
3. Teilen: m = ${gby - gay} : ${gbx - gax} = ${(gbx - gax) === 0 ? "nicht möglich" : ((gby - gay)/(gbx - gax)).toFixed(2)}
4. Also: **m = ${(gbx - gax) === 0 ? "nicht möglich (senkrecht)" : ((gby - gay)/(gbx - gax)).toFixed(2)}**.

Wenn unten 0 rauskommt, ist die Linie **senkrecht**. Durch 0 teilen geht nicht. Dann gibt es kein m. Merke dir diesen Sonderfall.

---

## 5. Der Startwert b – wo startet die Linie?

**b** geht so:

> **b sagt, wo die Linie die y-Achse schneidet.**
> Also bei x = 0.

👀 **Beispiel:** y = 1 · x + 2. Dann ist b = 2. Die Linie geht durch (0 | 2).

🔮 **Rate zuerst:** Wenn b von 0 auf 3 geht – wird die Linie steiler oder rutscht sie nur hoch? Rate, dann bewege nur b:

```js
const gm_b = view(Inputs.range([-2, 2], {value: 1, step: 0.5, label: "m – bleibt erst gleich"}));
```

```js
const gb_b = view(Inputs.range([-4, 4], {value: 2, step: 1, label: "b – Startwert (bewege mich)"}));
```

```js
{
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: gm_b * x + gb_b}));
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.dot([{x: 0, y: gb_b}], {x: "x", y: "y", r: 8, fill: "#16a34a", stroke: "black"}),
      Plot.text([{x: 0, y: gb_b, t: `b = ${gb_b} → (0|${gb_b})`}], {x: "x", y: "y", text: "t", dx: 55, fontSize: 14, fontWeight: "bold"})
    ]
  }));
}
```

<div class="card" style="border-left: 6px solid #16a34a;">

**Merke:**
b kannst du **ablesen**. Schaue, wo die Linie die y-Achse (die senkrechte Achse) trifft.
Dort ist **(0 | b)**. Steil bleibt gleich – es rutscht nur hoch/runter.

</div>

🩺 **Mini-Check – b oder Nullstelle?**

```js
const g5_q1 = view(Inputs.radio(["b = 3", "b = 0", "b = dort wo y = 0 ist"], {label: "Linie geht durch (0 | 3). Was ist b?"}));
```

${g5_q1 === "b = 3" ? "✅ **Richtig.** b ist der y-Wert bei x=0." : g5_q1 === "b = dort wo y = 0 ist" ? "❌ Das ist die **Nullstelle** (y=0), nicht der Startwert. b ist bei **x=0**." : g5_q1 ? "❌ Lies bei x=0 ab: (0|3) → b=3." : "⬜ Wähle eine Antwort."}

---

## 6. Alles zusammen – deine 3 Schritte

So zeichnest du **jede** Gerade:

**Schritt 1:** Lies m und b ab. Beispiel y = 2 · x + 1 → m = 2, b = 1.
**Schritt 2:** Male den Startpunkt (0 | b) ein. Hier (0 | 1).
**Schritt 3:** Gehe vom Startpunkt aus: 1 nach rechts, m nach oben. Male einen zweiten Punkt. Lege das Lineal durch beide Punkte. Fertig.

Probiere es hier aus. Stelle m und b ein. Mache die Schritte im Kopf mit:

```js
const gm_end = view(Inputs.range([-3, 3], {value: 1, step: 0.5, label: "m"}));
```

```js
const gb_end = view(Inputs.range([-4, 4], {value: 0, step: 1, label: "b"}));
```

```js
{
  const linie = d3.range(-6, 6.05, 0.1).map((x) => ({x, y: gm_end * x + gb_end}));
  const p0 = {x: 0, y: gb_end};
  const p1 = {x: 1, y: gm_end + gb_end};
  display(Plot.plot({
    width,
    aspectRatio: 1,
    x: {domain: [-6, 6], label: "x →", grid: true, ticks: 13},
    y: {domain: [-6, 6], label: "↑ y", grid: true, ticks: 13},
    marks: [
      Plot.ruleX([0], {strokeWidth: 2}),
      Plot.ruleY([0], {strokeWidth: 2}),
      Plot.line(linie, {x: "x", y: "y", stroke: "#2563eb", strokeWidth: 3}),
      Plot.dot([p0, p1], {x: "x", y: "y", r: 6, fill: "#f59e0b", stroke: "black"}),
      Plot.text([{x: 0, y: gb_end, t: `Start (0|${gb_end})`}], {x: "x", y: "y", text: "t", dx: 45, fontSize: 13})
    ]
  }));
}
```

Deine Gerade heißt jetzt **y = ${String(gm_end).replace(".", ",")} · x ${gb_end >= 0 ? "+" : "−"} ${String(Math.abs(gb_end)).replace(".", ",")}**.

- Startpunkt: (0 | ${gb_end})
- Zweiter Punkt mit Dreieck: (1 | ${gm_end + gb_end})

<div class="card" style="border-left: 6px solid #7c3aed;">

**Sage es in einem Satz (Sprachhilfe):**

„Die Gerade steigt / fällt, weil m = … Sie startet bei (0 | …), weil b = …"

Beispiel: „Die Gerade steigt mittel, weil m = 1. Sie startet bei (0 | 0), weil b = 0."

</div>

---

## 7. Nullstelle – wo trifft die Gerade die x-Achse?

**Nullstelle** heißt: **y = 0**. Du suchst den Punkt auf der waagerechten x-Achse.

👀 **Ich zeige – Beispiel:** y = 2 · x + 1. Setze y = 0:

0 = 2 · x + 1 | -1
-1 = 2 · x | :2
x = -0,5. Die Nullstelle ist (-0,5 | 0).

Merke dir den Unterschied:

- **Startwert b** ist bei **x = 0**. Punkt (0 | b).
- **Nullstelle** ist bei **y = 0**. Punkt (x | 0).

```js
const g7_q1 = view(Inputs.radio(["(-0,5 | 0)", "(0 | 1)", "(0 | -0,5)"], {label: "y = 2·x + 1. Was ist die Nullstelle?"}));
```

${g7_q1 === "(-0,5 | 0)" ? "✅ **Richtig.** y=0 setzen und nach x auflösen." : g7_q1 === "(0 | 1)" ? "❌ Das ist der **Startwert b**, nicht die Nullstelle. Nullstelle hat immer y=0." : g7_q1 ? "❌ Rechne: 0 = 2·x+1 → x = -0,5. Punkt (-0,5 | 0)." : "⬜ Wähle eine Antwort."}

Das brauchst du gleich wieder bei den Parabeln. Dort heißt es auch: y = 0 setzen.

---

## Exit-Ticket – darfst du weiter?

Erst weiter zu Parabeln, wenn 2 von 3 stimmen. Sonst oben noch einmal schauen.

```js
const g6_q1 = view(Inputs.radio(["steigt, mittel", "fällt, steil", "flach"], {label: "1) m = 1. Was gilt?"}));
```

${g6_q1 === "steigt, mittel" ? "✅" : g6_q1 ? "❌ m=1 → plus = hoch, 1 = mittel." : "⬜"}

```js
const g6_q2 = view(Inputs.range([-4, 4], {value: 0, step: 1, label: "2) Stelle hier b = 2 ein. Wo ist der Startpunkt? (Bild oben prüfen)"}));
```

${g6_q2 === 2 ? "✅ **Richtig.** Start ist (0 | 2)." : "Stelle den Regler auf 2 und schaue: Start ist (0 | b)."}

```js
const g6_q3 = view(Inputs.radio(["(0 | 1) und (1 | 3)", "(0 | 2) und (1 | 2)", "(2 | 1) und (3 | 1)"], {label: "3) Welche Punkte liegen auf y = 2·x + 1?"}));
```

${g6_q3 === "(0 | 1) und (1 | 3)" ? "✅ **Richtig.** Einsetzen prüfen: 2·0+1=1, 2·1+1=3." : g6_q3 ? "❌ Setze ein: x=0 → y=1. Nur (0|1) und (1|3) passen." : "⬜"}

---

<div class="card">

**Geschafft! Das kannst du jetzt:**

- Du findest Punkte (x | y).
- Du machst eine Wertetabelle: einsetzen, mal rechnen, plus rechnen.
- Du sagst: m = hoch / runter + steil / flach.
- Du sagst: b = Start auf der y-Achse, Punkt (0 | b).
- Du zeichnest eine Gerade mit 2 Punkten und Lineal.
- Du findest die Nullstelle mit y = 0.

Weiter geht es mit [Parabeln](./parabeln). Dort ist alles **gebogen**. Die Wertetabelle kannst du schon. Du rufst sie nur wieder ab.

</div>
