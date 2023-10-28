<script lang="ts">
import { Server } from '@/backend';
import type { GlobalInfo } from '@/backend/Server/types';
import UiIconButton from '@/components/UI/UIIcon/UIIconButton.svelte';
import { globalInfoState } from '@/store/player';
import { myNavigate } from '@/utils/myNavigate';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: items = Server.publicApi.getFightLogs(globalInfo.living.id);

const viewLog = (id: number) => {
  myNavigate('FIGHT_LOG', {
    params: {
      id,
    },
  });
};
</script>

<section class="section">
  <div class="container">
    <h1 class="h1">Fight Logs</h1>
    <div class="fight-log-items">
      {#each items as item}
        <div class="fight-log-item">
          <UiIconButton
            icon="information-outline"
            on:click={() => viewLog(item.id)}
          />
          <div class="fight-log-team-one">
            {#each item.teamOne as member}
              <div
                class="member"
                style={`background-image: url(${item.members[member].pfp})`}
              />
            {/each}
          </div>
          <div>VS</div>
          <div class="fight-log-team-two">
            {#each item.teamTwo as member}
              <div
                class="member"
                style={`background-image: url(${item.members[member].pfp})`}
              />
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
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
