import React from "react";

interface DiscProps {
  value: string;
  onClickHandler: ([x, y]: number[]) => void;
  id: number[];
}

const Disc: React.FC<DiscProps> = ({ id, value, onClickHandler }) => {
  return (
    <button
      onClick={() => onClickHandler(id)}
      className={`border border-black rounded-full h-11 w-11 ${value}`}
    />
  );
};

export default Disc;
