export type UINotificationProps = {
  title: string;
  text?: string;
  type?: 'text' | 'error' | 'warn';
  timeout?: number;
};
