import type { CharacterInfoDialogProps } from '@/components/Dialogs/types';
import { closePopup, popupState } from '../popup';
import CharacterInfoDialog from '@/components/Dialogs/CharacterInfoDialog.svelte';

export const showCharacterInfoPopup = (props: CharacterInfoDialogProps) => {
  popupState.update(() => ({
    component: CharacterInfoDialog,
    title: 'Character info',
    componentProps: props,
    close: closePopup,
    isOpen: true,
  }));
};
