import type { MapTable } from '..';
import type { MapInfo } from '../types';

export const useCreate =
  (mapTable: MapTable) => (mapInfo: Omit<MapInfo, 'id'>) => {
    mapTable.maps.push({
      ...mapInfo,
      id: mapTable.idGen(),
    });
  };
