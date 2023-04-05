<script lang="ts">
  import UILivingButton from './UILivingButton.svelte';
  import type { UILivingButtonProps } from './types';

  export let items: UILivingButtonProps[] = [];
</script>

<div class="UILivingButtonContainer">
  {#each items as living}
    <UILivingButton props={living} />
  {/each}
</div>

<style lang="scss">
  .UILivingButtonContainer {
    display: grid;
    gap: 10px;
  }
</style>
