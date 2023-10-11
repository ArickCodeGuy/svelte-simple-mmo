import type { MazeCell } from '../types';
import type { useRenderOptions } from './useRenderOptions';

export const useMazeCell = (
  cell: MazeCell,
  options: ReturnType<typeof useRenderOptions>
) => {
  const isMiddle = cell.position.x === 0 && cell.position.y === 0;
  const iconFillStyle =
    options.mazeCellTypeDictionary?.[cell.typeId]?.color ?? 'white';

  let color = options.mazeCellTypeDictionary?.[cell.typeId]?.color ?? 'white';
  const icon = options.mazeCellTypeDictionary?.[cell.typeId]?.icon;
  icon ? (color = 'white') : null;
  isMiddle ? (color = 'lightgreen') : null;

  return {
    isMiddle,
    color,
    icon,
    iconFillStyle,
  };
};
