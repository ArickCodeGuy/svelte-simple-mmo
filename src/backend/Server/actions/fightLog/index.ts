import { ServerController } from '../..';
import { useFightLogPushTurn } from './pushTurn';
import { useFightLogPushTurnAction } from './pushTurnAction';

export const useFightLogActions = (controller: ServerController) => ({
  pushTurn: useFightLogPushTurn(controller),
  pushTurnAction: useFightLogPushTurnAction(controller),
});
