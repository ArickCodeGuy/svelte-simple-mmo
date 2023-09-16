import type { FightTurnAction } from '@/backend/Controllers/FightLogs/types';
import { ServerController } from '../..';
import { fightAttackToFightTurnLog } from '@/backend/Controllers/FightLogs/utils/fightAttackToFightTurnLog';

export const useFightLogPushTurnAction =
  (serverController: ServerController) =>
  (fightLogId: number, fightAttack: FightTurnAction) => {
    serverController.fightLogController.update(fightLogId, (v) => {
      let lastTurn = v.turns[v.turns.length - 1] || [];
      lastTurn = [...lastTurn, fightAttackToFightTurnLog(fightAttack)];

      const turns = [...v.turns];
      turns[turns.length - 1] = lastTurn;

      return {
        ...v,
        turns,
      };
    });
  };
