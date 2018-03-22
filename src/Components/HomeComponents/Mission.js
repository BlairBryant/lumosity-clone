import React, { Component } from 'react';
import missionImg from '../../Images/mission.png'

class Mission extends Component {
    render() {
      return (
        <div className="mission">
          <img src={missionImg} alt="MissionImg"/>
          <h2>Join us on a mission to advance the understanding of human cognition</h2>
          <h5>85 Million brain trainers in 182 countries challenge their brains with Lumosity — and we’re honored to learn from this vibrant global community.</h5>
          <a href={process.env.REACT_APP_LOGIN}><button className='getStartedButton'>Get Started Now</button></a>
        </div>
      );
    }
  }
  
  export default Mission