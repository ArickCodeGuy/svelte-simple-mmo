<script lang="ts">
import type { GlobalInfo } from '@/backend/Server/types';
import { getCurrentCellName } from './utils/getCurrentCellName';
import { useCellTypeActions } from './utils/useCellTypeActions';
import { globalInfoState } from '@/store/player';
import type { Dictionary } from '@/types/types';
import { frontDictionaryState } from '@/store/dictionary';
import UiCellActions from '@/components/UI/UICellActions/UICellActions.svelte';
import type { UICellActionsAction } from '@/components/UI/UICellActions/types';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: pos = `${globalInfo.living.position.x},${globalInfo.living.position.y}`;
$: cellTypeId = globalInfo?.map?.layout[pos].typeId || 0;

let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => (dictionary = v));

let cellActions: UICellActionsAction[] | undefined;
$: {
  useCellTypeActions(cellTypeId).then((v) => (cellActions = v));
}

$: name = getCurrentCellName(dictionary, cellTypeId);
</script>

<UiCellActions props={{ name, actions: cellActions }} />
