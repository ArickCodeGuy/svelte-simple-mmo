<script lang="ts">
import { Server } from '@/backend';
import type { BaseItem } from '@/backend/Controllers/Base';
import type { FightLog } from '@/backend/Controllers/FightLogs/types';
import FightLogComponent from '@/components/Fight/FightLog/FightLog.svelte';
import { useParams } from 'svelte-navigator';

const params = useParams();

$: id = Number($params.id);

let log: BaseItem<FightLog> | null = null;
$: {
  log = Server.publicApi.getFightLog(id);
}
</script>

<section class="section">
  <div class="container">
    <h1 class="h1">Fight Log</h1>
    {#if log}
      <FightLogComponent props={log} />
    {/if}
  </div>
</section>
