import type { LivingProto } from '../types';

export default {
  id: 0,
  name: 'Player',
  lvl: 1,
  expGives: 0,
  baseStats: {
    health: 100,
    attack: 10,
  },
  stats: {
    vitality: 1,
    strength: 1,
    dexterity: 1,
    intelligence: 1,
    mind: 1,
  },
} as LivingProto;
