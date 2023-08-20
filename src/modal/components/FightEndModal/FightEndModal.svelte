<script lang="ts">
import type { FightLog as FightLogType } from '@/backend/Controllers/FightLogs/types';
import type { FightEndModalProps } from './types';
import { Server } from '@/backend';
import FightLog from '@/components/Fight/FightLog/FightLog.svelte';

export let props: FightEndModalProps;

let log: FightLogType;
$: {
  log = Server.publicApi.getFightLog(props.fightLogId);
}
</script>

<div class="FightLog">
  <FightLog props={log} />
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
