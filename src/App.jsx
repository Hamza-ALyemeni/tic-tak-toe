import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
            <Player intialName="Hamza" symbol ="X"/>
            <Player intialName="ALI" symbol ="O"/>
        </ol>

        <GameBoard />
      </div>
      LOG
    </main>
  )
}

export default App
