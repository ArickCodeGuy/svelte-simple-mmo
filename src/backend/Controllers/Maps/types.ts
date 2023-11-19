import type { MazeMap } from '@/components/CanvasMap/types';
import type { Position } from '../Livings/types';

export type MapCell = {
  /**
   * id from MapCellTypesController
   */
  typeId: number;
};

export type MapNpcSettings = {
  /**
   * Living proto id
   */
  id: number;
  /**
   * Amount to be spawned on init
   */
  amount: number;
  area: Position[];
};

export type MapLayout = MapCell[][];

export type MapInfo = {
  layout: MazeMap;
  npcSettings?: MapNpcSettings[];
};
