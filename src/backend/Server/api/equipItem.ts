import type { ServerController } from '..';
import type { GlobalInfo } from '../types';

export const equipItem =
  (contorller: ServerController) =>
  (playerId: number, itemId: number): GlobalInfo => {
    // @@TODO
    const item = contorller.itemsController.getById(itemId);
    const player = contorller.livingsController.getById(playerId);

    return contorller.publicApi.getState(playerId);
  };
