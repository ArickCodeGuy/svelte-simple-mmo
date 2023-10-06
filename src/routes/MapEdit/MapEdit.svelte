<script lang="ts">
import CanvasMap from '@/components/CanvasMap/CanvasMap.svelte';
import type {
  MazeMap,
  MazePosition,
  MazeRenderOptions,
} from '@/components/CanvasMap/types';
import { genMap } from '@/components/CanvasMap/utils/genMap';
import CellEditForm from '@/components/CellEditForm/CellEditForm.svelte';
import { closePopup } from '@/modal/store';
import { showModal } from '@/modal/utils/showModal';

const maze: MazeMap = genMap(5);

let MazeOptions: MazeRenderOptions = {
  cellSize: 10,
  position: {
    x: 0,
    y: 0,
  },
  radius: -1,
};

const handleDoubleClick = (event: CustomEvent<MazePosition>) => {
  showModal({
    title: 'Cell Edit',
    component: CellEditForm,
    componentProps: {
      submit: () => closePopup(),
    },
  });
};
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div>{JSON.stringify(MazeOptions)}</div>
      </div>
      <div class="col-6">
        <div class="map">
          <CanvasMap
            {maze}
            bind:options={MazeOptions}
            on:dblclick={handleDoubleClick}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
</style>
