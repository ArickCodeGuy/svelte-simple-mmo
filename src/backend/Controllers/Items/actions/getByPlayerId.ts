import type { ItemsController } from '..';

export const useGetByPlayerId =
  (controller: ItemsController) => (playerId: number) => {
    // @@TODO: bad
    // @@TODO: items getByPlayerId type filter
    return controller.getState().filter((i) => i.playerId === playerId);
  };
