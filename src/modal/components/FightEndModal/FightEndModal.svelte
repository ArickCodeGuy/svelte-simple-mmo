<script lang="ts">
import type { FightLog } from '@/backend/Controllers/FightLogs/types';
import type { FightEndModalProps } from './types';
import { Server } from '@/backend';
import FightLogComponent from '@/components/Fight/FightLog/FightLog.svelte';

export let props: FightEndModalProps;

let log: FightLog;
$: {
  log = Server.publicApi.getFightLog(props.fightLogId);
}
</script>

<div class="FightLog">
  <FightLogComponent props={log} />
</div>
<div class="bottom">
  <button class="btn" on:click={props.leaveClick} on:mousedown>
    Leave fight
  </button>
</div>

<style lang="scss">
.bottom {
  margin-top: auto;
  width: 100%;
}
</style>
