export type UIActionButtonAction = {
  f: () => void;
  icon: string;
};

export type UIActionButtonProps = {
  lvl: number;
  name: string;
  chp: number;
  hp: number;
  actions?: UIActionButtonAction[];
};
