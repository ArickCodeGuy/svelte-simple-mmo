import type { BaseItem } from '@/backend/Controllers/Base';
import type { PublicItem } from '@/backend/Controllers/Items/types';
import { isItemEquipable } from '@/backend/Controllers/Items/utils/isItemEquipable';
import type { Living } from '@/backend/Controllers/Livings/types';

export const isPlayerCanEquipItem = (
  player: BaseItem<Living>,
  item: PublicItem
): boolean => {
  if (player.activity === 'FIGHT') {
    console.warn(
      `isPlayerCanEquipItem: ${player.id}, ${player.name}: Cant equip item during fight`
    );
  }

  if (!isItemEquipable(item)) return false;

  if (item.requirements) {
    if (player.lvl < item.requirements.lvl) return false;
  }

  return true;
};
