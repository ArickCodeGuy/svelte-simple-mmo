import type { Item } from '@/backend/Controllers/Items/types';
import { isItemEquipable } from '@/backend/Controllers/Items/utils/isItemEquipable';
import type { Living } from '@/backend/Controllers/Livings/types';

export const isPlayerCanEquipItem = (player: Living, item: Item): Boolean => {
  if (!isItemEquipable(item)) return false;

  if (item.requirements) {
    if (player.lvl < item.requirements.lvl) return false;
  }

  return true;
};
