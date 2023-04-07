import type { FightController } from '..';
import type { FightInstance } from '../types';

export const useUpdate =
  (fightController: FightController) =>
  (id: number, updater: (f: FightInstance) => FightInstance) => {
    const fightIndex = fightController.findFightIndexById(id);
    const fightInstance = fightController.fights[fightIndex];
    const newFightInstance = updater(fightInstance);

    fightController.fights[fightIndex] = newFightInstance;
    return newFightInstance;
  };
