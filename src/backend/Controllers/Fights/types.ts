export type FightInstance = {
  members: TeamsMembers;
  targets: Targets;
  nextTurn: number;
  logId: number;
} & {
  [x in TeamNames]: FightInstanceTeam;
};

export type TeamNames = 'teamOne' | 'teamTwo';
export type FightInstanceTeam = number[];

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
  aliveTeamOne: FightInstanceTeam;
  aliveTeamTwo: FightInstanceTeam;
};
