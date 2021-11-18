import React from "react";
import { TileType } from "../../types";

interface TileProps {
  state: TileType;
  location: [number, number];
}

const Tile: React.FC<TileProps> = ({ state, location }) => {
  const [rowNum, tileNum] = location;
  const locNum = rowNum * 3 + tileNum;
  const empty = state === "";
  return (
    <div
      className={[
        "tile",
        locNum % 2 === 0 ? "alt" : "",
        empty ? "" : "full",
      ].join(" ")}
    >
      {state}
    </div>
  );
};

export { Tile };
