import type { ServerController } from '../..';
import fountainActions from './fountain';

export const useCellActions = (controller: ServerController) => ({
  fountain: fountainActions(controller),
});
