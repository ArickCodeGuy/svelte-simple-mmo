import type { BaseItem } from '@/backend/Controllers/Base';
import type { Living } from '@/backend/Controllers/Livings/types';
import type { UIActionButtonProps } from '@/components/UI/ActionButton/types';
import UiCharacter from '@/components/UI/Character/UICharacter.svelte';
import { showPopup } from '@/store/popup';

export const livingToUIActionButtonProps = (
  living: BaseItem<Living>
): UIActionButtonProps => ({
  lvl: living.lvl,
  name: living.name,
  chp: living.chp,
  hp: living.stats.hp,
  actions: [
    {
      f: () => {
        showPopup({
          ...living,
          component: UiCharacter,
        });
      },
      icon: 'information-slab-circle-outline',
    },
  ],
});
