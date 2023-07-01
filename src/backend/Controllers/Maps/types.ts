export type MapCell = {
  /**
   * id from MapCellTypesController
   */
  typeId: number;
};

export type MapNpcSettings = {
  id: number;
  amount: number;
  area?: MapArea;
};

export type MapArea = {
  x: number;
  y: number;
  xRange: number;
  yRange: number;
};

export type MapLayout = MapCell[][];

export type MapInfo = {
  layout: MapCell[][];
  height: number;
  width: number;
  npcSettings?: MapNpcSettings[];
};
