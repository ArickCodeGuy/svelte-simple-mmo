<script lang="ts">
import type { GlobalInfo } from '@/backend/Server/types';
import UiCharacter from '@/components/UI/Character/UICharacter.svelte';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

$: props = {
  ...globalInfo.living,
};
</script>

<section class="section">
  <div class="container">
    <div class="h1">{globalInfo.living.name} [{globalInfo.living.lvl}]</div>
    <UiCharacter {props} />
  </div>
</section>
