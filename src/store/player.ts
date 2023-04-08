import { writable } from 'svelte/store';
import { Server } from '@/backend';

const { id } = Server.livingsController.createNewPlayer('admin');
let timeoutFunc: number;

export const globalInfoState = writable(Server.getLivingState(id));

globalInfoState.subscribe((globalInfo) => {
  if (globalInfo.fightInstance) {
    clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(() => {
      globalInfoState.update((v) => Server.getLivingState(v.living.id)!);
    }, globalInfo.fightInstance.nextTurn - new Date().getTime());
  }
});
