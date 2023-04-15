import { LivingsController } from '..';
import { LIVING_LEVELS } from '../constants';

export const useUpdateExp =
  (livingsController: LivingsController) => (id: number, exp: number) => {
    livingsController.update(id, (v) => {
      const expToLvlUp = LIVING_LEVELS[v.lvl].exp;
      const updatedExp = v.exp + exp;
      let lvl = v.lvl;
      let statPoints = v.statPoints;

      if (expToLvlUp < updatedExp) {
        lvl += 1;
        statPoints += LIVING_LEVELS[v.lvl].statPoints;
      }

      return {
        ...v,
        statPoints,
        lvl,
        exp,
      };
    });
  };
