import { Server } from '@/backend';
import { closePopup, modalState } from '@/modal/store';
import { globalInfoState } from '@/store/player';
import FightLogModal from './FightLogModal.svelte';
import type { FightLogModalProps } from './types';
import { myNavigate } from '@/utils/myNavigate';

export const leaveFight = () => {
  globalInfoState.update((v) => Server.publicApi.fight.leave(v.living.id));
  myNavigate('MAIN');
  closePopup();
};

export const showFightLogPopup = (props: FightLogModalProps) => {
  modalState.update(() => ({
    component: FightLogModal,
    title: 'Fight end',
    componentProps: {
      ...props,
    },
    close: props.leaveClick,
  }));
};
