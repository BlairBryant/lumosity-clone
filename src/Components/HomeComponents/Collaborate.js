import React, { Component } from 'react';
import collaborateImg from '../../Images/collaborate.png'
import transformCheck from '../../Images/transformCheck.png'

class Collaborate extends Component {
    render() {
      return (
        <div className="collaborate">
			<h2>We collaborate with the scientific community</h2>
			<h5>We work with 100+ researchers worldwide, many of whom we give free access to our brain training tools — helping them research new areas in human cognition.</h5>
			<img className="collaborateIMG" src={collaborateImg} alt="collaborateImg"/>
			<div className="collaborateRow">
				<section>
					<img src={transformCheck} alt="checkImg"/>
					<li>Free access to Lumosity training</li>
				</section>
				<section>
					<img src={transformCheck} alt="checkImg"/>
					<li>Online cognitive assessments</li>
				</section>
				<section>
					<img src={transformCheck} alt="checkImg"/>
					<li>Guidance on data analysis</li>
				</section>
				<section>
					<img src={transformCheck} alt="checkImg"/>
					<li>Online surveys for participants</li>
				</section>
			</div>
			<h4>Are you a researcher interested in collaborating with us? <span>Learn More</span></h4>
        </div>
      );
    }
  }
  
  export default Collaborate