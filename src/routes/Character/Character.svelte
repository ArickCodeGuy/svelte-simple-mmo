<script lang="ts">
import type { LivingEquipment } from '@/backend/Controllers/Livings/types';
import type { GlobalInfo } from '@/backend/Server/types';
import UiCharacter from '@/components/UI/Character/UICharacter.svelte';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

/**
 * @returns '{ [x: keyof LivingEquipment]: imageUrl }'
 */
const equipedItemsImages = (equipment: LivingEquipment | undefined) =>
  (Object.entries(equipment || {}) as [keyof LivingEquipment, number][]).reduce(
    (res, [equipmentType, itemId]) => ({
      ...res,
      [equipmentType]: itemsDictionary[itemId],
    }),
    {}
  );

/**
 * { [item.id]: item.image }
 */
$: itemsDictionary = (globalInfo.items || []).reduce<Record<string, string>>(
  (res, i) => ({
    ...res,
    [i.id]: i.img,
  }),
  {}
);

$: items = equipedItemsImages(globalInfo.living.equipment);

$: props = {
  ...globalInfo.living,
  items,
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
