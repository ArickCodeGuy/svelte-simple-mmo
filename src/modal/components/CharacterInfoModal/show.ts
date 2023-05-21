import { closePopup, modalState } from '../../store';
import UiCharacter from '@/components/UI/Character/UICharacter.svelte';
import type { UICharacterProps } from '@/components/UI/Character/types';

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
