import type { ItemProto } from '@/backend/Controllers/Items/ItemsProtos/types';
import type {
  ItemProtoStatBonus,
  PublicItem,
} from '@/backend/Controllers/Items/types';
import type {
  LivingCompleteStats,
  LivingStats,
} from '@/backend/Controllers/Livings/types';
import type { UIInventoryItemProps } from '@/components/UI/UIInventoryItem/types';
import { dropRateToString } from './dropRateToString';

type Options = {
  actions?: UIInventoryItemProps['actions'];
  dropRate?: number;
};

const publicItemToUIInventoryItemProps = (
  item: PublicItem,
  options: Options = {}
): UIInventoryItemProps => {
  const bonuses: string[] = [];

  if (item.statsBonuses) {
    (
      Object.entries(item.statsBonuses) as [keyof LivingCompleteStats, number][]
    ).forEach(([statKey, statValue]) => {
      if (statValue) {
        bonuses.push(`${statKey}: +${statValue}`);
      }
    });
  }

  return {
    img: item.proto.img,
    name: item.proto.name,
    bonuses,
    actions: options.actions,
  };
};

const itemProtoStatBonusToString = (bonus: ItemProtoStatBonus) =>
  Array.isArray(bonus.value)
    ? `${bonus.value[0]} - ${bonus.value[1]}`
    : String(bonus.value);

const itemProtoToUIInventoryItemProps = (
  item: ItemProto,
  options: Options = {}
): UIInventoryItemProps => {
  const bonuses = (
    Object.entries(item.statsBonuses || {}) as [
      keyof LivingStats,
      ItemProtoStatBonus,
    ][]
  ).map(
    ([statName, bonus]) => statName + ': ' + itemProtoStatBonusToString(bonus)
  );

  return {
    img: item.img,
    name: item.name,
    bonuses,
    dropRate: options.dropRate ? dropRateToString(options.dropRate) : undefined,
  };
};

/**
 * Returns only display content of item. Does not return actions
 */
export const itemToUIInventoryItemProps = (
  item: PublicItem | ItemProto,
  options: Options = {}
): UIInventoryItemProps => {
  if ('protoId' in item) {
    return publicItemToUIInventoryItemProps(item, options);
  } else {
    return itemProtoToUIInventoryItemProps(item, options);
  }
};
