import type { FightTurnAction } from '@/backend/Controllers/FightLogs/types';
import { ServerController } from '../..';
import { fightAttackToFightTurnLog } from '@/backend/Controllers/FightLogs/utils/fightAttackToFightTurnLog';

export const useFightLogPushTurnAction =
  (serverController: ServerController) =>
  (fightLogId: number, fightAttack: FightTurnAction) => {
    serverController.fightLogController.update(fightLogId, (v) => {
      const turnIndex = v.turns.length > 0 ? v.turns.length - 1 : 0;
      let lastTurn = v.turns[turnIndex] || [];
      lastTurn = [...lastTurn, fightAttackToFightTurnLog(fightAttack)];

      const turns = [...v.turns];
      turns[turnIndex] = lastTurn;

      return {
        ...v,
        turns,
      };
    });
  };
