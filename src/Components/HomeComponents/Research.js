import React, { Component } from 'react';
import ResearchImg from '../../Images/research.png'

class Research extends Component {
	render() {
		return (
			<div className="research">
				<h2>Our scientists research the efficacy of Lumosity</h2>
				<h5>We conducted a randomized study on Lumosity, using crossword puzzles as an active control.</h5>
				<img src={ResearchImg} alt="ResearchImg" />
				<div className='researchRow'>
					<section>
						<h4>What we did</h4>
						<p>Our scientists had 4,715 participants complete the study. Half trained with Lumosity, while the rest did online crossword puzzles to control for placebo effects.</p>
					</section>
					<section>
						<h4>What we found</h4>
						<p>After 10 weeks, the Lumosity group improved more than the crosswords group on an aggregate assessment of cognition.</p>
					</section>
					<section>
						<h4>Next questions</h4>
						<p>These results are promising, but we need to do more research to determine the connection between improved assessment scores and everyday tasks in participants’ lives. That’s our next focus.</p>
					</section>
				</div>
			</div>
		);
	}
}

export default Research