import type { LivingEquipmentType, LivingStats } from '../Livings/types';

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

/**
 * will include unequipable items
 */
export type ItemType = LivingEquipmentType;

export type ItemProtoStatBonus = {
  value: [number, number] | number;
};
