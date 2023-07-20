export type UINavigationProps = {
  groups?: UINavigationGroup[];
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
