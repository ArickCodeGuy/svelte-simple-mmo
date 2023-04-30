import type { Targets } from '../types';

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
