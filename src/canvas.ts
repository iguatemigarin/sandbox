export const canvas = document.createElement('canvas');
export const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

export const resetCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
