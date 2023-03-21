import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    availabel: boolean; // Move
    id: number; // react key

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.availabel = false;
        this.id = Math.random()
    }
}