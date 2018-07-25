import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import  Home from '../../../client/lib/matchs/home';
import  Grounds from '../../../client/lib/grounds/grounds';
import  Grounddetail from '../../../client/lib/grounddetail/grounddetail';
import  Dashboard from '../../../client/lib/dashboard/Dashboard';
import  Login from '../../../client/login/Login';
import  Profile from '../../../client/lib/profile/Profile'

const browserHistory = createBrowserHistory();

import  App from './App';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
        <Route exact path='/' render={() => <App children={<Home/>}/>}/>
        <Route path='/grounds' render={() => <App children={<Grounds/>}/>}/>
        <Route path='/grounddetail/:GroundID' render={() => <App children={<Grounddetail/>}/>}/>
        <Route path='/dashboard' render={() => <App children={<Dashboard/>}/>}/>
        <Route path='/profile' render={() => <App children={<Profile/>}/>}/>
        {/* <Route path='/' render={() => <Login/>}/> */}
    </Switch>
  </Router>
);

// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// FlowRouter.route('/',{
//   name: 'home',
//   action(){
//     BlazeLayout.render("HomeLayout",{main:"Home"});
//   }
// });

// FlowRouter.route('/dashboard',{
//   name: 'dashboard',
//   action(){
//     BlazeLayout.render("AppLayout",{main:"Dashboard"});
//   }
// });