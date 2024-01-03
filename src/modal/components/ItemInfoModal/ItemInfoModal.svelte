<script lang="ts">
import UiInventoryItem from '@/components/UI/UIInventoryItem/UIInventoryItem.svelte';
import { itemToUIInventoryItemProps } from './utils/itemToUIInventoryItemProps';
import type { ItemInfoModalProps } from './types';
import type { PublicItem } from '@/backend/Controllers/Items/types';
import { globalInfoState } from '@/store/player';
import type { GlobalInfo } from '@/backend/Server/types';
import { Server } from '@/backend';
import type { LivingEquipment } from '@/backend/Controllers/Livings/types';
import { closePopup } from '@/modal/store';
import { isItemEquipable } from '@/backend/Controllers/Items/utils/isItemEquipable';
import type { UIInventoryItemProps } from '@/components/UI/UIInventoryItem/types';

export let props: ItemInfoModalProps;

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: equippedItem =
  globalInfo.living?.equipment?.[props.itemType as keyof LivingEquipment];

let items: PublicItem[] = [];
$: {
  items = Server.publicApi.getItemsByType(globalInfo.living.id, props.itemType);
}

const updateItems = () => {
  items = Server.publicApi.getItemsByType(globalInfo.living.id, props.itemType);
};

$: inventoryItems = items.map<UIInventoryItemProps>((item) => ({
  ...itemToUIInventoryItemProps(item),
  actions: [
    {
      text: item.id === equippedItem ? 'Unequip' : 'Equip',
      hidden: isItemEquipable(item) && !props.isView,
      action: () => {
        if (item.id === equippedItem) {
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
      hidden: props.isView,
      action: () => {
        Server.publicApi.items.throw(globalInfo.living.id, item.id);
        updateItems();
      },
    },
  ],
}));
</script>

<div class="InventoryItemContainer">
  {#if items.length}
    {#each inventoryItems as props}
      <UiInventoryItem {props} />
    {/each}
  {:else}
    <div>No items to display</div>
  {/if}
</div>

<style lang="scss">
.InventoryItemContainer {
  display: grid;
  gap: var(--column-gap);
}
</style>
