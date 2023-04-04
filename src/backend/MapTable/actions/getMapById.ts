import type { MapTable } from '..';

export const useGetMapById = (mapTable: MapTable) => (id: number) => {
  const map = mapTable.maps.find((map) => map.id === id);
  if (!map) throw new Error(`map with id ${id} not found`);

  return map;
};
