import type {
  LivingEquipment,
  LivingEquipmentType,
} from '@/backend/Controllers/Livings/types';
import type { ServerController } from '..';
import type { GlobalInfo } from '../types';
import { isPlayerCanEquipItem } from '../utils/isPlayerCanEquipItem';

export const equipItem =
  (contorller: ServerController) =>
  (playerId: number, itemId: number): GlobalInfo => {
    // @@TODO
    const item = contorller.itemsController.getById(itemId);
    const player = contorller.livingsController.getById(playerId);

    if (isPlayerCanEquipItem(player, item)) {
      contorller.livingsController.update(playerId, (v) => {
        const equipment: LivingEquipment = v.equipment
          ? { ...v.equipment }
          : {};

        equipment[item.type as LivingEquipmentType] = item.id;

        return {
          ...v,
          equipment,
        };
      });
    }

    return contorller.publicApi.getState(playerId);
  };
