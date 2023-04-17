<script lang="ts">
import UiIcon from '../Icon/UIIcon.svelte';
import type { UIMapCellProps } from './types';

export let props: UIMapCellProps | null = null;
export let size: number = 1;

$: sizeStyle = `--cell-size: ${size}px`;
$: bgc = props?.backgroundColor
  ? `background-color: ${props.backgroundColor}`
  : '';
$: color = props?.color ? `color: ${props.color}` : '';
$: style = [bgc, color, sizeStyle].join('; ');
</script>

{#if !props}
  <div class="UIMapCell UIMapCell--empty" {style} />
{:else}
  <div class="UIMapCell" {style}>
    {#if props.icon}
      <UiIcon icon={props.icon} />
    {/if}
  </div>
{/if}

<style lang="scss">
.UIMapCell {
  box-sizing: border-box;
  box-shadow: 0 0 0 1px black;
  width: var(--cell-size);
  height: var(--cell-size);
  &--empty {
    background-color: black;
  }
}
</style>
