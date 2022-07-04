import { ctx } from './canvas';
import { Renderable, renderTree } from './render-tree';

const UPDATE_FREQUENCY = 2; // in Hz

class FPS extends Renderable {
  tick: number = Date.now();
  now: number = Date.now();
  msSinceLastCount: number = 0;
  framesInS: number = 0;
  text: string = '';

  render() {
    this.updateNow();
    this.updateMsSinceLastCount();

    if (this.shouldResetFPSCounter()) {
      this.resetFPSCounter();
    } else {
      this.incrementFPSCounter();
    }

    this.updateTick();

    this.drawText();
  }

  updateNow() {
    this.now = Date.now();
  }

  updateMsSinceLastCount() {
    this.msSinceLastCount += this.now - this.tick;
  }

  updateTick() {
    this.tick = this.now;
  }

  shouldResetFPSCounter() {
    return this.msSinceLastCount >= 1000 / UPDATE_FREQUENCY;
  }

  resetFPSCounter() {
    this.text = (this.framesInS * UPDATE_FREQUENCY).toString();
    this.msSinceLastCount = 0;
    this.framesInS = 0;
  }

  incrementFPSCounter() {
    this.framesInS++;
  }

  drawText() {
    ctx.font = '48px sans-serif';
    ctx.fillText(this.text, 10, 50);
  }
}

export const initFps = () => {
  const fps = new FPS('fps');
  renderTree.children.push(fps);
};
