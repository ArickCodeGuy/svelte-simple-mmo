<script lang="ts">
import UiCharacter from '../UI/Character/UICharacter.svelte';
import type { CharacterInfoDialogProps } from './types';

export let props: CharacterInfoDialogProps;
</script>

<UiCharacter {props} isView={true} />
