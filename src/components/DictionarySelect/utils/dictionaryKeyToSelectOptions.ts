import type { SelectOption } from '@/components/DictionarySelect/types';
import type { DictionaryKey } from '@/types/types';

type Options = {
  toNumber?: boolean;
};

export const dictionaryKeyToSelectOptions = (
  dictionaryKey: DictionaryKey | undefined,
  options: Options = {}
): SelectOption[] => {
  const res: SelectOption[] = [];
  if (!dictionaryKey) return res;

  for (const v in dictionaryKey) {
    const label = dictionaryKey[v];
    const value = options.toNumber ? Number(v) : v;
    res.push({
      value,
      label,
    });
  }
  return res;
};
