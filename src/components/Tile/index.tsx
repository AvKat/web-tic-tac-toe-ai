import React from "react";
import { TileType } from "../../types";

interface TileProps {
  state: TileType;
}

const Tile: React.FC<TileProps> = ({ state }) => {
  return <div id="tile">{state}</div>;
};

export { Tile };
