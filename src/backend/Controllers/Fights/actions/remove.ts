import type { FightController } from '..';

export const useRemove = (fightController: FightController) => (id: number) => {
  fightController.fights = fightController.fights.filter(
    (fight) => fight.id !== id
  );
};
