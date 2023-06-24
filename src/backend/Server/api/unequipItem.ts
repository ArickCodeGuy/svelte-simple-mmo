import type {
  LivingEquipment,
  LivingEquipmentType,
} from '@/backend/Controllers/Livings/types';
import type { ServerController } from '..';

export const useUnequipItem =
  (controller: ServerController) =>
  (playerId: number, place: LivingEquipmentType) => {
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
