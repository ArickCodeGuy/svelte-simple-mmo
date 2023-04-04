import type { FightTable } from '..';

export const useFindFightById = (fightTable: FightTable) => (id: number) =>
  fightTable.fights.find((fight) => fight.id === id);
