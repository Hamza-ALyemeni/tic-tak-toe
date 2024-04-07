
const intialGameBoard = [
    [null , null , null],
    [null , null , null],
    [null , null , null],
];

export default function GameBoard({onSelectSquere , turns}) {
    let gameBoard = intialGameBoard;

    for (const turn of turns) {
        const {square , player } = turn;
        const {row , col} = square;

        gameBoard[row][col] = player;
    }
    // const [gameBoard , setGameBoard] = useState(intialGameBoard);

    // function handleSelectSquare(rowIndex,colIndex) {
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activeSymbolPlayer;
    //         return updatedBoard;
    //     });

    //     onSelectSquere();
    // }

    return (
        <ol id="game-board">{gameBoard.map((row,rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquere(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
            ))}
        </ol>
    );
}