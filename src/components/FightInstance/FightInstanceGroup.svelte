<script lang="ts">
import type { Living } from '@/backend/Controllers/Livings/types';
import FightInstanceMember from './FightInstanceMember.svelte';

export let group: Living[];
</script>

<div class="FightInstanceGroup">
  {#each group as member}
    <FightInstanceMember {member} />
  {/each}
</div>

<style lang="scss">
.FightInstanceGroup {
  width: 100%;
  display: grid;
  gap: var(--column-gap);
}
</style>
