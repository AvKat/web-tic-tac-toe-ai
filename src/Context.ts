import React from "react";
import { ActionType, } from "./types";

const initialValue = {
    isGameOver: false,
    dispatch: (value: ActionType) => { }
}

const DispatchContext = React.createContext(initialValue);

export { DispatchContext };
