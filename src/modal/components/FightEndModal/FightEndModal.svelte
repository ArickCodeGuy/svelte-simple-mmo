<script lang="ts">
import type { FightEndModalProps } from './types';

export let props: FightEndModalProps;
</script>

<div class="bottom">
  <button class="btn" on:click={props.leaveClick} on:mousedown
    >Leave fight</button
  >
</div>

<style lang="scss">
.bottom {
  margin-top: auto;
  width: 100%;
}
</style>
