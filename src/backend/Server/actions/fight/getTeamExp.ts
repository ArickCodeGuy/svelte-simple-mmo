import type { TeamMember } from '@/backend/Controllers/Fights/types';
import { ServerController } from '../..';

export const useGetTeamExp =
  (serverController: ServerController) =>
  (team: TeamMember[]): number => {
    return team.reduce(
      (exp, member) =>
        exp + serverController.livingsController.getById(member.id).expGives,
      0
    );
  };
