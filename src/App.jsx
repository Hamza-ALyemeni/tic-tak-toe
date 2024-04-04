import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

function App() {
  const[gameTurns , setgameTurns] = useState([]);
  const [activePlayer, setActivePlayer]= useState('X');


  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X' );
    setgameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        {square : {row : rowIndex , col: colIndex} , player : currentPlayer},
        ...prevTurns
      ];

      return updatedTurns;

    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player intialName="Hamza" symbol ="X" isActive = {activePlayer === 'X' }/>
            <Player intialName="ALI" symbol ="O" isActive = {activePlayer === 'O' }/>
        </ol>
        <GameBoard onSelectSquere = {handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
