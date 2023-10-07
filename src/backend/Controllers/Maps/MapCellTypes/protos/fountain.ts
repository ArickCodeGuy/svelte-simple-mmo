import type { MapCellType } from '../types';

const cellTypeProto: MapCellType = {
  name: 'Fountain',
  icon: '\u{F058C}',
  color: 'blue',
  actions: [
    {
      name: 'Drink',
    },
  ],
};

export default cellTypeProto;
