import type { BaseItem } from '@/backend/Controllers/Base';
import type { Item } from '@/backend/Controllers/Items/types';
import type { LivingCompleteStats } from '@/backend/Controllers/Livings/types';
import type { UIInventoryItemProps } from '@/components/UI/InventoryItem/types';

/**
 * Returns only display content of item. Does not return actions
 */
export const itemToUIInventoryItemProps = (
  item: BaseItem<Item>
): UIInventoryItemProps => {
  const bonuses: string[] = [];

  if (item.statsBonuses) {
    (
      Object.entries(item.statsBonuses) as [keyof LivingCompleteStats, number][]
    ).forEach(([statKey, statValue]) => {
      if (statValue) {
        bonuses.push(`${statKey}: +${statValue}`);
      }
    });
  }

  return {
    img: item.img,
    name: item.name,
    bonuses,
  };
};
