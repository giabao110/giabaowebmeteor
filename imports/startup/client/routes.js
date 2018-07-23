import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import  Home from '../../../client/lib/matchs/home';
import  Grounds from '../../../client/lib/grounds/grounds';
import  Grounddetail from '../../../client/lib/grounddetail/grounddetail';
import  Dashboard from '../../../client/lib/dashboard/Dashboard';
import  Login from '../../../client/login/Login';

const browserHistory = createBrowserHistory();

import  App from './App';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
        <Route exact path='/home' render={() => <App children={<Home/>}/>}/>
        <Route path='/grounds' render={() => <App children={<Grounds/>}/>}/>
        <Route path='/grounddetail/:GroundID' render={() => <App children={<Grounddetail/>}/>}/>
        <Route path='/dashboard' render={() => <App children={<Dashboard/>}/>}/>
        <Route path='/' render={() => <Login/>}/>
    </Switch>
  </Router>
);