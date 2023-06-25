import type { BaseItem } from '@/backend/Controllers/Base';
import type { Item } from '@/backend/Controllers/Items/types';
import type {
  Living,
  LivingEquipmentType,
} from '@/backend/Controllers/Livings/types';
import { livingStats } from '@/backend/Controllers/Livings/utils/livingStats';
import type { Equipment } from '@/backend/Server/types';
import type {
  UICharacterItems,
  UICharacterProps,
} from '@/components/UI/Character/types';

export const livingToUICharacterProps = (
  living: Living,
  equipment?: Equipment
): UICharacterProps => {
  const items: UICharacterItems = {};

  if (equipment) {
    (
      Object.entries(equipment) as [LivingEquipmentType, BaseItem<Item>][]
    ).forEach(([place, item]) => {
      items[place] = item.img;
    });
  }

  return {
    name: living.name,
    lvl: living.lvl,
    exp: living.exp,
    health: living.health,
    lastUpdated: living.lastUpdated,
    statPoints: living.statPoints,
    stats: livingStats(living),
    isView: true,
    items,
  };
};
