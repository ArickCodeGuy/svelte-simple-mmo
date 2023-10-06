<script lang="ts">
import { onMount } from 'svelte';
import {
  render as renderCanvas,
  useDefaultMazePosition,
  DEFAULT_MAZE_RENDER_OPTIONS,
} from './utils/render';
import type { MazeMap, MazePosition, MazeRenderOptions } from './types';
import { useRenderOptions } from './utils/useRenderOptions';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

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

  options.selectedCell = pos;

  dispatch('dblclick', pos);
};

onMount(() => {
  tryRender();

  canvas.addEventListener('wheel', handleScroll);
  canvas.addEventListener('mousedown', handleMousedown);
  canvas.addEventListener('dblclick', handleDoubleClick);

  return () => {
    canvas.removeEventListener('wheel', handleScroll);
    canvas.addEventListener('mousedown', handleMousedown);
    canvas.addEventListener('dblclick', handleDoubleClick);
  };
});
</script>

<canvas bind:this={canvas} />
