import type { MapCellType } from '../types';
import land from './land';
import water from './water';
import rock from './rock';
import fountain from './fountain';

const cellTypeProtos: MapCellType[] = [land, water, rock, fountain];

export default cellTypeProtos;
