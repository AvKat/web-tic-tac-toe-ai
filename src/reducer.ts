import { Reducer } from "react";
import { compTurn, result, terminal } from "./logic/helpers";
import { LocationType, BoardType, RowType } from "./types";

const emptyRow: RowType = ["", "", ""];
const emptyBoard: BoardType = [0, 1, 2].map(() => [...emptyRow]);

const reducer: Reducer<BoardType, LocationType> = (state, action) => {
  let nState = result(state, action);
  if (terminal(nState)) {
    return nState;
  }
  const ct = compTurn(nState);
  nState = result(nState, ct);
  return nState;
};

export { emptyRow, emptyBoard, reducer };
