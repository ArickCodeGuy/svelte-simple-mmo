import type { ServerController } from '../..';
import useFountainActions from './fountain';

export const useCellActions = (controller: ServerController) => ({
  fountain: useFountainActions(controller),
});
