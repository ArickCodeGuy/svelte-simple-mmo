import type { CellActionsAction } from '../types';
import { CELL_TYPE_ID_DICTIONARY } from './cellTypeIdDictionary';

export const useCellTypeActions = async (
  cellTypeId: number
): Promise<CellActionsAction[] | undefined> => {
  const cellTypeName = CELL_TYPE_ID_DICTIONARY[cellTypeId];
  if (!cellTypeName) return;

  try {
    const {
      default: cellActions,
    }: { default: CellActionsAction[] | undefined } = await import(
      /* @vite-ignore */
      `../typeIds/${cellTypeName}.ts`
    );

    return cellActions;
  } catch (e) {
    return;
  }
};
