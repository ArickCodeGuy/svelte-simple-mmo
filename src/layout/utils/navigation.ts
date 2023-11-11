import type { UINavigationGroup } from '@/components/UI/UINavigation/types';
import { myNavigate } from '@/utils/myNavigate';

export const navigation: UINavigationGroup[] = [
  {
    name: 'Main',
    items: [
      {
        name: 'Main',
        action: () => {
          myNavigate('MAIN');
        },
      },
      {
        name: 'Character',
        action: () => {
          myNavigate('CHARACTER');
        },
      },
      {
        name: 'MapEdit',
        action: () => {
          myNavigate('MAP_EDIT');
        },
      },
    ],
  },
  {
    name: 'Logs',
    items: [
      {
        name: 'Fight Logs',
        action: () => {
          myNavigate('FIGHT_LOGS');
        },
      },
    ],
  },
];
