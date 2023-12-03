export type UIActionButtonAction = {
  f: () => void;
  icon: string;
};

export type UIActionButtonProps = {
  desc: string;
  actions?: UIActionButtonAction[];
  onClick?: () => void;
};
