<script lang="ts">
function genMap(min: number, max: number): MazeMap {
  function getAllPossibleNewCellPositions(map: MazeMap): string[] {
    const res: string[] = [];
    for (const position in map) {
      const [sx, sy] = position.split(',');
      const [x, y] = [Number(sx), Number(sy)];

      const arr = [
        `${x - 1},${y - 1}`,
        `${x - 1},${y + 1}`,
        `${x + 1},${y - 1}`,
        `${x + 1},${y + 1}`,
      ];

      arr.forEach((i) => {
        !map[i] && res.push(i);
      });
    }
    return res;
  }

  const cellAmount = min + Math.floor(Math.random() * (max - min));

  const map: MazeMap = { '0,0': 0 };

  for (let i = 0; i < cellAmount; i++) {
    const possibleNewCells = getAllPossibleNewCellPositions(map);
    const newCellPosition = Math.floor(Math.random() * possibleNewCells.length);
    map[possibleNewCells[newCellPosition]] = 0;
  }
  return map;
}
/**
 * [x: string] as `${x position},${y position}`
 */
type MazeMap = Record<string, MazeCell>;

type MazeCell = number;

let mazeJson = JSON.stringify(genMap(10, 20));
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div>{mazeJson}</div>
      </div>
      <div class="col-6">
        <div class="map">
          <div class="row">
            <div class="cell">typeId</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
