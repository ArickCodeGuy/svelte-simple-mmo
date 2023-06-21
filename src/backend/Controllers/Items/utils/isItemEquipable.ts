import type { Item, ItemEquipableType } from '../types';

export const equipableTypes: Record<ItemEquipableType, true> = {
  head: true,
  body: true,
  hand: true,
  feet: true,
};

export const isItemEquipable = (item: Item): Boolean =>
  Boolean(equipableTypes[item.type]);
