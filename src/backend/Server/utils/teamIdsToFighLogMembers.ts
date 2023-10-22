import type { FightLogMembers } from '@/backend/Controllers/FightLogs/types';
import type { ServerController } from '..';
import { livingToFightLogMember } from '@/backend/Controllers/FightLogs/utils/livingToFightLogMember';

export const teamIdsToFighLogMembers = (
  controller: ServerController,
  ids: number[]
): FightLogMembers =>
  ids.reduce(
    (res, id) => ({
      ...res,
      [id]: livingToFightLogMember(controller.livingsController.getById(id)),
    }),
    {}
  );
