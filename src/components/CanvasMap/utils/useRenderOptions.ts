import type { MazePosition, MazeRenderOptions } from '../types';
import { DEFAULT_MAZE_RENDER_OPTIONS } from './render';

export const useRenderOptions = (options: MazeRenderOptions = {}) => {
  const scale = options.scale || DEFAULT_MAZE_RENDER_OPTIONS.scale;
  const size = options.size || DEFAULT_MAZE_RENDER_OPTIONS.size;
  const translate: MazePosition =
    options.translate || DEFAULT_MAZE_RENDER_OPTIONS.translate;

  const canvasMiddle = Math.floor(size / 2);
  const mazeCellTypeDictionary = options.mazeCellTypeDictionary || {};

  return {
    scale,
    size,
    translate,
    canvasMiddle,
    mazeCellTypeDictionary,
  } as const;
};
