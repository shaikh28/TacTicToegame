import './style.scss'
import  {useState}  from 'react';
import Board from './components/Board'
import {calculateWinner} from './calculateWinner'
import StatusMessage from './components/StatusMessage';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false)
  const winner = calculateWinner(squares)
  
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
        <StatusMessage winner={winner} isXnext={isXnext} squares={squares}/>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    
      </div>
     
    
  )
}

export default App
