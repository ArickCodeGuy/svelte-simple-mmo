import { Server } from '@/backend';
import type { BaseItem } from '@/backend/Controllers/Base';
import type { Item } from '@/backend/Controllers/Items/types';
import type { GlobalInfo } from '@/backend/Server/types';
import type { UIInventoryItemProps } from '@/components/UI/InventoryItem/types';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

export const itemToUIInventoryItemProps = (
  item: BaseItem<Item>
): UIInventoryItemProps => ({
  img: item.img,
  name: item.name,
  bonuses: [],
  equip: () => {
    globalInfoState.update(() =>
      Server.publicApi.equipItem(globalInfo.living.id, item.id)
    );
  },
});
