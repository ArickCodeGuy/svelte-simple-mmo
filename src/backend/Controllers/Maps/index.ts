import idGen from '@/utils/idGen';
import type { MapInfo } from './types';
import { createDefaultMap } from './maps/default';
import { useIsMovable } from './actions/isMovable';
import { useGetRandomPositionFromArea } from './actions/getRandomPositionFromArea';
import { useGetMapArea } from './actions/getMapArea';
import { useGetMapById } from './actions/getMapById';
import { useCreate } from './actions/create';

export class MapController {
  maps: MapInfo[];
  idGen: () => number;
  isMovable: ReturnType<typeof useIsMovable>;
  getRandomPositionFromArea: ReturnType<typeof useGetRandomPositionFromArea>;
  getMapArea: ReturnType<typeof useGetMapArea>;
  getMapById: ReturnType<typeof useGetMapById>;
  create: ReturnType<typeof useCreate>;

  constructor() {
    this.maps = [];
    this.idGen = idGen();

    // actions
    this.isMovable = useIsMovable(this);
    this.getRandomPositionFromArea = useGetRandomPositionFromArea(this);
    this.getMapArea = useGetMapArea(this);
    this.getMapById = useGetMapById(this);
    this.create = useCreate(this);

    this.create(createDefaultMap());
  }
}
