import { canvas } from './canvas';
import { initFps } from './fps';
import { loop } from './loop';

export function boot() {
  document.body.appendChild(canvas);
  initFps();
  loop();
}
