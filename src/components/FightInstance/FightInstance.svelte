<script lang="ts">
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';
import FightInstanceGroup from './FightInstanceGroup.svelte';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: nextTurnTime = (globalInfo.fight && globalInfo.fight.instance.nextTurn) || 0;

let barElStyle: string;
let barElRequestAnimation: number;
const barAnimation = () => {
  barElRequestAnimation = window.requestAnimationFrame(barAnimation);
  const scaleX = 1 - (nextTurnTime - new Date().getTime()) / FIGHT_TURN_TIMEOUT;

  barElStyle = `transform: scaleX(${scaleX})`;

  if (scaleX < 0) {
    endBarAnimation();
  }
};
const endBarAnimation = () => {
  cancelAnimationFrame(barElRequestAnimation);
};
$: {
  if (nextTurnTime) {
    endBarAnimation();
    barAnimation();
  }
}

$: fightTurns =
  (globalInfo.fight && globalInfo.fight.log.turns.reverse()) || [];
</script>

{#if globalInfo && globalInfo.fight}
  <div class="fight-time-bar">
    <div class="fight-time-bar__inner" style={barElStyle} />
  </div>
  <div class="fight-instance">
    <FightInstanceGroup group={globalInfo.fight.teams.ally} />
    <FightInstanceGroup group={globalInfo.fight.teams.enemy} />
  </div>
  <div class="fight-log">
    {#each fightTurns as logTurn}
      <div class="fight-log-turn">
        {#each logTurn as logAction}
          <div class="fight-log-action">
            {@html logAction}
          </div>
        {/each}
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
.fight-instance {
  display: flex;
  justify-content: space-between;
  gap: var(--column-gap);
}
.fight-time-bar {
  margin-bottom: 1em;
  display: flex;
  width: 100%;
  height: 5px;
  background-color: rgba(var(--rgba-bgc), 0.5);
  &__inner {
    width: 100%;
    height: 100%;
    background-color: var(--contrast);
    transform: scaleX(0);
    transform-origin: left;
  }
}
.fight-log {
  margin-top: var(--column-gap);
  display: grid;
  gap: var(--column-gap);
}
.fight-log-turn {
  position: relative;
  display: grid;
  gap: 5px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--contrast);
    bottom: calc(-var(--column-gap) / 2);
    left: 0;
  }
}
.fight-log-action {
}
</style>
