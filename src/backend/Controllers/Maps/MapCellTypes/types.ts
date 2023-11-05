export type MapCellType = {
  name: string;
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
