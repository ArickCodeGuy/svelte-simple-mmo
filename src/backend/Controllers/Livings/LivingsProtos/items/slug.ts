import type { LivingProto } from '../types';

const proto: LivingProto = {
  id: 2,
  name: 'Slug',
  lvl: 1,
  expGives: 10,
  stats: {
    health: 25,
    attack: 1,
  },
  drops: [
    {
      itemProtoId: 0,
      dropRate: 0,
    },
  ],
};

export default proto;
