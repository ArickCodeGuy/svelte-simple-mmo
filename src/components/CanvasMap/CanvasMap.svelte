<script lang="ts">
import { onMount } from 'svelte';
import {
  render as renderCanvas,
  type MazeRenderOptions,
  useDefaultMazePosition,
  DEFAULT_MAZE_RENDER_OPTIONS,
} from './utils/render';
import type { MazeMap } from './types';
// import { addEventHandlers } from './handlers';

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

const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  if (!options.position || !maze) return;
  console.log(e);

  const translate = options.translate || useDefaultMazePosition();
  const scale = options.scale || DEFAULT_MAZE_RENDER_OPTIONS.scale;
  const cellSize =
    (options.cellSize || DEFAULT_MAZE_RENDER_OPTIONS.cellSize) * scale;
  const cellGap =
    (options.cellGap || DEFAULT_MAZE_RENDER_OPTIONS.cellGap) * scale;
  const unitSize = cellSize + cellGap;
  const size = options.size || DEFAULT_MAZE_RENDER_OPTIONS.size;

  const cellMiddle = cellSize / 2;
  const canvasMiddle = size / 2;
  const middleCellPosition = canvasMiddle - cellMiddle;
  const middleCellPositionX = middleCellPosition + translate.x;
  const middleCellPositionY = middleCellPosition + translate.y;

  const clickedCellPositionX = Math.floor(
    (-middleCellPositionX + e.offsetX) / unitSize
  );
  const clickedCellPositionY = Math.ceil(
    (middleCellPositionY - e.offsetY) / unitSize
  );

  console.log(
    maze[`${clickedCellPositionX},${clickedCellPositionY}`],
    clickedCellPositionX,
    clickedCellPositionY
  );
};

onMount(() => {
  tryRender();

  canvas.addEventListener('wheel', handleScroll);
  canvas.addEventListener('mousedown', handleMousedown);
  canvas.addEventListener('click', handleClick);

  return () => {
    canvas.removeEventListener('wheel', handleScroll);
    canvas.addEventListener('mousedown', handleMousedown);
    canvas.addEventListener('click', handleClick);
  };
});
</script>

<canvas bind:this={canvas} />
