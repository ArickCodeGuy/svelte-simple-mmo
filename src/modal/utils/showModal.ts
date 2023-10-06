import { modalState } from '../store';
import type { ModalProps } from '../types';

export const showModal = (props: ModalProps) => {
  modalState.update(() => props);
};
