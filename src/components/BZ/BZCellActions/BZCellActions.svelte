<script lang="ts">
import type { GlobalInfo } from '@/backend/Server/types';
import type { CellActionsAction, CellActionsProps } from './types';
import { getCurrentCellName } from './utils/getCurrentCellName';
import { useCellTypeActions } from './utils/useCellTypeActions';
import { globalInfoState } from '@/store/player';
import type { Dictionary } from '@/types/types';
import { frontDictionaryState } from '@/store/dictionary';
import { cellActionsActionToUIActionButtonContainerItems } from './utils/cellActionsActionToUIActionButtonContainerItems';
import UiActionButtonContainer from '@/components/UI/UIActionButton/UIActionButtonContainer.svelte';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => (dictionary = v));

export let props: CellActionsProps;

let cellActions: CellActionsAction[] | undefined;
$: {
  useCellTypeActions(props.id).then((v) => (cellActions = v));
}

$: name = getCurrentCellName(globalInfo, dictionary, props.id);
</script>

<div class="CellActions">
  <div class="CellActions__name">{name}</div>
  {#if cellActions}
    <div class="CellActionsActions">
      <UiActionButtonContainer
        items={cellActionsActionToUIActionButtonContainerItems(cellActions)}
      />
    </div>
  {/if}
</div>

<style lang="scss">
.CellActionsActions {
  margin-top: 0.5em;
}
</style>
