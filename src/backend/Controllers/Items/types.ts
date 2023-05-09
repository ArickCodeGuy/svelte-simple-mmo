import type { LivingComputedStats } from '../Livings/types';
import type { LivingStats } from '../Livings/types';

export type Item = {
  name: string;
  img: string;
  type: ItemType;
  requirements?: ItemRequirements;
  bonuses: ItemBonus;
  dropRate: number;
};

export type ItemRequirements = {
  lvl: number;
  stats: Partial<LivingStats>;
};

export type ItemType = 'head' | 'hand' | 'feet' | 'body';

export type ItemBonus = {
  stats?: Partial<Record<keyof LivingStats, ItemStatBonus>>;
  computedStats?: ItemComputedStatBonus;
};

export type ItemStatBonus = {
  f: () => number;
  description: string;
};

export type ItemComputedStatBonus = {
  f: (v: LivingComputedStats) => LivingComputedStats;
  description: string;
};
