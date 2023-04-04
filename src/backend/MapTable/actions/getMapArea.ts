import type { MapTable } from '..';
import type { MapArea } from '../types';

export const useGetMapArea =
  (mapTable: MapTable) =>
  (id: number): MapArea => {
    const map = mapTable.getMapById(id);

    return {
      x: 0,
      y: 0,
      xRange: map.width - 1,
      yRange: map.height - 1,
    };
  };
