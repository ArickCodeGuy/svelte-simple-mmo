import { closePopup, modalState } from '../../store';
import CharacterInfoModal from './CharacterInfoModal.svelte';

export const showCharacterInfoPopup = (livingId: number) => {
  modalState.update(() => ({
    component: CharacterInfoModal,
    title: 'Character info',
    componentProps: {
      id: livingId,
    },
    close: closePopup,
  }));
};
