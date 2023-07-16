import type {
  LivingCompleteStats,
  LivingEquipmentType,
  LivingStats,
} from '../Livings/types';

export type Item = {
  name: string;
  img: string;
  type: ItemType;
  playerId: number;
  requirements?: ItemRequirements;
  statsBonuses?: Partial<LivingCompleteStats>;
  price: number;
};

export type ItemRequirements = {
  lvl: number;
  stats: Partial<LivingStats>;
};

/**
 * Will include unequipable items
 */
export type ItemType = LivingEquipmentType | 'other';

export type ItemProtoStatBonus = {
  value: [number, number] | number;
};
