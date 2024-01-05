import { Server } from '@/backend';
import type { CellActionsAction } from '../types';
import { globalInfoState } from '@/store/player';
import type { GlobalInfo } from '@/backend/Server/types';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

const fountainCellActions: CellActionsAction[] = [
  {
    name: 'Drink',
    action: () => {
      if (!globalInfo) return;

      Server.publicApi.cellActions.fountain.drink(globalInfo.living.id);
    },
  },
  {
    name: 'Toss a coin',
    action: () => {
      if (!globalInfo || !globalInfo.living.gold) return;

      Server.publicApi.cellActions.fountain.tossACoin(globalInfo.living.id);
    },
  },
];

export default fountainCellActions;
