import type { ServerController } from '../..';

export const useDrink = (controller: ServerController) => (id: number) => {
  const player = controller.livingsController.getById(id);

  if (player.activity) {
    console.warn('Drink: player is busy ', player.activity);
    return;
  }

  const playerPositionCell = controller.mapController.getCellType(
    player.position
  );

  if (playerPositionCell.name !== 'Fountain') {
    console.warn('Drink: cell is not fountain');
    return;
  }

  controller.livingsController.update(id, (v) => ({
    ...v,
    health: {
      ...v.health,
      current: v.health.max,
    },
  }));

  return controller.publicApi.getState(id);
};

export const useTossACoin = (controller: ServerController) => (id: number) => {
  const player = controller.livingsController.getById(id);
  if (!player.gold) return;

  controller.livingsController.update(id, (v) => ({
    ...v,
    gold: v.gold! - 1,
  }));

  return controller.publicApi.getState(id);
};

const useFountainActions = (controller: ServerController) => ({
  drink: useDrink(controller),
  tossACoin: useTossACoin(controller),
});

export default useFountainActions;
