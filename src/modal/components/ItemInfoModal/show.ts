import { modalState } from '@/modal/store';
import type { ItemInfoModalProps } from './types';
import ItemInfoModal from './ItemInfoModal.svelte';

export const showItemInfoModal = (props: ItemInfoModalProps) => {
  modalState.update((v) => ({
    component: ItemInfoModal,
    componentProps: {
      items: [],
    },
  }));
};
