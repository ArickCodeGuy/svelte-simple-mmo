import { ServerController } from '..';
import { useFightLeave } from '../actions/fight/leave';
import { useGetLivingState } from './getLivingState';
import { useTryDirectionalMove } from './tryDirectionalMove';
import { useUpdateStats } from './updateStats';
import { useInitFight } from './initFight';
import { useCreateNewPlayer } from './createNewPlayer';
import { useEquipItem } from './equipItem';
import { useUnequipItem } from './unequipItem';
import { useGetEquipment } from './getEquipment';
import { useDictionary } from './dictionary';
import { useGetItemsByType } from './getItemsByType';

export const usePublicApi = (controller: ServerController) => ({
  move: useTryDirectionalMove(controller),
  updateStats: useUpdateStats(controller),
  getState: useGetLivingState(controller),
  leaveFight: useFightLeave(controller),
  initFight: useInitFight(controller),
  createNewPlayer: useCreateNewPlayer(controller),
  dictionary: useDictionary(controller),
  getItemsByType: useGetItemsByType(controller),

  equipItem: useEquipItem(controller),
  unequipItem: useUnequipItem(controller),
  getEquipment: useGetEquipment(controller),
});
