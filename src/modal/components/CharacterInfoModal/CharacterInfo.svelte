<script lang="ts">
import type { UICharacterProps } from '@/components/UI/UICharacter/types';
import type { CharacterInfoProps } from './types';
import { Server } from '@/backend';
import { livingToUICharacterProps } from '@/utils/livingToUICharacterProps';
import UiCharacter from '@/components/UI/UICharacter/UICharacter.svelte';

export let props: CharacterInfoProps;

let character: UICharacterProps | undefined;
$: {
  const livingData = Server.publicApi.getLivingById(props.id);
  character = livingToUICharacterProps(livingData.living, {
    drops: livingData.drops,
    isView: true,
  });
}
</script>

{#if character}
  <UiCharacter props={character} />
{/if}
