<script lang="ts">
import { Server } from '@/backend';
import UIActionButtonContainer from '@/components/UI/UIActionButton/UIActionButtonContainer.svelte';
import { livingToUIActionButtonProps } from '@/utils/livingToUIActionButtonProps';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';
import { livingsArrToNpcAndPlayers } from '@/utils/livingsArrToNpcAndPlayers';
import { frontDictionaryState } from '@/store/dictionary';
import type { Dictionary } from '@/types/types';
import { myNavigate } from '@/utils/myNavigate';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => (dictionary = v));

const getCurrentCellName = (globalInfo: GlobalInfo, dictionary: Dictionary) => {
  if (!globalInfo.map || !globalInfo.living || !dictionary) {
    return '';
  }

  const pos = `${globalInfo.living.position.x},${globalInfo.living.position.y}`;
  const cellTypeId = globalInfo.map.layout[pos].typeId;

  return dictionary['cellTypeName'][cellTypeId];
};

let cellType = '';
$: {
  cellType = getCurrentCellName(globalInfo, dictionary);
}

$: sortedLivings = livingsArrToNpcAndPlayers(globalInfo.neighbour);

$: cellActions = globalInfo.actions;

$: players = sortedLivings.players.map((i) => ({
  ...livingToUIActionButtonProps(i),
}));

$: enemies = sortedLivings.npc.map((i) => {
  const res = livingToUIActionButtonProps(i);
  res.actions?.push({
    f: () => {
      globalInfoState.update((v) => {
        const newState = Server.publicApi.fight.init(
          globalInfo.living.id,
          i.id
        );

        myNavigate('FIGHT', {
          params: {
            id: globalInfo.fight?.instance.id || 0,
          },
        });

        return newState;
      });
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
      {#if cellActions}
        {#each cellActions as action}
          <div on:keypress on:click={() => action.action()}>{action.name}</div>
        {/each}
      {/if}
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
