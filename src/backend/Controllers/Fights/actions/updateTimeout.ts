import { FightController } from '..';
import { FIGHT_TURN_TIMEOUT } from '../constants';

export const useUpdateTimeout =
  (fightController: FightController) => (fightInstanceId: number) =>
    fightController.update(fightInstanceId, (v) => {
      const newState = {
        ...v,
        nextTurn: new Date().getTime() + FIGHT_TURN_TIMEOUT,
      };
      const members = { ...v.members };
      for (const key in members) {
        const member = members[key];
        members[key] = {
          ...member,
          hasAttacked: false,
        };
      }
      newState.members = members;

      return newState;
    });
