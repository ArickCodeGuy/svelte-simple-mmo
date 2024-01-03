import type { ServerController } from '../..';
import type { GlobalInfo } from '../../types';
import { isPlayerCanEquipItem } from '../../utils/isPlayerCanEquipItem';

export const useEquipItem =
  (controller: ServerController) =>
  (playerId: number, itemId: number): GlobalInfo => {
    const item = controller.itemsController.actions.getPublicItem(itemId);
    const player = controller.livingsController.getById(playerId);

    if (isPlayerCanEquipItem(player, item)) {
      controller.livingsController.actions.items.add(
        playerId,
        itemId,
        item.proto.type
      );
    }

    return controller.publicApi.getState(playerId);
  };
