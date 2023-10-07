import type { MazeCell, MazeMap, MazePosition } from '../types';

function getCellsWithinRadius(
  position: MazePosition,
  map: MazeMap,
  radius: number
): MazeCell[] {
  const res: MazeCell[] = [];
  const xMin = position.x - radius;
  const xMax = position.x + radius;
  const yMin = position.y - radius;
  const yMax = position.y + radius;

  for (let i = xMin; i < xMax; i++) {
    for (let j = yMin; j < yMax; j++) {
      const pos = `${i},${j}`;
      if (!map[pos]) continue;

      res.push({
        typeId: map[pos].typeId,
        position: { x: i - position.x, y: j - position.y },
      });
    }
  }

  return res;
}

function getAllCells(map: MazeMap): MazeCell[] {
  return Object.keys(map).map((cell) => {
    const [x, y] = cell.split(',');

    return {
      typeId: map[cell].typeId,
      position: { x: Number(x), y: Number(y) },
    };
  });
}

export function getCells(
  position: MazePosition,
  map: MazeMap,
  radius: number
): MazeCell[] {
  if (radius !== -1) {
    return getCellsWithinRadius(position, map, radius);
  }

  return getAllCells(map);
}
