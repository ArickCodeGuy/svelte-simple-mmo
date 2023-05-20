import type { Item } from '@/backend/Controllers/Items/types';

export type InventoryItemsProps = {
  items: Item[];
  itemChoose?: (itemId: number) => void;
};
