import type { MazeRenderOptions } from '../utils/render';

const onMousemove = (
  e: MouseEvent,
  options: MazeRenderOptions
): MazeRenderOptions => {
  const newOptions = {
    ...options,
  };

  if (!newOptions.translate) {
    newOptions.translate = {
      x: 0,
      y: 0,
    };
  }
  newOptions.translate.x += e.movementX;
  newOptions.translate.y += e.movementY;

  return newOptions;
};

export const onMousedown = (
  canvas: HTMLCanvasElement,
  options: MazeRenderOptions
) => {
  const mouseMoveHandler = (e: MouseEvent) => {
    onMousemove(e, options);
  };

  const mouseUpHandler = (e: MouseEvent) => {
    window.removeEventListener('mousemove', mouseMoveHandler);
  };

  window.addEventListener('mousemove', mouseMoveHandler);
  window.addEventListener('mouseup', mouseUpHandler, {
    once: true,
  });
};
