import type { BaseItem } from '@/backend/Controllers/Base';
import type { Living } from '@/backend/Controllers/Livings/types';
import type { UIActionButtonProps } from '@/components/UI/UIActionButton/types';
import { showCharacterInfoPopup } from '@/modal/components/CharacterInfoModal/show';

export const livingToUIActionButtonProps = (
  living: BaseItem<Living>
): UIActionButtonProps => ({
  desc: `<b>[${living.lvl}]</b> ${living.name}`,
  actions: [
    {
      f: () => {
        showCharacterInfoPopup(living.id);
      },
      icon: 'information-slab-circle-outline',
    },
  ],
});
