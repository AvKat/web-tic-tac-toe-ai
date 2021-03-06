export type TurnType = "O" | "X";
export type TileType = TurnType | "";

export type LocationType = [number, number];

export type RowType = TileType[];

export type BoardType = RowType[];

export type ActionType =
  | {
      type: "set";
      payload: LocationType;
    }
  | { type: "reset" };
