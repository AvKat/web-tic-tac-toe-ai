import { deepCopy, winConditions } from "../lib";
import { BoardType, LocationType, TurnType } from "../types";

const actions = (board: BoardType) => {
  const res = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") res.push([i, j]);
    }
  }

  return res;
};

const turn = (board: BoardType, fTurn: TurnType) => {
  const count = { X: 0, O: 0 };
  const sTurn = fTurn === "X" ? "O" : "X";
  const flatBoard = board.flatMap((x) => x);
  for (let i in flatBoard) {
    let item = flatBoard[i];
    if (item === "X") {
      count.X += 1;
    } else if (item === "O") {
      count.O += 1;
    }
  }

  return count[fTurn] <= count[sTurn] ? fTurn : sTurn;
};

const result = (board: BoardType, location: LocationType, turn: TurnType) => {
  const res = deepCopy(board);
  let [i, j] = location;
  res[i][j] = turn;
  return res;
};

const terminal = (board: BoardType) => {
  const flatBoard = board.flatMap((x) => x);

  for (let i in winConditions) {
    let cond = winConditions[i];
    let [x, y, z] = cond;
    if (flatBoard[x] === flatBoard[y] && flatBoard[x] === flatBoard[z]) {
      if (flatBoard[x] === "X") {
        return "X";
      } else if (flatBoard[x] === "O") {
        return "O";
      } else {
        return "";
      }
    }
  }
};

export { actions, turn, result, terminal };
