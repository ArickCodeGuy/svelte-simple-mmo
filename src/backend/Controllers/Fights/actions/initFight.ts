import type { FightController } from '..';
import type { FightInstance, Target, Targets } from '../types';

export const useInitFight =
  (fightController: FightController) =>
  (teamOne: number[], teamTwo: number[]): FightInstance => {
    const fightInstance: FightInstance = {
      id: fightController.idGen(),
      teamOne,
      teamTwo,
      targets: teamsToTargets(teamOne, teamTwo),
    };
    fightController.fights.push(fightInstance);
    return fightInstance;
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
