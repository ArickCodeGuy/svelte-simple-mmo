export type FightLog = {
  fightId: string;
  teamOneIds: string[];
  teamTwoIds: string[];
  actions: LogAction[];
};

export type LogAction = string;
