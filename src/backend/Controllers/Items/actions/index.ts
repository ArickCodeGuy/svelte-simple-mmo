import type { ItemsController } from '..';
import { useGetPublicItem } from './getPublicItem';

export const useActions = (controller: ItemsController) => ({
  getPublicItem: useGetPublicItem(controller),
});
