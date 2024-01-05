import type { UIActionButtonProps } from '@/components/UI/UIActionButton/types';
import type { CellActionsAction } from '../types';

export const cellActionsActionToUIActionButtonContainerItems = (
  cellActions: CellActionsAction[]
): UIActionButtonProps[] =>
  cellActions.map((i) => ({
    desc: i.name,
    onClick: i.action,
  }));
