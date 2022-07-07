import { canvas } from './canvas';
import { FPS } from './fps';
import { loop } from './loop';
import { Stage } from './stage';
import { renderTree } from './render-tree';
import { Ball } from './ball';

const stage = new Stage('main stage');
stage.addChild(new Ball('one ball', 10, [50, 100]));

const fps = new FPS();

export function boot() {
  document.body.appendChild(canvas);
  renderTree.children.push(stage);
  renderTree.children.push(fps);
  loop();
}
