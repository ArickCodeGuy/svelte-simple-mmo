import type { GlobalInfo } from '@/backend/Server/types';
import type { UIMapCellProps, UIMapProps } from '../UI/UIMap/types';

export const globalInfoToUIMapProps = (
  globalInfo: GlobalInfo
): UIMapProps | undefined => {
  if (!globalInfo.map) return;
  const xPos = globalInfo.living.position.x;
  const yPos = globalInfo.living.position.y;
  const position = { x: xPos, y: yPos };

  const cells = globalInfo.map.layout.map((row, y) =>
    row.map<UIMapCellProps>((cell, x) => {
      let backgroundColor = '';
      if (cell.type === 'WATER') {
        backgroundColor = 'lightblue';
      }
      if (globalInfo.distantLivings[y] && globalInfo.distantLivings[y][x]) {
        backgroundColor = 'red';
      }
      if (xPos === x && yPos === y) {
        backgroundColor = 'aquamarine';
      }

      return {
        backgroundColor,
      };
    })
  );

  return {
    cells,
    range: 4,
    position,
  };
};
