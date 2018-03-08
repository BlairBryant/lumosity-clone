import React, { Component } from 'react';
import DashNav from './DashboardComponents/DashNav';
import Game from './ShapeShiftComponents/Game'

export default class ShapeShift extends Component {
    render() {
        return(
            <div className='shapeShiftPage'>
                <DashNav />
                <Game />
            </div>
        )
    }
}