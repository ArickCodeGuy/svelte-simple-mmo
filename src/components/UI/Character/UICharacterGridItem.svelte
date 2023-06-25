<script lang="ts">
import { createEventDispatcher } from 'svelte';
import type { UICharacterGridItemProps } from './types';

export let props: UICharacterGridItemProps;
const dispatch = createEventDispatcher();

let styleBind = '';
$: {
  const arr: string[] = [];

  arr.push(`grid-area: ${props.type}`);
  if (props.image) {
    arr.push(`background-image: url('${props.image}')`);
  }

  styleBind = arr.join('; ');
}
</script>

<div
  class="UICharacterGridItem"
  style={styleBind}
  on:keydown
  on:click={() => dispatch('click', props.type)}
>
  <div style="position: absolute">{props.type}</div>
</div>

<style lang="scss">
.UICharacterGridItem {
  background-color: rgba(var(--rgba-bgc), 0.3);
  cursor: pointer;
  grid-area: var(--area);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    content: '';
    display: block;
    padding-top: 50%;
  }
}
</style>
