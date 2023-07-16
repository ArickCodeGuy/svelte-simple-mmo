import type { Item } from '@/backend/Controllers/Items/types';
import type { ServerController } from '../..';

export const useGetLivingDrops =
  (controller: ServerController) =>
  (livingId: number): Item[] => {
    const living = controller.livingsController.getById(livingId);
    const res: Item[] = [];

    /**
     * If player drop nothing
     */
    if (living.protoId === 0) {
      return res;
    }

    const livingProto =
      controller.livingsController.livingsProtosController.getById(
        living.protoId
      );

    if (!livingProto.drops) {
      return res;
    }

    livingProto.drops.forEach((drop) => {
      const rand = Math.random();

      if (rand <= drop.dropRate) {
        const itemProto =
          controller.itemsController.itemsProtosController.getById(
            drop.itemProtoId
          );
        const item = controller.itemsController.add(itemProto, 0);
        res.push(item);
      }
    });

    return res;
  };
