<script lang="ts">
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';

let isAnimating = false;
let time: number = new Date().getTime();
let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => {
  globalInfo = v;
  // if (v.fight) {
  //   setTimeout(() => {
  //     isAnimating = true;
  //   }, 10);
  //   time = new Date().getTime();
  //   setTimeout(() => {
  //     isAnimating = false;
  //   }, v.fight.instance.nextTurn);
  }
});

$: timeUntilNextTurn =
  (globalInfo.fight &&
    globalInfo.fight.instance.nextTurn - new Date().getTime()) ||
  0;
</script>

{#if globalInfo && globalInfo.fight}
  <div class="fight-timeout">
    <div
      class={isAnimating ? 'animate' : ''}
      style="transition: transform {timeUntilNextTurn}ms linear"
    />
  </div>
  <div class="fight-instance">
    <div class="fight-group">
      {#each globalInfo.fight.teams.ally as member}
        <div class="fight-char">
          [{member.lvl}] {member.name} / {member.computedStats.currentHealth}
        </div>
      {/each}
    </div>
    <div class="fight-group">
      {#each globalInfo.fight.teams.enemy as member}
        <div class="fight-char">
          [{member.lvl}] {member.name} / {member.computedStats.currentHealth}
        </div>
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
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
.fight-timeout {
  margin-bottom: 1em;
  position: relative;
  width: 100%;
  height: 5px;
  background-color: rgba(var(--rgba-bgc), 0.5);
  div {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--contrast);
    transform: scaleX(0);
    transform-origin: left;
    &.animate {
      transform: scaleX(1);
    }
  }
}
</style>
