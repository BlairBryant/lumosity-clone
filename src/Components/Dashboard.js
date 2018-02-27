import React, {Component} from 'react'
import DashNav from './DashboardComponents/DashNav'
import './DashboardComponents/Dashboard.css'
import FreeWorkout from './DashboardComponents/FreeWorkout'

class Dashboard extends Component {
    render() {
      return (
        <div className="dashboard">
            <DashNav />
            <FreeWorkout />
            this dash
        </div>
      );
    }
  }
  
  export default Dashboard;