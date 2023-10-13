import type {
  MazeCell,
  MazePosition,
  MazeRectangle,
} from '@/components/CanvasMap/types';
import type { DictionaryKey } from '@/types/types';

type Options = {
  position: MazePosition;
  colorDictionary?: DictionaryKey;
  iconDictionary?: DictionaryKey;
  enemies?: Record<string, boolean | undefined>;
};

export const mazeCellToRenderObject = (
  mazeCell: MazeCell,
  options: Options
): MazeRectangle => {
  const x = mazeCell.position.x - options.position.x;
  const y = mazeCell.position.y - options.position.y;
  const pos = `${mazeCell.position.x},${mazeCell.position.y}`;

  const isEnemy = options.enemies?.[pos];
  const isMiddle = x === 0 && y === 0;
  const color = isMiddle
    ? 'lightgreen'
    : isEnemy
    ? 'red'
    : options.colorDictionary?.[mazeCell.typeId] || 'white';
  const icon = options.iconDictionary?.[mazeCell.typeId];

  return {
    type: 'rectangle',
    color,
    icon,
    iconColor: 'white',
    // Relative position from center. Aka options.position
    position: {
      x,
      y,
    },
  };
};
