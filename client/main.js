import { Template } from 'meteor/templating';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import './main.html';
import  React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import  Dashboard from '../client/lib/dashboard/dashboard.js';
import  Grounds from '../client/lib/grounds/grounds.js';
import  './lib/stylesheet/container.css';
import  './lib/stylesheet/font.css';


if(Meteor.isClient){
  Meteor.startup(function(){
    ReactDOM.render(<Grounds/>,document.getElementById('root'));
  });
}