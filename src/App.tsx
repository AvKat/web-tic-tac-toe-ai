import { useEffect, useReducer, useState } from "react";
import { Board } from "./components";
import { DispatchContext } from "./Context";
import { terminal } from "./logic/helpers";
import { emptyBoard, reducer } from "./reducer";
import "./styles.less";

const dummyText = "TTT";

function App() {
  const [boardState, dispatch] = useReducer(reducer, emptyBoard);
  const [isGameOver, setGameOver] = useState(false);
  const [endText, setText] = useState(dummyText);
  const player = "X";

  useEffect(() => {
    const status = terminal(boardState);
    if (status) {
      setGameOver(true);
      if (status === "D") {
        setText("Draw");
        return;
      }
      setText(status === player ? "You Win" : "You Lose");
    } else {
      setGameOver(false);
    }
  }, [boardState]);

  const resetBtnClick = () => {
    setText(dummyText);
    dispatch({ type: "reset" });
  };

  return (
    <div id="main">
      <DispatchContext.Provider value={dispatch}>
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
