import React, { Component } from 'react';
import './Game.css'

export default class Game extends Component {
    constructor() {
        super()

        this.state = {
            playingGame: false
        }
    }
    render() {
        const { playingGame } = this.state
        return (
            <div className='game'>
                <div className='gameAndInfoContainer'>
                    <section className='gameBorder'>

                        {
                            playingGame
                                ?
                                <section className='shapeShift'>
                                    <div className='colorDiv' id='leftColor'></div>
                                    <div className='colorDiv' id='rightColor'></div>

                                </section>
                                :
                                <section className='preGame'>
                                    <h2>Shape Shift</h2>
                                    <h5>Divide your attention across changing colors, shapes, and positions</h5>
                                    <div className='preGameShape'>Triangle</div>
                                    <div className='gameButtonsHolder'>
                                        <button className='logInButton' id='howToPlay'>How to Play</button>
                                        <button className='getStartedButton' onClick={() => this.setState({ playingGame: true })}>Play</button>
                                    </div>
                                </section>

                        }
                    </section>




                    <section className='attentionBlurb'>
                        <h5>Attention Division</h5>
                        <p className='attentionLine'></p>
                        <h6>Attention division is the ability to focus on multiple things simultaneously.</h6>
                    </section>
                </div>
            </div>
        )
    }
}