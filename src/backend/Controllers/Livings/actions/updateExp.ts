import { LivingsController } from '..';
import { LIVING_LEVELS } from '../constants';

export const useUpdateExp =
  (livingsController: LivingsController) => (id: number, exp: number) => {
    livingsController.update(id, (v) => {
      const expToLvlUp = LIVING_LEVELS[v.lvl].exp;
      const updatedExp = v.exp + exp;
      let lvl = v.lvl;
      let points = v.points;

      if (expToLvlUp < updatedExp) {
        lvl += 1;
        points += LIVING_LEVELS[v.lvl].points;
      }

      return {
        ...v,
        points,
        lvl,
        exp,
      };
    });
  };
