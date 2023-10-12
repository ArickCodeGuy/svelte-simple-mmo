import { CELL_SIZE, ICON_SIZE, UNIT_SIZE } from '../constants';
import type { MazeRectangle } from '../types';
import type { useRenderOptions } from './useRenderOptions';

export const renderRectangle = (
  ctx: CanvasRenderingContext2D,
  cell: MazeRectangle,
  options: ReturnType<typeof useRenderOptions>
) => {
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
    relativeMiddleCellPositionY + relativeUnitSize * cell.position.y;

  ctx.fillStyle = cell.color;
  ctx.fillRect(
    cellPositionX,
    cellPositionY,
    cellRelativeSize,
    cellRelativeSize
  );

  if (cell.icon && cell.iconColor) {
    ctx.font = `normal normal normal ${relativeIconSize}px/1 "Material Design Icons"`;
    ctx.fillStyle = cell.iconColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      cell.icon,
      cellPositionX + relativeUnitSize / 2,
      cellPositionY + relativeUnitSize / 2
    );
  }
};
