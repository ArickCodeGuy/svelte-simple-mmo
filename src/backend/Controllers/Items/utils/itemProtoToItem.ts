import type { Item, ItemProto } from '../types';
import { itemProtoStatBonusRecordToRecord } from './itemProtoStatBonusToNumber';

export const itemProtoToItem = (
  itemProto: ItemProto
): Omit<Item, 'playerId'> => {
  // @@TODO: finish

  let statsBonuses: Item['statsBonuses'] = undefined;
  if (itemProto.statsBonuses) {
    statsBonuses = itemProtoStatBonusRecordToRecord(itemProto.statsBonuses);
  }

  const item: Omit<Item, 'playerId'> = {
    name: itemProto.name,
    img: itemProto.img,
    type: itemProto.type,
    requirements: itemProto.requirements,
    statsBonuses,
    price: itemProto.price,
  };

  return item;
};
