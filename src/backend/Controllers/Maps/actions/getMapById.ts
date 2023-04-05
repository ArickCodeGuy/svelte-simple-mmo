import type { MapController } from '..';

export const useGetMapById = (mapController: MapController) => (id: number) => {
  const map = mapController.maps.find((map) => map.id === id);
  if (!map) throw new Error(`map with id ${id} not found`);

  return map;
};
