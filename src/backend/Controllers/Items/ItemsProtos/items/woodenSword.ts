import type { ItemProto } from '../types';

const proto: ItemProto = {
  name: 'Wooden Sword',
  img: '/items/woodenSword.png',
  type: 'leftHand',
  statsBonuses: {
    attack: {
      value: [5, 10],
    },
  },
  price: 1,
};

export default proto;
