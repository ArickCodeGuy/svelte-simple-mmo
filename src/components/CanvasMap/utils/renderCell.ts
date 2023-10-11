import { CELL_SIZE, UNIT_SIZE } from '../constants';
import type { MazeCell } from '../types';
import { useMazeCell } from './useMazeCell';
import type { useRenderOptions } from './useRenderOptions';

export const renderCell = (
  ctx: CanvasRenderingContext2D,
  cell: MazeCell,
  options: ReturnType<typeof useRenderOptions>
) => {
  const ICON_SIZE = Math.floor(CELL_SIZE * 1.3);

  const cellRelativeSize = Math.ceil(CELL_SIZE * options.scale);
  const relativeIconSize = Math.floor(ICON_SIZE * options.scale);
  const relativeUnitSize = Math.ceil(UNIT_SIZE * options.scale);
  const middleCellPosition = Math.floor(
    options.canvasMiddle - cellRelativeSize / 2
  );
  const relativeMiddleCellPositionX = middleCellPosition + options.translate.x;
  const relativeMiddleCellPositionY = middleCellPosition + options.translate.y;

  const cellPositionX =
    relativeMiddleCellPositionX + relativeUnitSize * cell.position.x;
  const cellPositionY =
    relativeMiddleCellPositionY - relativeUnitSize * cell.position.y;

  const mazeCell = useMazeCell(cell, options);

  ctx.fillStyle = mazeCell.color;
  ctx.fillRect(
    cellPositionX,
    cellPositionY,
    cellRelativeSize,
    cellRelativeSize
  );

  if (mazeCell.icon) {
    ctx.font = `normal normal normal ${relativeIconSize}px/1 "Material Design Icons"`;
    ctx.fillStyle = mazeCell.iconFillStyle;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      mazeCell.icon,
      cellPositionX + relativeUnitSize / 2,
      cellPositionY + relativeUnitSize / 2
    );
  }
};
