import type { TeamMember } from '@/backend/Controllers/Fights/types';
import { ServerController } from '../..';

export const useGetTeamExp =
  (serverController: ServerController) =>
  (teamIds: number[]): number => {
    return teamIds.reduce(
      (exp, member) =>
        exp + serverController.livingsController.getById(member).expGives,
      0
    );
  };
