import React from 'react';
import './PreGame.css'

export default function PreGame(props) {
    return (
        <section className='preGame'>
            <h2>Shape Shift</h2>
            <h5>Divide your attention across changing colors, shapes, and positions</h5>
            <div className='preGameShape'>Triangle</div>
            <div className='gameButtonsHolder'>
                <button className='logInButton' id='howToPlay' onClick={() => props.changeCurrentDisplay('HowToPlay')}>How to Play</button>
                <button className='getStartedButton' onClick={() => props.changeCurrentDisplay('GameLoading')}>Play</button>
            </div>
        </section>
    )
}