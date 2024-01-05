export type UICellActionsProps = {
  name: string;
  actions?: UICellActionsAction[];
};

export type UICellActionsAction = {
  name: string;
  action: () => void;
};
