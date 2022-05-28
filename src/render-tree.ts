export class Renderable {
  constructor(public id: string, public children: Renderable[] = []) {}

  render() {
    this.children.forEach((r) => r.render());
  }
}
export const renderTree = new Renderable('renderTree');
