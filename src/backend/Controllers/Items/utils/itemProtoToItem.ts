import type { Item, ItemProto } from '../types';

export const itemProtoToItem = (
  itemProto: ItemProto
): Omit<Item, 'playerId'> => {
  // @@TODO: finish
  return itemProto;
};
