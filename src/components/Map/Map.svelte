<script lang="ts">
import { globalInfoState } from '@/store/player';
import { Server } from '@/backend';
import { onMount } from 'svelte';
import type { DirectionalMove } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import { directionalMoveKeyDown } from '@/utils/directionalMoveKeyDown';
import type { Dictionary } from '@/types/types';
import { frontDictionaryState } from '@/store/dictionary';
import CanvasMap from '../CanvasMap/CanvasMap.svelte';
import { mazeMapToRenderObjects } from './utils/mazeMapToRenderObjects';
import UiIconButton from '../UI/UIIcon/UIIconButton.svelte';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => (dictionary = v));

$: enemies = globalInfo.distantLivings;

$: renderObjects =
  globalInfo.map?.layout &&
  mazeMapToRenderObjects(globalInfo.map.layout, {
    position: globalInfo.living.position,
    radius: -1,
    colorDictionary: dictionary.cellTypeColor,
    iconDictionary: dictionary.cellTypeIcon,
    enemies,
  });

const handleMoveClick = (direction: DirectionalMove) => {
  globalInfoState.update((v) => Server.publicApi.move(v.living.id, direction));
};

const handleKeyDown = (e: KeyboardEvent) => {
  const direction = directionalMoveKeyDown(e);
  if (!direction) return;

  handleMoveClick(direction);
};

onMount(() => {
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
});
</script>

<CanvasMap {renderObjects} />
<div class="buttons">
  <UiIconButton icon="arrow-up" on:click={() => handleMoveClick('UP')} />
  <div>
    <UiIconButton icon="arrow-left" on:click={() => handleMoveClick('LEFT')} />
    <UiIconButton icon="circle" />
    <UiIconButton
      icon="arrow-right"
      on:click={() => handleMoveClick('RIGHT')}
    />
  </div>
  <UiIconButton icon="arrow-down" on:click={() => handleMoveClick('DOWN')} />
</div>

<style lang="scss">
.buttons {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2px;
  display: none;
}
</style>
