import React from "react";
import Disc from "./Disc";

interface BoardProps {
  board: number[][];
  onClickHandler: ([x, y]: number[]) => void;
}

let value: string;
const arr = [0, 1, 2, 3, 4, 5, 6, 7];

const Board: React.FC<BoardProps> = ({ board, onClickHandler }) => {
  // 'board' stateにアクセス(0,1,2 → "bg-color")
  const renderDiscs = ([x, y]: number[]) => {
    if (board[y][x] === 0) {
      value = "";
    } else if (board[y][x] === 1) {
      value = "bg-white";
    } else if (board[y][x] === 2) {
      value = "bg-black";
    }
    return <Disc value={value} onClickHandler={onClickHandler} id={[x, y]} />;
  };
  return (
    <div className="mx-auto bg-green-600 h-96 w-96 grid grid-cols-8">
      {arr.map((num) => renderDiscs([num, 0]))}
      {arr.map((num) => renderDiscs([num, 1]))}
      {arr.map((num) => renderDiscs([num, 2]))}
      {arr.map((num) => renderDiscs([num, 3]))}
      {arr.map((num) => renderDiscs([num, 4]))}
      {arr.map((num) => renderDiscs([num, 5]))}
      {arr.map((num) => renderDiscs([num, 6]))}
      {arr.map((num) => renderDiscs([num, 7]))}
    </div>
  );
};

export default Board;
