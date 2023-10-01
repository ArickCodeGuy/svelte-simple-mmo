<script lang="ts">
import { onMount } from 'svelte';
import type { UIMapCellProps, UIMapPosition, UIMapProps } from './types';
import UiMapCell from './UIMapCell.svelte';
type GridCell = UIMapCellProps | null;

export let props: UIMapProps | undefined;
let MapNode: Element;
let map_size = 1;
$: range = props?.range || 2;
$: diameter = range * 2 + 1;
$: cell_size = Math.floor(map_size / diameter) - 1; // 1px gap

function updateMap(
  _diameter: number,
  new_position?: UIMapPosition
): GridCell[][] {
  const new_grid: GridCell[][] = [];
  if (!new_position) return new_grid;
  for (let row = 0; row < _diameter; row++) {
    new_grid.push([]);
    for (let cell = 0; cell < _diameter; cell++) {
      const x = cell - range + new_position.x;
      const y = row - range + new_position.y;

      new_grid[row][cell] = null;
      if (!props?.cells[y] || !props.cells[y][x]) continue;
      new_grid[row][cell] = props.cells[y][x];
    }
  }
  return new_grid;
}

$: grid = updateMap(diameter, props?.position);

onMount(() => {
  map_size = MapNode.clientWidth;
});
</script>

<div class="UIMap" bind:this={MapNode}>
  {#each grid as row}
    {#each row as cell}
      <UiMapCell props={cell} size={cell_size} />
    {/each}
  {/each}
</div>

<style lang="scss">
.UIMap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
}
</style>
