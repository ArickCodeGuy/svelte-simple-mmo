import type { BaseItem } from '@/backend/Controllers/Base';
import type { Living } from '@/backend/Controllers/Livings/types';
import type { UIActionButtonProps } from '@/components/UI/ActionButton/types';
import { showCharacterInfoPopup } from '@/modal/components/CharacterInfoModal/show';

export const livingToUIActionButtonProps = (
  living: BaseItem<Living>
): UIActionButtonProps => ({
  lvl: living.lvl,
  name: living.name,
  chp: living.computedStats.currentHealth,
  hp: living.computedStats.health,
  actions: [
    {
      f: () => {
        showCharacterInfoPopup(living);
      },
      icon: 'information-slab-circle-outline',
    },
  ],
});
