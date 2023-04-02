export type CellType = 'LAND' | 'BLOCK' | 'WATER';

export type MapCell = {
  type: CellType;
};

export type MapLayout = MapCell[][];

export type MapInfo = {
  id: number;
  layout: MapCell[][];
};
