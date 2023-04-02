<script lang="ts">
  import type { MapInfo } from '@/backend/map/types';
  import { npcActions } from '@/backend/npc/actions';
  import type { Player } from '@/backend/player/types';
  import UINPCButtonContainer from '@/components/UI/NPC/buttonContainer.svelte';
  import { mapState } from '@/store/map';
  import { playerState } from '@/store/player';

  const handleSwordClick = (npcId: number) => {
    console.log(npcActions.findNpcById(npcId));
  };

  let player: Player;
  playerState.subscribe((v) => (player = v));
  let map: MapInfo;
  mapState.subscribe((v) => (map = v));

  $: cell =
    (map && player && map.layout[player.position.y][player.position.x]) || null;
</script>

<div class="CellInfo">
  {#if cell}
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
