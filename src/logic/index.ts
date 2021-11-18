import { emptyBoard } from "../reducer";
import { BoardType, TurnType } from "../types";
import { actions, turn } from "./helpers";

class Game {
  board: BoardType;
  fTurn: TurnType;
  constructor(fTurn?: TurnType) {
    this.board = emptyBoard;
    this.fTurn = fTurn || "X";
  }
}

const test = () => {
  let t: BoardType = [
    ["", "", "X"],
    ["", "X", "O"],
    ["", "O", "X"],
  ];
  console.log(t);
  console.log(turn(t, "X"));
};

export { Game, test };
