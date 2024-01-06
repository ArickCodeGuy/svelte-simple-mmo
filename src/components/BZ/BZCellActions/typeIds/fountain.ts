import { Server } from '@/backend';
import { globalInfoState } from '@/store/player';
import type { GlobalInfo } from '@/backend/Server/types';
import type { UICellActionsAction } from '@/components/UI/UICellActions/types';
import { notificationsActions } from '@/store/notifications';

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

const fountainCellActions: UICellActionsAction[] = [
  {
    name: 'Drink',
    action: () => {
      if (!globalInfo) return;

      Server.publicApi.cellActions.fountain.drink(globalInfo.living.id);

      notificationsActions.pushNotification({
        title: "You're felling refreshed",
        type: 'success',
      });
    },
  },
  {
    name: 'Toss a coin',
    action: () => {
      if (!globalInfo || !globalInfo.living.gold) {
        notificationsActions.pushNotification({
          title: 'I wish i had a coin... You mumbled to yourself',
        });
        return;
      }

      Server.publicApi.cellActions.fountain.tossACoin(globalInfo.living.id);

      notificationsActions.pushNotification({
        title:
          'You see a coin slowly drowning to the bottom of a fountain as it created small circly waves around',
        type: 'success',
      });
    },
  },
];

export default fountainCellActions;
