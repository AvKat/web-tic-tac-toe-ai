import React, { useContext } from "react";
import { DispatchContext } from "../../Context";
import { TileType } from "../../types";

interface TileProps {
  state: TileType;
  location: [number, number];
}

const Tile: React.FC<TileProps> = ({ state, location }) => {
  const [rowNum, tileNum] = location;
  const locNum = rowNum * 3 + tileNum;
  const empty = state === "";

  const { dispatch, isGameOver } = useContext(DispatchContext);

  const isClickable = empty && !isGameOver;

  const onClick = () => {
    if (!isClickable) return;

    dispatch({
      type: "set",
      payload: location,
    });
  };

  return (
    <div
      className={[
        "tile",
        locNum % 2 === 0 ? "alt" : "",
        isClickable ? "" : "full",
      ].join(" ")}
      onClick={onClick}
    >
      {state}
    </div>
  );
};

export { Tile };
