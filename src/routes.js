import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Game from './Components/Game'

export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/game' component={Game} />

    </Switch>
)