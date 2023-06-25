import type { LivingEquipmentType } from '@/backend/Controllers/Livings/types';
import type { ServerController } from '..';
import type { Equipment } from '../types';

export const useGetEquipment =
  (controller: ServerController) => (playerId: number) => {
    const player = controller.livingsController.getById(playerId);
    const items: Equipment = {};

    if (player.equipment) {
      (
        Object.entries(player.equipment) as [LivingEquipmentType, number][]
      ).forEach(([place, id]) => {
        items[place] = controller.itemsController.getById(id);
      });
    }

    return items;
  };
