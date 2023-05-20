import { ServerController } from '..';
import { useFightLeave } from '../actions/fight/leave';
import { useGetLivingState } from './getLivingState';
import { useTryDirectionalMove } from './tryDirectionalMove';
import { useUpdateStats } from './updateStats';
import { useInitFight } from './initFight';
import { useCreateNewPlayer } from './createNewPlayer';

export const usePublicApi = (serverController: ServerController) => ({
  move: useTryDirectionalMove(serverController),
  updateStats: useUpdateStats(serverController),
  getState: useGetLivingState(serverController),
  leaveFight: useFightLeave(serverController),
  initFight: useInitFight(serverController),
  createNewPlayer: useCreateNewPlayer(serverController),
});
