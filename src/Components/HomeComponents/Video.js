import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className="video">
        <div className="content">
          <h2>Enjoy brain training created by scientists and game designers</h2>
          <h5>Start your training with 50+ cognitive games today.</h5>
          <a href='http://localhost:3500/auth'><button className='getStartedButton'>Get Started Now</button></a>
        </div>
        <section className='videoContainer'>
          <video id="myVideo" loop autoPlay>
            <source src="https://content.lumosity.com/homepage_videos/GameArt_Homepage.mp4" type="video/mp4"></source>
          </video>
        </section>
      </div>
    );
  }
}

export default Video;