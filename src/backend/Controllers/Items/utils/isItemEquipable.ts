import type { LivingEquipmentType } from '../../Livings/types';
import type { Item } from '../types';

const equipableTypes: LivingEquipmentType[] = [
  'body',
  'feet',
  'head',
  'hands',
  'leftHand',
  'rightHand',
];

const equipableTypesRegExp = RegExp(`^${equipableTypes.join('|')}$`);

export const isItemEquipable = (item: Item): boolean =>
  Boolean(equipableTypesRegExp.test(item.type));
