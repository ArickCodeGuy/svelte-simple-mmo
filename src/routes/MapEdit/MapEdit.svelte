<script lang="ts">
import type { DirectionalMove } from '@/backend/Controllers/Livings/types';
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
import { mazeMapToRenderObjects } from './utils/mazeMapToRenderObjects';

const map: MazeMap = genMap(100);

let mazeOptions: MazeRenderOptions = {
  cellSize: 10,
  position: {
    x: 0,
    y: 0,
  },
};

$: maze = mazeMapToRenderObjects(map, {
  radius: -1,
  position: mazeOptions.position!,
});

frontDictionaryState.subscribe((v) => {
  mazeOptions.mazeCellTypeDictionary = frontDictionaryToMazeCellDictionary(v);
});

const handleDoubleClick = (event: CustomEvent<MazePosition>) => {
  const pos = `${event.detail.x},${event.detail.y}`;

  const data = {
    typeId: map[pos]?.typeId || 0,
    position: { ...event.detail },
  };

  showModal<CellEditFormProps>({
    title: `Cell Edit: [${pos}]`,
    component: CellEditForm,
    componentProps: {
      data,
      submit: (cell) => {
        map[pos] = {
          ...cell,
        };
        closePopup();
      },
      delete: () => {
        // @@TODO re-render
        delete map[pos];
        closePopup();
      },
    },
  });
};

const copyMaze = () => {
  navigator.clipboard.writeText(JSON.stringify(maze));
};

const handleMove = (e: CustomEvent<DirectionalMove>) => {
  if (!mazeOptions.position) return;
  const direction = e.detail;

  if (direction === 'DOWN') {
    mazeOptions.position.y--;
  }
  if (direction === 'UP') {
    mazeOptions.position.y++;
  }
  if (direction === 'LEFT') {
    mazeOptions.position.x--;
  }
  if (direction === 'RIGHT') {
    mazeOptions.position.x++;
  }
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
            bind:options={mazeOptions}
            on:move={handleMove}
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
