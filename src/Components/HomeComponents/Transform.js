import React, { Component } from 'react';
import TrainingImg from '../../Images/transform.png'

class Transform extends Component {
	render() {
		return (
			<div className="transform">
				<h2>We transform science into delightful games</h2>
				<h5>For decades, researchers have created tasks that measure cognitive abilities. We’ve adapted some of these tasks and made some of our own, creating 50+ cognitive games.</h5>
				<img src={TrainingImg} alt="TrainingImg" />
				<div className="transformContainer">
					<div className="transformBlurbs">
						<h4>Scientists delve into research</h4>
						<p>Our scientists work side-by-side with our designers. They make sure each game maintains the core mechanics of the original task designed to challenge a specific cognitive skill.</p>
					</div>
					<div className="transformBlurbs">
						<h4>Game Designers bring to life</h4>
						<p>Our designers and developers add exciting game features and themes while making sure each game is accessible, engaging, and challenging to people of all ages.</p>
					</div>
				</div>
				<a href='http://localhost:3500/auth'><button className='getStartedButton'>Get Started Now</button></a>
				

			</div>
		);
	}
}

export default Transform