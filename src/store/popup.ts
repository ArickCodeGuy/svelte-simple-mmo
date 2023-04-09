import type { UIPopupProps, UIPopupState } from '@/components/UI/Popup/types';
import { writable } from 'svelte/store';

export const popupState = writable<UIPopupState>({});

export function closePopup() {
  popupState.update(() => ({
    shown: false,
  }));
}

export const showPopup = (props: UIPopupProps) => {
  popupState.update((v) => ({
    close: props.close || closePopup,
    shown: true,
    props,
  }));
};
