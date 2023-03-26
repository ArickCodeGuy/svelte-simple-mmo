import type { NPC } from '../npc/types';

export type CellType = 'LAND' | 'BLOCK';

export type MapCell = {
  type: CellType;
  npcArr: NPC[];
};

export type MapType = {
  id: number;
  layout: MapCell[][];
};
