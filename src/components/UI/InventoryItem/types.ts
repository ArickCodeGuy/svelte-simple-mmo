export type UIInventoryItemProps = {
  img: string;
  name: string;
  bonuses: string[];
  equippable?: boolean;
  equipped?: boolean;
  isView?: boolean;
  equip?: () => void;
};
