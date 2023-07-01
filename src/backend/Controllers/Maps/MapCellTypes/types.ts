export type MapCellType = {
  name: string;
  /**
   * Actions array possible to do while you are on this cell
   */
  actions?: MapCellTypeAction[];
  /**
   * color applied to cell on front
   */
  color?: string;
  /**
   * icon applied to cell on map
   */
  icon?: string;
  /**
   * walk time in seconds to cell
   */
  walkTime?: number;
  /**
   * if true then walking to this is not allowed
   */
  blocked?: boolean;
};

export type MapCellTypeAction = {
  name: string;
};
