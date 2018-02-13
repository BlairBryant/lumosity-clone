import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbar.js'
import Video from './Components/Video'
import Train from './Components/Train'
import Transform from './Components/Transform'
import Research from './Components/Research'
import Collaborate from './Components/Collaborate'
import Mission from './Components/Mission'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
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

export default App;
