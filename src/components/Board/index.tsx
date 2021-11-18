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
        <Row state={row} key={`row-${row.join(" ")}-${i}`} />
      ))}
    </div>
  );
};

export { Board };
