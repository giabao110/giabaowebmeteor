import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import  Home from '../../../client/lib/matchs/home';
import  Grounds from '../../../client/lib/grounds/grounds';
import  Grounddetail from '../../../client/lib/grounddetail/grounddetail';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Grounds' component={Grounds}/>
        <Route exact path='/Grounddetail' component={Grounddetail}/>
    </Switch>
  </Router>
);