import Player from "./components/Player"
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
            <Player intialName="Hamza" symbol ="X"/>
            <Player intialName="ALI" symbol ="O"/>
        </ol>

        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
