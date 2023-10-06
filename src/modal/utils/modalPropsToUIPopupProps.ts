import type { UIPopupProps } from '@/components/UI/UIPopup/types';
import type { ModalProps } from '../types';

export const modalPropsToUIPopupProps = (props: ModalProps): UIPopupProps => ({
  component: props?.component,
  componentProps: props?.componentProps,
  close: props?.close,
  isOpen: props ? true : false,
});
