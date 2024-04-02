import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer]= useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X' );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player intialName="Hamza" symbol ="X" isActive = {activePlayer === 'X' }/>
            <Player intialName="ALI" symbol ="O" isActive = {activePlayer === 'O' }/>
        </ol>
        <GameBoard onSelectSquere = {handleSelectSquare} activeSymbolPlayer={activePlayer}/>
      </div>
      <Log />
    </main>
  )
}

export default App
