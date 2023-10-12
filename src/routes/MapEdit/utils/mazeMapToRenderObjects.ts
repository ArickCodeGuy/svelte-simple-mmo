import type {
  MazeMap,
  MazeRenderObjects,
  MazePosition,
} from '@/components/CanvasMap/types';
import type { DictionaryKey } from '@/types/types';
import { mazeCellToRenderObject } from './mazeCellToRenderObject';

type Options = {
  radius: number;
  position: MazePosition;
  colorDictionary?: DictionaryKey;
  iconDictionary?: DictionaryKey;
};

export const mazeMapToRenderObjects = (
  maze: MazeMap,
  options: Options
): MazeRenderObjects => {
  if (options.radius === -1)
    return Object.values(maze).map((cell) =>
      mazeCellToRenderObject(cell, options)
    );

  const res: MazeRenderObjects = [];
  const xMin = options.position.x - options.radius;
  const xMax = options.position.x + options.radius;
  const yMin = options.position.y - options.radius;
  const yMax = options.position.y + options.radius;

  for (let i = xMin; i < xMax; i++) {
    for (let j = yMin; j < yMax; j++) {
      const pos = `${i},${j}`;
      if (!maze[pos]) continue;
      const cell = maze[pos];

      res.push(mazeCellToRenderObject(cell, options));
    }
  }

  return res;
};
