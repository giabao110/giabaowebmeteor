import  './main.html';
import  Home from '../client/lib/matchs/home.js';
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import  Navigation from './lib/components/Navigation';
import  Footer from './lib/components/Footer';

import  Grounds from '../client/lib/grounds/grounds.js';
import  Grounddetail from '../client/lib/grounddetail/grounddetail.js';

import  {render} from 'react-dom';
import  React from 'react';
import  {Meteor} from 'meteor/meteor';
import  { browserHistory, Switch} from 'react-router';
import  { BrowserRouter as Router , Route, Link } from 'react-router-dom';


 Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Grounds' component={Grounds}/>
        <Route exact path='/Grounddetail' component={Grounddetail}/>
      </Switch>
    </Router>,
    document.getElementById('root'));
 });

/* Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Switch>
        <Route exact path='/' render={() => <Dashboard/>}/>
      </Switch>
    </Router>,
    document.getElementById('root'));
 }); */