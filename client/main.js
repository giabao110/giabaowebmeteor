import { Template } from 'meteor/templating';
import  React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import './main.html';
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Dashboard from '../client/lib/dashboard/dashboard.js';
import  Grounds from '../client/lib/grounds/grounds.js';
import  Grounddetail from '../client/lib/grounddetail/grounddetail.js';



if(Meteor.isClient){
  Meteor.startup(function(){
    ReactDOM.render(<Grounddetail/>,document.getElementById('root'));
  });
}