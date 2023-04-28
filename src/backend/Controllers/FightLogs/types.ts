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
  name: string;
  lvl: number;
  currentHealth: number;
  health: number;
};

export type FightLogTurn = string[];
