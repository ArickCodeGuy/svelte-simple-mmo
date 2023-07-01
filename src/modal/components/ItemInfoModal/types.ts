import type { ItemType } from '@/backend/Controllers/Items/types';

export type ItemInfoModalProps = {
  /**
   * used to search your items by type
   */
  itemType: ItemType;
  /**
   * @@TODO
   * used to preview other players item
   */
  itemId: number;
  isView?: boolean;
  itemChoose?: (itemId: number) => void;
};
