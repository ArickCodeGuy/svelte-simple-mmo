<script lang="ts">
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));
</script>

{#if globalInfo && globalInfo.fight}
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
</style>
