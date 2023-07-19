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
  /**
   * isView determines whether you watching your inventory\item or someone else's
   */
  isView?: boolean;
  isEquipped?: boolean;
  onThrow?: () => void;
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
    actions: [
      {
        text: options.isEquipped ? 'Unequip' : 'Equip',
        hidden: isItemEquipable(item) && !options.isView,
        action: () => {
          if (options.isEquipped) {
            globalInfoState.update(() =>
              Server.publicApi.items.unequip(globalInfo.living.id, item.id)
            );
          } else {
            globalInfoState.update(() =>
              Server.publicApi.items.equip(globalInfo.living.id, item.id)
            );
          }
          closePopup();
        },
      },
      {
        text: 'Throw away',
        hidden: options.isView,
        action: () => {
          Server.publicApi.items.throw(item.id, globalInfo.living.id);
          options?.onThrow?.();
        },
      },
    ],
  };
};
