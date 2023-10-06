import type { MazeMap, MazePosition, MazeRenderOptions } from '../types';
import { getCells } from './getCells';
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
  cellGap: 1,
  cellSize: 10,
  mazeCellTypeDictionary: {},
  position: useDefaultMazePosition(),
  translate: useDefaultMazePosition(),
  radius: 2,
  scale: 1,
  selectedCell: null,
};

export function render(
  map: MazeMap,
  canvas: HTMLCanvasElement,
  options: MazeRenderOptions = {}
) {
  const {
    middleCellPositionX,
    middleCellPositionY,
    radius,
    position,
    unitSize,
    cellSize,
    size,
    selectedCell,
  } = useRenderOptions(options);

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
  function addCells(
    ctx: CanvasRenderingContext2D,
    position: MazePosition,
    map: MazeMap
  ) {
    const cells = getCells(position, map, radius);

    cells.forEach((cell) => {
      const isMiddle = cell.x === position.x && cell.y === position.y;
      const isSelected =
        selectedCell && selectedCell.x === cell.x && selectedCell.y === cell.y;
      const cellPositionX = middleCellPositionX + unitSize * cell.x;
      const cellPositionY = middleCellPositionY + unitSize * -cell.y;

      ctx.fillStyle = 'white';
      isMiddle ? (ctx.fillStyle = 'lightgreen') : null;
      isSelected ? (ctx.fillStyle = 'blue') : null;

      ctx.fillRect(cellPositionX, cellPositionY, cellSize, cellSize);
    });
  }

  init(ctx, size);
  addCells(ctx, position, map);
}
