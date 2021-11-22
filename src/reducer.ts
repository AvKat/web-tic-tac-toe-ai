import { Reducer } from "react";
import { deepCopy } from "./lib";
import { compTurn, result, terminal } from "./logic/helpers";
import { BoardType, RowType, ActionType } from "./types";

const emptyRow: RowType = ["", "", ""];
const emptyBoard: BoardType = [0, 1, 2].map(() => [...emptyRow]);

const reducer: Reducer<BoardType, ActionType> = (state, action) => {
  switch (action.type) {
    case "reset":
      return deepCopy(emptyBoard)

    case "set":
      let nState = result(state, action.payload);
      if (terminal(nState)) {
        return nState;
      }
      const ct = compTurn(nState);
      nState = result(nState, ct);
      return nState;

    default:
      return state

  }

};

export { emptyRow, emptyBoard, reducer };
