<script lang="ts">
import { onMount } from 'svelte';
import { render as renderCanvas, type MazeRenderOptions } from './utils/render';
import type { MazeMap } from './types';
import { addEventHandlers } from './handlers';

let canvas: HTMLCanvasElement;
export let maze: MazeMap | undefined;
export let options: MazeRenderOptions = {};

const tryRender = () => {
  if (maze && canvas) {
    renderCanvas(maze, canvas, options);
  }
};

// @@TODO: wait svelte 5
$: {
  if (maze && canvas) {
    renderCanvas(maze, canvas, options);
  }
}

onMount(() => {
  tryRender();

  if (canvas) {
    return addEventHandlers(canvas, options);
  }
});
</script>

<canvas bind:this={canvas} />
