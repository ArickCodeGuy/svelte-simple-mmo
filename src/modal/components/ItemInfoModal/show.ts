import { closePopup, modalState } from '@/modal/store';
import type { ItemInfoModalProps } from './types';
import ItemInfoModal from './ItemInfoModal.svelte';
import type { GlobalInfo } from '@/backend/Server/types';
import { globalInfoState } from '@/store/player';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

export const showItemInfoModal = (props: ItemInfoModalProps) => {
  modalState.update((v) => ({
    component: ItemInfoModal,
    componentProps: {
      items: globalInfo?.items?.filter((i) => i.type === props.type),
    },
    close: closePopup,
  }));
};
