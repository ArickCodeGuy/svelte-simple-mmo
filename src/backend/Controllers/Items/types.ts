import type { BaseItem } from '../Base';
import type {
  LivingCompleteStats,
  LivingEquipmentType,
  LivingStats,
} from '../Livings/types';
import type { ItemProto } from './ItemsProtos/types';

export type PublicItem = BaseItem<Item> & {
  proto: ItemProto;
};

export type Item = {
  playerId: number;
  protoId: number;
  requirements?: ItemRequirements;
  statsBonuses?: Partial<LivingCompleteStats>;
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
