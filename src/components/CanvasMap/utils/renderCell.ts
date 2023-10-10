import type { MazeCell } from '../types';
import { useMazeCell } from './useMazeCell';
import type { useRenderOptions } from './useRenderOptions';

export const renderCell = (
  ctx: CanvasRenderingContext2D,
  cell: MazeCell,
  options: ReturnType<typeof useRenderOptions>
) => {
  const mazeCell = useMazeCell(cell, options);

  ctx.fillStyle = mazeCell.color;
  ctx.fillRect(
    mazeCell.cellPositionX,
    mazeCell.cellPositionY,
    options.cellSize,
    options.cellSize
  );

  if (mazeCell.icon) {
    ctx.font = mazeCell.iconFont;
    ctx.fillStyle = mazeCell.iconFillStyle;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      mazeCell.icon,
      mazeCell.cellPositionX + options.unitSize / 2,
      mazeCell.cellPositionY + options.unitSize / 2
    );
  }
};
