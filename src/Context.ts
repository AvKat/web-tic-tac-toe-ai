import React from "react";
import { LocationType } from "./types";

const DispatchContext = React.createContext((value: LocationType) => {});

export { DispatchContext };
