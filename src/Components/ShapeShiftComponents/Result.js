import React from 'react';

export default function Result(props) {
    return (
        <div className='result'>
            <h3>Result</h3>
            {props.correct}
            {props.incorrect}
            <button className='getStartedButton' id='gamePlayButton' onClick={() => props.changeCurrentDisplay('GameLoading')}>Play Again</button>
        </div>
    )
}
