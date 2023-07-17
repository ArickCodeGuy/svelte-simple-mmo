import type { Item, ItemType } from '@/backend/Controllers/Items/types';
import type { ServerController } from '..';
import type { BaseItem } from '@/backend/Controllers/Base';

export const useGetItemsByType =
  (controller: ServerController) =>
  (playerId: number, itemType?: ItemType | undefined): BaseItem<Item>[] => {
    return controller.itemsController
      .getPlayerItems(playerId)
      .map((i) => controller.itemsController.getById(i))
      .filter((i) => !itemType || itemType === i.type);
  };
