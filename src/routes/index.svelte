<script lang="ts">
import Map from '@/components/Map/Map.svelte';
import CellInfo from '@/components/CellInfo.svelte';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';
import FightInstance from '@/components/FightInstance/FightInstance.svelte';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="section main-page">
  <div class="container container--stretch">
    <div class="row">
      <div class="col-lg-4" />
      <div class="col-lg-4 main-col">
        {#if globalInfo.fight}
          <FightInstance />
        {/if}
      </div>
      <div class="col-lg-4 map-col">
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
.map-col {
  order: -1;
  @media (min-width: $breakpoint-lg) {
    order: unset;
  }
}
</style>
