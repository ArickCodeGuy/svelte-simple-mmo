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
  expGives: number;
  stats: LivingStats;
};

export type Living = {
  protoId: number;
  name: string;
  lvl: number;
  exp: number;
  expGives: number; // amount of exp given on death
  stats: LivingStats;
  points: number; // spare points for upping stats
  currentHp: number;
  computedStats: LivingComputedStats;
  position: Position;
  activity?: LivingActivity;
  fightInstanceId?: number;
  lastUpdated: number;
};

export type LivingStats = {
  baseHp: number;
  baseAttack: number;
  vitality: number;
  strength: number;
};

export type LivingComputedStats = {
  maxHp: number;
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

export type LevelUp = {
  exp: number;
  points: number;
};
