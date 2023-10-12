import type { MazeMap } from '@/components/CanvasMap/types';

export type MapCell = {
  /**
   * id from MapCellTypesController
   */
  typeId: number;
};

export type MapArea = string[];

export type MapNpcSettings = {
  /**
   * Living proto id
   */
  id: number;
  /**
   * Amount to be spawned on init
   */
  amount: number;
  area: MapArea;
};

export type MapLayout = MapCell[][];

export type MapInfo = {
  layout: MazeMap;
  npcSettings?: MapNpcSettings[];
};
