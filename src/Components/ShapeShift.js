import React, { Component } from 'react';
import DashNav from './DashboardComponents/DashNav';
import GameContainer from './ShapeShiftComponents/GameContainer'
// import DashFooter from './DashboardComponents/DashFooter'

export default class ShapeShift extends Component {
    render() {    
        return(
            <div className='shapeShiftPage'>
                <DashNav />
                <GameContainer />
                {/* <DashFooter /> */}
            </div>
        )
    }
}