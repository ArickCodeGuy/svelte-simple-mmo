import type { MazeMap } from '../types';

export function genMap(min: number, max: number): MazeMap {
  function getAllPossibleNewCellPositions(map: MazeMap): string[] {
    const res: string[] = [];
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
        !map[i] && res.push(i);
      });
    }
    return res;
  }

  const cellAmount = min + Math.floor(Math.random() * (max - min));

  const map: MazeMap = {
    '0,0': {
      typeId: 0,
    },
  };

  for (let i = 0; i < cellAmount; i++) {
    const possibleNewCells = getAllPossibleNewCellPositions(map);
    const newCellPosition = Math.floor(Math.random() * possibleNewCells.length);
    map[possibleNewCells[newCellPosition]] = {
      typeId: 0,
    };
  }
  return map;
}
