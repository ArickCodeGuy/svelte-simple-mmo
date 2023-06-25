import type { BaseItem } from '@/backend/Controllers/Base';
import type { Item } from '@/backend/Controllers/Items/types';
import type { ItemType } from '@/backend/Controllers/Items/types';

export type ItemInfoModalProps = {
  type: ItemType;
};

export type InventoryItemsProps = {
  items: BaseItem<Item>[];
  itemChoose?: (itemId: number) => void;
};
