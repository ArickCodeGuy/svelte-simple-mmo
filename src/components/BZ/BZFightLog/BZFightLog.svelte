<script lang="ts">
import { Server } from '@/backend';
import type { BaseItem } from '@/backend/Controllers/Base';
import type { FightLog } from '@/backend/Controllers/FightLogs/types';
import FightLogComponent from '@/components/Fight/FightLog/FightLog.svelte';

export let id: number;

let log: BaseItem<FightLog> | null = null;
$: {
  log = Server.publicApi.getFightLog(id);
}
</script>

{#if log}
  <FightLogComponent props={log} />
{/if}
