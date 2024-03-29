import { ServerController } from '..';
import { useGetLivingState } from './getLivingState';
import { useTryDirectionalMove } from './tryDirectionalMove';
import { useUpdateStats } from './updateStats';
import { useInitFight } from './fight/init';
import { useCreateNewPlayer } from './createNewPlayer';
import { useDictionary } from './dictionary';
import { useGetItemsByType } from './item/getItemsByType';
import { useGetFightLog } from './getFightLog';
import { usePublicApiItemActions } from './item';
import { useGetFightLogs } from './getFightLogs';
import { usePublicApiFightActions } from './fight';
import { useCellActions } from './cellActions';
import { useGetLivingById } from './getLivingById';

export const usePublicApi = (controller: ServerController) => ({
  move: useTryDirectionalMove(controller),
  updateStats: useUpdateStats(controller),
  getState: useGetLivingState(controller),
  initFight: useInitFight(controller),
  createNewPlayer: useCreateNewPlayer(controller),
  dictionary: useDictionary(controller),
  getItemsByType: useGetItemsByType(controller),
  getFightLog: useGetFightLog(controller),
  getFightLogs: useGetFightLogs(controller),
  getLivingById: useGetLivingById(controller),

  items: usePublicApiItemActions(controller),
  fight: usePublicApiFightActions(controller),
  cellActions: useCellActions(controller),
});
