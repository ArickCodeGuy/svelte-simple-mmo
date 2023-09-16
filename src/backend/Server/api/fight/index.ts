import type { ServerController } from '../..';
import { useAttack } from './attack';
import { useInitFight } from './init';
import { useLeave } from './leave';

export const usePublicApiFightActions = (controller: ServerController) => ({
  init: useInitFight(controller),
  attack: useAttack(controller),
  leave: useLeave(controller),
});
