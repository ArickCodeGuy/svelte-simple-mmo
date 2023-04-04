import idGen from '@/utils/idGen';
import type { FightInstance } from './types';

export class FightTable {
  fights: FightInstance[];
  idGen: () => number;

  constructor() {
    this.fights = [];
    this.idGen = idGen();
  }

  initFight(teamOne: number[], teamTwo: number[]): FightInstance {
    const id = this.idGen();

    const fightInstance = {
      id,
      teamOne,
      teamTwo,
    };
    this.fights.push(fightInstance);
    return fightInstance;
  }
  endFight(id: number) {
    this.fights = this.fights.filter((fight) => fight.id !== id);
  }
  findFight(id: number) {
    return this.fights.find((fight) => fight.id === id);
  }
}
