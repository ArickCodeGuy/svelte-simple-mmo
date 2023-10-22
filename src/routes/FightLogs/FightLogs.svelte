<script lang="ts">
import { Server } from '@/backend';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: items = Server.publicApi.getFightLogs(globalInfo.living.id);
</script>

<section class="section">
  <div class="container">
    <h1 class="h1">Fight Logs</h1>
    <div class="fight-log-items">
      {#each items as item}
        {JSON.stringify(item.members)}
        <div class="fight-log-item">
          <div class="fight-log-team-one">
            {#each item.teamOne as member}
              <div class="member">{item.members[member]}</div>
            {/each}
          </div>
          <div>VS</div>
          <div class="fight-log-team-two">
            {#each item.teamTwo as member}
              <div class="member">{member}</div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
.fight-log-items {
  display: grid;
  gap: var(--column-gutter);
}
.fight-log-item {
  display: flex;
  align-items: center;
  gap: var(--column-gutter);
}
.member {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--contrast);
}
</style>
