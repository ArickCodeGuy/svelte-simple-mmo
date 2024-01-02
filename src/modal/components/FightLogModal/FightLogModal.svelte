<script lang="ts">
import type { FightLogModalProps } from './types';
import BzFightLog from '@/components/BZ/BZFightLog/BZFightLog.svelte';

export let props: FightLogModalProps;
</script>

<div class="FightLog">
  <BzFightLog id={props.fightLogId} />
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
