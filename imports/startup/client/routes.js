import React from 'react';
import { Router, Route, Switch } from 'react-router';

// route components
import  Home from '../../../client/lib/matchs/home';
import  Grounds from '../../../client/lib/grounds/grounds';
import  Grounddetail from '../../../client/lib/grounddetail/grounddetail';
import  Dashboard from '../../../client/lib/dashboard/Dashboard';
import  Login from '../../../client/login/Login/Login';
import  Profile from '../../../client/lib/profile/Profile';
import  Register from '../../../client/login/Register/Register';
import createHistory from 'history/createBrowserHistory';

// const browserHistory = createBrowserHistory();

import  App from './App';
export const history = createHistory();

export const renderRoutes = () => (
  <Router history={history}>
      <Switch >
          <Route exact path='/register' render={() => <Register history={history}/>}/>
          <Route exact path='/login' render={() => <Login history={history}/>}/>
          <Route exact path='/' render={() => <App children={<Home/>} history={history}/>}/>
          <Route path='/grounds' render={() => <App children={<Grounds/>} history={history}/>}/>
          <Route path='/grounddetail/:GroundID' render={() => <App children={<Grounddetail/>} history={history}/>}/>
          <Route path='/dashboard' render={() => <App children={<Dashboard/>} history={history}/>}/>
          <Route path='/profile' render={() => <App children={<Profile/>} history={history}/>}/>
          {/* <Route path='/' render={() => <Login/>}/> */}
      </Switch>
  </Router>
);

