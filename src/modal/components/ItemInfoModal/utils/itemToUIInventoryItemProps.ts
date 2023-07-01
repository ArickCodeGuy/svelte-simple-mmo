import { Server } from '@/backend';
import type { BaseItem } from '@/backend/Controllers/Base';
import type { Item } from '@/backend/Controllers/Items/types';
import { isItemEquipable } from '@/backend/Controllers/Items/utils/isItemEquipable';
import type { LivingCompleteStats } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import type { UIInventoryItemProps } from '@/components/UI/InventoryItem/types';
import { closePopup } from '@/modal/store';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

type Options = {
  isView?: boolean;
  isEquipped?: boolean;
};

export const itemToUIInventoryItemProps = (
  item: BaseItem<Item>,
  options: Options = {}
): UIInventoryItemProps => {
  const bonuses: string[] = [];

  if (item.statsBonuses) {
    (
      Object.entries(item.statsBonuses) as [keyof LivingCompleteStats, number][]
    ).forEach(([statKey, statValue]) => {
      if (statValue) {
        bonuses.push(`${statKey}: +${statValue}`);
      }
    });
  }

  return {
    img: item.img,
    name: item.name,
    bonuses,
    equippable: isItemEquipable(item),
    equipped: options.isEquipped,
    isView: options.isView,
    equip: () => {
      if (options.isEquipped) {
        globalInfoState.update(() =>
          Server.publicApi.unequipItem(globalInfo.living.id, item.id)
        );
      } else {
        globalInfoState.update(() =>
          Server.publicApi.equipItem(globalInfo.living.id, item.id)
        );
      }
      closePopup();
    },
  };
};
