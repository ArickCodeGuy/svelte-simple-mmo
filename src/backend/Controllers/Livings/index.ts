import type { Living } from './types';
import idGen from '@/utils/idGen';
import { useCreateFromId } from './actions/createFromId';
import { useCreateNewPlayer } from './actions/createNewPlayer';
import { useDirectionalMove } from './actions/directionalMove';
import { useFindIndexById } from './actions/findIndexById';
import { useGetLivingsByPosition } from './actions/getLivingsByPosition';
import { useFindById } from './actions/findById';
import { useGetLivingsPositions } from './actions/getLivingsPositions';
import { useRemove } from './actions/remove';
import { useUpdate } from './actions/update';

export class LivingsController {
  livings: Living[];
  idGen: () => number;
  createFromId: ReturnType<typeof useCreateFromId>;
  createNewPlayer: ReturnType<typeof useCreateNewPlayer>;
  directionalMove: ReturnType<typeof useDirectionalMove>;
  findIndexById: ReturnType<typeof useFindIndexById>;
  getLivingsByPosition: ReturnType<typeof useGetLivingsByPosition>;
  findById: ReturnType<typeof useFindById>;
  getLivingsPositions: ReturnType<typeof useGetLivingsPositions>;
  remove: ReturnType<typeof useRemove>;
  update: ReturnType<typeof useUpdate>;

  constructor() {
    this.livings = [];
    this.idGen = idGen();

    // actions
    this.createFromId = useCreateFromId(this);
    this.createNewPlayer = useCreateNewPlayer(this);
    this.directionalMove = useDirectionalMove(this);
    this.findIndexById = useFindIndexById(this);
    this.getLivingsByPosition = useGetLivingsByPosition(this);
    this.findById = useFindById(this);
    this.getLivingsPositions = useGetLivingsPositions(this);
    this.remove = useRemove(this);
    this.update = useUpdate(this);
  }
}
