<script lang="ts">
import type { CellActionsProps } from './types';
import { useCellTypeActions } from './utils/useCellTypeActions';

export let props: CellActionsProps;

$: cellActions = useCellTypeActions(props.id);
</script>
