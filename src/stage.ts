import { canvas, ctx } from './canvas';
import { Point } from './point';
import { Renderable } from './renderable';

const parts = 100;
const ratio = 1 / 2;

export class Stage implements Renderable {
  unit: number = 1;
  width: number = canvas.width;
  height: number = canvas.height;
  origin: Point = [0, 0];

  constructor(public id: string, public children: Renderable[] = []) {}

  render() {
    this.updateOrigin();
    this.updateDimentions();
    this.updateUnitsScale();
    this.drawRect();
    this.children.forEach((r) => r.render(this));
  }

  updateUnitsScale() {
    this.unit = this.width / parts;
  }

  updateDimentions() {
    const { width, height } = canvas;

    this.width = height * ratio;
    this.height = height;

    if (this.width > width) {
      this.width = width;
      this.height = width / ratio;
    }
  }

  updateOrigin() {
    this.origin = [
      canvas.width / 2 - this.width / 2,
      canvas.height / 2 - this.height / 2,
    ];
  }

  drawRect() {
    ctx.translate(...this.origin);

    ctx.strokeRect(0, 0, this.width, this.height);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  addChild(child: Renderable) {
    this.children.push(child);
  }
}
