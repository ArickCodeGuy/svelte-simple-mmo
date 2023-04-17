export type UIMapProps = {
  cells: UIMapCellProps[][];
  range?: number;
  position: {
    x: number;
    y: number;
  };
};

export type UIMapPosition = {
  x: number;
  y: number;
};

export type UIMapCellProps = {
  color?: string;
  icon?: string;
  backgroundColor?: string;
};
