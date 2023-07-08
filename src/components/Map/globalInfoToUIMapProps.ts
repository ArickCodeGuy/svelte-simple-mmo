import type { GlobalInfo } from '@/backend/Server/types';
import type { UIMapCellProps, UIMapProps } from '../UI/UIMap/types';
import { frontDictionaryState } from '@/store/dictionary';
import type { Dictionary } from '@/types/types';

let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => (dictionary = v));

export const globalInfoToUIMapProps = (
  globalInfo: GlobalInfo
): UIMapProps | undefined => {
  if (!globalInfo.map) return;
  const xPos = globalInfo.living.position.x;
  const yPos = globalInfo.living.position.y;
  const position = { x: xPos, y: yPos };

  const cells = globalInfo.map.layout.map((row, y) =>
    row.map<UIMapCellProps>((cell, x) => {
      let icon: string | undefined;
      if (dictionary?.cellTypeIcon?.[cell.typeId]) {
        icon = dictionary?.cellTypeIcon?.[cell.typeId];
      }

      let backgroundColor: string | undefined;
      if (dictionary?.cellTypeColor?.[cell.typeId]) {
        backgroundColor = dictionary.cellTypeColor[cell.typeId];
      }

      if (globalInfo.distantLivings[y] && globalInfo.distantLivings[y]![x]) {
        backgroundColor = 'red';
      }
      if (xPos === x && yPos === y) {
        backgroundColor = 'aquamarine';
      }

      return {
        backgroundColor,
        icon,
      };
    })
  );

  return {
    cells,
    range: 4,
    position,
  };
};
