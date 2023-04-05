<script lang="ts">
  import UIMap from '@/components/UI/UIMap/UIMap.svelte';
  import { playerState } from '@/store/player';
  import { mapState } from '@/store/map';
  import { Server } from '@/backend';
  import { onMount } from 'svelte';
  import type {
    DirectionalMove,
    Living,
  } from '@/backend/Controllers/Livings/types';
  import type { MapInfo } from '@/backend/Controllers/Maps/types';

  let player: Living;
  playerState.subscribe((v) => {
    player = v;
  });

  let map: MapInfo;
  mapState.subscribe((v) => (map = v));

  const handleMoveClick = (direction: DirectionalMove) => {
    playerState.update(() => Server.tryDirectionalMove(player.id, direction));
  };

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'w' || e.key === 'ArrowUp') handleMoveClick('UP');
      if (e.key === 'a' || e.key === 'ArrowLeft') handleMoveClick('LEFT');
      if (e.key === 's' || e.key === 'ArrowDown') handleMoveClick('DOWN');
      if (e.key === 'd' || e.key === 'ArrowRight') handleMoveClick('RIGHT');
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });
</script>

{#if map && player}
  <UIMap position={player.position} range={4} map={map.layout} />
{/if}
<button on:click={() => handleMoveClick('UP')}>UP</button>
<button on:click={() => handleMoveClick('LEFT')}>LEFT</button>
<button on:click={() => handleMoveClick('RIGHT')}>RIGHT</button>
<button on:click={() => handleMoveClick('DOWN')}>DOWN</button>
