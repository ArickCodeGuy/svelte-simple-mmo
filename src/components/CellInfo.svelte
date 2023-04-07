<script lang="ts">
  import { Server } from '@/backend';
  import type { Living } from '@/backend/Controllers/Livings/types';
  import type { MapInfo } from '@/backend/Controllers/Maps/types';
  import UIActionButtonContainer from '@/components/UI/ActionButton/UIActionButtonContainer.svelte';
  import { mapState } from '@/store/map';
  import { playerState } from '@/store/player';
  import { showPopup } from '@/store/popup';
  import { livingToUIActionButtonProps } from '@/utils/livingToUIActionButtonProps';
  import UiCharacter from './UI/Character/UICharacter.svelte';

  let player: Living;
  playerState.subscribe((v) => (player = v));
  let map: MapInfo;
  mapState.subscribe((v) => (map = v));

  $: cellType =
    map && player && map.layout[player.position.y][player.position.x].type;

  $: livingArr = Server.livingsController
    .getLivingsByPosition(player.position)
    .filter((living) => living.id !== player.id);

  $: items = livingArr.map((i) => ({
    ...livingToUIActionButtonProps(i),
    actions: [
      {
        f: () => {
          showPopup({
            ...i,
            // title: i.name,
            // content: '',
            component: UiCharacter,
          });
        },
        icon: 'information-slab-circle-outline',
      },
      {
        f: () => {
          Server.initFight([player.id], [i.id]);
          playerState.update((v) => Server.livingsController.getById(v.id));
        },
        icon: 'sword-cross',
      },
    ],
  }));
</script>

<div class="CellInfo">
  {#if items}
    <!-- <div class="CellInfo__title">Cell info</div> -->
    <div class="CellInfo__name">
      Cell type: {cellType}
    </div>
    {#if Array.isArray(items)}
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
    &__title {
      font-weight: bold;
      margin-bottom: 1em;
    }
    &__npcArr {
      margin-top: 1em;
    }
  }
</style>
