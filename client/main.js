import  './main.html';
import 'jquery/dist/jquery.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/routes.js';
import { Link } from "react-router-dom";

 Meteor.startup(() => {
  render(renderRoutes(),document.getElementById('root'));});
