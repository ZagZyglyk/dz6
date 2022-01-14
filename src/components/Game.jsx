import React, {useState} from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

import './Game.css'

const FirtstPlayer = () => {
    return Math.floor(Math.random() * 42)%2 === 0 ? 'X' : 'O'
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState(FirtstPlayer())
    const winner = calculateWinner(board)

    const handlerSquareClick = (index) => {
        const boardCopy = JSON.parse(JSON.stringify(board))
        boardCopy[index] = currentPlayer
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
        setBoard(boardCopy)
    }

    const handlerResetButtonClick = () => {
        setBoard(Array(9).fill(null))
        setCurrentPlayer(FirtstPlayer())
    }

    return (
        <div className="game">
            <button className='reset_btn' onClick={handlerResetButtonClick}>Сбросить игру</button>
            <Board board={board} finished={winner} click={handlerSquareClick}/>
            {winner ? <h3 className='text'>Победил '{winner}'</h3>
            : <h5 className='text'>Ходит: '{currentPlayer}'</h5>
            }
        </div>
    );
}

export default Game;
