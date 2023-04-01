<script lang="ts">
  import UIMap from '@/components/UI/Map.svelte';
  import type { Player } from '@/backend/player/types';
  import { playerActions, playerState } from '@/store/player';
  import type { MapInfo } from '@/backend/map/types';
  import { mapState } from '@/store/map';

  let player: Player;
  playerState.subscribe((v) => {
    player = v;
  });

  let map: MapInfo;
  mapState.subscribe((v) => (map = v));
</script>

<UIMap position={player.position} range={4} map={map.layout} />
<button on:click={() => playerActions.directionalMove('UP')}>UP</button>
<button on:click={() => playerActions.directionalMove('LEFT')}>LEFT</button>
<button on:click={() => playerActions.directionalMove('RIGHT')}>RIGHT</button>
<button on:click={() => playerActions.directionalMove('DOWN')}>DOWN</button>
