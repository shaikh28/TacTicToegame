import './style.scss'
import  {useState}  from 'react';
import Board from './components/Board'
import {calculateWinner} from './calculateWinner'
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false)
  const nextPlayer = isXnext ? 'X' :'O'
  const winner = calculateWinner(squares)
  const statusMessage = winner ? `the Winner is ${winner}`: `Next Player is ${nextPlayer}`
  console.log(winner);
  const handleSquareClick = clickedPosition => {

    if(squares[clickedPosition] || winner){
      return
    }

    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        console.log('clicked');
        if (clickedPosition === position) {
          return isXnext ? "X" : 'O';
         
        }

        return squareValue;
      });
    });

    setIsXnext(currentIsXnext=> !currentIsXnext)
  };
  return (
   
      <div className='app'>
        <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    
      </div>
     
    
  )
}

export default App
