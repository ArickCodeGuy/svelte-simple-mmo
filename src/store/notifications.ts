import { writable } from 'svelte/store';
import type { Notifications } from './types';
import type { UINotificationProps } from '@/components/UI/UINotification/types';
import idGen from '@/utils/idGen';

const gen = idGen();

export const notificationsStore = writable<Notifications>({
  items: [],
});

const removeNotification = (id: number): void => {
  notificationsStore.update((v) => {
    const newItems = v.items.filter((i) => i.id !== id);

    return {
      ...v,
      items: newItems,
    };
  });
};

const pushNotification = (notif: UINotificationProps): void => {
  notificationsStore.update((v) => {
    const id = gen();
    const timeout = notif.timeout || 5000;
    const item = {
      ...notif,
      id,
      timeout,
    };
    const newItems = [item, ...v.items];

    setTimeout(() => {
      removeNotification(id);
    }, timeout);

    return {
      ...v,
      items: newItems,
    };
  });
};

export const notificationsActions = {
  pushNotification,
  removeNotification,
};
