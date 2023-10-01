<script lang="ts">
import { Server } from '@/backend';
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';
import type { GlobalInfo } from '@/backend/Server/types';
import FightActions from '@/components/Fight/FightActions/FightActions.svelte';
import FightInstanceGroup from '@/components/Fight/FightInstance/FightInstanceGroup.svelte';
import FightLog from '@/components/Fight/FightLog/FightLog.svelte';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: nextTurnTime = (globalInfo.fight && globalInfo.fight.instance.nextTurn) || 0;
let barElStyle: string;
let barElRequestAnimation: number;

const endBarAnimation = () => {
  cancelAnimationFrame(barElRequestAnimation);
};
const barAnimation = () => {
  barElRequestAnimation = window.requestAnimationFrame(barAnimation);
  const percent =
    1 - (nextTurnTime - new Date().getTime()) / FIGHT_TURN_TIMEOUT;
  const scaleX = percent < 1 ? percent : 1;

  barElStyle = `transform: scaleX(${scaleX})`;

  if (scaleX < 0) {
    endBarAnimation();
  }
};
$: {
  if (nextTurnTime) {
    endBarAnimation();
    barAnimation();
  }
}

$: fightLog = globalInfo.fight && globalInfo.fight.log;

$: fightActionsProps = {
  living: globalInfo.living,
  fight: globalInfo.fight,
  action: (skillType: number) => {
    globalInfoState.update(() =>
      Server.publicApi.fight.attack(globalInfo.living.id, skillType)
    );
  },
};

$: allies = globalInfo.fight?.teams.ally || [];
$: enemies = globalInfo.fight?.teams.enemy || [];
</script>

<section class="section">
  {#if globalInfo.fight}
    <div class="row">
      <div class="col-lg-4 allies">
        <FightInstanceGroup group={allies} />
      </div>
      <div class="col-lg-4 main">
        <!-- logs -->
        <div class="fight-time-bar">
          <div class="fight-time-bar__inner" style={barElStyle} />
        </div>
        <FightActions class="actions" props={fightActionsProps} />
        <FightLog props={fightLog} />
      </div>
      <div class="col-lg-4 enemies">
        <FightInstanceGroup group={enemies} />
      </div>
    </div>
  {/if}
</section>

<style lang="scss">
.main {
  display: grid;
  grid-gap: var(--column-gutter);
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
