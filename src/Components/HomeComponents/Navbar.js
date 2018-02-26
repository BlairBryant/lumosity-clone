import React, { Component } from 'react';
import lumosityLogo from '../../Images/lumosity_logo.png'

class NavBar extends Component {
	render() {
		return (
			<section className='navBar'>
				<div className='navContainer'>
					<div className='logoHolder'>
						<img src={lumosityLogo} alt="Lumosity"/>
					</div>
					<div className='buttonsHolder'>
						<div className='getStarted'>
							<button className='getStartedButton'>Get Started Now</button>
						</div>
						<div className='logIn'>
							<button className='logInButton'>Log In</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default NavBar;