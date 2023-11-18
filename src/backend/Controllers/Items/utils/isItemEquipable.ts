import type { LivingEquipmentType } from '../../Livings/types';
import type { PublicItem } from '../types';

const equipableTypes: LivingEquipmentType[] = [
  'body',
  'feet',
  'head',
  'hands',
  'leftHand',
  'rightHand',
];

const equipableTypesRegExp = RegExp(`^${equipableTypes.join('|')}$`);

export const isItemEquipable = (item: PublicItem): boolean =>
  Boolean(equipableTypesRegExp.test(item.proto.type));
