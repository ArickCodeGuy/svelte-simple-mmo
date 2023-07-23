import type { UINavigationGroup } from '@/components/UI/Navigation/types';
import { BASE } from '@/constants/base';
import { navigate } from 'svelte-routing';

export const navigation: UINavigationGroup[] = [
  {
    name: 'Main',
    items: [
      {
        name: 'Main',
        action: () => {
          navigate(BASE);
        },
      },
      {
        name: 'Character',
        action: () => {
          navigate(`${BASE}/character`);
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
          navigate(`${BASE}/fight-logs`);
        },
      },
    ],
  },
];
