<script lang="ts">
import UiIcon from '../Icon/UIIcon.svelte';
import type { UINavigationProps } from './types';

export let props: UINavigationProps;

/**
 * @@TODO: utils get classes from
 * Record<string, boolean> => string
 */
const navigationClasses = '';
</script>

<div class={navigationClasses}>
  <slot />

  {#each props.groups || [] as group}
    <div class="navigation-group">
      <div class="navigation-group__title">{group.name}</div>
      {#if group.items}
        <div class="navigation-group-items">
          {#each group.items as groupItem}
            <button
              type="button"
              class="navigation-group-item"
              on:click={() => groupItem.action?.()}
            >
              {#if groupItem.icon}
                <UiIcon icon={groupItem.icon} />
              {/if}
              {groupItem.name}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss">
.UINavigation {
  padding: var(--column-gutter);
  transition: 0.3s;
  &--fixed {
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    height: 100%;
  }
  &--closed {
    left: -300px;
  }
}
.navigation-group {
  &__title {
  }
}
.navigation-group-items {
}
.navigation-group-item {
}
</style>
