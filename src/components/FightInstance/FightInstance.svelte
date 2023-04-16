<script lang="ts">
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';
import FightInstanceGroup from './FightInstanceGroup.svelte';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

/**
 * transition-duration
 */
$: timeUntilNextTurn =
  (globalInfo.fight &&
    globalInfo.fight.instance.nextTurn - new Date().getTime()) ||
  0;

/**
 * used as offset of bar
 */
$: percentOfTimePassed = FIGHT_TURN_TIMEOUT / (timeUntilNextTurn * 100);

$: barInnerStyle = `transition: transform ${timeUntilNextTurn}ms linear`;
$: barOffsetStyle = `width: ${percentOfTimePassed}%`;
</script>

{#if globalInfo && globalInfo.fight}
  <div class="fight-time-bar">
    <div class="fight-time-bar__offset" style={barOffsetStyle} />
    <div class="fight-time-bar__inner" style={barInnerStyle} />
  </div>
  <div class="fight-instance">
    <FightInstanceGroup group={globalInfo.fight.teams.ally} />
    <FightInstanceGroup group={globalInfo.fight.teams.enemy} />
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
  &__offset {
    flex-shrink: 0;
    height: 100%;
    background-color: var(--contrast);
  }
  &__inner {
    width: 100%;
    height: 100%;
    background-color: var(--contrast);
    transform: scaleX(0);
    transform-origin: left;
  }
}
</style>
