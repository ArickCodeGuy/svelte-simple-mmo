import type { FightController } from '..';

export const useFindFightById =
  (fightController: FightController) => (id: number) =>
    fightController.fights.find((fight) => fight.id === id);
