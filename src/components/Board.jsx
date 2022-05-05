import { useState } from "react";
import Square from "./Square"
const Board = () => {
    const [square, setSquare] = useState({
        squares: Array(9).fill(null),
        xIsNext: true,
    })

    const handleClick = (i) => {
        const squares = square.squares.slice()
        squares[i] = square.xIsNext ? "X" : "O"
        setSquare({
            squares: squares,
            xIsNext: !square.xIsNext
        })
    }

    const status = `Next player: ${square.xIsNext ? "X" : "O"}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={square.squares[0]} onClick={() => { handleClick(0) }} />
                <Square value={square.squares[1]} onClick={() => { handleClick(1) }} />
                <Square value={square.squares[2]} onClick={() => { handleClick(2) }} />
            </div>
            <div className="board-row">
                <Square value={square.squares[3]} onClick={() => { handleClick(3) }} />
                <Square value={square.squares[4]} onClick={() => { handleClick(4) }} />
                <Square value={square.squares[5]} onClick={() => { handleClick(5) }} />
            </div>
            <div className="board-row">
                <Square value={square.squares[6]} onClick={() => { handleClick(6) }} />
                <Square value={square.squares[7]} onClick={() => { handleClick(7) }} />
                <Square value={square.squares[8]} onClick={() => { handleClick(8) }} />
            </div>
        </div>
    );
}

export default Board