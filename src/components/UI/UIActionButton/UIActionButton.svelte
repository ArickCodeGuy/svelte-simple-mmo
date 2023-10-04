<script lang="ts">
import type { UIActionButtonProps } from './types';
import UiIconButton from '../UIIcon/UIIconButton.svelte';

export let props: UIActionButtonProps;
</script>

<div class="UIActionButton">
  <div class="UIActionButton__lvl">[{props.lvl}]</div>
  <div class="UIActionButton__name">{props.name}</div>
  {#if props.actions}
    <div class="UIActionButton__right">
      {#each props.actions as action}
        <UiIconButton icon={action.icon} on:click={action.f} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
.UIActionButton {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(var(--rgba-bgc), 0.3);
  gap: 10px;
  transition: 0.3s;
  &:focus-within,
  &:hover {
    filter: drop-shadow(0 0 5px rgba(var(--rgba-contrast), 0.3));
  }
  &__lvl {
    font-weight: bold;
  }
  &__right {
    margin-left: auto;
    display: flex;
    gap: 5px;
    align-items: center;
  }
}
</style>
