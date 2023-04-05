import type { MapCell } from '@/backend/MapController/types';

export type UIMapCell = {
  type?: MapCell['type'];
  backgroundColor?: string;
};
