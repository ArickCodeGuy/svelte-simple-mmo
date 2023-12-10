import type { BaseItem } from '@/backend/Controllers/Base';
import type { ItemProto } from '@/backend/Controllers/Items/ItemsProtos/types';
import type { PublicItem } from '@/backend/Controllers/Items/types';
import type {
  Living,
  LivingEquipmentType,
} from '@/backend/Controllers/Livings/types';
import { livingStats } from '@/backend/Controllers/Livings/utils/livingStats';
import type { LivingEquipmentItems } from '@/backend/Server/types';
import type {
  UICharacterItems,
  UICharacterProps,
} from '@/components/UI/UICharacter/types';

type Options = {
  equipment?: LivingEquipmentItems;
  drops?: (BaseItem<ItemProto> & { dropRate: number })[];
  isView?: UICharacterProps['isView'];
  statsConfirm?: UICharacterProps['statsConfirm'];
  inventoryClick?: UICharacterProps['inventoryClick'];
};

export const livingToUICharacterProps = (
  character: Living,
  options: Options = {}
): UICharacterProps => {
  const items: UICharacterItems = {
    pfp: character.pfp,
  };

  if (options.equipment) {
    (
      Object.entries(options.equipment) as [LivingEquipmentType, PublicItem][]
    ).forEach(([place, item]) => {
      items[place] = item.proto.img;
    });
  }

  return {
    name: character.name,
    lvl: character.lvl,
    exp: character.exp,
    health: character.health,
    lastUpdated: character.lastUpdated,
    statPoints: character.statPoints,
    stats: livingStats(character),
    isView: options.isView ?? true,
    items,
    inventoryClick: options.inventoryClick,
    statsConfirm: options.statsConfirm,
    drops: options.drops,
  };
};
