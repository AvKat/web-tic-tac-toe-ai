import React from "react";
import { BoardType } from "../../types";
import { Row } from "../Row";

interface BoardProps {
  state: BoardType;
}

const Board: React.FC<BoardProps> = ({ state }) => {
  return (
    <div id="board">
      {state.map((row, i) => (
        <Row state={row} rowNum={i} key={`row-${i}`} />
      ))}
    </div>
  );
};

export { Board };
