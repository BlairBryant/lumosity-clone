import React, { Component } from 'react';
import './Game.css'

export default class Game extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render() {
        return (
            <div className='game'>
                <div className='gameAndInfoContainer'>
                    <section className='gameBorder'>
                        <section className='shapeShift'>

                        </section>
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