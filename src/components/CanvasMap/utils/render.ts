import type {
  MazeRenderObjects,
  MazePosition,
  MazeRenderOptions,
} from '../types';
import { renderRectangle } from './renderRectangle';
import { useRenderOptions } from './useRenderOptions';

export const DEFAULT_MAZE_POSITION: MazePosition = {
  x: 0,
  y: 0,
};

export const useDefaultMazePosition = (): MazePosition => ({
  ...DEFAULT_MAZE_POSITION,
});

export const DEFAULT_MAZE_RENDER_OPTIONS: Required<MazeRenderOptions> = {
  size: 200,
  translate: useDefaultMazePosition(),
  scale: 1,
};

export function render(
  map: MazeRenderObjects,
  canvas: HTMLCanvasElement,
  options: MazeRenderOptions
) {
  const renderOptions = useRenderOptions(options);

  const ctx = canvas.getContext('2d')!;

  function clear(ctx: CanvasRenderingContext2D, size: number) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, size, size);
  }
  function init(ctx: CanvasRenderingContext2D, size: number) {
    ctx.canvas.width = size;
    ctx.canvas.height = size;
    clear(ctx, size);
  }
  function update(ctx: CanvasRenderingContext2D, map: MazeRenderObjects) {
    map.forEach((obj) => {
      if (obj.type === 'rectangle') {
        renderRectangle(ctx, obj, renderOptions);
      }
    });
  }

  init(ctx, renderOptions.size);
  update(ctx, map);
}
