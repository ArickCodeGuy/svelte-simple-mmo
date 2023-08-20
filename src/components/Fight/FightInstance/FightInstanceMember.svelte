<script lang="ts">
import type { Living } from '@/backend/Controllers/Livings/types';

export let member: Living;
</script>

<div class="FightInstanceMember">
  <div class="FightInstanceMember__top">
    <b>[{member.lvl}]</b>
    {member.name}
  </div>
  <div class="FightInstanceMember__health">
    {member.health.current} / {member.health.max}
  </div>
</div>

<style lang="scss">
.FightInstanceMember {
  padding: 20px;
  background-color: rgba(var(--rgba-bgc), 0.5);
}
</style>
