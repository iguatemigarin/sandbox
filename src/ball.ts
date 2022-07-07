import { ctx } from './canvas';
import { Renderable } from './renderable';
import type { Point } from './point';
import { Stage } from './stage';

export class Ball implements Renderable {
  children: Renderable[];

  constructor(
    public id: string,
    public radius: number = 1,
    public center: Point = [0, 0]
  ) {}

  render(stage: Stage) {
    ctx.translate(...stage.origin);
    ctx.beginPath();
    ctx.arc(
      this.center[0] * stage.unit,
      this.center[1] * stage.unit,
      this.radius * stage.unit,
      0,
      360
    );
    ctx.fill();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}
