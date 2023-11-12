import type { PublicItem } from '@/backend/Controllers/Items/types';
import type { LivingCompleteStats } from '@/backend/Controllers/Livings/types';
import type { UIInventoryItemProps } from '@/components/UI/UIInventoryItem/types';

type Options = {
  actions?: UIInventoryItemProps['actions'];
};

/**
 * Returns only display content of item. Does not return actions
 */
export const itemToUIInventoryItemProps = (
  item: PublicItem,
  options: Options = {}
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
    img: item.proto.img,
    name: item.proto.name,
    bonuses,
    actions: options.actions,
  };
};
