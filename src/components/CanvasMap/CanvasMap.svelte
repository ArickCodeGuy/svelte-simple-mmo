<script lang="ts">
import { onMount } from 'svelte';
import {
  render as renderCanvas,
  useDefaultMazePosition,
  DEFAULT_MAZE_RENDER_OPTIONS,
} from './utils/render';
import type { MazeRenderObjects, MazeRenderOptions } from './types';
import { createEventDispatcher } from 'svelte';
import UiIconButton from '../UI/UIIcon/UIIconButton.svelte';
import { useRenderOptions } from './utils/useRenderOptions';
import { getAbsolutePosition } from './utils/getAbsolutePosition';

const dispatch = createEventDispatcher();

let canvas: HTMLCanvasElement;
export let renderObjects: MazeRenderObjects | undefined;
let options: MazeRenderOptions = {};

const tryRender = () => {
  if (renderObjects && canvas) {
    renderCanvas(renderObjects, canvas, options);
  }
};

// @@TODO: wait svelte 5
$: {
  if (renderObjects && canvas) {
    renderCanvas(renderObjects, canvas, options);
  }
}

const handleScroll = (e: WheelEvent) => {
  e.preventDefault();
  if (!options.scale) options.scale = DEFAULT_MAZE_RENDER_OPTIONS.scale;
  const scrollStep = 1.2;

  const newOptions = {
    ...options,
  };

  if (e.deltaY < 0) {
    newOptions.scale! *= scrollStep;
  } else {
    newOptions.scale! /= scrollStep;
  }

  if (newOptions.scale! < 0.5) newOptions.scale = 0.5;
  if (newOptions.scale! > 5) newOptions.scale = 5;
  options = newOptions;
};

const handleMousemove = (e: MouseEvent) => {
  if (!options.translate) options.translate = useDefaultMazePosition();

  options.translate.x += e.movementX;
  options.translate.y += e.movementY;
};

const handleMousedown = (e: MouseEvent) => {
  e.preventDefault();
  window.addEventListener('mousemove', handleMousemove);
  window.addEventListener(
    'mouseup',
    () => {
      window.removeEventListener('mousemove', handleMousemove);
    },
    {
      once: true,
    }
  );
};

const handleDoubleClick = (e: MouseEvent) => {
  e.preventDefault();
  if (!renderObjects) return;

  const rOptions = useRenderOptions(options);
  const pos = getAbsolutePosition(
    {
      x: e.offsetX,
      y: e.offsetY,
    },
    rOptions
  );

  dispatch('dblclick', pos);
};

const resetMap = () => {
  if (options.scale) {
    options.scale = 1;
  }

  if (options.translate) {
    options.translate.x = 0;
    options.translate.y = 0;
  }
};

onMount(() => {
  tryRender();
});
</script>

<div class="CanvasMap">
  <canvas
    bind:this={canvas}
    on:dblclick={handleDoubleClick}
    on:wheel={handleScroll}
    on:mousedown={handleMousedown}
  />
  <div class="actions">
    <UiIconButton
      icon="image-filter-center-focus-strong-outline"
      on:click={resetMap}
    />
  </div>
</div>

<style lang="scss">
.CanvasMap {
  display: inline-block;
  position: relative;
  .actions {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    gap: 10px;
  }
}
</style>
