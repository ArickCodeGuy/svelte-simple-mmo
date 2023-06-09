import type { ItemType } from '@/backend/Controllers/Items/types';
import type { Living, LivingStats } from '@/backend/Controllers/Livings/types';

export type UICharacterProps = {
  name: string;
  lvl: number;
  exp: number;
  health: {
    max: number;
    current: number;
  };
  lastUpdated: number;
  statPoints: number;
  stats: LivingStats;

  isView?: boolean;
  items: UICharacterItems;

  inventoryClick?: (type: ItemType) => void;
  statsConfirm?: (updatedStats: LivingStats) => void;
};

/**
 * [x: body part]: img url
 */
export type UICharacterItems = {
  pp?: string;
  hands?: string;
  neck?: string;
  head?: string;
  body?: string;
  leftHand?: string;
  rightHand?: string;
  feet?: string;
};

export type UICharacterGridItemProps = {
  type: keyof UICharacterItems;
  image?: string;
};
