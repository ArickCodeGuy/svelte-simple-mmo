import { writable } from 'svelte/store';
import { Server } from '@/backend';
import { showFightEndPopup } from './popup/actions/showFightEndPopup';

const { id } = Server.livingsController.createNewPlayer('admin');
let timeoutFunc: number;

export const globalInfoState = writable(Server.publicApi.getState(id));

globalInfoState.subscribe((globalInfo) => {
  if (globalInfo.living.activity === 'FIGHT' && !globalInfo.fight) {
    showFightEndPopup({});
  }

  if (globalInfo.fight) {
    clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(() => {
      globalInfoState.update((v) => Server.publicApi.getState(v.living.id)!);
    }, globalInfo.fight.instance.nextTurn - new Date().getTime());
  }
});
