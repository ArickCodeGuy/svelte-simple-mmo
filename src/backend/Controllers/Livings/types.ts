import type { BaseItem } from '../Base';
import type { MapArea } from '../Maps/types';

export type Position = {
  mapId: number;
  x: number;
  y: number;
};

export type LivingActivity = 'FIGHT' | 'WALK';

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
  stats: LivingCompleteStats;
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
  respawn?: Position;
};

export type LivingDrop = {
  itemProtoId: number;
  /**
   * Chance of item dropping.
   *
   * Value from 0 to 1
   */
  dropRate: number;
};

export type LivingCompleteStats = LivingStats & LivingBaseStats;

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
  hands?: number;
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

export type DirectionalMove = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

/**
 * LivingsPositions[mapId][y][x] = Living[];
 */
export type LivingsPositions = Record<string, MapLivingsPositions>;

/**
 * Livings on certain mapId as [y position][x position] => living.id[]
 */
export type MapLivingsPositions =
  | Record<string, Record<string, number[] | undefined> | undefined>
  | undefined;

/**
 * Used for indicating for nearby enemies
 * { [y position]: { [x position]: boolean } }
 */
export type NearbyLivings = Record<
  string,
  Record<string, boolean | undefined> | undefined
>;

export type LevelUp = {
  exp: number;
  statPoints: number;
  skillPoints?: number;
};
