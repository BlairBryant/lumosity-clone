import React, { Component } from 'react';
import NavBar from './HomeComponents/Navbar.js'
import Video from './HomeComponents/Video'
import Train from './HomeComponents/Train'
import Transform from './HomeComponents/Transform'
import Research from './HomeComponents/Research'
import Collaborate from './HomeComponents/Collaborate'
import Mission from './HomeComponents/Mission'
import Footer from './HomeComponents/Footer'
import './HomeComponents/Home.css'


class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <Video />
        <Train />
        <Transform />
        <Research />
        <Collaborate />
        <Mission />
        <Footer />

      </div>
    );
  }
}

export default Home;