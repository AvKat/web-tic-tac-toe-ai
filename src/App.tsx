import { useReducer } from "react";
import { Board } from "./components";
import { emptyBoard, reducer } from "./reducer";
import "./styles.less";

function App() {
  const [boardState, dispatch] = useReducer(reducer, emptyBoard);

  return (
    <div id="main">
      <Board state={boardState} />
    </div>
  );
}

export default App;
