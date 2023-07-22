<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
</script>

<div class="UIBurger" on:keydown on:click={() => dispatch('click', null)} />

<style lang="scss">
.UIBurger {
  width: 40px;
  height: 40px;
  border: 2px solid var(--contrast);
  cursor: pointer;
}
</style>
