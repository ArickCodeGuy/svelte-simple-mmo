import type { Dictionary } from '@/types/types';
import type { MazeCellTypeDictionary } from '../types';

export const frontDictionaryToMazeCellDictionary = (
  dictionary: Dictionary
): MazeCellTypeDictionary => {
  const res: MazeCellTypeDictionary = {};

  const colors = dictionary.cellTypeColor;
  const icons = dictionary.cellTypeIcon;

  for (const id in colors) {
    res[id] = {
      ...res[id],
      color: colors[id],
    };
  }

  for (const id in icons) {
    res[id] = {
      ...res[id],
      icon: icons[id],
    };
  }

  return res;
};
