import type { Item } from '@/backend/Controllers/Items/types';
import type { ItemType } from '@/backend/Controllers/Items/types';

export type ItemInfoModalProps = {
  type: ItemType;
};

export type InventoryItemsProps = {
  items: Item[];
  itemChoose?: (itemId: number) => void;
};
