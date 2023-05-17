<script lang="ts">
import type { Item } from '@/backend/Controllers/Items/types';
import type { InventoryItemsProps } from './types';

export let props: InventoryItemsProps;
</script>

<div class="InventoryItemsDialog">
  {#each props.items as item}
    <div class="InventoryItem">
      <div class="InventoryItem__left">
        <img src={item.img} alt={item.name} />
      </div>
      <div class="InventoryItem__right">
        <div class="InventoryItem__name">{item.name}</div>
        <div class="InventoryItem__stats">
          {JSON.stringify(item.bonuses)}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
.InventoryItemsDialog {
}
.InventoryItemContainer {
  display: grid;
  gap: var(--column-gap);
}
.InventoryItem {
  display: flex;
  gap: var(--column-gap);
  &__left {
    width: 100px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
