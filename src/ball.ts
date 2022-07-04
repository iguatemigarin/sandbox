import { ctx } from './canvas';
import { Renderable, renderTree } from './render-tree';
import type { Point } from './point';

export class Ball extends Renderable {
  constructor(
    public id: string,
    public radius: number = 1,
    public center: Point = [0, 0]
  ) {
    super(id);
  }

  render() {
    ctx.beginPath();
    ctx.arc(this.center[0], this.center[1], this.radius, 0, 0);
    ctx.fill();
  }
}
