export type UINavigationProps = {
  groups?: UINavigationGroup[];
  /**
   * Apply `position: fixed` to navigation
   */
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
