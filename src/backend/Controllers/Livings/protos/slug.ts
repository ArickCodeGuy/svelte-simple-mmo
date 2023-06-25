import type { LivingProto } from '../types';

const proto: LivingProto = {
  id: 2,
  name: 'Slug',
  lvl: 1,
  expGives: 10,
  baseStats: {
    health: 10,
    attack: 1,
  },
  stats: {
    vitality: 1,
    strength: 1,
    dexterity: 1,
    intelligence: 1,
    mind: 1,
  },
};

export default proto;
