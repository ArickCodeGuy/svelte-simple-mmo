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
    {#each globalInfo.fight.log.turns as logItem}
      {JSON.stringify(logItem)}
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
</style>
