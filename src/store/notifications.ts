import { writable } from 'svelte/store';
import type { Notifications } from './types';
import type { UINotificationProps } from '@/components/UI/UINotification/types';
import idGen from '@/utils/idGen';

const gen = idGen();

export const notifications = writable<Notifications>({
  items: [],
});

export const removeNotification = (id: number): void => {
  notifications.update((v) => {
    const newItems = v.items.filter((i) => i.id !== id);

    return {
      ...v,
      items: newItems,
    };
  });
};

export const pushNotification = (notif: UINotificationProps): void => {
  notifications.update((v) => {
    const id = gen();
    const item = {
      ...notif,
      id,
    };
    const newItems = [item, ...v.items];

    setTimeout(() => {
      removeNotification(id);
    }, 5000);

    return {
      ...v,
      items: newItems,
    };
  });
};
