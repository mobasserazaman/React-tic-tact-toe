

export default function GameBoard({ onSelectSquare, board }) {
    //     const [gameBoard, setGameBoard] = useState(initialGameBoard);

    //     function handleSelectSquare(rowIndex, colIndex) {
    //         /**
    //  * Arrays and objects are reference values.
    //  * prevGameBoard[rowIndex,colIndex] = 'X'; updates old value immediately in memory even before setGameBoard is scheduled!!
    //  * It is recommended to create a copy of the array and updating the copy. Then scheduling the update using setGameBoard.
    //  * State that depends on objects/ arrays should be updated in an immutable way
    // */
    //         setGameBoard(prevGameBoard => {
    //             const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //             updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //             console.log(updatedBoard)
    //             return updatedBoard;
    //         });
    //         onSelectSquare();
    //     }



    return (
        <ol id='game-board'>
            {
                board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null? true: false}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
        </ol>
    );

}