<script lang="ts">
import { Server } from '@/backend';
import type { PublicItem } from '@/backend/Controllers/Items/types';
import type { GlobalInfo } from '@/backend/Server/types';
import BzCharacter from '@/components/BZ/BZCharacter/BZCharacter.svelte';
import UiInventoryItem from '@/components/UI/UIInventoryItem/UIInventoryItem.svelte';
import { itemToUIInventoryItemProps } from '@/modal/components/ItemInfoModal/utils/itemToUIInventoryItemProps';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: id = globalInfo.living.id;

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
          Server.publicApi.items.throw(globalInfo.living.id, i.id);
          items = Server.publicApi.getItemsByType(globalInfo.living.id);
          globalInfoState.update((v) => Server.publicApi.getState(v.living.id));
        },
      },
    ],
  })
);
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
        <BzCharacter props={{ id }} />
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
