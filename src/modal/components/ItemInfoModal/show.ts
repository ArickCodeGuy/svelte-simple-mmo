import { closePopup, modalState } from '@/modal/store';
import ItemInfoModal from './ItemInfoModal.svelte';
import type { ItemType } from '@/backend/Controllers/Items/types';

/**
 * if itemType is undefined will show full inventory
 */
export const showItemInfoModal = (itemType: ItemType | undefined) => {
  modalState.update(() => ({
    component: ItemInfoModal,
    componentProps: {
      itemType,
    },
    close: closePopup,
  }));
};
