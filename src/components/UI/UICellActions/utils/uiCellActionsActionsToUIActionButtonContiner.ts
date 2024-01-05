import type { UIActionButtonProps } from '@/components/UI/UIActionButton/types';
import type { UICellActionsAction } from '../types';

export const uiCellActionsActionsToUIActionButtonContiner = (
  cellActions: UICellActionsAction[]
): UIActionButtonProps[] =>
  cellActions.map((i) => ({
    desc: i.name,
    onClick: i.action,
  }));
