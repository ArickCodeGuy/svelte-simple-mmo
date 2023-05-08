import type { LivingComputedStats } from '../Livings/types';
import type { LivingStats } from '../Livings/types';

export type Item = {
  name: string;
  requirements: ItemRequirements;
  type: ItemType;
};

export type ItemRequirements = {
  lvl: number;
  stats: LivingStats;
};

export type ItemType = 'head' | 'hand' | 'feet' | 'body';

export type ItemBonus = {
  stats?: LivingStats;
  computedStats?: (v: LivingComputedStats) => LivingComputedStats;
};
