<script lang="ts">
import { Server } from '@/backend';
import type { ItemType, PublicItem } from '@/backend/Controllers/Items/types';
import type { LivingStats } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import UiCharacter from '@/components/UI/UICharacter/UICharacter.svelte';
import UiInventoryItem from '@/components/UI/UIInventoryItem/UIInventoryItem.svelte';
import { showItemInfoModal } from '@/modal/components/ItemInfoModal/show';
import { itemToUIInventoryItemProps } from '@/modal/components/ItemInfoModal/utils/itemToUIInventoryItemProps';
import { globalInfoState } from '@/store/player';
import { livingToUICharacterProps } from '@/utils/livingToUICharacterProps';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));
let items: PublicItem[] = [];
$: {
  if (!globalInfo.living.id) {
    items = [];
  } else {
    items = Server.publicApi.getItemsByType(globalInfo.living.id);
  }
}

$: inventoryItems = items.map((i) =>
  itemToUIInventoryItemProps(i, {
    actions: [
      {
        text: 'Throw away',
        action: () => {
          Server.publicApi.items.throw(i.id, globalInfo.living.id);
          items = Server.publicApi.getItemsByType(globalInfo.living.id);
        },
      },
    ],
  })
);

const statsConfirm = (updatedStats: LivingStats) => {
  globalInfoState.update(() =>
    Server.publicApi.updateStats(globalInfo.living.id, updatedStats)
  );
};

const handleInventoryClick = (type: ItemType) => {
  showItemInfoModal(type);
};

$: props = livingToUICharacterProps(globalInfo.living, {
  equipment: globalInfo.equipment,
  isView: false,
  statsConfirm,
  inventoryClick: handleInventoryClick,
});
</script>

<svelte:head>
  <title>Character</title>
</svelte:head>

<section class="section">
  <div class="container">
    <!-- <div class="h1">{globalInfo.living.name} [{globalInfo.living.lvl}]</div> -->
    <div class="row">
      <div class="col-lg-4">
        <h2 class="h2">Skills</h2>
      </div>
      <div class="col-lg-4">
        <UiCharacter {props} />
      </div>
      <div class="col-lg-4">
        <h2 class="h2">Inventory</h2>
        {#if inventoryItems.length}
          {#each inventoryItems as props}
            <UiInventoryItem {props} />
          {/each}
        {:else}
          no items
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
</style>
