<script lang="ts">
import UiInventoryItem from '@/components/UI/InventoryItem/UIInventoryItem.svelte';
import type { InventoryItemsProps } from './types';
import { itemToUIInventoryItemProps } from './utils/itemToUIInventoryItemProps';

export let props: InventoryItemsProps;
</script>

<div class="InventoryItemsDialog">
  {#if props.items.length}
    {#each props.items as item}
      <UiInventoryItem props={itemToUIInventoryItemProps(item)} />
    {/each}
  {:else}
    <div>No items to display</div>
  {/if}
</div>

<style lang="scss">
.InventoryItemsDialog {
}
.InventoryItemContainer {
  display: grid;
  gap: var(--column-gap);
}
</style>
