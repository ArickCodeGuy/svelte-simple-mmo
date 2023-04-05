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

export type DirectionalMove = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

/**
 * LivingsPositions[mapId][y][x] = Living[];
 */
export type LivingsPositions = Record<string, MapLivingsPositions>;

export type MapLivingsPositions = Record<string, Record<string, Living[]>>;
