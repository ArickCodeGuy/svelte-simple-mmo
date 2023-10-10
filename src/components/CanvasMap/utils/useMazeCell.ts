import type { MazeCell } from '../types';
import type { useRenderOptions } from './useRenderOptions';

export const useMazeCell = (
  cell: MazeCell,
  options: ReturnType<typeof useRenderOptions>
) => {
  const isMiddle =
    cell.position.x === options.position.x &&
    cell.position.y === options.position.y;
  const cellPositionX =
    options.middleCellPositionX + options.unitSize * cell.position.x;
  const cellPositionY =
    options.middleCellPositionY + options.unitSize * -cell.position.y;
  const iconFont = `normal normal normal ${options.iconSize}px/1 "Material Design Icons"`;
  const iconFillStyle =
    options.mazeCellTypeDictionary?.[cell.typeId]?.color ?? 'white';

  let color = options.mazeCellTypeDictionary?.[cell.typeId]?.color ?? 'white';
  const icon = options.mazeCellTypeDictionary?.[cell.typeId]?.icon;
  icon ? (color = 'white') : null;
  isMiddle ? (color = 'lightgreen') : null;

  return {
    isMiddle,
    cellPositionX,
    cellPositionY,
    color,
    icon,
    iconFont,
    iconFillStyle,
  };
};
