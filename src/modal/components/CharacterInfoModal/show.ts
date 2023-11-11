import { closePopup, modalState } from '../../store';
import CharacterInfo from './CharacterInfo.svelte';

export const showCharacterInfoPopup = (livingId: number) => {
  modalState.update(() => ({
    component: CharacterInfo,
    title: 'Character info',
    componentProps: {
      id: livingId,
    },
    close: closePopup,
  }));
};
