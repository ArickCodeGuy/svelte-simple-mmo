import type { MazePosition, MazeRenderOptions } from '../types';
import { DEFAULT_MAZE_RENDER_OPTIONS } from './render';

export const useRenderOptions = (options: MazeRenderOptions = {}) => {
  const scale = options.scale || DEFAULT_MAZE_RENDER_OPTIONS.scale;
  const size = options.size || DEFAULT_MAZE_RENDER_OPTIONS.size;
  const position: MazePosition =
    options.position || DEFAULT_MAZE_RENDER_OPTIONS.position;
  const selectedCell = options.selectedCell || null;
  const translate: MazePosition =
    options.translate || DEFAULT_MAZE_RENDER_OPTIONS.translate;
  const radius = options.radius || DEFAULT_MAZE_RENDER_OPTIONS.radius;
  const cellSize =
    (options.cellSize || DEFAULT_MAZE_RENDER_OPTIONS.cellSize) * scale;
  const cellGap =
    (options.cellGap || DEFAULT_MAZE_RENDER_OPTIONS.cellGap) * scale;
  const iconSize = Math.floor(cellSize * 1.3);
  const unitSize = cellSize + cellGap;

  const cellMiddle = cellSize / 2;
  const canvasMiddle = size / 2;
  const middleCellPosition = canvasMiddle - cellMiddle;
  const middleCellPositionX =
    middleCellPosition + translate.x - unitSize * position.x;
  const middleCellPositionY =
    middleCellPosition + translate.y + unitSize * position.y;

  return {
    scale,
    size,
    position,
    translate,
    radius,
    cellSize,
    cellGap,
    iconSize,
    unitSize,
    cellMiddle,
    canvasMiddle,
    middleCellPosition,
    middleCellPositionX,
    middleCellPositionY,
    selectedCell,
  } as const;
};
