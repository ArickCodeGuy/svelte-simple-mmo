import { randomItemFromArray } from '@/utils/randomItemFromArray';
import type { MazeMap } from '../types';

export function genMap(min: number, max: number = min): MazeMap {
  const cellAmount = min + Math.floor(Math.random() * (max - min));

  const map: MazeMap = {
    '0,0': {
      typeId: Math.floor(Math.random() * 4),
      position: { x: 0, y: 0 },
    },
  };

  function getAllPossibleNewCellPositions(map: MazeMap): string[] {
    const res = new Set<string>();
    for (const position in map) {
      const [sx, sy] = position.split(',');
      const [x, y] = [Number(sx), Number(sy)];

      const arr = [
        `${x},${y - 1}`,
        `${x},${y + 1}`,
        `${x - 1},${y}`,
        `${x + 1},${y}`,
      ];

      arr.forEach((i) => {
        !map[i] && res.add(i);
      });
    }
    return [...res];
  }

  for (let i = 0; i < cellAmount; i++) {
    const possibleNewCells = getAllPossibleNewCellPositions(map);
    const newCellPosition = randomItemFromArray(possibleNewCells);
    const [x, y] = newCellPosition.split(',');
    map[newCellPosition] = {
      typeId: Math.floor(Math.random() * 4),
      position: {
        x: Number(x),
        y: Number(y),
      },
    };
  }
  return map;
}
