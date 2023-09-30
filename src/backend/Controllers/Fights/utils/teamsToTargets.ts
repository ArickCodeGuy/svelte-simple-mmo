import type { FightInstanceTeam, Targets, TeamsMembers } from '../types';
import { getTarget } from './getTarget';

export const teamToTargets = (
  teamOne: FightInstanceTeam,
  teamTwo: FightInstanceTeam,
  members: TeamsMembers
): Targets =>
  teamOne.reduce<Targets>(
    (result, member) => ({
      ...result,
      [member]: getTarget(teamTwo, members),
    }),
    {}
  );

export const teamsToTargets = (
  teamOne: FightInstanceTeam,
  teamTwo: FightInstanceTeam,
  members: TeamsMembers
): Targets => ({
  ...teamToTargets(teamOne, teamTwo, members),
  ...teamToTargets(teamTwo, teamOne, members),
});
