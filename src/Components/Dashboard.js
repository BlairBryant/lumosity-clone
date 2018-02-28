import React, {Component} from 'react'
import DashNav from './DashboardComponents/DashNav'
import FreeWorkout from './DashboardComponents/FreeWorkout'
import GraphInfo from './DashboardComponents/GraphInfo'
import Graph from './DashboardComponents/Graph'
import DashFooter from './DashboardComponents/DashFooter'

import './DashboardComponents/Dashboard.css'
import './DashboardComponents/Graph.css'

class Dashboard extends Component {
    render() {
      return (
        <div className="dashboard">
            <DashNav />
            <FreeWorkout />
            <div className='graphContainer'>
              <GraphInfo />
              <Graph />
            </div>
            <DashFooter />
        </div>
      );
    }
  }
  
  export default Dashboard;