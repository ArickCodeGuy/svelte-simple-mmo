/**
 * [x: string] as `${x position},${y position}`
 */
export type MazeMap = Record<string, MazeCell>;

export type MazeRenderObjects = MazeCell[];

export type MazeCell = {
  typeId: number;
  position: MazePosition;
};

export type MazePosition = {
  x: number;
  y: number;
};

export type MazeCellRenderOptions = {
  color?: string;
  icon?: string;
};

export type MazeCellTypeDictionary = Record<string, MazeCellRenderOptions>;

export type MazeRenderOptions = {
  /**
   * Maze size on page in pixels
   */
  size?: number;
  /**
   * Player position. `radius` is based on this value. `position` is painted in green color
   */
  position?: MazePosition;
  /**
   * Translate from position in pixels
   */
  translate?: MazePosition;
  cellSize?: number;
  cellGap?: number;
  /**
   * Scale multiplier (zoom)
   */
  scale?: number;
  // @@TODO
  mazeCellTypeDictionary?: MazeCellTypeDictionary;
};
