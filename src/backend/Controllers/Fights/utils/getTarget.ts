import { randomItemFromArray } from '@/utils/randomItemFromArray';
import type { TeamsMembers } from '../types';
import { getAliveTeamMembers } from './getAliveTeamMembers';

export const getTarget = (
  targets: number[],
  members: TeamsMembers,
  currentTarget?: number
): number => {
  if (currentTarget && members[currentTarget].isAlive) return currentTarget;

  return randomItemFromArray(getAliveTeamMembers(targets, members));
};
