import React, { Component } from 'react';
import TrainingImg from "../../Images/train.png"

class Train extends Component {
    render() {
      return (
        <div className="train">
            <h2>How you'll train</h2>
            <img src={TrainingImg} alt="train img"/>
            <h3><span>1.</span> Get your baseline</h3>
            <p><span>Take the Fit Test to get your baseline scores on 3 games. See how you stack up against others your age, and take the first step in your training.</span></p>
        </div>
      );
    }
  }
  
  export default Train