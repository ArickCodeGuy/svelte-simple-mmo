export type CellActionsProps = {
  id: number;
};

export type CellActionsAction = {
  name: string;
  action: () => void;
};
