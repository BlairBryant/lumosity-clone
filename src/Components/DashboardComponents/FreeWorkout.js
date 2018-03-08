import React from 'react'
import {Link} from 'react-router-dom'
import './FreeWorkout.css'
import attentionGame from '../../Images/attentionGame.png'

export default function FreeWorkout() {
    return (
        <div className='freeWorkout'>
            <header>TODAY'S FREE WORKOUT</header>
                <section className='gameInfo'>
                    <img src={attentionGame} alt="attentionImg"/>
                    
                    <div>
                        <h2>Focus</h2>
                        <h4>Attention</h4>
                        <p>How many things can you focus on</p>
                        <Link to='/shapeshift' className='freeLink'><div className='workoutButton'>Start workout</div></Link>
                    </div>
                </section>

        </div>
    )
}