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
    <div class="UIInventoryItem__bonuses">
      {#each props.bonuses as bonus}
        <div>{bonus}</div>
      {/each}
    </div>
    <div class="UIInventoryItem__btns">
      {#if !props.isView}
        {#if props.equippable}
          <button
            type="button"
            class="button"
            on:click={() => props.equip && props.equip()}
          >
            {#if props.equipped}
              Unquip
            {:else}
              Equip
            {/if}
          </button>
        {/if}
        <button
          type="button"
          class="button"
          on:click={() => props.throw && props.throw()}
        >
          Throw away
        </button>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
.UIInventoryItem {
  display: flex;
  gap: var(--column-gap);
  &__name {
    margin-bottom: 5px;
  }
  &__left {
    width: 100px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  &__bonuses {
    text-transform: capitalize;
  }
  &__btns {
    margin-top: 10px;
    display: flex;
    gap: var(--column-gutter);
  }
}
</style>
