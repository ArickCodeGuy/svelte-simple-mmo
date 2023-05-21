import type { UIPopupProps } from '@/components/UI/Popup/types';
import type { ModalProps } from '../types';

export const modalPropsToUIPopupProps = (props: ModalProps): UIPopupProps => ({
  component: props?.component,
  componentProps: props?.componentProps,
  close: props?.close,
  isOpen: props ? true : false,
});
