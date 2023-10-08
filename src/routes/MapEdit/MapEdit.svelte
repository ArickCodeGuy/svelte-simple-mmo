<script lang="ts">
import CanvasMap from '@/components/CanvasMap/CanvasMap.svelte';
import type {
  MazeMap,
  MazePosition,
  MazeRenderOptions,
} from '@/components/CanvasMap/types';
import { frontDictionaryToMazeCellDictionary } from '@/components/CanvasMap/utils/frontDictionaryToMazeCellDictionary';
import { genMap } from '@/components/CanvasMap/utils/genMap';
import CellEditForm from '@/components/CellEditForm/CellEditForm.svelte';
import { closePopup } from '@/modal/store';
import { showModal } from '@/modal/utils/showModal';
import { frontDictionaryState } from '@/store/dictionary';

const maze: MazeMap = genMap(100);

let MazeOptions: MazeRenderOptions = {
  cellSize: 10,
  position: {
    x: 0,
    y: 0,
  },
  radius: -1,
};

frontDictionaryState.subscribe((v) => {
  MazeOptions.mazeCellTypeDictionary = frontDictionaryToMazeCellDictionary(v);
});

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
        <div>{JSON.stringify(maze)}</div>
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
