<script lang="ts">
import Map from '@/components/Map.svelte';
import CellInfo from '@/components/CellInfo.svelte';
import UiCharacter from '@/components/UI/Character/UICharacter.svelte';
import type { Living } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: state = globalInfo.living.activity || 'NO_ACTIVITY';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="section main-page">
  <div class="container container--stretch">
    <div class="row">
      <div class="col-lg-4">
        <UiCharacter {...globalInfo.living} />
      </div>
      <div class="col-lg-4 main-col">
        <div>{state}</div>
        {#if globalInfo.fight}
          <div class="fight-instance">
            <div class="fight-group">
              {#each globalInfo.fight.teams.ally as member}
                <div class="fight-char">
                  [{member.lvl}] {member.name} / {member.currentHp}
                </div>
              {/each}
            </div>
            <div class="fight-group">
              {#each globalInfo.fight.teams.enemy as member}
                <div class="fight-char">
                  [{member.lvl}] {member.name} / {member.currentHp}
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
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
.fight-instance {
  display: flex;
  justify-content: space-between;
  gap: var(--column-gap);
}
.fight-group {
  display: grid;
  gap: var(--column-gap);
}
.fight-char {
  padding: 20px;
  background-color: rgba(var(--rgba-bgc), 0.5);
}
</style>
