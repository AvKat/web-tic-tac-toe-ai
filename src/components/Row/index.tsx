import React from "react";
import { RowType } from "../../types";
import { Tile } from "../Tile";

interface RowProps {
  state: RowType;
}

const Row: React.FC<RowProps> = ({ state }) => {
  return (
    <div id="row">
      {state.map((tile, i) => (
        <Tile state={tile} key={`tile-${i}-${tile}`} />
      ))}
    </div>
  );
};

export { Row };
