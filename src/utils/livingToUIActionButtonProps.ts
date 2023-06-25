import type { BaseItem } from '@/backend/Controllers/Base';
import type { Living } from '@/backend/Controllers/Livings/types';
import type { UIActionButtonProps } from '@/components/UI/ActionButton/types';
import { showCharacterInfoPopup } from '@/modal/components/CharacterInfoModal/show';
import { livingToUICharacterProps } from './livingToUICharacterProps';

export const livingToUIActionButtonProps = (
  living: BaseItem<Living>
): UIActionButtonProps => ({
  lvl: living.lvl,
  name: living.name,
  chp: living.health.current,
  hp: living.health.max,
  actions: [
    {
      f: () => {
        showCharacterInfoPopup(livingToUICharacterProps(living));
      },
      icon: 'information-slab-circle-outline',
    },
  ],
});
