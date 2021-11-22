import React from "react";
import { ActionType, } from "./types";

const DispatchContext = React.createContext((value: ActionType) => { });

export { DispatchContext };
