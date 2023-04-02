<script lang="ts">
  import type { Living } from '@/backend/Livings/types';
  import { getLivingsByPosition } from '@/backend/LivingsPositions';
  import type { MapInfo } from '@/backend/MapTable/types';
  import UINPCButtonContainer from '@/components/UI/NPC/UILivingButtonContainer.svelte';
  import { mapState } from '@/store/map';
  import { playerActions, playerState } from '@/store/player';

  const handleSwordClick = (npcId: number) => {
    playerActions.initFight(npcId);
  };

  let player: Living;
  playerState.subscribe((v) => (player = v));
  let map: MapInfo;
  mapState.subscribe((v) => (map = v));

  $: cellType =
    map && player && map.layout[player.position.y][player.position.x].type;
  $: livingArr = getLivingsByPosition(player.position).filter(
    (i) => i.id !== player.id
  );
</script>

<div class="CellInfo">
  {#if livingArr}
    <div class="CellInfo__title">Cell info</div>
    <div class="CellInfo__name">
      {cellType}
    </div>
    {#if Array.isArray(livingArr)}
      <div class="CellInfo__npcArr">
        <UINPCButtonContainer
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
