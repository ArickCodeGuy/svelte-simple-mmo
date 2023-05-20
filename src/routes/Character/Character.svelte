<script lang="ts">
import type { ItemType } from '@/backend/Controllers/Items/types';
import type { GlobalInfo } from '@/backend/Server/types';
import UiCharacter from '@/components/UI/Character/UICharacter.svelte';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

const handleInventoryClick = (type: ItemType) => {
  // @@TODO: show popup
};
</script>

<section class="section">
  <div class="container">
    <div class="h1">{globalInfo.living.name} [{globalInfo.living.lvl}]</div>
    <UiCharacter
      props={{
        ...globalInfo.living,
        inventoryClick: handleInventoryClick,
      }}
    />
  </div>
</section>
