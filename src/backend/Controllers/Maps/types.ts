export type CellType = 'LAND' | 'BLOCK' | 'WATER';

export type MapCell = {
  type: CellType;
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
