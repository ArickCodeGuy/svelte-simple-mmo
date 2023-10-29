<script lang="ts">
import { Server } from '@/backend';
import type { BaseItem } from '@/backend/Controllers/Base';
import type { FightLog } from '@/backend/Controllers/FightLogs/types';
import { useParams } from 'svelte-navigator';

const params = useParams();

$: id = Number($params.id);

let log: BaseItem<FightLog> | null = null;
$: {
  log = Server.publicApi.getFightLog(id);
}
</script>

{#if log}
  {JSON.stringify(log)}
{/if}
