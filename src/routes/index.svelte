<script lang="ts">
import Map from '@/components/Map/Map.svelte';
import CellInfo from '@/components/CellInfo.svelte';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="section main-page">
  <div class="container container--stretch">
    <div class="row">
      <div class="col-lg-4">
        <!-- @@TODO: figure out what to put here -->
      </div>
      <div class="col-lg-4 main-col">
        <div class="map-container">
          <Map />
        </div>
        <CellInfo />
      </div>
      <div class="col-lg-4 map-col">
        <!-- @@TODO: figure out what to put here -->
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
