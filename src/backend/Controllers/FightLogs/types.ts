export type FightLog = {
  teamOne: number[];
  teamTwo: number[];
  members: Record<number, FightLogMember>;
  /**
   * each turn contains array of actions
   */
  turns: FightLogTurn[];
};

export type FightLogMember = {
  id: number;
  name: string;
  pfp: string;
  lvl: number;
  currentHealth: number;
  health: number;
};

export type FightLogTurn = string[];
export type FightLogTurns = FightLogTurn[];

export type FightTurnAction = {
  attacker: FightLogMember;
  receiver: FightLogMember;
  damage: number;
  attackType: number;
};
