import type { ItemProto } from '../types';

const proto: ItemProto = {
  name: 'Wooden Sword',
  img: '/items/woodenSword.png',
  type: 'leftHand',
  computedStatsBonuses: {
    attack: {
      value: [5, 10],
    },
  },
  dropRate: 0.1,
};

export default proto;
