import type { Stats } from '../../types/stats';

export type NPCProto = {
  id: number;
  name: string;
  stats: Stats;
  lvl: number;
};

export type NPC = {
  protoId: number;
} & NPCProto;
