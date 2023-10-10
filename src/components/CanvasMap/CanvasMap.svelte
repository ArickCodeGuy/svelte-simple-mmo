<script lang="ts">
import { onMount } from 'svelte';
import {
  render as renderCanvas,
  useDefaultMazePosition,
  DEFAULT_MAZE_RENDER_OPTIONS,
} from './utils/render';
import type {
  MazeRenderObjects,
  MazePosition,
  MazeRenderOptions,
} from './types';
import { useRenderOptions } from './utils/useRenderOptions';
import { createEventDispatcher } from 'svelte';
import { directionalMoveKeyDown } from '@/utils/directionalMoveKeyDown';
import UiIconButton from '../UI/UIIcon/UIIconButton.svelte';

const dispatch = createEventDispatcher();

let canvas: HTMLCanvasElement;
export let maze: MazeRenderObjects | undefined;
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
  if (!maze) return;

  const { unitSize, middleCellPositionX, middleCellPositionY } =
    useRenderOptions(options);

  const clickedCellPositionX = Math.floor(
    (-middleCellPositionX + e.offsetX) / unitSize
  );
  const clickedCellPositionY = Math.ceil(
    (middleCellPositionY - e.offsetY) / unitSize
  );

  const pos: MazePosition = {
    x: clickedCellPositionX,
    y: clickedCellPositionY,
  };

  dispatch('dblclick', pos);
};

const handleKeyDown = (e: KeyboardEvent) => {
  const direction = directionalMoveKeyDown(e);
  if (!direction) return;

  dispatch('move', direction);
};

const centerMap = () => {
  if (!options.translate) return;

  options.translate.x = 0;
  options.translate.y = 0;
};

const resetZoom = () => {
  if (!options.scale) return;

  options.scale = 1;
};

onMount(() => {
  tryRender();

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
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
    <UiIconButton icon="magnify" on:click={resetZoom} />
    <UiIconButton
      icon="image-filter-center-focus-strong-outline"
      on:click={centerMap}
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
