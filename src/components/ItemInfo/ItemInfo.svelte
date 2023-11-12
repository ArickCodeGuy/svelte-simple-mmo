<script lang="ts">
import type { ItemInfoProps } from './types';

export let props: ItemInfoProps;

$: isProto = Boolean(props.item.protoId);
</script>
