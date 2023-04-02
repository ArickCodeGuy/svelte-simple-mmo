export type BaseProtoActivity = 'FIGHT' | 'WALK';

export type BaseProto = {
  id: number;
  lvl: number;
  name: string;
  stats: BaseStats;
  activity?: BaseProtoActivity;
};

export type BaseStats = {
  hp: number;
  attack: number;
};
