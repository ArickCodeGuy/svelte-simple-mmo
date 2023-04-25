export type FightLog = {
  teamOne: FightLogMember[];
  teamTwo: FightLogMember[];
  /**
   * each turn contains array of actions
   */
  turns: FightLogTurn[];
};

export type FightLogMember = {
  id: number;
  lvl: number;
  chp: number;
  mhp: number;
};

export type FightLogTurn = string[];
