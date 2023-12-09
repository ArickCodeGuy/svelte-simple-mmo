import type { BaseItem } from '@/backend/Controllers/Base';
import type { ItemProto } from '@/backend/Controllers/Items/ItemsProtos/types';
import type { ItemType } from '@/backend/Controllers/Items/types';
import type { LivingStats } from '@/backend/Controllers/Livings/types';

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
  drops?: (BaseItem<ItemProto> & { dropRate: number })[];

  inventoryClick?: (type: ItemType) => void;
  statsConfirm?: (updatedStats: LivingStats) => void;
};

/**
 * [x: body part]: img url
 */
export type UICharacterItems = {
  /**
   * profile picture
   */
  pfp?: string;
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
