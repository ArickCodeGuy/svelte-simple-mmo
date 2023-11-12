import type { BaseItem } from '../../Base';
import type { ItemProto } from '../ItemsProtos/types';
import type { Item } from '../types';
import { itemProtoStatBonusRecordToRecord } from './itemProtoStatBonusToNumber';

export const itemProtoToItem = (
  itemProto: BaseItem<ItemProto>
): Omit<Item, 'playerId'> => {
  // @@TODO: finish

  let statsBonuses: Item['statsBonuses'] = undefined;
  if (itemProto.statsBonuses) {
    statsBonuses = itemProtoStatBonusRecordToRecord(itemProto.statsBonuses);
  }

  const item: Omit<Item, 'playerId'> = {
    protoId: itemProto.id,
    requirements: itemProto.requirements,
    statsBonuses,
  };

  return item;
};
