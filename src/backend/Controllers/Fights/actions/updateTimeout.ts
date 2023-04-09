import { FightController } from '..';
import { FIGHT_TURN_TIMEOUT } from '../constants';

export const useUpdateTimeout =
  (fightController: FightController) => (fightInstanceId: number) =>
    fightController.update(fightInstanceId, (v) => ({
      ...v,
      nextTurn: new Date().getTime() + FIGHT_TURN_TIMEOUT,
    }));
