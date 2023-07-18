import type { ServerController } from '../..';

export const useThrowItem =
  (controller: ServerController) => (itemId: number, playerId: number) => {
    controller.itemsController.remove(itemId, playerId);
  };
