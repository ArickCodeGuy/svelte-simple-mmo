<script lang="ts">
import type { FightActionsProps } from './types';

export let props: FightActionsProps;

$: hasSkills = Boolean(props.living?.skills.length);
let isAbleToAttack = false;
$: {
  isAbleToAttack = false;
  const livingId = props.living?.id;
  if (livingId) {
    isAbleToAttack = Boolean(
      props.fight?.instance.members?.[livingId].hasAttacked
    );
  }
}
</script>

<div class="buttons-container {$$restProps.class ?? ''}">
  <button
    class="btn"
    disabled={isAbleToAttack}
    on:click={() => props.action?.(0)}>Attack</button
  >
  <button class="btn" disabled={hasSkills}>Skills</button>
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
