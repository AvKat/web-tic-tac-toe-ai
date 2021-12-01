import { useEffect, useReducer, useState } from "react";
import { Board } from "./components";
import { DispatchContext } from "./Context";
import { terminal } from "./logic/helpers";
import { emptyBoard, reducer } from "./reducer";
import "./styles.less";

const dummyText = "TTT";
const initialScore = { player: 0, ai: 0 };

function App() {
  const [boardState, dispatch] = useReducer(reducer, emptyBoard);
  const [isGameOver, setGameOver] = useState(false);
  const [endText, setText] = useState(dummyText);
  const [scores, setScore] = useState(initialScore);
  const player = "X";

  useEffect(() => {
    const status = terminal(boardState);
    if (status) {
      setGameOver(true);
      if (status === "D") {
        setText("Draw");
      } else if (status === player) {
        setText("You Win");
        incrementScore(true);
      } else {
        setText("You Lose");
        incrementScore(false);
      }
    } else {
      setGameOver(false);
    }
  }, [boardState]);

  const resetBtnClick = () => {
    setText(dummyText);
    dispatch({ type: "reset" });
  };

  const incrementScore = (isPlayer: boolean) => {
    setScore((s) => {
      if (isPlayer) {
        s.player += 1;
      } else {
        s.ai += 1;
      }
      return s;
    });
  };

  return (
    <div id="main">
      <DispatchContext.Provider value={{ dispatch, isGameOver }}>
        <h1
          className={[
            endText.includes("W")
              ? "win"
              : endText.includes("L")
              ? "lose"
              : endText.includes("D")
              ? "draw"
              : "",
          ].join(" ")}
        >
          {endText}
        </h1>
        <Board state={boardState} />
        <div id="scores">
          <h2>You: {scores.player}</h2>
          <h2>AI: {scores.ai}</h2>
        </div>
        <button
          id="reset"
          onClick={resetBtnClick}
          disabled={!isGameOver}
          className={[isGameOver ? "" : "hidden"].join(" ")}
        >
          Reset
        </button>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
