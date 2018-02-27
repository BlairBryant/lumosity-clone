import React, { Component } from 'react';
import lumosityLogoWhite from '../../Images/lumosity_logo_white.png'
import '../../../node_modules/hover.css/css/hover.css'
import userHead from '../../Images/userHead.png'

class DashNav extends Component {
    constructor() {
        super()

        this.state = {
            slideIn: false,
        }

    }
    render() {
        return (
            <section className='dashNav'>
                <div className='iconsContainer'>
                    <div className='iconsLeft'>
                        <img src={lumosityLogoWhite} alt="Lumosity" />
                        <ul>
                            <li className='hvr-radial-out' id='dashHome'>HOME</li>
                            <li className='hvr-radial-out' id='dashYourStats'>YOUR STATS</li>
                            <li className='hvr-radial-out' id='dashGames'>GAMES</li>
                            <li className='hvr-radial-out' id='dashInsights'>INSIGHTS</li>
                        </ul>
                    </div>

                    <div className='iconsRight' onClick={() => this.setState({ slideIn: !this.state.slideIn})}>

                        <div className={this.state.slideIn ? 'dropdownMenu slideIn' : 'dropdownMenu'}>
                            <section className='dropdownOptions'>
                                <div>Account Settings</div>
                                <div>Invite Friends</div>
                                <div>Help</div>
                                <section className='logoutLine'></section>
                                <div className='logout'>Logout</div>
                            </section>
                        </div>

                        <img src={userHead} alt="userHeadImg" />
                        <span>Username</span>
                        <span class="lnr lnr-chevron-down"></span>
                    </div>

                </div>
            </section>
        )
    }
}

export default DashNav;