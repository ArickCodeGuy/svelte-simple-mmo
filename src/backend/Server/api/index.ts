import { ServerController } from '..';
import { useFightLeave } from '../actions/fight/leave';
import { useGetLivingState } from './getLivingState';
import { useTryDirectionalMove } from './tryDirectionalMove';
import { useUpdateStats } from './updateStats';
import { useInitFight } from './initFight';
import { useCreateNewPlayer } from './createNewPlayer';
import { useEquipItem } from './item/equip';
import { useUnequipItem } from './item/unequipItem';
import { useGetEquipment } from './item/getEquipment';
import { useDictionary } from './dictionary';
import { useGetItemsByType } from './item/getItemsByType';
import { useGetFightLog } from './getFightLog';
import { usePublicApiItemActions } from './item';
import { useGetFightLogs } from './getFightLogs';

export const usePublicApi = (controller: ServerController) => ({
  move: useTryDirectionalMove(controller),
  updateStats: useUpdateStats(controller),
  getState: useGetLivingState(controller),
  leaveFight: useFightLeave(controller),
  initFight: useInitFight(controller),
  createNewPlayer: useCreateNewPlayer(controller),
  dictionary: useDictionary(controller),
  getItemsByType: useGetItemsByType(controller),
  getFightLog: useGetFightLog(controller),
  getFightLogs: useGetFightLogs(controller),

  items: usePublicApiItemActions(controller),
});
