<script lang="ts">
import UIMap from '@/components/UI/UIMap/UIMap.svelte';
import { globalInfoState } from '@/store/player';
import { Server } from '@/backend';
import { onMount } from 'svelte';
import type { DirectionalMove } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import UiIcon from '../UI/Icon/UIIcon.svelte';
import { globalInfoToUIMapProps } from './globalInfoToUIMapProps';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

const handleMoveClick = (direction: DirectionalMove) => {
  globalInfoState.update((v) => Server.publicApi.move(v.living.id, direction));
};

$: props = globalInfoToUIMapProps(globalInfo);

onMount(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === 'w' || e.key === 'ArrowUp')
      handleMoveClick('UP');
    if (e.key.toLowerCase() === 'a' || e.key === 'ArrowLeft')
      handleMoveClick('LEFT');
    if (e.key.toLowerCase() === 's' || e.key === 'ArrowDown')
      handleMoveClick('DOWN');
    if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight')
      handleMoveClick('RIGHT');
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
});
</script>

{#if globalInfo && globalInfo.map}
  <UIMap {props} />
{/if}
<div class="buttons">
  <button on:click={() => handleMoveClick('UP')}
    ><UiIcon icon="arrow-up" /></button
  >
  <div>
    <button on:click={() => handleMoveClick('LEFT')}
      ><UiIcon icon="arrow-left" /></button
    >
    <button><UiIcon icon="circle" /></button>
    <button on:click={() => handleMoveClick('RIGHT')}
      ><UiIcon icon="arrow-right" /></button
    >
  </div>
  <button on:click={() => handleMoveClick('DOWN')}
    ><UiIcon icon="arrow-down" /></button
  >
</div>

<style lang="scss">
.buttons {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2px;
  button {
    display: inline-flex;
    border-width: 0;
    border-radius: 3px;
    padding: 5px;
  }
}
</style>
