export type MapCellType = {
  name: string;
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
};

export type MapCellTypeAction = {
  name: string;
};
