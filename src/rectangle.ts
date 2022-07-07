import { ctx } from './canvas';
import { Renderable } from './renderable';
import type { Point } from './point';

export class Rectangle implements Renderable {
  constructor(
    public id: string,
    public radius: number = 1,
    public center: Point = [0, 0]
  ) {}

  render() {
    ctx.strokeRect(50, 50, 50, 50);
  }
}
