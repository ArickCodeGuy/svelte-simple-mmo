import type { UIPopupProps, UIPopupState } from '@/components/UI/Popup/types';
import { writable } from 'svelte/store';

export const popupState = writable<UIPopupState>({
  close,
});

function close() {
  popupState.update(({ close }) => ({
    shown: false,
    close,
  }));
}

export const showPopup = (props: UIPopupProps) => {
  popupState.update((v) => ({
    ...v,
    shown: true,
    props,
  }));
};
