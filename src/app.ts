export function boot() {
  const canvas = makeCanvas();
  document.body.appendChild(canvas);
}

function makeCanvas() {
  const canvas = e('canvas');
  return canvas;
}

function e(tagName: string) {
  const element = document.createElement(tagName);
  return element;
}
