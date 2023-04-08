import { writable } from 'svelte/store';
import { Server } from '@/backend';
import { showPopup } from './popup';

const { id } = Server.livingsController.createNewPlayer('admin');
let timeoutFunc: number;

export const globalInfoState = writable(Server.getLivingState(id));

globalInfoState.subscribe((globalInfo) => {
  if (globalInfo.living.activity === 'FIGHT' && !globalInfo.fight) {
    showPopup({
      title: 'FIGHT END',
      content: '',
    });
  }

  if (globalInfo.fight) {
    clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(() => {
      globalInfoState.update((v) => Server.getLivingState(v.living.id)!);
    }, globalInfo.fight.instance.nextTurn - new Date().getTime());
  }
});
