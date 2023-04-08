import type { BaseItem } from '../Base';

export type Position = {
  mapId: number;
  x: number;
  y: number;
};

export type LivingActivity = 'FIGHT' | 'WALK';

export type LivingProto = {
  id: number;
  name: string;
  lvl: number;
  stats: LivingStats;
};

export type Living = {
  protoId: number;
  name: string;
  lvl: number;
  chp: number;
  stats: LivingStats;
  position: Position;
  activity?: LivingActivity;
  fightInstanceId?: number;
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

export type MapLivingsPositions = Record<
  string,
  Record<string, BaseItem<Living>[]>
>;
