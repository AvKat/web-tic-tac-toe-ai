import { Reducer } from "react";
import { LocationType, BoardType, RowType } from "./types";

const emptyRow: RowType = ["", "", ""];
const emptyBoard: BoardType = [0, 1, 2].map((x) => [...emptyRow]);

const reducer: Reducer<BoardType, LocationType> = (state, action) => {
  return state;
};

export { emptyRow, emptyBoard, reducer };
