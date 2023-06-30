export type MapCellType = {
  name: string;
  /**
   * Actions array possible to do while you are on this cell
   */
  actions?: MapCellTypeAction[];
  /**
   * style applied to cell on front
   * like background-color, background-image
   */
  style?: string;
  /**
   * icon applied to cell on map
   */
  icon?: string;
  /**
   * walk time in seconds to cell
   */
  walkTime?: number;
};

export type MapCellTypeAction = {
  name: string;
};
