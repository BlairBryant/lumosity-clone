import React, { Component } from 'react';
import './Game.css'
import triangle from '../../Images/triangle.png'
import circle from '../../Images/circle.png'
import xShape from '../../Images/x.png'
import square from '../../Images/square.png'


export default class HowToPlay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameTimer: 45,
            leftColor: { background: '#7CA5B8' },
            // leftColor: { background: '#6add19' },
            rightColor: { background: '#E5E7E6' },
            leftShape: xShape,
            rightShape: circle,
            whiteCircle: {top: '4px', left: '586px'},
            blackCircle: {top: '222px', left: '222px'},
            
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
        const {gameTimer, leftColor, rightColor, leftShape, rightShape, whiteCircle, blackCircle} = this.state
        const {correct, incorrect} = this.props

        return (
            <div className='game'>
                <section className='shapeShift'>
                    <div className='gameCountDown'>{/*{gameTimer}*/}45</div>
                    <div className='circle' id='whiteCircle' style={whiteCircle}></div>
                    <div className='circle' id='blackCircle' style={blackCircle}></div>

                    <div className='gameButtons' id='colorButton' onClick={() => this.setState({leftShape: square})}>Color</div>
                    <div className='gameButtons' id='shapeButton'>Shape</div>
                    <div className='gameButtons' id='circleButton'>Circle</div>

                        <div className='colorDiv' id='leftColor' style={leftColor}>
                            <div className='shapeContainer' id='leftShape'>
                                <img className='openShapes' src={leftShape} alt="openTriangle"/> 
                            </div>
                        </div>
                        <div className='colorDiv' id='rightColor' style={rightColor}>
                            <div className='shapeContainer' id='rightShape'> 
                                <img className='openShapes' src={rightShape} alt="openCircle"/>
                            </div>
                        </div>                  

                </section>
            </div>
        )
    }
}