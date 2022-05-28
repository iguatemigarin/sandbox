import { canvas, ctx, updateCanvasSize } from './canvas';
import { renderTree } from './render-tree';

export const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateCanvasSize();
  renderTree.render();

  requestAnimationFrame(loop);
};
