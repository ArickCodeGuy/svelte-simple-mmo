import type { ItemType } from '@/backend/Controllers/Items/types';
import type { Living, LivingStats } from '@/backend/Controllers/Livings/types';

export type UICharacterProps = Living & {
  inventoryClick?: (type: ItemType) => void;
  /**
   * if false show additional info as you are this character
   */
  isView?: boolean;
  statsConfirm?: (updatedStats: LivingStats) => void;
};
