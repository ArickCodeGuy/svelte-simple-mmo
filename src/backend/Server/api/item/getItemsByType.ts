import type { ItemType } from '@/backend/Controllers/Items/types';
import type { ServerController } from '../..';

export const useGetItemsByType =
  (controller: ServerController) =>
  (playerId: number, itemType?: ItemType | undefined) => {
    return controller.itemsController
      .getPlayerItems(playerId)
      .map((i) => controller.itemsController.actions.getPublicItem(i))
      .filter((i) => !itemType || itemType === i.proto.type);
  };
