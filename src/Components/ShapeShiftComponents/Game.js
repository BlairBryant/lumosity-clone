import React, { Component } from 'react';
import './Game.css'

export default class HowToPlay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameTimer: 45,
            leftColor: { background: '#7CA5B8' },
            rightColor: { background: '#E5E7E6' },
            leftShape: 'triangle',
            rightShape: 'circle'
        }
        this.decreaseGameTimer = this.decreaseGameTimer.bind(this)
    }

    componentDidMount() {
        this.gameTimerID = window.setInterval(this.decreaseGameTimer, 1000)
    }

    decreaseGameTimer() {
        this.setState({gameTimer: this.state.gameTimer - 1})
    }

    render() {
        const {gameTimer, leftColor, rightColor, leftShape, rightShape} = this.state
        return (
            <div className='game'>
                <section className='shapeShift'>
                    <div className='gameCountDown'>{/*{gameTimer}*/}45</div>
                    <div className='gameButtons' id='colorButton'>Color</div>
                    <div className='gameButtons' id='shapeButton'>Shape</div>
                    <div className='gameButtons' id='circleButton'>Circle</div>
                        <div className='colorDiv' id='leftColor' style={leftColor}>
                            <div className='shapeContainer' id='leftShape'>
                                <div className={leftShape}></div>
                            </div>
                        </div>
                        <div className='colorDiv' id='rightColor' style={rightColor}>
                            <div className='shapeContainer' id='rightShape'> 
                                <div className={rightShape}></div>
                            </div>
                        </div>                  

                </section>
            </div>
        )
    }
}