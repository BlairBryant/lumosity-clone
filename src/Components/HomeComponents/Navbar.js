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
							<a href='http://localhost:3500/auth'><button className='getStartedButton'>Get Started Now</button></a>
						</div>
						<div className='logIn'>
							<a href='http://localhost:3500/auth'><button className='logInButton'>Log In</button></a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default NavBar;