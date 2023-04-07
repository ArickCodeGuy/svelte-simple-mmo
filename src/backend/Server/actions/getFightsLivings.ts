import type { Living } from '@/backend/Controllers/Livings/types';
import type { ServerController } from '..';

/**
 * @returns Record<fightInstanceId, Record<livingId, Living>>
 */
export const useGetFightsLivings = (serverController: ServerController) => () =>
  serverController.fightController
    .getState()
    .reduce<Record<string, Record<string, Living>>>(
      (res, fight) => ({
        ...res,
        [fight.id]: [...fight.teamOne, ...fight.teamTwo].reduce<
          Record<string, Living>
        >(
          (res, fightMemberId) => ({
            ...res,
            [fightMemberId]: serverController.livingsController.getById,
          }),
          {}
        ),
      }),
      {}
    );
