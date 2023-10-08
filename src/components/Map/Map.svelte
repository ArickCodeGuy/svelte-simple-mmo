<script lang="ts">
import UIMap from '@/components/UI/UIMap/UIMap.svelte';
import { globalInfoState } from '@/store/player';
import { Server } from '@/backend';
import { onMount } from 'svelte';
import type { DirectionalMove } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import UiIcon from '../UI/UIIcon/UIIcon.svelte';
import { globalInfoToUIMapProps } from './globalInfoToUIMapProps';
import { directionalMoveKeyDown } from '@/utils/directionalMoveKeyDown';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

const handleMoveClick = (direction: DirectionalMove) => {
  globalInfoState.update((v) => Server.publicApi.move(v.living.id, direction));
};

$: props = globalInfoToUIMapProps(globalInfo);

onMount(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const direction = directionalMoveKeyDown(e);
    if (!direction) return;

    handleMoveClick(direction);
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
