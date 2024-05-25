import "./style.scss";
import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./calculateWinner";
import StatusMessage from "./components/StatusMessage";
import History from "./components/History";

const NEW_GAME = [{ squares: Array(9).fill(null), isXnext: false }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentmove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentmove];

  const {winner,winningSquares} = calculateWinner(gamingBoard.squares);

  console.log(winner);
  const handleSquareClick = (clickedPosition) => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory((currentHistory) => {
      const isTraversing = currentmove + 1 !== currentHistory.length;
      const lastGamingState = isTraversing
        ? currentHistory[currentmove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXnext ? "X" : "O";
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState + 1))
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXnext: !lastGamingState.isXnext,
      });
    });

    setCurrentMove((move) => move + 1);
  };

  const moveTo = (move) => {
    currentmove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1><span className="text-orange">Tic</span> Tac <span className="text-green">Toe</span></h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={onNewGameStart} className={`btn-reset ${ winner ? 'active' : ''}`}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentmove={currentmove} />
    </div>
  );
}

export default App;
