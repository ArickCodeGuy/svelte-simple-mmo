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

    livingProto.drops.reduce<Item[]>((res, drop) => {
      const rand = Math.random();

      if (rand <= drop.dropRate) {
        // const itemProto = controller.itemsController.
        // controller.itemsController.add(drop.itemProtoId, 0)
        // res.push()
      }

      return res;
    }, []);

    return res;
  };
