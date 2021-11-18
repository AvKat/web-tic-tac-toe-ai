import { deepCopy, winConditions } from "../lib";
import { BoardType, LocationType, TurnType } from "../types";

const actions = (board: BoardType) => {
  const res: LocationType[] = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") res.push([i, j]);
    }
  }

  return res;
};

const turn = (board: BoardType, fTurn: TurnType = "X") => {
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
  if (actions(board).length === 0) return "D";

  const flatBoard = board.flatMap((x) => x);

  for (let i in winConditions) {
    let cond = winConditions[i];
    let [x, y, z] = cond;
    if (flatBoard[x] === flatBoard[y] && flatBoard[x] === flatBoard[z]) {
      if (flatBoard[x] === "X") {
        return "X";
      } else if (flatBoard[x] === "O") {
        return "O";
      }
    }
  }
};

const compTurn = (state: BoardType) => {
  let nBoard,
    t = turn(state);
  let acts = actions(state);
  let scores = acts.map((act) => {
    nBoard = result(state, act, t);
    return minmax(nBoard, false);
  });
  console.log(scores);
  let index = scores.indexOf(Math.min(...scores));
  return acts[index];
};

const minmax = (state: BoardType, max: boolean, player: TurnType = "X") => {
  const term = terminal(state);
  if (term) {
    if (term === "X") {
      return 1;
    } else if (term === "O") {
      return -1;
    } else return 0;
  }
  let best = max ? -1000 : 1000;
  let acts,
    nBoard,
    t = turn(state, player);
  let deciderFunc = max ? Math.max : Math.min;

  acts = actions(state);
  acts.forEach((act) => {
    nBoard = result(state, act, t);
    best = deciderFunc(best, minmax(nBoard, !max, player));
  });
  return best;
};

export { actions, turn, result, terminal, compTurn };
