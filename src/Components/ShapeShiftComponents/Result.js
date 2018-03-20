import React from 'react';
import './Result.css'
import {Link} from 'react-router-dom'
import miniTriangle from '../../Images/triangle.png'
import minixShape from '../../Images/x.png'


export default function Result(props) {
    return (
        <div className='result'>
            <h2>Shape Shift</h2>
            <div className='correctContainer'>
                <h4 id='resultCorrect'>Correct: {props.correct}</h4>
                <h4>Incorrect: {props.incorrect}</h4>
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
