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

export type MazeCellRenderOptions = {
  color?: string;
};

export type MazeRenderOptions = {
  /**
   * Maze size on page in pixels
   */
  size?: number;
  /**
   * Render radius. if -1 then render whole map
   */
  radius?: number;
  /**
   * Player position. `radius` is based on this value. `position` is painted in green color
   */
  position?: MazePosition;
  selectedCell?: MazePosition | null;
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
  mazeCellTypeDictionary?: Record<number, MazeCellRenderOptions>;
};
