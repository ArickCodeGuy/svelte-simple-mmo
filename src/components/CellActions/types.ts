export type CellActionsProps = {
  id: number;
};

export type CellActions = {
  cellId: number;
  actions?: CellActionsAction[];
};

export type CellActionsAction = {
  name: string;
  action: () => void;
};
