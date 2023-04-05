import type { MapController } from '..';
import type { MapArea } from '../types';

export const useGetMapArea =
  (mapController: MapController) =>
  (id: number): MapArea => {
    const map = mapController.getMapById(id);

    return {
      x: 0,
      y: 0,
      xRange: map.width - 1,
      yRange: map.height - 1,
    };
  };
