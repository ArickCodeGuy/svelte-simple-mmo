import type { LivingProto } from '../types';

const proto: LivingProto = {
  id: 0,
  name: 'Player',
  lvl: 1,
  expGives: 0,
  stats: {
    health: 100,
    attack: 10,
    vitality: 1,
    strength: 1,
    dexterity: 1,
    intelligence: 1,
    mind: 1,
  },
};

export default proto;
