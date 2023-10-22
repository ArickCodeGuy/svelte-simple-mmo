import type { TeamsMembers } from '@/backend/Controllers/Fights/types';

export const teamIdsToTeamsMembers = (ids: number[]): TeamsMembers =>
  ids.reduce(
    (res, id) => ({
      ...res,
      [id]: {
        id,
        isAlive: true,
      },
    }),
    {}
  );
