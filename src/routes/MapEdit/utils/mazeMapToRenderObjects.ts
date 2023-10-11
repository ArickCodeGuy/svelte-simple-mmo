import type {
  MazeMap,
  MazeRenderObjects,
  MazePosition,
} from '@/components/CanvasMap/types';

type Options = {
  radius: number;
  position: MazePosition;
};

export const mazeMapToRenderObjects = (
  maze: MazeMap,
  options: Options
): MazeRenderObjects => {
  if (options.radius === -1)
    return Object.values(maze).map((cell) => ({
      typeId: cell.typeId,
      position: {
        x: cell.position.x - options.position.x,
        y: cell.position.y - options.position.y,
      },
    }));

  const res: MazeRenderObjects = [];
  const xMin = options.position.x - options.radius;
  const xMax = options.position.x + options.radius;
  const yMin = options.position.y - options.radius;
  const yMax = options.position.y + options.radius;

  for (let i = xMin; i < xMax; i++) {
    for (let j = yMin; j < yMax; j++) {
      const pos = `${i},${j}`;
      if (!maze[pos]) continue;

      res.push({
        typeId: maze[pos].typeId,
        // Relative position from center. Aka options.position
        position: { x: i - options.position.x, y: j - options.position.y },
      });
    }
  }

  return res;
};
