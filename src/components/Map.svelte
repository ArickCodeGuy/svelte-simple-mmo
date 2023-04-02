<script lang="ts">
  import UIMap from '@/components/UI/UIMap/UIMap.svelte';
  import { playerActions, playerState } from '@/store/player';
  import type { MapInfo } from '@/backend/MapTable/types';
  import { mapState } from '@/store/map';
  import type { Living } from '@/backend/Livings/types';

  let player: Living;
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
