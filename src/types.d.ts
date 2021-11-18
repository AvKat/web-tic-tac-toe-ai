export type TileType = "O" | "X" | ""

export type RowType = [TileType, TileType, TileType]

export type BoardType = [RowType, RowType, RowType]

export type ActionType = {
    type: "setX" | "setO",
    payload: 0|1|2|3|4|5|6|7|8
}
