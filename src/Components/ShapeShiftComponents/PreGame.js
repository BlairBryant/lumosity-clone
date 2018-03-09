import React, { Component } from 'react';
import './PreGame.css'

export default class PreGame extends Component {
    render() {
        return (
            <section className='preGame'>
                <h2>Shape Shift</h2>
                <h5>Divide your attention across changing colors, shapes, and positions</h5>
                <div className='preGameShape'>Triangle</div>
                <div className='gameButtonsHolder'>
                    <button className='logInButton' id='howToPlay'>How to Play</button>
                    <button className='getStartedButton' onClick={() => this.setState({ playingGame: true })}>Play</button>
                </div>
            </section>
        )
    }
}