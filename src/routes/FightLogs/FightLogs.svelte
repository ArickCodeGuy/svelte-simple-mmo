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
    {#each items as item}
      <!--  -->
    {/each}
    <!-- items -->
  </div>
</section>
