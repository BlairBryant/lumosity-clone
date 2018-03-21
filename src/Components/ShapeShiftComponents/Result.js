import React, {Component} from 'react';
import './Result.css'
import {Link} from 'react-router-dom'
import miniTriangle from '../../Images/blueTriangle.svg'
import minixShape from '../../Images/darkX.svg'
import axios from 'axios'

export default class Result extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        let score = this.props.correct * 250 - this.props.incorrect * 350
        if(score < 0 && this.props.correct < 6) {
            score = this.props.correct * 100
        }
        if(score < 0 && this.props.correct > 6) {
            score = 0
        }
        axios.post('/api/postScore', {score: score})
    }

    render() {
        return (
            <div className='result'>
                <h2>Shape Shift</h2>
                <div className='correctContainer'>
                    <h4 id='resultCorrect'>Correct: {this.props.correct}</h4>
                    <h4>Incorrect: {this.props.incorrect}</h4>
                    <Link to='/dashboard'><button className='getStartedButton' id='resultButton'>Go Back</button></Link>
                    <div></div>
                </div>
                <div className='resultCirclesContainer'>
                    <div className='resultCircle' id='resultWhiteCircle'></div>
                    <div className='resultCircle' id='resultBlackCircle'></div>
                </div>
                <img src={miniTriangle} alt="miniTriangle" className='miniTriangle'/>
                <img src={minixShape} alt="minixShape" className='minixShape'/>
            </div>
        )
    }
}
