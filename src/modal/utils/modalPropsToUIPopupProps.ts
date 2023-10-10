import type { UIPopupProps } from '@/components/UI/UIPopup/types';
import type { ModalProps } from '../types';
import { closePopup } from '../store';

export const modalPropsToUIPopupProps = (props: ModalProps): UIPopupProps => ({
  title: props?.title,
  component: props?.component,
  componentProps: props?.componentProps,
  close: props?.close ? props.close : closePopup,
  isOpen: props ? true : false,
});
