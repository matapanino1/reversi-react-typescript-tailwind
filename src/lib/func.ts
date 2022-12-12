// 配列の要素同士の足し算
export const arrAdd = ([a, b]: number[], [c, d]: number[]) => {
  return [a + c, b + d];
};

// 配列の各要素を掛け算
const arrMult = ([a, b]: number[], i: number) => {
  return [a * i, b * i];
};

// 8方向ベクトル
export const dirVec: number[][] = [
  [0, 1],
  [1, 0],
  [1, 1],
  [0, -1],
  [-1, 0],
  [-1, -1],
  [-1, 1],
  [1, -1],
];

export const isClickable = (
  [x, y]: number[],
  board: number[][],
  disc: 1 | 2
) => {
  let posArr = [];
  // 隣接するマスを探査
  for (const vec of dirVec) {
    let pos = arrAdd([x, y], vec);
    if (board[pos[1]][pos[0]] === disc || board[pos[1]][pos[0]] === 0) {
      continue;
    }
  }
};

//　ビジネスロジック
export const reverseFunc = (
  x: number,
  y: number,
  board: number[][],
  disc: 1 | 2
) => {
  // 方向ベクトルを一つずつ取り出す。
  for (const vec of dirVec) {
    // 方向(単位)ベクトルの延長
    for (let i = 1; i < 9; i++) {
      // 参照しているマスの座標
      let pos = arrAdd([x, y], arrMult(vec, i));
      if (
        board[pos[1]][pos[0]] === 0 ||
        pos[1] < 0 ||
        pos[0] < 0 ||
        pos[1] > 7 ||
        pos[0] > 7
      ) {
        // 石がない or マス目がない
        break;
      } else if (board[pos[1]][pos[0]] === disc) {
        reverseDiscs(vec, board, pos, i, disc);
      } else {
        // 異なる色の石を発見した時の処理
        continue;
      }
    }
  }
};

// 石を発見した後, ひっくり返す処理
const reverseDiscs = (
  vec: number[],
  board: number[][],
  pos: number[],
  i: number,
  disc: 1 | 2
) => {
  while (i > 0) {
    let reversePos = arrAdd(pos, arrMult(vec, -i));
    board[reversePos[1]][reversePos[0]] = disc;
    i--;
  }
};
