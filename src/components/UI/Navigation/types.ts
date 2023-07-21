export type UINavigationProps = {
  groups?: UINavigationGroup[];
  closed?: boolean;
  fixed?: boolean;
};

export type UINavigationGroup = {
  name: string;
  items?: UINavigationGroupItem[];
};

export type UINavigationGroupItem = {
  name: string;
  icon?: string;
  action: () => void;
};
