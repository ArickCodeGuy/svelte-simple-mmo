import type { MapCellType } from '../types';
import land from './land';
import water from './water';
import rock from './rock';

const cellTypeProtos: MapCellType[] = [land, water, rock];

export default cellTypeProtos;
