<script lang="ts">
import type { GlobalInfo } from '@/backend/Server/types';
import FightActions from '@/components/Fight/FightActions/FightActions.svelte';
import FightInstanceGroup from '@/components/Fight/FightInstance/FightInstanceGroup.svelte';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: fightTurns =
  (globalInfo.fight && globalInfo.fight.log.turns.reverse()) || [];
</script>

<section class="section">
  {#if globalInfo.fight}
    <div class="row">
      <div class="col-lg-4 allies">
        <!-- allies -->
        <FightInstanceGroup group={globalInfo.fight.teams.ally} />
      </div>
      <div class="col-lg-4 logs-actions">
        <!-- logs -->
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
        <FightActions class="actions" living={globalInfo.living} />
      </div>
      <div class="col-lg-4 enemies">
        <!-- enemies -->
        <FightInstanceGroup group={globalInfo.fight.teams.enemy} />
      </div>
    </div>
  {/if}
</section>

<style lang="scss">
.logs-acitons {
  display: flex;
  flex-direction: column;

  .actions {
    margin-top: auto;
  }
}
</style>
