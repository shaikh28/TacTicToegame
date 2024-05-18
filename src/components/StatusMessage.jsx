import React from "react";

const StatusMessage = ({ winner, isXnext, squares }) => {
  const noMovesLeft = squares.every((squareValue) => squareValue !== null);
  const nextPlayer = isXnext ? "X" : "O";
  const renderStatusMessage = () => {
    if (winner) {
      return(
      <>
        Winner is {' '}
        <span className={winner === "X" ? "text-green" : "text-orange"}>
          {winner}
        </span>
      </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">O</span> and {' '}
          <span className="text-green">X</span> its tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is {' '}
          <span className={isXnext ? "text-green" : "text-orange"}>
            {nextPlayer}
          </span>
        </>
      );
    }
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
