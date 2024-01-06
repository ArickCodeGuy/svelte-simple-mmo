export type UINotificationProps = {
  title: string;
  text?: string;
  type?: 'text' | 'error' | 'warn' | 'success';
  timeout?: number;
};
