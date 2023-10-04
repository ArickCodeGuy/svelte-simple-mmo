<script lang="ts">
import { onMount } from 'svelte';
import UiIcon from '../UIIcon/UIIcon.svelte';
import type { UINavigationGroupItem, UINavigationProps } from './types';

export let props: UINavigationProps;
export let closed: boolean;
let firstItem: HTMLButtonElement | null = null;
$: {
  if (!closed && firstItem) {
    firstItem.focus();
  }
}

const keydownListener = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closed = true;
  }

  if (e.key.toLowerCase() === 'm') {
    closed = !closed;
  }
};

const handleItemClick = (item: UINavigationGroupItem) => {
  closed = true;
  item.action?.();
};

onMount(() => {
  document.addEventListener('keydown', keydownListener);

  firstItem = document.querySelector('.navigation-group-item');

  return () => {
    document.removeEventListener('keydown', keydownListener);
  };
});
</script>

<div
  class="UINavigation"
  class:UINavigation--fixed={props.fixed}
  class:UINavigation--closed={closed}
>
  <slot />

  <div class="navigation-groups">
    {#each props.groups || [] as group}
      <div class="navigation-group">
        <div class="navigation-group__title">{group.name}</div>
        {#if group.items}
          <div class="navigation-group-items">
            {#each group.items as groupItem}
              <button
                type="button"
                tabindex={closed ? -1 : undefined}
                class="navigation-group-item"
                on:click={() => handleItemClick(groupItem)}
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
</div>

{#if !closed && props.fixed}
  <div
    class="navigation-background"
    on:keydown
    on:click={() => (closed = !closed)}
  />
{/if}

<style lang="scss">
.UINavigation {
  background-color: var(--bgc);
  padding: var(--column-gutter);
  align-items: start;
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
.navigation-groups {
  display: grid;
  grid-gap: var(--column-gap);
}
.navigation-group {
  &__title {
    font-size: 0.9rem;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
}
.navigation-group-items {
  display: grid;
  gap: 5px;
}
.navigation-group-item {
  padding: 5px;
  display: block;
  width: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: rgba(var(--rgba-bgc), 0.3);
  border: none;
  text-align: left;
}
.navigation-background {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--rgba-bgc), 0.3);
}
</style>
