import type { Item } from '@/backend/Controllers/Items/types';
import type { UIInventoryItemProps } from '@/components/UI/InventoryItem/types';

export const itemToUIInventoryItemProps = (
  item: Item
): UIInventoryItemProps => ({
  img: item.img,
  name: item.name,
  bonuses: [],
});
