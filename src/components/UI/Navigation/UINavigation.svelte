<script lang="ts">
import UiIcon from '../Icon/UIIcon.svelte';
import type { UINavigationProps } from './types';

export let props: UINavigationProps;
</script>

<div class="UINavigation">
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
