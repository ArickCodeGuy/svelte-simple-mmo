import { writable } from 'svelte/store';
import { Server } from '@/backend';
import { showFightEndPopup } from './popup/actions/showFightEndPopup';
import type { CreateNewPlayerParams } from '@/backend/Server/api/createNewPlayer';

const newPlayerParams: CreateNewPlayerParams = {
  name: 'admin',
};

let timeoutFunc: number;

export const globalInfoState = writable(
  Server.publicApi.createNewPlayer(newPlayerParams)
);

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
