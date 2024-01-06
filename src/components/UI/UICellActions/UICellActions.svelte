<script lang="ts">
import UiActionButtonContainer from '@/components/UI/UIActionButton/UIActionButtonContainer.svelte';
import type { UICellActionsProps } from './types';
import { uiCellActionsActionsToUIActionButtonContiner } from './utils/uiCellActionsActionsToUIActionButtonContiner';

export let props: UICellActionsProps;

$: actions = props.actions || [];
</script>

<div class="CellActions">
  <div class="CellActions__name">{props.name}</div>
  {#if actions}
    <div class="CellActionsActions">
      <UiActionButtonContainer
        items={uiCellActionsActionsToUIActionButtonContiner(actions)}
      />
    </div>
  {/if}
</div>

<style lang="scss">
.CellActionsActions {
  margin-top: 0.5em;
}
</style>
