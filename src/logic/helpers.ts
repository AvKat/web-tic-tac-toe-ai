import { chooseRandom, deepCopy, winConditions } from "../lib";
import { BoardType, LocationType, TurnType } from "../types";

const getOpposite: (player: TurnType) => TurnType = (player) => {
  return player === "O" ? "X" : "O";
};

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
  const sTurn = getOpposite(fTurn);
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

const result = (board: BoardType, location: LocationType) => {
  const t = turn(board);
  const res = deepCopy(board);
  let [i, j] = location;
  res[i][j] = t;
  return res;
};

const terminal = (board: BoardType) => {
  const flatBoard = board.flatMap((x) => x);

  for (let i in winConditions) {
    let cond = winConditions[i];
    let [x, y, z] = cond;
    if (flatBoard[x] == flatBoard[y] && flatBoard[x] == flatBoard[z]) {
      if (flatBoard[x] === "X") {
        return "X";
      } else if (flatBoard[x] === "O") {
        return "O";
      }
    }
  }

  if (actions(board).length === 0) return "D";
};

const compTurn = (state: BoardType) => {
  let nBoard,
    index,
    indexes: number[] = [];
  let acts = actions(state);
  let scores = acts.map((act) => {
    nBoard = result(state, act);
    const res = minmax(nBoard, true);
    return res;
  });
  console.log(scores);
  const best = Math.min(...scores);
  scores.forEach((sc, i) => {
    if (sc === best) indexes.push(i);
  });
  index = chooseRandom(indexes);
  console.log(index);
  return acts[index];
};

const minmax = (
  state: BoardType,
  max: boolean,
  depth: number = 0,
  player: TurnType = "X"
) => {
  const term = terminal(state);
  if (term) {
    if (term === player) {
      return 100 - depth;
    } else if (term === getOpposite(player)) {
      return -100 + depth;
    } else return 0;
  }
  let best = max ? -10000 : 10000;
  let acts, nBoard;
  let deciderFunc = max ? Math.max : Math.min;

  acts = actions(state);
  acts.forEach((act) => {
    nBoard = result(state, act);
    best = deciderFunc(best, minmax(nBoard, !max, depth + 1, player));
  });
  return best;
};

export { actions, turn, result, terminal, compTurn };
