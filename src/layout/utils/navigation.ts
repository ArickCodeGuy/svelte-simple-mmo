import type { UINavigationGroup } from '@/components/UI/Navigation/types';
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
