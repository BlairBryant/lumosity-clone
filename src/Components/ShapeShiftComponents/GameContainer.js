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
        this.addCorrect = this.addCorrect.bind(this)
        this.addIncorrect = this.addIncorrect.bind(this)
    }

    changeCurrentDisplay(displayName) {
        this.setState({currentDisplay: displayName})
    }

    addCorrect() {
        this.setState({correct: this.state.correct + 1})
    }

    addIncorrect() {
        this.setState({incorrect: this.state.incorrect + 1})
    }

    render() {
        const { currentDisplay, correct, incorrect } = this.state
        const {changeCurrentDisplay, addCorrect, addIncorrect} = this
        let display
        switch (currentDisplay) {
            case 'HowToPlay':
                display = <HowToPlay changeCurrentDisplay={changeCurrentDisplay}/>
                break;
            case 'GameLoading':
                display = <GameLoading changeCurrentDisplay={changeCurrentDisplay}/>
                break;
            case 'Game':
                display = <Game addCorrect={addCorrect} addIncorrect={addIncorrect} changeCurrentDisplay={changeCurrentDisplay}/>
                break;
            case 'Result':
                display = <Result changeCurrentDisplay={changeCurrentDisplay} correct={correct} incorrect={incorrect}/>
                break;

            default:
                display = <PreGame changeCurrentDisplay={changeCurrentDisplay}/>
        }

        return (
            <div className='gameContainer'>
                <div className='gameAndInfoContainer'>
                    <section className='gameBorder'>
                        {display}
                        <div className='gameControls' id='controlsQuestion'>?</div>
                        <div className='gameControls' id='controlsPause'>ll</div>
                        <div className='gameControls' id='controlsAudio'><span className="lnr lnr-volume-high"></span></div>
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