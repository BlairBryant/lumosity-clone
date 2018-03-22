import React from 'react';
import './PreGame.css'
import triangle from '../../Images/triangle.png'

export default function PreGame(props) {
    return (
        <section className='preGame'>
            <h2>Shape Shift</h2>
            <h5>Divide your attention across changing colors, shapes, and positions</h5>
            <img className='preGameShape' src={triangle} alt="openTriangle"/> 
            <div className='gameButtonsHolder'>
                <button className='logInButton' id='howToPlay' onClick={() => props.changeCurrentDisplay('HowToPlay')}>How to Play</button>
                <button className='getStartedButton' onClick={() => props.changeCurrentDisplay('GameLoading')}>Play</button>
            </div>
        </section>
    )
}