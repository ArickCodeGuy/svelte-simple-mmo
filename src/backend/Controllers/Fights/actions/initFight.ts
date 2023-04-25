import type { FightController } from '..';
import { FIGHT_TURN_TIMEOUT } from '../constants';
import type { FightInstance, Targets } from '../types';

export const useInitFight =
  (fightController: FightController) =>
  (teamOne: number[], teamTwo: number[], logId: number) => {
    const fightInstance: FightInstance = {
      teamOne: teamOne.map((id) => ({ id, isAlive: true })),
      teamTwo: teamTwo.map((id) => ({ id, isAlive: true })),
      targets: teamsToTargets(teamOne, teamTwo),
      nextTurn: new Date().getTime() + FIGHT_TURN_TIMEOUT,
      logId,
    };

    return fightController.add(fightInstance);
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
