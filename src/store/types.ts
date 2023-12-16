import type { UINotificationProps } from '@/components/UI/UINotification/types';

export type Notifications = {
  items: Notification;
};

export type Notification = UINotificationProps & {
  id: number;
};
