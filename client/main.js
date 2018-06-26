import { Template } from 'meteor/templating';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import './main.html';
import  React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import  Dashboard from '../client/lib/dashboard/dashboard.js';
import  './lib/container.css';


if(Meteor.isClient){
  Meteor.startup(function(){
    ReactDOM.render(<Dashboard/>,document.getElementById('root'));
  });
}