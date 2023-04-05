<script lang="ts">
  import { Server } from '@/backend';
  import type { Living } from '@/backend/Controllers/Livings/types';
  import type { MapInfo } from '@/backend/Controllers/Maps/types';
  import UILivingButtonContainer from '@/components/UI/Livings/UILivingButtonContainer.svelte';
  import { mapState } from '@/store/map';
  import { playerState } from '@/store/player';

  const handleSwordClick = (npcId: number) => {
    Server.initFight([player.id], [npcId]);
    playerState.update((v) => Server.livingsController.findById(v.id));
  };

  let player: Living;
  playerState.subscribe((v) => (player = v));
  let map: MapInfo;
  mapState.subscribe((v) => (map = v));

  $: cellType =
    map && player && map.layout[player.position.y][player.position.x].type;
  $: livingArr = Server.livingsController.getLivingsByPosition(player.position);
</script>

<div class="CellInfo">
  {#if livingArr}
    <div class="CellInfo__title">Cell info</div>
    <div class="CellInfo__name">
      {cellType}
    </div>
    {#if Array.isArray(livingArr)}
      <div class="CellInfo__npcArr">
        <UILivingButtonContainer
          items={livingArr}
          onSwordClick={handleSwordClick}
        />
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
