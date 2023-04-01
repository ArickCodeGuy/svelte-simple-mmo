<script lang="ts">
  import type { NPC } from '@/backend/npc/types';

  export let npc: NPC;
</script>

{#if npc}
  <div class="UINPC">
    <div class="UINPC__lvl">[{npc.lvl}]</div>
    <div class="UINPC__name">{npc.name}</div>
  </div>
{/if}

<style lang="scss">
  .UINPC {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(var(--bgc-contrast), 0.3);
    gap: 10px;
    &__lvl {
      font-weight: bold;
    }
  }
</style>
