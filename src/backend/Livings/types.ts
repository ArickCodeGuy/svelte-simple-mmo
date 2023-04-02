import type { Position } from '@/types';

export type LivingActivity = 'FIGHT' | 'WALK';

export type LivingProto = {
  id: number;
  name: string;
  lvl: number;
  stats: LivingStats;
};

export type Living = {
  id: number;
  protoId: number;
  name: string;
  lvl: number;
  chp: number;
  stats: LivingStats;
  position: Position;
  activity?: LivingActivity;
};

export type LivingStats = {
  hp: number;
  attack: number;
};
