import type { LivingProto } from '../types';

const proto: LivingProto = {
  id: 2,
  name: 'Slug',
  lvl: 1,
  pfp: '/livings/slug.jpg',
  expGives: 10,
  stats: {
    health: 25,
    attack: 1,
  },
  drops: [
    {
      itemProtoId: 1,
      dropRate: 0.1,
    },
  ],
};

export default proto;
