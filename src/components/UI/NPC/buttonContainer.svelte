<script lang="ts">
  import type { NPC } from '@/backend/npc/types';
  import UINPCButton from './button.svelte';

  export let items: NPC[] = [];
  export let onSwordClick: (npcId: number) => void;
</script>

<div class="UINPCButtonContainer">
  {#each items as npc}
    <UINPCButton {npc} {onSwordClick} />
  {/each}
</div>

<style lang="scss">
  .UINPCButtonContainer {
    display: grid;
    gap: 10px;
  }
</style>
