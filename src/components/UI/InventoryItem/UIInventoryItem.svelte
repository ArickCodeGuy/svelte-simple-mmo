<script lang="ts">
import type { UIInventoryItemProps } from './types';

export let props: UIInventoryItemProps;
</script>

<div class="UIInventoryItem">
  <div class="UIInventoryItem__left">
    <img src={props.img} alt={props.name} />
  </div>
  <div class="UIInventoryItem__right">
    <div class="UIInventoryItem__name">{props.name}</div>
    <div class="UIInventoryItem__stats">
      {JSON.stringify(props.bonuses)}
    </div>
    <div class="UIInventoryItem__btn">
      <button class="button" on:click={() => props.equip && props.equip()}>
        Equip
      </button>
    </div>
  </div>
</div>

<style lang="scss">
.UIInventoryItem {
  display: flex;
  gap: var(--column-gap);
  &__left {
    width: 100px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
