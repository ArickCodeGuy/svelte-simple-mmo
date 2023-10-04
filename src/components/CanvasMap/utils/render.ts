import type { MazeMap, MazePosition } from '../types';
import { getCells } from './getCells';

export type MazeRenderOptions = {
  size?: number;
  radius?: number;
  position?: MazePosition;
  translate?: MazePosition;
  cellSize?: number;
  cellGap?: number;
};

export function render(
  map: MazeMap,
  canvas: HTMLCanvasElement,
  options: MazeRenderOptions = {}
) {
  const size = options.size || 200;
  const position: MazePosition = options.position || { x: 0, y: 0 };
  const radius = options.radius || 2;
  const cellSize = options.cellSize || 9;
  const cellGap = options.cellGap || 1;
  const cellMiddle = cellSize / 2;
  const canvasMiddle = size / 2;
  const middleCellPosition = canvasMiddle - cellMiddle;

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
      const cellPositionX = middleCellPosition + (cellSize + cellGap) * cell.x;
      const cellPositionY = middleCellPosition + (cellSize + cellGap) * cell.y;
      ctx.fillStyle = isMiddle ? 'lightgreen' : 'white';
      ctx.fillRect(cellPositionX, cellPositionY, cellSize, cellSize);
    });
  }

  init(ctx, size);
  addCells(ctx, position, map);
}
