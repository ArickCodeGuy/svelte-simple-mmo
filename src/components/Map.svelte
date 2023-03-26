<script lang="ts">
  import { onMount } from 'svelte';
  import type { MapCell } from '../backend/map/types';
  import type { Position } from '../types';

  let MapNode: Element;
  export let map: MapCell[][];
  export let map_size = 1;
  export let range = 2;
  export let position: Position;

  type GridCell = {
    value: MapCell | null;
    x: number;
    y: number;
  };

  $: diameter = range * 2 + 1;
  $: cell_size = Math.floor(map_size / diameter) - 1; // 1px gap
  $: grid = updateMap(diameter, position);

  function updateMap(
    _diameter: number = diameter,
    new_position: Position = position
  ): GridCell[][] {
    const new_grid: GridCell[][] = [];
    for (let row = 0; row < _diameter; row++) {
      new_grid.push([]);
      for (let cell = 0; cell < _diameter; cell++) {
        const x = cell - range + new_position.x;
        const y = row - range + new_position.y;

        new_grid[row][cell] = {
          value: null,
          x,
          y,
        };
        if (!map[y] || !map[y][x]) continue;
        new_grid[row][cell].value = map[y][x];
      }
    }
    return new_grid;
  }

  onMount(() => {
    map_size = MapNode.clientWidth;
  });
</script>

<div class="Map" bind:this={MapNode}>
  {#each grid as row}
    {#each row as cell}
      <div
        class="cell {!cell.value && 'cell--wall'} {position.x === cell?.x &&
          position.y === cell?.y &&
          'cell--you'} {cell.value?.npcArr.length && 'cell--enemy'}"
        style="width: {cell_size}px; height: {cell_size}px"
      />
    {/each}
  {/each}
</div>

<style lang="scss">
  .Map {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
  }
  .cell {
    box-sizing: border-box;
    box-shadow: 0 0 0 1px black;
    &--wall {
      background-color: black;
    }
    &--enemy {
      background-color: red;
    }
    &--you {
      background-color: lightgreen;
    }
  }
</style>
