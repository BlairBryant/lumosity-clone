import React, { Component } from 'react';
import circle from '../../Images/circle.png'
import xShape from '../../Images/x.png'
import './GameLoading.css'

export default class GameLoading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startTimer: 3,
        }
        this.decreaseTimer = this.decreaseTimer.bind(this)
    }

    componentDidMount(){
            this.intervalID = window.setInterval(this.decreaseTimer, 1200)
    }

    decreaseTimer() {
        if(this.state.startTimer === 1) {
            window.clearInterval(this.intervalID)
            this.props.changeCurrentDisplay('Game')
        } else {
            this.setState({startTimer: this.state.startTimer - 1})
        }
    }

    render() {
        
        return (
            <div className='gameLoading'>
                <div className='game' id='fakeGame'>
                    <section className='shapeShift'>
                        <div className='circle' id='whiteCircle' style={{ top: '222px', left: '222px' }}></div>
                        <div className='circle' id='blackCircle' style={{ top: '30px', left: '570px' }}></div>

                        <div className='gameButtons' id='colorButton'>Color</div>
                        <div className='gameButtons' id='shapeButton'>Shape</div>
                        <div className='gameButtons' id='circleButton'>Circle</div>

                        <div className='colorDiv' id='leftColor' style={{background: '#7CA5B8'}}>
                            <div className='shapeContainer' id='leftShape'>
                                <img className='openShapes' src={xShape} alt="openTriangle" />
                            </div>
                        </div>
                        <div className='colorDiv' id='rightColor' style={{ background: '#E5E7E6' }}>
                            <div className='shapeContainer' id='rightShape'>
                                <img className='openShapes' src={circle} alt="openCircle" />
                            </div>
                        </div>

                    </section>
                </div>
                <div className='loadingTimer'>{this.state.startTimer}</div>
                <div className='gameShadow'></div> 
            </div>
        )
    }
}