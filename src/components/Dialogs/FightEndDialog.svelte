<script lang="ts">
import type { FightEndDialogProps } from './types';

export let props: FightEndDialogProps;
</script>

<div class="bottom">
  <button class="btn" on:click={props.leaveClick} on:mousedown
    >Leave fighgt</button
  >
</div>

<style lang="scss">
.bottom {
  margin-top: auto;
  width: 100%;
}
</style>
