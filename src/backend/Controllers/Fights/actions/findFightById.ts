import type { FightController } from '..';

export const useFindFightById =
  (fightController: FightController) => (id: number) => {
    const fight = fightController.fights.find((fight) => fight.id === id);
    if (!fight) throw new Error(`Fight with id ${id} not found`);

    return fight;
  };
