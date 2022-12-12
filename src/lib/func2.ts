// ある方向ベクトル[a,b]上にある, 座標を全て取得
const rayToCoords: (
  x: number,
  y: number,
  a: number,
  b: number
) => number[][] = (x, y, a, b) => {
  let coords: number[][] = [];
  while (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
    coords.push([x, y]);
    x += a;
    y += b;
  }
  return coords;
};

// 上の関数で取得した座標を石の色(0: 空, 1: 白, 2: 黒)に変換
const coordsToDiscs: (coords: number[][], board: number[][]) => number[] = (
  coords,
  board
) => {
  return coords.map((coord) => board[coord[1]][coord[0]]);
};

// ひっくり返せる石の数を計算 / 無い場合はalert
const nFlippable: (disc: number, discArr: number[]) => number = (
  disc,
  discArr
) => {
  if (discArr.length <= 2 || discArr[0] !== 0) return 0;
  for (let i = 1; i < discArr.length; i++) {
    if (discArr[i] === 0) {
      return 0;
    } else if (discArr[i] === disc) {
      return i - 1;
    }
  }
  return 0;
};

export const Flip: (
  disc: number,
  x: number,
  y: number,
  board: number[][]
) => void = (disc, x, y, board) => {
  [...new Array(8).keys()]
    .map((n) => [
      Math.round(Math.cos(n * Math.PI)),
      Math.round(Math.sin(n * Math.PI)),
    ])
    .map((way) => rayToCoords(x, y, way[0], way[1]))
    .map((vecs) =>
      vecs.slice(1, 1 + nFlippable(disc, coordsToDiscs(vecs, board)))
    )
    .flat();
};
