<script lang="ts">
  import type { Living } from '@/backend/Livings/types';
  import UINPCButton from './UILivingButton.svelte';

  export let items: Living[] = [];
  export let onSwordClick: (npcId: number) => void;
</script>

<div class="UILivingButtonContainer">
  {#each items as living}
    <UINPCButton {living} {onSwordClick} />
  {/each}
</div>

<style lang="scss">
  .UILivingButtonContainer {
    display: grid;
    gap: 10px;
  }
</style>
