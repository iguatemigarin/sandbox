import { ctx } from './canvas';
import { Renderable, renderTree } from './render-tree';

const UPDATE_FREQUENCY = 2; // in Hz

class FPS extends Renderable {
  tick: number = Date.now();
  msSinceLastCount: number = 0;
  framesInS: number = 0;
  text: string = '';

  render() {
    const now = Date.now();
    this.msSinceLastCount += now - this.tick;

    if (this.msSinceLastCount >= 1000 / UPDATE_FREQUENCY) {
      this.text = (this.framesInS * UPDATE_FREQUENCY).toString();
      this.msSinceLastCount = 0;
      this.framesInS = 0;
    } else {
      this.framesInS++;
    }

    this.tick = now;

    ctx.font = '48px sans-serif';
    ctx.fillText(this.text, 10, 50);
  }
}

export const initFps = () => {
  const fps = new FPS('fps');
  renderTree.children.push(fps);
};
