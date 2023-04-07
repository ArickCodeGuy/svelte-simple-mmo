import type { FightController } from '..';

export const useFindFightIndexById =
  (fightController: FightController) => (id: number) =>
    fightController.fights.findIndex((fight) => fight.id === id);
