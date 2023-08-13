export type FightInstance = {
  teamOne: number[];
  teamTwo: number[];
  members: TeamsMembers;
  targets: Targets;
  nextTurn: number;
  logId: number;
};

/**
 * [x: number as living.id]
 */
export type TeamsMembers = Record<number, TeamMember>;

export type TeamMember = {
  id: number;
  isAlive: boolean;
  hasAttacked?: boolean;
  buffsAndDebuffs?: BuffDebuff;
};

// @@TODO: finish
export type BuffDebuff = unknown;

/**
 * key is is attacker id, value is receiver id
 */
export type Targets = {
  [x: number]: number;
};

export type ComputedFightInstance = FightInstance & {
  aliveTeamOne: number[];
  aliveTeamTwo: number[];
};
