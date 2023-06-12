import type { ItemProto } from '../types';

export default {
  name: 'Wooden Sword',
  img: '/items/woodenSword.png',
  type: 'hand',
  bonuses: {
    computedStats: {
      f: (v) => ({
        ...v,
        attack: v.attack + 5,
      }),
      description: '5 dmg',
    },
  },
  dropRate: 0.1,
} as ItemProto;
