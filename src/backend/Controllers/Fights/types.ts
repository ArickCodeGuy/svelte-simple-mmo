export type FightInstance = {
  teamOne: TeamMember[];
  teamTwo: TeamMember[];
  targets: Targets;
  nextTurn: number;
};

export type TeamMember = {
  id: number;
  isAlive: boolean;
  buffsAndDebuffs?: BuffDebuff;
};

export type BuffDebuff = {
  stun?: number;
  poison?: {
    dmg: number;
    duration: number;
  };
};

/**
 * key is is attacker id, value is receiver id
 */
export type Targets = {
  [x: number]: number;
};

export type ComputedFightInstance = FightInstance & {
  aliveTeamOne: TeamMember[];
  aliveTeamTwo: TeamMember[];
};
