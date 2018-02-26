import React, { Component } from 'react';
import lumosityLogoWhite from '../../Images/lumosity_logo_white.png'
import '../../../node_modules/hover.css/css/hover.css'

class DashNav extends Component {
	render() {
		return (
			<section className='dashNav'>
                <div className='iconsContainer'>
					<img src={lumosityLogoWhite} alt="Lumosity"/>
                    <ul>
                        <li className='hvr-radial-out' id='dashHome'>HOME</li>
                        <li className='hvr-radial-out'  id='dashYourStats'>YOUR STATS</li>
                        <li className='hvr-radial-out'  id='dashGames'>GAMES</li>
                        <li className='hvr-radial-out'  id='dashInsights'>INSIGHTS</li>
                    </ul>
				
                </div>
			</section>
		)
	}
}

export default DashNav;