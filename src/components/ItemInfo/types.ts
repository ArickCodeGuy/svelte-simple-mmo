import type { BaseItem } from '@/backend/Controllers/Base';
import type { ItemProto } from '@/backend/Controllers/Items/ItemsProtos/types';
import type { Item } from '@/backend/Controllers/Items/types';

export type ItemInfoProps = {
  owner?: number;
  item: BaseItem<Item> | BaseItem<ItemProto>;
};
