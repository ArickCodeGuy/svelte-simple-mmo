import type { MazeRenderOptions } from '../utils/render';
import { onMousedown } from './move';
import { onScroll } from './scroll';

export const addEventHandlers = (
  canvas: HTMLCanvasElement,
  options: MazeRenderOptions
) => {
  const scrollHandler = (e: WheelEvent) => {
    onScroll(e, options);
  };

  const handleMousedown = (e: MouseEvent) => {
    onMousedown(canvas, options);
  };

  canvas.addEventListener('wheel', scrollHandler);
  canvas.addEventListener('mousedown', handleMousedown);

  return () => {
    canvas.removeEventListener('wheel', scrollHandler);
    canvas.removeEventListener('mousedown', handleMousedown);
  };
};
