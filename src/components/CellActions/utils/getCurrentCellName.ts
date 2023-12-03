import type { GlobalInfo } from '@/backend/Server/types';
import type { Dictionary } from '@/types/types';

export const getCurrentCellName = (
  globalInfo: GlobalInfo | undefined,
  dictionary: Dictionary | undefined,
  cellTypeId: number
) => {
  if (!globalInfo || !globalInfo.map || !globalInfo.living || !dictionary) {
    return '';
  }

  return dictionary['cellTypeName'][cellTypeId];
};
