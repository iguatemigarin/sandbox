export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d');

export const updateCanvasSize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
