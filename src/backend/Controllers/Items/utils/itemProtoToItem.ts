import type { LivingStats } from '../../Livings/types';
import type { Item, ItemProto, ItemProtoStatBonus } from '../types';
import { itemProtoStatBonusToNumber } from './itemProtoStatBonusToNumber';

export const itemProtoToItem = (
  itemProto: ItemProto
): Omit<Item, 'playerId'> => {
  // @@TODO: finish

  let statsBonuses: Partial<LivingStats> = {};
  if (itemProto.statsBonuses) {
    (
      Object.entries(itemProto.statsBonuses) as [
        keyof LivingStats,
        ItemProtoStatBonus
      ][]
    ).forEach(([key, value]) => {
      statsBonuses[key] = itemProtoStatBonusToNumber(value);
    });
  }

  const item: Omit<Item, 'playerId'> = {
    name: itemProto.name,
    img: itemProto.img,
    type: itemProto.type,
    requirements: itemProto.requirements,
    statsBonuses: Object.keys(statsBonuses).length ? statsBonuses : undefined,
  };

  return item;
};
