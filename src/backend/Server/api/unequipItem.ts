import type {
  LivingEquipment,
  LivingEquipmentType,
} from '@/backend/Controllers/Livings/types';
import type { ServerController } from '..';
import { isItemEquipable } from '@/backend/Controllers/Items/utils/isItemEquipable';

export const useUnequipItem =
  (controller: ServerController) => (playerId: number, itemId: number) => {
    const item = controller.itemsController.getById(itemId);
    if (!isItemEquipable(item)) {
      controller.publicApi.getState(playerId);
    }

    const place = item.type as LivingEquipmentType;

    controller.livingsController.update(playerId, (v) => {
      const equipment: LivingEquipment = v.equipment ? { ...v.equipment } : {};
      delete equipment[place];

      return {
        ...v,
        equipment,
      };
    });

    return controller.publicApi.getState(playerId);
  };
