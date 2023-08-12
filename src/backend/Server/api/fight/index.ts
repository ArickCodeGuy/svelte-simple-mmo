import type { ServerController } from '../..';
import { useAttack } from './attack';
import { useInitFight } from './init';

export const usePublicApiFightActions = (controller: ServerController) => ({
  init: useInitFight(controller),
  attack: useAttack(controller),
});
