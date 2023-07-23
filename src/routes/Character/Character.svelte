<script lang="ts">
import { Server } from '@/backend';
import type { ItemType } from '@/backend/Controllers/Items/types';
import type { LivingStats } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import UiCharacter from '@/components/UI/Character/UICharacter.svelte';
import { showItemInfoModal } from '@/modal/components/ItemInfoModal/show';
import { globalInfoState } from '@/store/player';
import { livingToUICharacterProps } from '@/utils/livingToUICharacterProps';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

const statsConfirm = (updatedStats: LivingStats) => {
  globalInfoState.update((v) =>
    Server.publicApi.updateStats(globalInfo.living.id, updatedStats)
  );
};

const handleInventoryClick = (type: ItemType) => {
  showItemInfoModal(type);
};

$: props = {
  ...livingToUICharacterProps(globalInfo.living, globalInfo.equipment),
  isView: false,
  statsConfirm,
  inventoryClick: handleInventoryClick,
};
</script>

<svelte:head>
  <title>Character</title>
</svelte:head>

<section class="section">
  <div class="container">
    <div class="h1">{globalInfo.living.name} [{globalInfo.living.lvl}]</div>
    <UiCharacter {props} />
  </div>
</section>
