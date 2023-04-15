import type { UIPopupProps } from '@/components/UI/Popup/types';
import { writable } from 'svelte/store';

export const popupState = writable<UIPopupProps>({
  isOpen: false,
});

export const closePopup = () =>
  popupState.update(() => ({
    isOpen: false,
  }));
