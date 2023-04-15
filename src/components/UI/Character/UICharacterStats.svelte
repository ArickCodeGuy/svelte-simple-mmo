<script lang="ts">
import type { LivingStats } from '@/backend/Controllers/Livings/types';

export let stats: LivingStats;
export let statPoints: number | undefined = undefined;

$: statsArr = Object.entries(stats);
</script>

<div class="UICharacterStats">
  {#if statPoints !== undefined}
    <div class="UICharacterStats__title">Stat points: {statPoints}</div>
  {/if}
  <div class="stats">
    {#each statsArr as stat}
      <div class="stat">
        <b>{stat[0]}: </b>
        <div class="stat__right">
          {stat[1]}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
.UICharacterStats {
  &__title {
    margin-bottom: 0.5em;
  }
}
.stats {
  display: grid;
  gap: 0.5em;
}
.stat {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--contrast);
}
</style>
