import type { FightTable } from '..';

export const useEndFight = (fightTable: FightTable) => (id: number) => {
  fightTable.fights = fightTable.fights.filter((fight) => fight.id !== id);
};
