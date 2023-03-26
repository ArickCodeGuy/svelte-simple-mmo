<script lang="ts">
  import map from '../backend/map';
  import type { Player } from '../backend/player/types';
  import Map from '../components/Map.svelte';
  import { playerActions, playerState } from '../store/player';

  let player: Player;
  playerState.subscribe((v) => {
    player = v;
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Map position={player.position} map={map.layout} />
  <button on:click={() => playerActions.directionalMove('UP')}>UP</button>
  <button on:click={() => playerActions.directionalMove('LEFT')}>LEFT</button>
  <button on:click={() => playerActions.directionalMove('RIGHT')}>RIGHT</button>
  <button on:click={() => playerActions.directionalMove('DOWN')}>DOWN</button>
</section>

<style>
</style>
