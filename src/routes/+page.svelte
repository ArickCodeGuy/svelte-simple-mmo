<script lang="ts">
  import Map from '@/components/Map.svelte';
  import UINPCButton from '@/components/UI/NPC/button.svelte';
  import slug from '@/backend/npc/list/slug';
  import protoToNpc from '@/backend/npc/protoToNpc';
  import CellInfo from '@/components/CellInfo.svelte';

  const npc = protoToNpc(slug);
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
