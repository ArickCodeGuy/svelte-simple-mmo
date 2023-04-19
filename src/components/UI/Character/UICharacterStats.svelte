<script lang="ts">
import type { LivingStats } from '@/backend/Controllers/Livings/types';
import UiIcon from '../Icon/UIIcon.svelte';

export let stats: LivingStats;
export let isView: boolean = false;
export let statPoints: number = 0;
const spentStats: LivingStats = {
  vitality: 0,
  strength: 0,
  dexterity: 0,
  mind: 0,
  intelligence: 0,
};
$: totalSpentStats = (
  Object.entries(spentStats) as [keyof LivingStats, ValueOf<LivingStats>][]
).reduce((res, [k, v]) => res + v, 0);

$: remainingStatPoints = statPoints - totalSpentStats;

$: statsArr = Object.entries(stats) as [
  keyof LivingStats,
  ValueOf<LivingStats>
][];

const confirm = () => {
  // @@TODO
};
</script>

<div class="UICharacterStats">
  {#if !isView}
    <div class="UICharacterStats__points">
      Stat points: {remainingStatPoints}
    </div>
  {/if}

  <div class="stats">
    {#each statsArr as [statKey, statValue]}
      <div class="stat">
        {statKey}:
        <div class="stat__right">
          {#if !isView && statPoints}
            <div class="stat__buttons">
              <button
                type="button"
                disabled={!remainingStatPoints}
                on:click={() => {
                  spentStats[statKey] += 1;
                }}
              >
                <UiIcon icon="plus-circle" />
              </button>
              <button
                type="button"
                disabled={spentStats[statKey] === 0}
                on:click={() => {
                  spentStats[statKey] -= 1;
                }}
              >
                <UiIcon icon="minus-circle" />
              </button>
            </div>
          {/if}
          <div class="stat__value">{statValue + spentStats[statKey]}</div>
        </div>
      </div>
    {/each}
  </div>
  {#if !isView}
    <button
      class="UICharacterStats__confirm btn"
      type="button"
      disabled={!totalSpentStats}
      on:click={confirm}>Confirm</button
    >
  {/if}
</div>

<style lang="scss">
.UICharacterStats {
  &__points {
  }
  &__confirm {
    margin-top: 20px;
  }
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
  &__right {
    display: flex;
    align-items: center;
  }
  &__buttons {
    margin-right: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    button {
      border-radius: 50%;
      border: none;
      background-color: transparent;
      padding: 3px;
      font-size: 20px;
      &:focus {
        outline: none;
      }
    }
  }
  &__value {
    width: 40px;
    text-align: right;
  }
}
</style>
