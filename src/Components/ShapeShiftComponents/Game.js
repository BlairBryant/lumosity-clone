import React, { Component } from 'react';
import './Game.css'

export default class HowToPlay extends Component {
    constructor() {
        super()

        this.state = {
            currentDisplay: false
        }
    }

    render() {
        return (
            <div className='game'>
                <section className='shapeShift'>
                    <div className='colorDiv' id='leftColor'></div>
                    <div className='colorDiv' id='rightColor'></div>

                </section>
            </div>
        )
    }
}