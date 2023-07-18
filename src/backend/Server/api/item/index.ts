import type { ServerController } from '../..';
import { useEquipItem } from './equip';
import { useGetEquipment } from './getEquipment';
import { useGetItemsByType } from './getItemsByType';
import { useThrowItem } from './throw';
import { useUnequipItem } from './unequipItem';

export const usePublicApiItemActions = (controller: ServerController) => ({
  equip: useEquipItem(controller),
  unequip: useUnequipItem(controller),
  equipment: useGetEquipment(controller),
  items: useGetItemsByType(controller),
  throw: useThrowItem(controller),
});
