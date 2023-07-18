export type UIInventoryItemProps = {
  img: string;
  name: string;
  bonuses: string[];
  equippable?: boolean;
  equipped?: boolean;
  isView?: boolean;
  equip?: () => void;
  throw?: () => void;
};

// @@TODO: replace equip & throw with it
export type UIInventoryItemAction = {
  text: string;
  action: () => void;
  hidden?: boolean;
};
