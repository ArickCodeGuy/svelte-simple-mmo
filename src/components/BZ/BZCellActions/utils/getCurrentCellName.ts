import type { Dictionary } from '@/types/types';

export const getCurrentCellName = (
  dictionary: Dictionary | undefined,
  cellTypeId: number
) => {
  if (!dictionary) {
    return '';
  }

  return dictionary['cellTypeName'][cellTypeId];
};
