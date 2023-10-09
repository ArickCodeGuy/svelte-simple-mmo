import { modalState } from '../store';
import type { ModalProps } from '../types';

export const showModal = <T = unknown>(props: ModalProps<T>) => {
  modalState.update(() => props);
};
