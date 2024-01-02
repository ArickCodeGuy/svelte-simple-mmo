import { writable } from 'svelte/store';
import { Server } from '@/backend';
import type { CreateNewPlayerParams } from '@/backend/Server/api/createNewPlayer';
import {
  leaveFight,
  showFightLogPopup,
} from '@/modal/components/FightLogModal/show';

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
    showFightLogPopup({
      fightLogId,
      leaveClick: leaveFight,
    });
  }

  if (globalInfo.fight) {
    clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(() => {
      globalInfoState.update((v) => Server.publicApi.getState(v.living.id)!);
    }, globalInfo.fight.instance.nextTurn - new Date().getTime());
  }
});
