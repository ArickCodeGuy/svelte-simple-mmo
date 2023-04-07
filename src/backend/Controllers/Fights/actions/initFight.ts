import type { FightController } from '..';
import type { FightInstance, Targets } from '../types';

export const useInitFight =
  (fightController: FightController) =>
  (teamOne: number[], teamTwo: number[]) => {
    const fightInstance: FightInstance = {
      teamOne,
      teamTwo,
      targets: teamsToTargets(teamOne, teamTwo),
    };

    const id = fightController.add(fightInstance);
    return fightController.getById(id);
  };

export const teamToTargets = (teamOne: number[], teamTwo: number[]) =>
  teamOne.reduce<Targets>(
    (result, member) => ({
      ...result,
      [member]: teamTwo[Math.floor(Math.random() * teamTwo.length)],
    }),
    {}
  );

export const teamsToTargets = (teamOne: number[], teamTwo: number[]) => ({
  ...teamToTargets(teamOne, teamTwo),
  ...teamToTargets(teamTwo, teamOne),
});
