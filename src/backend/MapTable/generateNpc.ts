import { livingsActions } from '../Livings';

export default function (
  npcAmount: number,
  mapId: number,
  y: number,
  x: number,
  yRange: number,
  xRange: number
): void {
  for (let i = 0; i < npcAmount; i++) {
    const yPos = y + Math.floor(Math.random() * yRange);
    const xPos = x + Math.floor(Math.random() * xRange);

    livingsActions.create(2, {
      mapId,
      y: yPos,
      x: xPos,
    });
  }
}
