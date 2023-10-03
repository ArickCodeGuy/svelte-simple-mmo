<script lang="ts">
import { onMount } from 'svelte';

/**
 * [x: string] as `${x position},${y position}`
 */
type MazeMap = Record<string, MazeCell>;

type MazeCell = {
  typeId: number;
};

type Position = {
  x: number;
  y: number;
};

function genMap(min: number, max: number): MazeMap {
  function getAllPossibleNewCellPositions(map: MazeMap): string[] {
    const res: string[] = [];
    for (const position in map) {
      const [sx, sy] = position.split(',');
      const [x, y] = [Number(sx), Number(sy)];

      const arr = [
        `${x},${y - 1}`,
        `${x},${y + 1}`,
        `${x + 1},${y}`,
        `${x + 1},${y}`,
      ];

      arr.forEach((i) => {
        !map[i] && res.push(i);
      });
    }
    return res;
  }

  const cellAmount = min + Math.floor(Math.random() * (max - min));

  const map: MazeMap = {
    '0,0': {
      typeId: 0,
    },
  };

  for (let i = 0; i < cellAmount; i++) {
    const possibleNewCells = getAllPossibleNewCellPositions(map);
    const newCellPosition = Math.floor(Math.random() * possibleNewCells.length);
    map[possibleNewCells[newCellPosition]] = {
      typeId: 0,
    };
  }
  return map;
}

function render(position: Position, map: MazeMap, canvas: HTMLCanvasElement) {
  const size = 200;
  const canvasMiddle = size / 2;
  const ctx = canvas.getContext('2d')!;

  function clear(ctx: CanvasRenderingContext2D, size: number) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, size, size);
  }
  function init(ctx: CanvasRenderingContext2D, size: number) {
    ctx.canvas.width = size;
    ctx.canvas.height = size;
    clear(ctx, size);
  }
  function getCells(
    position: Position,
    map: MazeMap,
    radius: number
  ): Position[] {
    const res: Position[] = [];
    const xMin = position.x - radius;
    const xMax = position.x + radius;
    const yMin = position.y - radius;
    const yMax = position.y + radius;

    for (let i = xMin; i < xMax; i++) {
      for (let j = yMin; j < yMax; j++) {
        const pos = `${i},${j}`;
        if (!map[pos]) continue;

        res.push({
          x: i - position.x,
          y: j - position.y,
        });
      }
    }

    return res;
  }
  function addCells(
    ctx: CanvasRenderingContext2D,
    position: Position,
    map: MazeMap
  ) {
    const radius = 2;
    const cellSize = 10;
    const cellGap = 1;
    const cells = getCells(position, map, radius);

    cells.forEach((cell) => {
      const cellPositionX = canvasMiddle + (cellSize + cellGap) * cell.x;
      const cellPositionY = canvasMiddle + (cellSize + cellGap) * cell.y;
      ctx.fillStyle = 'white';
      ctx.fillRect(cellPositionX, cellPositionY, cellSize, cellSize);
    });
  }

  init(ctx, size);
  addCells(ctx, position, map);
}

const maze: MazeMap = genMap(10, 20);
$: mazeJson = JSON.stringify(maze);
let canvas: HTMLCanvasElement;
let position: Position = {
  x: 0,
  y: 0,
};

onMount(() => {
  render(position, maze, canvas);
});
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div>{mazeJson}</div>
      </div>
      <div class="col-6">
        <div class="map">
          <canvas bind:this={canvas} />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
</style>
