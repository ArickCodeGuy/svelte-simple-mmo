import type { FightInstanceTeam, TeamsMembers } from '../types';

/**
 * Filteres array of team members to alive team members
 */
export const getAliveTeamMembers = (
  team: FightInstanceTeam,
  members: TeamsMembers
): FightInstanceTeam => team.filter((i) => members[i]?.isAlive);
