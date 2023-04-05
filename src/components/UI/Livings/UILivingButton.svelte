<script lang="ts">
  import UIIcon from '@/components/UI/UIIcon.svelte';
  import type { UILivingButtonProps } from './types';

  export let props: UILivingButtonProps;
</script>

<div class="UILivingButton">
  <div class="UILivingButton__lvl">[{props.lvl}]</div>
  <div class="UILivingButton__name">{props.name}</div>
  <div class="UILivingButton__right">
    {#each props.actions as action}
      <UIIcon icon={action.icon} onClick={() => action.f(props)} />
    {/each}
    <!-- <UIIcon icon={'sword-cross'} onClick={() => {}} /> -->
  </div>
</div>

<style lang="scss">
  .UILivingButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(var(--rgba-bgc), 0.3);
    gap: 10px;
    &__lvl {
      font-weight: bold;
    }
    &__right {
      margin-left: auto;
    }
  }
</style>
