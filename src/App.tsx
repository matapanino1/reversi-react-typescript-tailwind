import React, { useState } from "react";
import Board from "./components/Board";
import { arrAdd, dirVec, reverseFunc } from "./lib/func";

const App: React.FC = () => {
  // 盤面情報(1: 白, 2: 黒)
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  // ターン情報(true: 黒, false: 白)
  const [turn, setTurn] = useState<boolean>(true);
  const disc = turn ? 2 : 1;

  const clickHandler = ([x, y]: number[]) => {
    // 置けないマスの処理
    if (board[y][x] !== 0) {
      // 置いてあるマス
      alert("そのマスには置けません");
      return;
    } else {
      let i = 0;
      for (const vec of dirVec) {
        const arr = arrAdd(vec, [x, y]);
        const posDisc = board[arr[1]][arr[0]];
        // ここの条件が緩い
        if (posDisc && posDisc !== disc) {
          // 置ける場合の処理
          break;
        } else {
          if (i === 7) {
            console.log("i7エラー");
            return;
          }
          // 保留の場合の処理
          i++;
          continue;
        }
      }
    }
    // 配列のコピーを作成
    const newBoard = board.slice();
    reverseFunc(x, y, board, disc);
    newBoard[y][x] = disc;

    setBoard(newBoard);
    setTurn(!turn);
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-7xl mb-8"></h1>
      <Board board={board} onClickHandler={clickHandler} />
    </div>
  );
};

export default App;
