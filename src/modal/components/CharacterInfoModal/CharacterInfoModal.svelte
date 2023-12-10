<script lang="ts">
import BzCharacter from '@/components/BZ/BZCharacter/BZCharacter.svelte';
import type { CharacterInfoModalProps } from './types';

export let props: CharacterInfoModalProps;
</script>

<BzCharacter props={{ id: props.id }} />
