import React from "react";
import { RowType } from "../../types";
import { Tile } from "../Tile";

interface RowProps {
  state: RowType;
  rowNum: number;
}

const Row: React.FC<RowProps> = ({ state, rowNum }) => {
  return (
    <div className="row">
      {state.map((tile, i) => (
        <Tile
          state={tile}
          location={[rowNum, i]}
          key={`tile-${rowNum * 3 + i}`}
        />
      ))}
    </div>
  );
};

export { Row };
