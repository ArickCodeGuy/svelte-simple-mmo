import { closePopup, modalState } from '@/modal/store';
import ItemInfoModal from './ItemInfoModal.svelte';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';
import type { ItemType } from '@/backend/Controllers/Items/types';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

/**
 * if itemType is undefined will show full inventory
 */
export const showItemInfoModal = (itemType: ItemType | undefined) => {
  modalState.update((v) => ({
    component: ItemInfoModal,
    componentProps: {
      itemType,
    },
    close: closePopup,
  }));
};
