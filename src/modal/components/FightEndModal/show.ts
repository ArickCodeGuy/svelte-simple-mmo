import { Server } from '@/backend';
import { closePopup, modalState } from '@/modal/store';
import { globalInfoState } from '@/store/player';
import FightEndModal from './FightEndModal.svelte';
import type { FightEndModalProps } from './types';
import { myNavigate } from '@/utils/myNavigate';

const leaveFight = () => {
  globalInfoState.update((v) => Server.publicApi.fight.leave(v.living.id));
  myNavigate('MAIN');
  closePopup();
};

export const showFightEndPopup = (props: FightEndModalProps) => {
  modalState.update(() => ({
    component: FightEndModal,
    title: 'Fight end',
    componentProps: {
      ...props,
      leaveClick: leaveFight,
    },
    close: leaveFight,
  }));
};
