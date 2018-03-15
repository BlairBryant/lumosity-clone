import React, { Component } from 'react';
import './GameContainer.css'
import PreGame from './PreGame'
import HowToPlay from './HowToPlay'
import Game from './Game'
import GameLoading from './GameLoading'
import Result from './Result'


export default class GameContainer extends Component {
    constructor() {
        super()

        this.state = {
            currentDisplay: '',
            correct: 0,
            incorrect: 0
        }
        this.changeCurrentDisplay = this.changeCurrentDisplay.bind(this)
    }

    changeCurrentDisplay(displayName) {
        this.setState({currentDisplay: displayName})
    }

    render() {
        const { currentDisplay, correct, incorrect } = this.state

        let display
        switch (currentDisplay) {
            case 'HowToPlay':
                display = <HowToPlay changeCurrentDisplay={this.changeCurrentDisplay}/>
                break;
            case 'GameLoading':
                display = <GameLoading changeCurrentDisplay={this.changeCurrentDisplay}/>
                break;
            case 'Game':
                display = <Game correct={correct} incorrect={incorrect}/>
                break;
            case 'Result':
                display = <Result changeCurrentDisplay={this.changeCurrentDisplay} correct={correct} incorrect={incorrect}/>
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