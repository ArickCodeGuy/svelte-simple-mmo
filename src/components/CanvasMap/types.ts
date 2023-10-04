/**
 * [x: string] as `${x position},${y position}`
 */
export type MazeMap = Record<string, MazeCell>;

export type MazeCell = {
  typeId: number;
};

export type MazePosition = {
  x: number;
  y: number;
};
