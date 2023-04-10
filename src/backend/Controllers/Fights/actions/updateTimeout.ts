import { FightController } from '..';
import { FIGHT_TURN_TIMEOUT } from '../constants';

export const useUpdateTimeout =
  (fightController: FightController) => (fightInstanceId: number) => {
    if (!fightController.getById(fightInstanceId)) return;

    return fightController.update(fightInstanceId, (v) => ({
      ...v,
      nextTurn: new Date().getTime() + FIGHT_TURN_TIMEOUT,
    }));
  };
