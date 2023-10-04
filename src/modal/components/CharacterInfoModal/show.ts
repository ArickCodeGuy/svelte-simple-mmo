import { closePopup, modalState } from '../../store';
import UiCharacter from '@/components/UI/UICharacter/UICharacter.svelte';
import type { UICharacterProps } from '@/components/UI/UICharacter/types';

export const showCharacterInfoPopup = (props: UICharacterProps) => {
  modalState.update(() => ({
    component: UiCharacter,
    title: 'Character info',
    componentProps: {
      ...props,
      isView: true,
    },
    close: closePopup,
  }));
};
