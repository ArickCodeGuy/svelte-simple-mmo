export type FightInstance = {
  id: number;
  teamOne: number[];
  teamTwo: number[];
  targets: Targets;
};

export type Targets = {
  /**
   * @description key is is attacker, value is deffender
   */
  [x: number]: number;
};
