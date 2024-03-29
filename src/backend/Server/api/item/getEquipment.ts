import type { LivingEquipmentType } from '@/backend/Controllers/Livings/types';
import type { ServerController } from '../..';
import type { LivingEquipmentItems } from '../../types';

export const useGetEquipment =
  (controller: ServerController) => (playerId: number) => {
    const player = controller.livingsController.getById(playerId);
    const items: LivingEquipmentItems = {};

    if (player.equipment) {
      (
        Object.entries(player.equipment) as [LivingEquipmentType, number][]
      ).forEach(([place, id]) => {
        items[place] = controller.itemsController.actions.getPublicItem(id);
      });
    }

    return items;
  };
