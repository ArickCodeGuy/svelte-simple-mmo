import type { ItemType } from '@/backend/Controllers/Items/types';
import type { Living } from '@/backend/Controllers/Livings/types';

export type UICharacterProps = Living & {
  inventoryClick?: (type: ItemType) => void;
};
