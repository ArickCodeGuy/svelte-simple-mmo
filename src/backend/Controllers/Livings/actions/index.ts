import type { LivingsController } from '..';
import { useCreateNewPlayer } from './createNewPlayer';
import { useCreateNpc } from './createNpc';
import { useDirectionalMove } from './directionalMove';
import { useAddItem } from './items/add';
import { useRemoveItem } from './items/remove';
import { useUpdateCurrentHealth } from './updateCurrentHealth';
import { useUpdateExp } from './updateExp';
import { useUpdateStats } from './updateStats';

export const useActions = (controller: LivingsController) => ({
  create: {
    npc: useCreateNpc(controller),
    player: useCreateNewPlayer(controller),
  },
  directionalMove: useDirectionalMove(controller),
  updateCurrentHealth: useUpdateCurrentHealth(controller),
  updateExp: useUpdateExp(controller),
  updateStats: useUpdateStats(controller),
  items: {
    remove: useRemoveItem(controller),
    add: useAddItem(controller),
  },
});
