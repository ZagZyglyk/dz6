import React from 'react';

import './Board.css'
import Square from './Square';

const Board = (props) => {
    return (
        <div className="board">
            {props.board.map((boardSquare, index) => 
                <Square 
                    key={index}
                    disabled={props.finished || boardSquare}
                    value={boardSquare}
                    click={() => props.click(index)}
                />
            )}
        </div>
    );
}

export default Board;
