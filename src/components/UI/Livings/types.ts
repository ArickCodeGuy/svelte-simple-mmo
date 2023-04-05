export type UILivingButtonAction = {
  f: (props: UILivingButtonProps) => void;
  icon: string;
};

export type UILivingButtonProps = {
  lvl: number;
  name: string;
  chp: number;
  hp: number;
  actions?: UILivingButtonAction[];
};
