import type { Item } from '@/backend/Controllers/Items/types';
import type { ServerController } from '../..';
import type { BaseItem } from '@/backend/Controllers/Base';
import { isPlayer } from '@/backend/Controllers/Livings/utils/isPlayer';

export const useGetLivingDrops =
  (controller: ServerController) =>
  (livingId: number): BaseItem<Item>[] => {
    const living = controller.livingsController.getById(livingId);
    const res: BaseItem<Item>[] = [];

    /**
     * If player drop nothing
     */
    if (isPlayer(living)) {
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
        const item = controller.itemsController.add(drop.itemProtoId, 0);
        res.push(item);
      }
    });

    return res;
  };
