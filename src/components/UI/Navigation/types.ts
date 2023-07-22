export type UINavigationProps = {
  groups?: UINavigationGroup[];
  /**
   * Whether navigation should be slided to left of screen
   *
   * Works only with `fixed` prop as true
   */
  closed?: boolean;
  /**
   * Apply `position: fixed` to navigation
   */
  fixed?: boolean;
  /**
   * Callback function to execute when clicked on background of navigation when toggled
   *
   * Shown only with `fixed` param as true
   */
  bgClick?: () => void;
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
