/**
 * [x: string] as `${x position},${y position}`
 */
export type MazeMap = Record<string, MazeCell>;

export type MazeCell = {
  typeId: number;
  position: MazePosition;
};

export type MazePosition = {
  x: number;
  y: number;
};

/**
 * Array of objects to render on canvas
 */
export type MazeRenderObjects = MazeRectangle[];

export type MazeRectangle = {
  type: 'rectangle';
  position: MazePosition;
  color: string;
  iconColor?: string;
  icon?: string;
};

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
};
