import type { ServerController } from '../..';

export const useThrowItem =
  (controller: ServerController) => (playerId: number, itemId: number) => {
    const player = controller.livingsController.getById(playerId);
    const item = controller.itemsController.actions.getPublicItem(itemId);

    // if equpped remove from equipped
    if (
      player.equipment &&
      item.proto.type !== 'other' &&
      player.equipment[item.proto.type]
    ) {
      controller.livingsController.actions.items.remove(
        playerId,
        itemId,
        item.proto.type
      );
    }

    controller.itemsController.remove(itemId, playerId);
  };
