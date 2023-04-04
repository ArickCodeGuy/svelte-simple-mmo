import idGen from '@/utils/idGen';
import type { MapArea, MapInfo } from './types';
import { createDefaultMap } from './maps/default';
import type { Position } from '@/types';

export class MapTable {
  maps: MapInfo[];
  idGen: () => number;

  constructor() {
    this.maps = [];
    this.idGen = idGen();
    this.create(createDefaultMap());
  }
  getMapById(id: number) {
    const map = this.maps.find((map) => map.id === id);
    if (!map) throw new Error(`map with id ${id} not found`);

    return map;
  }
  create(mapInfo: Omit<MapInfo, 'id'>) {
    this.maps.push({
      ...mapInfo,
      id: this.idGen(),
    });
  }
  getMaps() {
    return this.maps;
  }
  getMapArea(id: number): MapArea {
    const map = this.getMapById(id);
    return {
      x: 0,
      y: 0,
      xRange: map.width,
      yRange: map.height,
    };
  }
  randomPositionFromArea(area: MapArea) {
    return {
      x: Math.floor(area.x + Math.random() * area.xRange),
      y: Math.floor(area.y + Math.random() * area.yRange),
    };
  }
  isMovable(position: Position): boolean {
    try {
      const map = this.getMapById(position.mapId);

      if (!map.layout[position.y] || !map.layout[position.y][position.x]) {
        return false;
      }
      return map.layout[position.y][position.x].type !== 'BLOCK';
    } catch (e) {
      return false;
    }
  }
}
