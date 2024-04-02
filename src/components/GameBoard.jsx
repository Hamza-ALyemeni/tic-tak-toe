import { useState } from "react";


const intialGameBoard = [
    [null , null , null],
    [null , null , null],
    [null , null , null],
];

export default function GameBoard({onSelectSquere , activeSymbolPlayer}) {
    const [gameBoard , setGameBoard] = useState(intialGameBoard);

    function handleSelectSquare(rowIndex,colIndex) {
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activeSymbolPlayer;
            return updatedBoard;
        });

        onSelectSquere();
    }

    return (
        <ol id="game-board">{gameBoard.map((row,rowIndex)=>(
            <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
            </li>
            ))}
        </ol>
    );
}