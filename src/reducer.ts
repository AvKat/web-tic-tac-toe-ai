import { Reducer } from "react";
import { ActionType, BoardType, RowType } from "./types";

const emptyRow: RowType = ["", "", ""];
const emptyBoard: BoardType = [[...emptyRow], [...emptyRow], [...emptyRow]];

const reducer: Reducer<BoardType, ActionType> = (state, action) => {
  return state;
};

export { emptyRow, emptyBoard, reducer };
