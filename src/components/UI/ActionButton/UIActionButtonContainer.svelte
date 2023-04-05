<script lang="ts">
  import UIActionButton from './UIActionButton.svelte';
  import type { UIActionButtonProps } from './types';

  export let items: UIActionButtonProps[] = [];
</script>

<div class="UIActionButtonContainer">
  {#each items as props}
    <UIActionButton {props} />
  {/each}
</div>

<style lang="scss">
  .UIActionButtonContainer {
    display: grid;
    gap: 10px;
  }
</style>
