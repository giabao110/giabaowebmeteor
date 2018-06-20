import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.html';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../client/lib/dashboard/dashboard.js';


if(Meteor.isClient){
  Meteor.startup(function(){
    ReactDOM.render(<Dashboard/>,document.getElementById('root'));
  });
}