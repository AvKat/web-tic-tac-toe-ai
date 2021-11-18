import { Reducer } from "react";
import { compTurn, result, terminal, turn } from "./logic/helpers";
import { LocationType, BoardType, RowType } from "./types";

const emptyRow: RowType = ["", "", ""];
const emptyBoard: BoardType = [0, 1, 2].map(() => [...emptyRow]);

const reducer: Reducer<BoardType, LocationType> = (state, action) => {
  let nState = result(state, action, turn(state));
  if (terminal(nState)) {
    alert("You Win");
    return nState;
  }
  const ct = compTurn(nState);
  nState = result(nState, ct, turn(nState));
  if (terminal(nState)) {
    alert("You Lost");
  }
  return nState;
};

export { emptyRow, emptyBoard, reducer };
