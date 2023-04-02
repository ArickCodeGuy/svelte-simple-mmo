<script lang="ts">
  import type { Living } from '@/backend/Livings/types';
  import UIIcon from '@/components/UI/UIIcon.svelte';

  export let living: Living;
  export let onSwordClick: (LivivngId: number) => void;
</script>

{#if living}
  <div class="UILivivngButton">
    <div class="UILivivngButton__lvl">[{living.lvl}]</div>
    <div class="UILivivngButton__name">{living.name}</div>
    <div>id: {living.id}</div>
    <div class="UILivivngButton__right">
      {#if living.protoId}
        <UIIcon icon={'sword-cross'} onClick={() => onSwordClick(living.id)} />
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  .UILivivngButton {
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
