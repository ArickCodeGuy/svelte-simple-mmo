<script lang="ts">
import type { FightLogProps } from './types';

export let props: FightLogProps;
</script>

<div class="FightLogTurns">
  {#each props.turns as logTurn}
    <div class="FightLogTurn">
      {#each logTurn as logAction}
        <div class="FightLogAction">
          {@html logAction}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
.FightLog {
}
.FightLogTurns {
  display: grid;
  gap: var(--column-gap);
}
.FightLogTurn {
  position: relative;
  display: grid;
  gap: 5px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--contrast);
    bottom: calc(-var(--column-gap) / 2);
    left: 0;
    top: calc(var(--column-gutter) * -1 + 1px);
  }
  &:first-child {
    &::after {
      display: none;
    }
  }
}
</style>
