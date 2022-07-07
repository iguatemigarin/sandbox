import { Stage } from './stage';
import { Renderable } from './renderable';

class RenderTree {
  constructor(public id: string, public children: Renderable[] = []) {}

  render(stage?: Stage) {
    this.children.forEach((r) => r.render(stage));
  }
}
export const renderTree = new RenderTree('renderTree');
