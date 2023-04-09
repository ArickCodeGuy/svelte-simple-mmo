<script lang="ts">
import { Server } from '@/backend';
import UIActionButtonContainer from '@/components/UI/ActionButton/UIActionButtonContainer.svelte';
import { showPopup } from '@/store/popup';
import { livingToUIActionButtonProps } from '@/utils/livingToUIActionButtonProps';
import UiCharacter from './UI/Character/UICharacter.svelte';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: cellType =
  globalInfo.map &&
  globalInfo.living &&
  globalInfo.map.layout[globalInfo.living.position.y][
    globalInfo.living.position.x
  ].type;

$: items = globalInfo.neighbors
  .filter((i) => i.id !== globalInfo.living.id)
  .map((i) => ({
    ...livingToUIActionButtonProps(i),
    actions: [
      {
        f: () => {
          showPopup({
            ...i,
            component: UiCharacter,
          });
        },
        icon: 'information-slab-circle-outline',
      },
      {
        f: () => {
          Server.initFight([globalInfo.living.id], [i.id]);
          globalInfoState.update((v) => Server.getLivingState(v.living.id)!);
        },
        icon: 'sword-cross',
      },
    ],
  }));
</script>

<div class="CellInfo">
  {#if items}
    <div class="CellInfo__name">
      Cell type: {cellType}
    </div>
    {#if items.length}
      <div class="CellInfo__title">Enemies:</div>
      <div class="CellInfo__npcArr">
        <UIActionButtonContainer {items} />
      </div>
    {/if}
  {:else}
    no info on cell
  {/if}
</div>

<style lang="scss">
.CellInfo {
  &__name {
    margin-bottom: 0.5em;
  }
  &__title {
    margin-bottom: 0.5em;
  }
  &__npcArr {
    margin-top: 1em;
  }
}
</style>
