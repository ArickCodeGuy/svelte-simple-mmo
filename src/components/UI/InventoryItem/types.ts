export type UIInventoryItemProps = {
  img: string;
  name: string;
  bonuses: string[];
  actions?: UIInventoryItemAction[];
};

export type UIInventoryItemAction = {
  text: string;
  action: () => void;
  /**
   * hides only if hidden === false
   */
  hidden?: boolean;
};
