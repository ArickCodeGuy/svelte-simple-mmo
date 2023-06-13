import type { Item, ItemProto } from '../types';

export const itemProtoToItem = (
  itemProto: ItemProto
): Omit<Item, 'playerId'> => {
  // @@TODO: finish
  const item: Omit<Item, 'playerId'> = {
    name: itemProto.name,
    img: itemProto.img,
    type: itemProto.type,
    bonuses: itemProto.bonuses,
    requirements: itemProto.requirements,
  };

  return item;
};
