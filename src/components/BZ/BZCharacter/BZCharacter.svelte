<script lang="ts">
import type { UICharacterProps } from '@/components/UI/UICharacter/types';
import type { BZCharacterProps } from './types';
import { Server } from '@/backend';
import UiCharacter from '@/components/UI/UICharacter/UICharacter.svelte';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';
import type { LivingStats } from '@/backend/Controllers/Livings/types';
import type { ItemType } from '@/backend/Controllers/Items/types';
import { showItemInfoModal } from '@/modal/components/ItemInfoModal/show';
import { livingToUICharacterProps } from './utils/livingToUICharacterProps';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

export let props: BZCharacterProps;

$: isOwner = globalInfo.living.id === props.id;

const statsConfirm = (updatedStats: LivingStats) => {
  globalInfoState.update(() =>
    Server.publicApi.updateStats(globalInfo.living.id, updatedStats)
  );
};

const handleInventoryClick = (type: ItemType) => {
  if (!isOwner) return;

  showItemInfoModal(type);
};

let character: UICharacterProps | undefined;
$: {
  const livingData = Server.publicApi.getLivingById(props.id);
  character = livingToUICharacterProps(livingData.living, {
    drops: isOwner ? undefined : livingData.drops,
    isView: isOwner ? false : true,
    equipment: isOwner ? globalInfo.equipment : undefined,
    statsConfirm,
    inventoryClick: handleInventoryClick,
  });
}
</script>

{#if character}
  <UiCharacter props={character} />
{/if}
