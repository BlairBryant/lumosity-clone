import React, { Component } from 'react';
import './GameContainer.css'
import PreGame from './PreGame'
import HowToPlay from './HowToPlay'
import Game from './Game'
import GameLoading from './GameLoading'

export default class GameContainer extends Component {
    constructor() {
        super()

        this.state = {
            currentDisplay: null
        }
        this.changeCurrentDisplay = this.changeCurrentDisplay.bind(this)
    }

    changeCurrentDisplay(displayName) {
        this.setState({currentDisplay: displayName})
    }

    render() {
        const { currentDisplay } = this.state

        let display
        switch (currentDisplay) {
            case 'HowToPlay':
                display = <HowToPlay changeCurrentDisplay={this.changeCurrentDisplay}/>
                break;
            case 'GameLoading':
                display = <GameLoading />
                break;
            case 'Game':
                display = <Game />
                break;

            default:
                display = <PreGame changeCurrentDisplay={this.changeCurrentDisplay}/>
        }

        return (
            <div className='gameContainer'>
                <div className='gameAndInfoContainer'>
                    <section className='gameBorder'>
                        {display}
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