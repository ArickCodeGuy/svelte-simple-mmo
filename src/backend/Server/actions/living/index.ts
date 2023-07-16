import type { ServerController } from '../..';
import { useGetLivingDrops } from './getLivingDrops';

export const useLivingActions = (controller: ServerController) => ({
  getDrops: useGetLivingDrops(controller),
});
