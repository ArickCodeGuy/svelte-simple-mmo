<script lang="ts">
  import Map from '@/components/Map.svelte';
  import CellInfo from '@/components/CellInfo.svelte';
  import type { Living } from '@/backend/Livings/types';
  import { playerState } from '@/store/player';
  import PlayerInfo from '@/components/PlayerInfo.svelte';

  let player: Living;
  playerState.subscribe((v) => (player = v));

  $: state = player.activity || 'NO_ACTIVITY';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="section main-page">
  <div class="container container--stretch">
    <div class="row">
      <div class="col-lg-4">
        <PlayerInfo />
      </div>
      <div class="col-lg-4 main-col">{state}</div>
      <div class="col-lg-4">
        <div class="map-container">
          <Map />
        </div>
        <CellInfo />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '@/assets/styles/vars.scss';
  .main-page {
    .map-container {
      max-width: 200px;
      margin: 0 auto 20px;
    }
    @media (min-width: $breakpoint-lg) {
      .main-col {
        border-left: 1px solid var(--contrast);
        border-right: 1px solid var(--contrast);
      }
    }
  }
</style>
