import { Server } from '@/backend';

export const playerController = {
  get: Server.getLivingState,
  initFight: Server.initFight,
};
