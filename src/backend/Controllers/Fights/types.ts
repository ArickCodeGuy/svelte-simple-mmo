export type FightInstance = {
  teamOne: number[];
  teamTwo: number[];
  targets: Targets;
  buffsAndDebuffs?: Record<string, BuffDebuff>;
};

export type BuffDebuff = {
  //
};

/**
 * @description key is is attacker, value is deffender
 */
export type Targets = {
  [x: number]: number;
};
