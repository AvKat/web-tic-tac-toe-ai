import { useEffect, useReducer } from "react";
import { Board } from "./components";
import { DispatchContext } from "./Context";
import { terminal } from "./logic/helpers";
import { emptyBoard, reducer } from "./reducer";
import "./styles.less";

function App() {
  const [boardState, dispatch] = useReducer(reducer, emptyBoard);
  const player = "X";

  useEffect(() => {
    const status = terminal(boardState);
    if (status) {
      if (status === "D") {
        alert("Draw");
        return;
      }
      alert(status === player ? "You Win" : "You Lose");
    }
  }, [boardState]);

  return (
    <div id="main">
      <DispatchContext.Provider value={dispatch}>
        <Board state={boardState} />
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
