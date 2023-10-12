<script lang="ts">
import CanvasMap from '@/components/CanvasMap/CanvasMap.svelte';
import type { MazeMap, MazePosition } from '@/components/CanvasMap/types';
import { genMap } from '@/components/CanvasMap/utils/genMap';
import CellEditForm from '@/components/CellEditForm/CellEditForm.svelte';
import type { CellEditFormProps } from '@/components/CellEditForm/types';
import UiIcon from '@/components/UI/UIIcon/UIIcon.svelte';
import { closePopup } from '@/modal/store';
import { showModal } from '@/modal/utils/showModal';
import { frontDictionaryState } from '@/store/dictionary';
import { mazeMapToRenderObjects } from './utils/mazeMapToRenderObjects';
import { useDefaultMazePosition } from '@/components/CanvasMap/utils/render';
import { onMount } from 'svelte';
import { directionalMoveKeyDown } from '@/utils/directionalMoveKeyDown';
import { UNIT_SIZE } from '@/components/CanvasMap/constants';
import type { Dictionary } from '@/types/types';

const map: MazeMap = genMap(100);

let position: MazePosition = useDefaultMazePosition();

let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => {
  dictionary = v;
});

$: renderObjects = mazeMapToRenderObjects(map, {
  radius: -1,
  position: position,
  colorDictionary: dictionary.cellTypeColor,
  iconDictionary: dictionary.cellTypeIcon,
});

const handleDoubleClick = (event: CustomEvent<MazePosition>) => {
  const x = Math.round(event.detail.x / UNIT_SIZE);
  const y = -Math.round(event.detail.y / UNIT_SIZE);

  const pos = `${x},${y}`;

  const data = {
    typeId: map[pos]?.typeId || 0,
    position: { x, y },
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
  navigator.clipboard.writeText(JSON.stringify(map));
};

const handleKeyDown = (e: KeyboardEvent) => {
  const direction = directionalMoveKeyDown(e);

  if (direction === 'DOWN') {
    position.y--;
  }
  if (direction === 'UP') {
    position.y++;
  }
  if (direction === 'LEFT') {
    position.x--;
  }
  if (direction === 'RIGHT') {
    position.x++;
  }
};

onMount(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
});
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-6">
        {JSON.stringify(map)}
      </div>
      <div class="col-6">
        <div class="map">
          <CanvasMap {renderObjects} on:dblclick={handleDoubleClick} />
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
