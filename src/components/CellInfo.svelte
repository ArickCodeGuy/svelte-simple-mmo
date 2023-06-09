<script lang="ts">
import { Server } from '@/backend';
import UIActionButtonContainer from '@/components/UI/ActionButton/UIActionButtonContainer.svelte';
import { livingToUIActionButtonProps } from '@/utils/livingToUIActionButtonProps';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';
import { livingsArrToNpcAndPlayers } from '@/utils/livingsArrToNpcAndPlayers';
import { frontDictionaryState } from '@/store/dictionary';
import type { Dictionary } from '@/types/types';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => (dictionary = v));

const getCurrentCellName = (globalInfo: GlobalInfo, dictionary: Dictionary) => {
  if (!globalInfo.map || !globalInfo.living || !dictionary) {
    return '';
  }

  const cellTypeId =
    globalInfo.map.layout[globalInfo.living.position.y][
      globalInfo.living.position.x
    ].typeId;

  return dictionary['cellTypeName'][cellTypeId];
};

let cellType = '';
$: {
  cellType = getCurrentCellName(globalInfo, dictionary);
}

$: sortedLivings = livingsArrToNpcAndPlayers(globalInfo.neighbors);

$: players = sortedLivings.players.map((i) => ({
  ...livingToUIActionButtonProps(i),
}));

$: enemies = sortedLivings.npc.map((i) => {
  const res = livingToUIActionButtonProps(i);
  res.actions?.push({
    f: () => {
      Server.publicApi.initFight(globalInfo.living.id, i.id);
      globalInfoState.update((v) => Server.publicApi.getState(v.living.id)!);
    },
    icon: 'sword-cross',
  });
  return res;
});
</script>

<div class="CellInfo">
  {#if globalInfo}
    <div class="CellInfo__blocks">
      <div class="CellInfo__block">
        Cell type: {cellType}
      </div>
      {#if players.length}
        <div class="CellInfo__block">
          <div>Players:</div>
          <div class="CellInfo__npcArr">
            <UIActionButtonContainer items={players} />
          </div>
        </div>
      {/if}
      {#if enemies.length}
        <div class="CellInfo__block">
          <div>NPC:</div>
          <div class="CellInfo__npcArr">
            <UIActionButtonContainer items={enemies} />
          </div>
        </div>
      {/if}
    </div>
  {:else}
    no info on cell
  {/if}
</div>

<style lang="scss">
.CellInfo {
  &__blocks {
    display: grid;
    gap: 1em;
  }
  &__npcArr {
    margin-top: 0.5em;
  }
}
</style>
