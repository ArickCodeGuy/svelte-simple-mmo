import type { MazeRenderOptions } from '../utils/render';

export const onScroll = (
  e: WheelEvent,
  options: MazeRenderOptions
): MazeRenderOptions => {
  if (!options.cellSize) return options;
  const scrollStep = 1.2;

  const newOptions = {
    ...options,
  };

  if (e.deltaY < 0) {
    newOptions.cellSize! *= scrollStep;
  } else {
    newOptions.cellSize! /= scrollStep;
  }
  newOptions.cellSize = Math.floor(newOptions.cellSize!);

  if (newOptions.cellSize! < 5) newOptions.cellSize = 5;
  return newOptions;
};
