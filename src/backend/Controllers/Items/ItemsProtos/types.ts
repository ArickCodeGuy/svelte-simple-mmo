import type { LivingCompleteStats } from '../../Livings/types';
import type { ItemProtoStatBonus, ItemRequirements, ItemType } from '../types';

export type ItemProto = {
  name: string;
  img: string;
  type: ItemType;
  requirements?: ItemRequirements;
  statsBonuses?: Partial<Record<keyof LivingCompleteStats, ItemProtoStatBonus>>;
  price: number;
};
