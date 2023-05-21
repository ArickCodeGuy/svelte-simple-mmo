import { writable } from 'svelte/store';
import type { ModalProps } from './types';

export const modalState = writable<ModalProps>(null);

export const closePopup = () => modalState.update(() => null);
