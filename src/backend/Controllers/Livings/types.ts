import type { BaseItem } from '../Base';
import type { MapArea } from '../Maps/types';

export type Position = {
  mapId: number;
  x: number;
  y: number;
};

export type LivingActivity = 'FIGHT' | 'WALK';

export type LivingProto = {
  id: number;
  name: string;
  lvl: number;
  expGives: number;
  stats: Partial<LivingStats> & LivingBaseStats;
};

export type Living = {
  protoId: number;
  name: string;
  lvl: number;
  exp: number;
  /**
   * exp given upon death
   */
  expGives: number;
  /**
   * points to spare on stats
   */
  statPoints: number;
  stats: LivingStats & LivingBaseStats;
  /**
   * points to spare on skills
   */
  skillPoints: number;
  /**
   * ids of skills
   */
  skills: LivingSkills;
  health: LivingHealth;
  /**
   * timestamp
   */
  lastUpdated: number;
  position: Position;
  activity?: LivingActivity;
  fightInstanceId?: number;
  mapArea?: MapArea;
  fightLogs?: number[];
  equipment?: LivingEquipment;
};

export type LivingHealth = {
  max: number;
  current: number;
};

/**
 * skill id[]
 */
export type LivingSkills = number[];

/**
 * value is item id
 */
export type LivingEquipment = {
  head?: number;
  body?: number;
  leftHand?: number;
  rightHand?: number;
  feet?: number;
};

export type LivingEquipmentType = keyof LivingEquipment;

export type LivingBaseStats = {
  health: number;
  attack: number;
};

export type LivingStats = {
  vitality: number;
  strength: number;
  dexterity: number;
  mind: number;
  intelligence: number;
};

export type LivingComputedStats = {
  health: number;
  currentHealth: number;
  attack: number;
  lastUpdated: number;
};

export type DirectionalMove = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

/**
 * LivingsPositions[mapId][y][x] = Living[];
 */
export type LivingsPositions = Record<string, MapLivingsPositions>;

/**
 * Livings on certain mapId as [y position][x position] => BaseItem<Living>[]
 */
export type MapLivingsPositions = Record<
  string,
  Record<string, BaseItem<Living>[]>
>;

export type LevelUp = {
  exp: number;
  statPoints: number;
  skillPoints?: number;
};
