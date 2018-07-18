import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import  Home from '../../../client/lib/matchs/home';
import  Grounds from '../../../client/lib/grounds/grounds';
import  Grounddetail from '../../../client/lib/grounddetail/grounddetail';

const browserHistory = createBrowserHistory();

import  App from './App';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
        <Route exact path='/' render={() => <App body={<Home/>}/>}/>
        <Route exact path='/Grounds' render={() => <App body={<Grounds/>}/>}/>
        <Route exact path='/Grounddetail/:GroundID' render={() => <App body={<Grounddetail/>}/>}/>
    </Switch>
  </Router>
);