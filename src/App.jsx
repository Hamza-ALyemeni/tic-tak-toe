import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const intialGameBoard = [
  [null , null , null],
  [null , null , null],
  [null , null , null],
];


function deriveActicePlayer(gameTurns) {
  let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }

  return currentPlayer;
}


function App() {
  const[gameTurns , setgameTurns] = useState([]);
  // const [activePlayer, setActivePlayer]= useState('X');

  const activePlayer = deriveActicePlayer(gameTurns); 

    
  let gameBoard = intialGameBoard;

  for (const turn of gameTurns) {
      const {square , player } = turn;
      const {row , col} = square;

      gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
        winner = firstSquareSymbol;
      }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X' );
    setgameTurns(prevTurns => {
      // let currentPlayer = 'X';

      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'O';
      // }
      const currentPlayer = deriveActicePlayer(prevTurns);

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
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquere = {handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
