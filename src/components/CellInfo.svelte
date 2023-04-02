<script lang="ts">
  import type { MapCell, MapInfo } from '@/backend/map/types';
  import type { Player } from '@/backend/player/types';
  import UINPCButtonContainer from '@/components/UI/NPC/buttonContainer.svelte';
  import { mapState } from '@/store/map';
  import { playerState } from '@/store/player';

  export let cell: MapCell;
  const handleSwordClick = (npcId: number) => {};

  let player: Player;
  playerState.subscribe((v) => (player = v));
  let map: MapInfo;
  mapState.subscribe((v) => (map = v));

  $: cell = map && player && map.layout[player.position.y][player.position.x];
</script>

<div class="CellInfo">
  <div class="CellInfo__title">Cell info</div>
  <div class="CellInfo__name">{cell.type}</div>
  {#if Array.isArray(cell.npcArr)}
    <div class="CellInfo__npcArr">
      <UINPCButtonContainer
        items={cell.npcArr}
        onSwordClick={handleSwordClick}
      />
    </div>
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
