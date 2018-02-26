import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'

export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/dashboard' component={Dashboard} exact />

    </Switch>
)