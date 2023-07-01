import type { MapCellType } from '../types';
import land from './land';
import water from './water';

const cellTypeProtos: MapCellType[] = [land, water];

export default cellTypeProtos;
