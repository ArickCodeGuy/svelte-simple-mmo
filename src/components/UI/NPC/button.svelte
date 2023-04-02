<script lang="ts">
  import type { NPC } from '@/backend/npc/types';
  import UIIcon from '@/components/UI/icon.svelte';

  export let npc: NPC;
  export let onSwordClick: (npcId: number) => void;
</script>

{#if npc}
  <div class="UINPCButton">
    <div class="UINPCButton__lvl">[{npc.lvl}]</div>
    <div class="UINPCButton__name">{npc.name}</div>
    <div>id: {npc.id}</div>
    <div class="UINPCButton__right">
      <UIIcon icon={'sword-cross'} onClick={() => onSwordClick(npc.id)} />
    </div>
  </div>
{/if}

<style lang="scss">
  .UINPCButton {
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
