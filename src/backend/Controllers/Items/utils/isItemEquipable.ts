import type { Item } from '../types';

export const equipableTypes: Record<string, true> = {
  head: true,
  body: true,
  hand: true,
  leftHand: true,
  rightHand: true,
  feet: true,
};

export const isItemEquipable = (item: Item): Boolean =>
  Boolean(equipableTypes[item.type]);
