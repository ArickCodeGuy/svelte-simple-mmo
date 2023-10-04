<script lang="ts">
import CanvasMap from '@/components/CanvasMap/CanvasMap.svelte';
import type { MazeMap } from '@/components/CanvasMap/types';
import { genMap } from '@/components/CanvasMap/utils/genMap';
import type { MazeRenderOptions } from '@/components/CanvasMap/utils/render';

const maze: MazeMap = genMap(10, 20);
$: mazeJson = JSON.stringify(maze);

let MazeOptions: MazeRenderOptions = {
  cellSize: 10,
  position: {
    x: 0,
    y: 0,
  },
};
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div>{mazeJson}</div>
        <div>{JSON.stringify(MazeOptions)}</div>
      </div>
      <div class="col-6">
        <div class="map">
          <CanvasMap {maze} bind:options={MazeOptions} />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
</style>
