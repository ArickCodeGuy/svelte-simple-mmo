import type { LevelUp, LivingStats } from './types';

export const LIVING_LEVELS: LevelUp[] = [
  {
    exp: 0,
    statPoints: 0,
  },
  {
    exp: 100,
    statPoints: 10,
  },
  {
    exp: 1000,
    statPoints: 15,
  },
];

export const LIVING_UPGRADABLE_STATS: (keyof LivingStats)[] = [
  'vitality',
  'strength',
  'dexterity',
  'intelligence',
  'mind',
];
