export function koordinatensystem(Plot, {width, x, y, marks, ...options}) {
  const [xMin, xMax] = x.domain;
  const [yMin, yMax] = y.domain;
  const xSpan = xMax - xMin;
  const ySpan = yMax - yMin;
  const ticks = (min, max) => Array.from(
    {length: Math.floor(max) - Math.ceil(min) + 1},
    (_, index) => Math.ceil(min) + index
  );

  return Plot.plot({
    ...options,
    width,
    height: (width - 80) * ySpan / xSpan + 80,
    margin: 40,
    x: {...x, label: null, grid: true, ticks: ticks(xMin, xMax)},
    y: {...y, label: null, grid: true, ticks: ticks(yMin, yMax)},
    marks: [
      Plot.link([
        {x1: xMin, y1: 0, x2: xMax - xSpan * 0.01, y2: 0},
        {x1: 0, y1: yMin, x2: 0, y2: yMax - ySpan * 0.01}
      ], {x1: "x1", y1: "y1", x2: "x2", y2: "y2", stroke: "currentColor", strokeWidth: 2, markerEnd: "arrow"}),
      Plot.text([{x: xMax - xSpan * 0.04, y: 0, text: "x"}], {x: "x", y: "y", text: "text", dy: -14, fontSize: 18, fontWeight: "bold"}),
      Plot.text([{x: 0, y: yMax - ySpan * 0.04, text: "y"}], {x: "x", y: "y", text: "text", dx: 14, fontSize: 18, fontWeight: "bold"}),
      ...marks
    ]
  });
}