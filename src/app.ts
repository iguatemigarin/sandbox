import { canvas } from './canvas';
import { initFps } from './fps';
import { loop } from './loop';
import { Ball } from './ball';
import { renderTree } from './render-tree';

const ball = new Ball('a ball', 1, [1, 1]);

export function boot() {
  document.body.appendChild(canvas);
  initFps();
  renderTree.children.push(ball);
  loop();
}
