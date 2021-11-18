import { useReducer } from "react";
import { Board } from "./components";
import { DispatchContext } from "./Context";
import { emptyBoard, reducer } from "./reducer";
import "./styles.less";

function App() {
  const [boardState, dispatch] = useReducer(reducer, emptyBoard);

  return (
    <div id="main">
      <DispatchContext.Provider value={dispatch}>
        <Board state={boardState} />
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
