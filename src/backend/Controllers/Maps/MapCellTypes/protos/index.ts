import type { MapCellType } from '../types';
import land from './land';
import water from './water';
import fountain from './fountain';

const cellTypeProtos: MapCellType[] = [land, water, fountain];

export default cellTypeProtos;
