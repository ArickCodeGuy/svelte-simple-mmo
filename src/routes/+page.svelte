<script lang="ts">
  import Map from '@/components/Map.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="section main-page">
  <div class="container container--stretch">
    <div class="row">
      <div class="col-lg-4">char info</div>
      <div class="col-lg-4 main-col">main info</div>
      <div class="col-lg-4">
        <div class="map-container">
          <Map />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .main-page {
    .map-container {
      max-width: 200px;
      margin: 0 auto;
    }
    .main-col {
      border-left: 1px solid var(--contrast);
      border-right: 1px solid var(--contrast);
    }
  }
</style>
