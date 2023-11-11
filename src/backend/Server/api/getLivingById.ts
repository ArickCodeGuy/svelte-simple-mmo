import type { BaseItem } from '@/backend/Controllers/Base';
import type { ServerController } from '..';
import { isPlayer } from '@/backend/Controllers/Livings/utils/isPlayer';
import type { ItemProto } from '@/backend/Controllers/Items/ItemsProtos/types';

export const useGetLivingById =
  (controller: ServerController) => (livingId: number) => {
    const living = controller.livingsController.getById(livingId);

    let drops: BaseItem<ItemProto>[] = [];
    if (!isPlayer(living)) {
      const proto =
        controller.livingsController.livingsProtosController.getById(
          living.protoId
        );
      if (proto.drops) {
        drops = proto.drops.map((i) =>
          controller.itemsController.itemsProtosController.getById(
            i.itemProtoId
          )
        );
      }
    }

    return {
      living,
      drops,
    };
  };
