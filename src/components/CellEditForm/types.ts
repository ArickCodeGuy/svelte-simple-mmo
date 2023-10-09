import type { MazeCell } from '../CanvasMap/types';

export type CellEditFormProps = {
  data: MazeCell;
  submit?: (data: MazeCell) => void;
  delete?: (data: MazeCell) => void;
};
