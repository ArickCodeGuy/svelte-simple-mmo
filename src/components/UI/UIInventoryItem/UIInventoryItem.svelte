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
      {#if props.actions}
        {#each props.actions as action}
          {#if action.hidden !== false}
            <button type="button" class="btn" on:click={action.action}>
              {action.text}
            </button>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
@import '@/assets/styles/_vars.scss';

.UIInventoryItem {
  display: flex;
  gap: var(--column-gap);
  &__name {
    margin-bottom: 5px;
  }
  &__left {
    width: 25%;
    flex-grow: 0;
    flex-shrink: 0;

    @media (min-width: $breakpoint-md) {
      width: 100px;
    }
  }
  &__right {
    width: 100%;
  }
  &__bonuses {
    text-transform: capitalize;
  }
  &__btns {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: var(--column-gutter);
    .btn {
      padding: 2px 5px;
      width: unset;
    }
  }
}
</style>
