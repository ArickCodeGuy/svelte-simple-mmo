<script lang="ts">
import type { LivingStats } from '@/backend/Controllers/Livings/types';

export let stats: LivingStats;

$: statsArr = Object.entries(stats);
</script>

<div class="UICharacterStats">
  <div class="stats">
    {#each statsArr as stat}
      <div class="stat">
        {stat[0]}:
        <div class="stat__right">
          {stat[1]}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
.UICharacterStats {
}
.stats {
  display: grid;
  gap: 0.5em;
}
.stat {
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--contrast);
}
</style>
