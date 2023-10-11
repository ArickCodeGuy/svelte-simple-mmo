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
   * Translate from position in pixels
   */
  translate?: MazePosition;
  /**
   * Scale multiplier (zoom)
   */
  scale?: number;
  // @@TODO
  mazeCellTypeDictionary?: MazeCellTypeDictionary;
};
