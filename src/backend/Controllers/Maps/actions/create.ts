import type { MapController } from '..';
import type { MapInfo } from '../types';

export const useCreate =
  (mapController: MapController) => (mapInfo: Omit<MapInfo, 'id'>) => {
    mapController.maps.push({
      ...mapInfo,
      id: mapController.idGen(),
    });
  };
