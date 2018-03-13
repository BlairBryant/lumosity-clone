import React from 'react';
import './HowToPlay.css'

export default function HowToPlay(props) {
    return (
        <div className='preGame'>
            <h3>Instructions</h3>
            <button className='getStartedButton' id='gamePlayButton' onClick={() => props.changeCurrentDisplay('GameLoading')}>Play</button>
        </div>
    )
}
