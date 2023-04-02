import type { MapCell } from '@/backend/MapTable/types';

export type UIMapCell = {
  type?: MapCell['type'];
  backgroundColor?: string;
};
