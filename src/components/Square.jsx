import React from 'react';

import './Square.css'

const Square = (props) => {
    return (
        <div>
            <button 
                disabled={props.disabled}
                className="square"
                onClick={props.click}
            >
                {props.value}
            </button>
        </div>
    );
}

export default Square;
