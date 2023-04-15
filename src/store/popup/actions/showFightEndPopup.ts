import type { FightEndDialogProps } from '@/components/Dialogs/types';
import { closePopup, popupState } from '../popup';
import FightEndDialog from '@/components/Dialogs/FightEndDialog.svelte';
import { Server } from '@/backend';
import { globalInfoState } from '@/store/player';

const leaveFight = () => {
  globalInfoState.update((v) => Server.leaveFight(v.living.id)!);
  closePopup();
};

export const showFightEndPopup = (props: FightEndDialogProps) => {
  popupState.update(() => ({
    component: FightEndDialog,
    title: 'Fight end',
    componentProps: {
      ...props,
      leaveClick: leaveFight,
    },
    close: leaveFight,
    isOpen: true,
  }));
};
