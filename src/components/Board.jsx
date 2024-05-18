import React, { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
console.log(squares);
  const handleSquareClick = clickedPosition => {
    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        console.log('clicked');
        if (clickedPosition === position) {
          return "X";
         
        }

        return squareValue;
      });
    });
  };
  const renderSquare = Position => {
    return (
      <Square
        value={squares[Position]}
        onClick={() => handleSquareClick(Position)}
      />
    );
  };

  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
};

export default Board;
