import { writable } from 'svelte/store';
import { Server } from '@/backend';
import { closePopup, showPopup } from './popup';

const { id } = Server.livingsController.createNewPlayer('admin');
let timeoutFunc: number;

export const globalInfoState = writable(Server.getLivingState(id));

globalInfoState.subscribe((globalInfo) => {
  if (globalInfo.living.activity === 'FIGHT' && !globalInfo.fight) {
    const close = () => {
      globalInfoState.update(() => Server.leaveFight(id));
      closePopup();
    };
    showPopup({
      title: 'FIGHT END',
      id: globalInfo.living.id,
      close,
      actions: [
        {
          f: close,
          content: 'Leave fight',
        },
      ],
    });
  }

  if (globalInfo.fight) {
    clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(() => {
      globalInfoState.update((v) => Server.getLivingState(v.living.id)!);
    }, globalInfo.fight.instance.nextTurn - new Date().getTime());
  }
});
