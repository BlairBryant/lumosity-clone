import React, { Component } from 'react';
import './Game.css'
import triangle from '../../Images/triangle.png'
import circle from '../../Images/circle.png'
import xShape from '../../Images/x.png'
import square from '../../Images/square.png'
import glassSound from '../../Images/Glass.mp3'
import correctSound from '../../Images/correctSound.mp3'
import incorrectSound from '../../Images/incorrectSound.mp3'



export default class HowToPlay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameTimer: 45,
            leftColor: { background: '#7CA5B8' },
            rightColor: { background: '#E5E7E6' },
            leftShape: xShape,
            rightShape: circle,
            whiteCircle: { top: '222px', left: '222px' },
            blackCircle: { top: '30px', left: '570px' },
            winCondition: '',
            soundCondition: ''
        }

        this.stop = false
        this.lcSound = false
        this.rcSound = false
        this.lsSound = false
        this.rsSound = false
        this.bcSound = false
        this.wcSound = false
        this.timerIDs = [0]
        this.shapesArray = [square, xShape, circle, triangle]
        this.leftColorsArray = ['#7CA5B8', '#7B6D8D', '#E8B4BC', '#B3B7EE']
        this.rightColorsArray = ['#E5E7E6', '#b9b912', '#B2C9AB', '#EFD9CE']
        this.colorConditionsArray = ['#7CA5B8', '#7B6D8D', '#E8B4BC', '#B3B7EE', '#E5E7E6', '#b9b912', '#B2C9AB', '#EFD9CE']
        this.shapeConditionsArray = ['leftShapeSquare', 'leftShapeTriangle', 'leftShapeX', 'leftShapeCircle', 'rightShapeSquare', 'rightShapeTriangle', 'rightShapeX', 'rightShapeCircle']
        this.circleConditionsArray = ['whiteCircleLeft', 'whiteCircleRight', 'blackCircleLeft', 'blackCircleRight']
        this.winConditionsArray = ['Color', 'Shape', 'Circle']
        this.conditionSound = new Audio(glassSound)
        this.correctSound = new Audio(correctSound)
        this.incorrectSound = new Audio(incorrectSound)

        this.decreaseGameTimer = this.decreaseGameTimer.bind(this)
        this.changeLeftColor = this.changeLeftColor.bind(this)
        this.changeRightColor = this.changeRightColor.bind(this)
        this.changeLeftShape = this.changeLeftShape.bind(this)
        this.changeRightShape = this.changeRightShape.bind(this)
        this.moveWhiteCircle = this.moveWhiteCircle.bind(this)
        this.moveBlackCircle = this.moveBlackCircle.bind(this)
        this.setWinCondition = this.setWinCondition.bind(this)
        this.guessClick = this.guessClick.bind(this)
    }

    componentDidMount() {
        this.setWinCondition()
        this.gameTimerID = window.setInterval(this.decreaseGameTimer, 1000)
        this.changeLeftColor()
        window.setTimeout(this.changeRightColor, 1000)
        this.moveWhiteCircle()
        this.moveBlackCircle()
        window.setTimeout(this.changeLeftShape, 1000)
        this.changeRightShape()
    }

    decreaseGameTimer() {
        const {gameTimer} = this.state
        if (gameTimer === 1) {
            this.stop = true
            this.props.changeCurrentDisplay('Result')
        } else {
            this.setState({ gameTimer: gameTimer - 1 })
        }
    }

    changeLeftColor() {
        var { stop, timerIDs, changeLeftColor, leftColorsArray} = this
        if (!stop) {
            this.setState({ leftColor: {background: leftColorsArray[Math.floor(Math.random()*4)]}})
            let id = setTimeout(changeLeftColor, Math.random() * 1000 + 700)
            timerIDs.push(id)
        }
    }
    
    changeRightColor() {
        var { stop, timerIDs, changeRightColor, rightColorsArray} = this
        if (!stop) {
            this.setState({ rightColor: {background: rightColorsArray[Math.floor(Math.random()*4)]}})
            let id = setTimeout(changeRightColor, Math.random() * 1000 + 700)
            timerIDs.push(id)
        }
    }

    changeLeftShape() {
        var { stop, timerIDs, changeLeftShape, shapesArray} = this
        if (!stop) {
            this.setState({ leftShape: shapesArray[Math.floor(Math.random()*4)]})
            let id = setTimeout(changeLeftShape, Math.random() * 1000 + 700)
            timerIDs.push(id)
        }
    }

    changeRightShape() {
        var { stop, timerIDs, changeRightShape, shapesArray} = this
        if (!stop) {
            this.setState({ rightShape: shapesArray[Math.floor(Math.random()*4)]})
            let id = setTimeout(changeRightShape, Math.random() * 1000 + 700)
            timerIDs.push(id)
        }
    }

    moveWhiteCircle() {
        var { stop, timerIDs, moveWhiteCircle } = this
        if (!stop) {
            this.setState({ whiteCircle: {top: `${Math.floor(Math.random() * 423 + 4)}px`, left: `${Math.floor(Math.random() * 583 + 4)}px` }})
            let id = setTimeout(moveWhiteCircle, Math.random() * 1000 + 700)
            timerIDs.push(id)
        }
    }

    moveBlackCircle() {
        var { stop, timerIDs, moveBlackCircle} = this
        if (!stop) {
            this.setState({ blackCircle: {top: `${Math.floor(Math.random() * 423 + 4)}px`, left: `${Math.floor(Math.random() * 583 + 4)}px` }})
            let id = setTimeout(moveBlackCircle, Math.random() * 1000 + 700)
            timerIDs.push(id)
        }
    }

    setWinCondition() {
        const {winConditionsArray, colorConditionsArray, shapeConditionsArray,circleConditionsArray} = this
        let newWinCondition = winConditionsArray[Math.floor(Math.random()*3)]
        this.setState({winCondition: newWinCondition})

        if(newWinCondition === 'Color') {
            this.setState({soundCondition: colorConditionsArray[Math.floor(Math.random()*8)]})
        }
        else if(newWinCondition === 'Shape') {
            this.setState({soundCondition: shapeConditionsArray[Math.floor(Math.random()*8)]})
        } else {
            this.setState({soundCondition: circleConditionsArray[Math.floor(Math.random()*4)]})
        }
    }

    guessClick(clickedBox) {
        const {winCondition} = this.state
        const {correctSound, incorrectSound} = this
        if (clickedBox === winCondition) {
            correctSound.volume = .2
            correctSound.play()
            this.props.addCorrect()
        } else {
            incorrectSound.play()
            this.props.addIncorrect()
        }
        this.setWinCondition()
    }

    render() {
        const { gameTimer, leftColor, rightColor, leftShape, rightShape, whiteCircle, blackCircle, soundCondition } = this.state
        const {guessClick, conditionSound, lcSound, rcSound, lsSound, rsSound, bcSound, wcSound} = this
        console.log('winCondition: ', this.state.winCondition)
        console.log('soundCondition: ', soundCondition)

        if (leftColor.background === soundCondition && !lcSound) {
            conditionSound.play()
            this.lcSound = true
        }
        if (leftColor.background !== soundCondition) {
            this.lcSound = false
        }
        if (rightColor.background === soundCondition && !rcSound) {
            conditionSound.play()
            this.rcSound = true
        }
        if (rightColor.background !== soundCondition) {
            this.rcSound = false
        }
        if (soundCondition === 'leftShapeSquare' && leftShape === square && !lsSound) {
            conditionSound.play()
            this.lsSound = true
        }
        if (soundCondition === 'leftShapeSquare' && leftShape !== square) {
            this.lsSound = false
        }
        if (soundCondition === 'leftShapeTriangle' && leftShape === triangle && !lsSound) {
            conditionSound.play()
            this.lsSound = true
        }
        if (soundCondition === 'leftShapeTriangle' && leftShape !== triangle) {
            this.lsSound = false
        }
        if (soundCondition === 'leftShapeX' && leftShape === xShape && !lsSound) {
            conditionSound.play()
            this.lsSound = true
        }
        if (soundCondition === 'leftShapeX' && leftShape !== xShape) {
            this.lsSound = false
        }
        if (soundCondition === 'leftShapeCircle' && leftShape === circle && !lsSound) {
            conditionSound.play()
            this.lsSound = true
        }
        if (soundCondition === 'leftShapeCircle' && leftShape !== circle) {
            this.lsSound = false
        }
        if (soundCondition === 'rightShapeSquare' && rightShape === square && !rsSound) {
            conditionSound.play()
            this.rsSound = true
        }
        if (soundCondition === 'rightShapeSquare' && rightShape !== square) {
            this.rsSound = false
        }
        if (soundCondition === 'rightShapeTriangle' && rightShape === triangle && !rsSound) {
            conditionSound.play()
            this.rsSound = true
        }
        if (soundCondition === 'rightShapeTriangle' && rightShape !== triangle) {
            this.rsSound = false
        }
        if (soundCondition === 'rightShapeX' && rightShape === xShape && !rsSound) {
            conditionSound.play()
            this.rsSound = true
        }
        if (soundCondition === 'rightShapeX' && rightShape !== xShape) {
            this.rsSound = false
        }
        if (soundCondition === 'rightShapeCircle' && rightShape === circle && !rsSound) {
            conditionSound.play()
            this.rsSound = true
        }
        if (soundCondition === 'rightShapeCircle' && rightShape !== circle) {
            this.rsSound = false
        }
        if (soundCondition === 'whiteCircleLeft' && parseInt(whiteCircle.left, 10) < 270 && !wcSound) {
            conditionSound.play()
            this.wcSound = true
        }
        if (soundCondition === 'whiteCircleLeft' && parseInt(whiteCircle.left, 10) > 320) {
            this.wcSound = false
        }
        if (soundCondition === 'whiteCircleRight' && parseInt(whiteCircle.left, 10) > 320 && !wcSound) {
            conditionSound.play()
            this.wcSound = true
        }
        if (soundCondition === 'whiteCircleRight' && parseInt(whiteCircle.left, 10) < 270) {
            this.wcSound = false
        }
        if (soundCondition === 'blackCircleLeft' && parseInt(blackCircle.left, 10) < 270 && !bcSound) {
            conditionSound.play()
            this.bcSound = true
        }
        if (soundCondition === 'blackCircleLeft' && parseInt(blackCircle.left, 10) > 320) {
            this.bcSound = false
        }
        if (soundCondition === 'blackCircleRight' && parseInt(blackCircle.left, 10) > 320 && !bcSound) {
            conditionSound.play()
            this.bcSound = true
        }
        if (soundCondition === 'blackCircleRight' && parseInt(blackCircle.left, 10) < 270) {
            this.bcSound = false
        }

        return (
            <div className='game'>
                <section className='shapeShift'>
                    <div className={gameTimer < 10 ? 'gameCountDown gameCountDown9' : 'gameCountDown'}>{gameTimer}</div>
                    <div className='circle' id='whiteCircle' style={whiteCircle}></div>
                    <div className='circle' id='blackCircle' style={blackCircle}></div>

                    <div className='gameButtons' id='colorButton' onClick={() => guessClick('Color')}>Color</div>
                    <div className='gameButtons' id='shapeButton' onClick={() => guessClick('Shape')}>Shape</div>
                    <div className='gameButtons' id='circleButton' onClick={() => guessClick('Circle')}>Circle</div>

                    <div className='colorDiv' id='leftColor' style={leftColor}>
                        <div className='shapeContainer' id='leftShape'>
                            <img className='openShapes' src={leftShape} alt="openTriangle" />
                        </div>
                    </div>
                    <div className='colorDiv' id='rightColor' style={rightColor}>
                        <div className='shapeContainer' id='rightShape'>
                            <img className='openShapes' src={rightShape} alt="openCircle" />
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}