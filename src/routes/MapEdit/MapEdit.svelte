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
import type { CellEditFormProps } from '@/components/CellEditForm/types';
import UiIcon from '@/components/UI/UIIcon/UIIcon.svelte';
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
  const pos = `${event.detail.x},${event.detail.y}`;

  const data = {
    typeId: maze[pos]?.typeId || 0,
    position: { ...event.detail },
  };

  showModal<CellEditFormProps>({
    title: 'Cell Edit',
    component: CellEditForm,
    componentProps: {
      data,
      submit: (cell) => {
        maze[pos] = {
          ...cell,
        };
        closePopup();
      },
      delete: () => {
        // @@TODO re-render
        delete maze[pos];
        closePopup();
      },
    },
  });
};

const copyMaze = () => {
  navigator.clipboard.writeText(JSON.stringify(maze));
};
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <!-- {JSON.stringify(maze)} -->
      </div>
      <div class="col-6">
        <div class="map">
          <CanvasMap
            {maze}
            bind:options={MazeOptions}
            on:dblclick={handleDoubleClick}
          />
          <button class="btn" on:click={copyMaze}>
            <UiIcon icon={'content-copy'} />
            copy layout
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
</style>
