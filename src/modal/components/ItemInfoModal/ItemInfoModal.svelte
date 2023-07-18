<script lang="ts">
import UiInventoryItem from '@/components/UI/InventoryItem/UIInventoryItem.svelte';
import { itemToUIInventoryItemProps } from './utils/itemToUIInventoryItemProps';
import type { ItemInfoModalProps } from './types';
import type { BaseItem } from '@/backend/Controllers/Base';
import type { Item } from '@/backend/Controllers/Items/types';
import { globalInfoState } from '@/store/player';
import type { GlobalInfo } from '@/backend/Server/types';
import { Server } from '@/backend';
import type { LivingEquipment } from '@/backend/Controllers/Livings/types';

export let props: ItemInfoModalProps;

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

let items: BaseItem<Item>[] = [];
$: {
  items = Server.publicApi.getItemsByType(globalInfo.living.id, props.itemType);
}

const updateItems = () => {
  items = Server.publicApi.getItemsByType(globalInfo.living.id, props.itemType);
};

$: equippedItem =
  globalInfo.living?.equipment?.[props.itemType as keyof LivingEquipment];
</script>

<div class="InventoryItemContainer">
  {#if items.length}
    {#each items as item}
      <UiInventoryItem
        props={itemToUIInventoryItemProps(item, {
          isView: props.isView,
          isEquipped: item.id === equippedItem,
          onThrow: updateItems,
        })}
      />
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
