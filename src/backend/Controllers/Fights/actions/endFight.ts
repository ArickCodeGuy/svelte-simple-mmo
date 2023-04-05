import type { FightController } from '..';

export const useEndFight =
  (fightController: FightController) => (id: number) => {
    fightController.fights = fightController.fights.filter(
      (fight) => fight.id !== id
    );
  };
