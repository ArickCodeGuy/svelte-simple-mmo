import { writable } from 'svelte/store';
import { Server } from '@/backend';
import type { CreateNewPlayerParams } from '@/backend/Server/api/createNewPlayer';
import { showFightEndPopup } from '@/modal/components/FightEndModal/show';

const newPlayerParams: CreateNewPlayerParams = {
  name: 'admin',
};

let timeoutFunc: number;

export const globalInfoState = writable(
  Server.publicApi.createNewPlayer(newPlayerParams)
);

globalInfoState.subscribe((globalInfo) => {
  if (globalInfo.living.activity === 'FIGHT' && !globalInfo.fight) {
    const logs = globalInfo.living.fightLogs!;
    const fightLogId = logs[logs.length - 1];
    showFightEndPopup({
      fightLogId,
    });
  }

  if (globalInfo.fight) {
    clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(() => {
      globalInfoState.update((v) => Server.publicApi.getState(v.living.id)!);
    }, globalInfo.fight.instance.nextTurn - new Date().getTime());
  }
});

const writeToLocalStorage = <T>(key: string, v: T): void => {
  localStorage.setItem(key, JSON.stringify(v));
};

const getFromLocalStorage = <T>(key: string): T | null => {
  const json = localStorage.getItem(key);

  const v = json ? JSON.parse(json) : (null as T | null);

  return v;
};
