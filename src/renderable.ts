import { Stage } from './stage';

export interface Renderable {
  render(stage?: Stage): void;
}
