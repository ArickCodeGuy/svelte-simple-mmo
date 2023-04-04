import type { Position } from '@/types';
import type { DirectionalMove, Living, LivingsPositions } from './types';
import idGen from '@/utils/idGen';
import { createFromId } from './actions/createFromId';
import { createNewPlayer } from './actions/createNewPlayer';
import { directionalMove } from './actions/directionalMove';

export class LivingsTable {
  livings: Living[];
  idGen: () => number;

  constructor() {
    this.livings = [];
    this.idGen = idGen();
  }

  findIndexById(id: number) {
    const livingIndex = this.livings.findIndex((i) => i.id === id);
    if (livingIndex === -1) throw new Error(`Living with id ${id} not found`);

    return livingIndex;
  }
  findById(id: number) {
    const living = this.livings.find((living) => living.id === id);
    if (!living) throw new Error(`Living with id ${id} not found`);

    return living;
  }
  add(living: Living) {
    this.livings.push(living);
  }
  remove(living: Living) {
    this.livings = this.livings.filter((i) => i.id !== living.id);
  }
  update(id: number, newState: Living): Living {
    const livingIndex = this.findIndexById(id);
    this.livings[livingIndex] = newState;
    return newState;
  }
  livingsPositions(): LivingsPositions {
    return this.livings.reduce<LivingsPositions>((result, living) => {
      const { mapId, x, y } = living.position;

      if (!result[mapId]) result[mapId] = {};
      if (!result[mapId][y]) result[mapId][y] = {};
      if (!result[mapId][y][x]) {
        result[mapId][y][x] = [];
      }
      result[mapId][y][x].push(living);
      return result;
    }, {});
  }
  getLivingsByPosition({ mapId, y, x }: Position): Living[] {
    const livingsPositions = this.livingsPositions();

    if (
      !livingsPositions[mapId] ||
      !livingsPositions[mapId][y] ||
      !livingsPositions[mapId][y][x]
    ) {
      return [];
    } else {
      return livingsPositions[mapId][y][x];
    }
  }

  createNpc(protoId: number, position: Position) {
    const living = {
      ...createFromId(protoId, position),
      id: this.idGen(),
    };
    this.add(living);
  }
  createPlayer(name: string) {
    const newPlayer = {
      ...createNewPlayer(name),
      id: this.idGen(),
    };
    this.add(newPlayer);
    return newPlayer;
  }
  directionalMove(id: number, direction: DirectionalMove) {
    const living = this.findById(id);
    this.update(id, directionalMove(living, direction));
  }
}
