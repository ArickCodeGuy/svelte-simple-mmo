import type { NPC } from '../npc/types';

export type CellType = 'LAND' | 'BLOCK';

export type MapCell = {
  type: CellType;
  npcArr: NPC[];
};

export type MapLayout = MapCell[][];

export type MapInfo = {
  id: number;
  layout: MapCell[][];
};
