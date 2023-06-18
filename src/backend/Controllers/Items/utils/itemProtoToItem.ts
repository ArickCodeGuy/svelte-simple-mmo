import type { LivingStats } from '../../Livings/types';
import type { Item, ItemProto, ItemProtoStatBonus } from '../types';
import {
  itemProtoStatBonusRecordToRecord,
  itemProtoStatBonusToNumber,
} from './itemProtoStatBonusToNumber';

export const itemProtoToItem = (
  itemProto: ItemProto
): Omit<Item, 'playerId'> => {
  // @@TODO: finish

  let statsBonuses: Item['statsBonuses'] = undefined;
  if (itemProto.statsBonuses) {
    statsBonuses = itemProtoStatBonusRecordToRecord(itemProto.statsBonuses);
  }

  let computedStatsBonuses: Item['computedStatsBonuses'] = undefined;
  if (itemProto.computedStatsBonuses) {
    computedStatsBonuses = itemProtoStatBonusRecordToRecord(
      itemProto.computedStatsBonuses
    );
  }

  const item: Omit<Item, 'playerId'> = {
    name: itemProto.name,
    img: itemProto.img,
    type: itemProto.type,
    requirements: itemProto.requirements,
    statsBonuses,
    computedStatsBonuses,
  };

  return item;
};
