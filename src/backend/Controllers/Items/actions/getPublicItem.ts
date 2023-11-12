import type { ItemsController } from '..';
import type { PublicItem } from '../types';

export const useGetPublicItem =
  (controller: ItemsController) =>
  (itemId: number): PublicItem => {
    const item = controller.getById(itemId);

    return {
      ...item,
      proto: controller.itemsProtosController.getById(item.protoId),
    };
  };
