<script lang="ts">
import type { Living } from '@/backend/Controllers/Livings/types';

export let living: Living;
</script>

<div class="buttons-container {$$restProps.class ?? ''}">
  <button class="btn">Attack</button>
  <button class="btn">Skills</button>
</div>

<style lang="scss">
.buttons-container {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--column-gap);
  > * {
    width: 100%;
  }
}
</style>
