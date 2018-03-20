import React, { Component } from 'react';
import DashNav from './DashboardComponents/DashNav';
import GameContainer from './ShapeShiftComponents/GameContainer'

export default class ShapeShift extends Component {
    render() {    
        return(
            <div className='shapeShiftPage'>
                <DashNav />
                <GameContainer />
                <div className='dashFooter' id='shapeShiftFooter'>
                    <section>
                        <h5>ABOUT</h5>
                        <h5>CONTACT</h5>
                        <h5>CAREERS</h5>
                        <h5>BLOG</h5>
                        <h5>TERMS OF SERVICE</h5>
                        <h5>PRIVACY POLICY</h5>
                        <h5>FAMILY PLAN</h5>
                        <h5>TEAMS</h5>
                        <h5>HELP</h5>
                    </section>
                </div>
            </div>
        )
    }
}