export type MapCellType = {
  name: string;
  /**
   * Actions array possible to do while you are on this cell
   */
  actions?: MapCellTypeAction[];
  /**
   * Color applied to cell on front
   */
  color?: string;
  /**
   * Icon applied to cell on map
   */
  icon?: string;
  /**
   * Walk time in seconds to cell. If equals to -1 then walking is blocked
   */
  walkTime?: number;
};

export type MapCellTypeAction = {
  name: string;
  action: () => void;
};
