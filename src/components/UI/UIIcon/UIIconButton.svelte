<script lang="ts">
import { createEventDispatcher } from 'svelte';
import UiIcon from './UIIcon.svelte';

const dispatch = createEventDispatcher();
export let icon: string;
</script>

<button
  class="button UIIconButton"
  type="button"
  on:click={(e) => dispatch('click', e)}
>
  <UiIcon {icon} />
  <slot />
</button>

<style lang="scss">
.UIIconButton {
  cursor: pointer;
  gap: 15px;
}
</style>
