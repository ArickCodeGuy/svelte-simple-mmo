import type { ServerController } from '../..';
import { isItemEquipable } from '@/backend/Controllers/Items/utils/isItemEquipable';

export const useUnequipItem =
  (controller: ServerController) => (playerId: number, itemId: number) => {
    const item = controller.itemsController.actions.getPublicItem(itemId);
    if (!isItemEquipable(item)) {
      controller.publicApi.getState(playerId);
    }

    controller.livingsController.actions.items.remove(
      playerId,
      itemId,
      item.proto.type
    );

    return controller.publicApi.getState(playerId);
  };
