import type { LivingStats } from '../Livings/types';

export type Item = {
  name: string;
  img: string;
  type: ItemType;
  playerId: number;
  requirements?: ItemRequirements;
  statsBonuses?: Partial<LivingStats>;
  computedStatsBonuses?: {
    health?: number;
    attack?: number;
  };
};

export type ItemProto = {
  name: string;
  img: string;
  type: ItemType;
  requirements?: ItemRequirements;
  statsBonuses?: Partial<Record<keyof LivingStats, ItemProtoStatBonus>>;
  computedStatsBonuses?: {
    health?: ItemProtoStatBonus;
    attack?: ItemProtoStatBonus;
  };
  dropRate: number;
};

export type ItemRequirements = {
  lvl: number;
  stats: Partial<LivingStats>;
};

export type ItemType = 'head' | 'hand' | 'feet' | 'body';

export type ItemProtoStatBonus = {
  value: [number, number] | number;
};
